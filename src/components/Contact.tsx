import { useEffect, useRef, useState, type FormEvent } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [failed, setFailed] = useState(false);
  const request = useRef<AbortController | null>(null);
  useEffect(() => () => { request.current?.abort(); }, []);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.current) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const controller = new AbortController();
    request.current = controller;
    setSending(true); setFailed(false); setStatus('');
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { Accept: 'application/json' }, signal: controller.signal,
      });
      if (!response.ok) throw new Error('Send failed');
      setStatus('Message sent. Thanks for reaching out!'); form.reset();
    } catch {
      setFailed(true);
      setStatus('Could not confirm delivery. Please try again or use the email link.');
    } finally {
      window.clearTimeout(timeout); request.current = null; setSending(false);
    }
  }
  return (
<section className="contact-section" id="contact">
<div className="section wrap contact-grid">
<div>
<p className="eyebrow">06 / WHAT’S NEXT?</p>
<h2>Good products<br/>start with a<br/>
<em>conversation.</em>
</h2>
<p>I’m open to frontend, full-stack, and AI-enabled product engineering opportunities. Have something in mind?</p>
<a className="contact-email" href="mailto:nannapaneniramgopal@gmail.com">nannapaneniramgopal@gmail.com ↗</a>
<div className="contact-social">
<a href="https://github.com/nannapanenir" rel="noopener" target="_blank">GitHub ↗</a>
<a href="https://www.linkedin.com/in/n-ramgopal-0642821b7/" rel="noopener" target="_blank">LinkedIn ↗</a>
</div>
</div>
<form action="https://formspree.io/f/mpqknwrg" id="contact-form" method="POST" onSubmit={handleSubmit} aria-busy={sending}>
<h3>Drop me a note.</h3>
<label htmlFor="name">Your name</label>
<input autoComplete="name" id="name" maxLength={150} name="name" placeholder="Name" required/>
<label htmlFor="email">Email address</label>
<input autoComplete="email" id="email" name="email" placeholder="you@company.com" required type="email"/>
<label htmlFor="message">What are you thinking?</label>
<textarea id="message" maxLength={10000} name="message" placeholder="A role, a project, or just a hello…" required rows={4}>
</textarea>
<button className="button primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <span>↗</span></button>
<p aria-live="polite" id="form-status" role="status" className={failed ? 'error' : ''}>{status}</p>
</form>
</div>
</section>
  );
}
