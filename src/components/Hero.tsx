export default function Hero() {
  return (
<section className="hero wrap" id="home">
<div className="eyebrow hero-intro">
<span>RAMGOPAL NANNAPANENI</span>
<span className="availability">
<i>
</i> Open to opportunities</span>
</div>
<div className="hero-grid">
<div>
<p className="role">Frontend-focused. Full-stack capable.</p>
<h1>Engineering<br/>the <em>experience.</em>
</h1>
<p className="hero-description">I turn complex workflows into thoughtful web experiences. Angular &amp; React on the surface. Java, APIs, and a systems mindset underneath.</p>
<div className="hero-cta">
<a className="button primary" href="#projects">Explore my work <span>↘</span>
</a>
<a className="text-link resume-link" href={`${import.meta.env.BASE_URL}ramgopaln.pdf`} rel="noopener" target="_blank">Résumé ↗</a>
</div>
</div>
<aside aria-label="Engineering focus" className="engineering-card">
<div className="card-top">
<span>THE WAY I BUILD</span>
<span>01 / 03</span>
</div>
<div className="code-title">
<span className="code-symbol">&lt;/&gt;</span>
<span>From the first pixel<br/>to the final response.</span>
</div>
<div className="layer">
<span className="index">01</span>
<div>
<h3>The experience</h3>
<p>Responsive interfaces. Reusable systems.</p>
</div>
<span className="layer-tag">UI</span>
</div>
<div className="layer">
<span className="index">02</span>
<div>
<h3>The connection</h3>
<p>Typed contracts. Reliable data flows.</p>
</div>
<span className="layer-tag">API</span>
</div>
<div className="layer">
<span className="index">03</span>
<div>
<h3>The intelligence</h3>
<p>Useful AI. Clear human interactions.</p>
</div>
<span className="layer-tag">AI</span>
</div>
<div className="card-bottom">
<span>CRAFT MEETS ENGINEERING</span>
<span>↗</span>
</div>
</aside>
</div>
<div className="hero-bottom">
<span>Enterprise software. Product thinking.</span>
<div>
<a href="https://github.com/nannapanenir" rel="noopener" target="_blank">GitHub ↗</a>
<a href="https://www.linkedin.com/in/n-ramgopal-0642821b7/" rel="noopener" target="_blank">LinkedIn ↗</a>
</div>
<a className="scroll-cue" href="#projects">Scroll to explore ↓</a>
</div>
</section>
  );
}
