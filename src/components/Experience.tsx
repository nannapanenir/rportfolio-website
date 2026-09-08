export default function Experience() {
  return (
<section className="section wrap experience-section" id="experience">
<div className="section-heading">
<div>
<p className="eyebrow">04 / EXPERIENCE</p>
<h2>Built in the real world.</h2>
</div>
<a className="text-link resume-link" href={`${import.meta.env.BASE_URL}ramgopaln.pdf`} rel="noopener" target="_blank">View résumé ↗</a>
</div>
<div className="experience-list">
<article>
<div className="exp-date">2024 — PRESENT</div>
<div>
<h3>CSX Transportation</h3>
<p className="exp-role">Senior Frontend Engineer</p>
<p>Leading frontend architecture for enterprise transportation applications. Building reusable Angular components, real-time dashboards, and clear API integrations alongside backend teams.</p>
<div className="tags">
<span>Angular</span>
<span>TypeScript</span>
<span>RxJS</span>
<span>REST APIs</span>
</div>
</div>
<span className="exp-location">Jacksonville, FL</span>
</article>
<article>
<div className="exp-date">2021 — 2022</div>
<div>
<h3>CGI</h3>
<p className="exp-role">Frontend Engineer</p>
<p>Built enterprise interfaces with React and Angular, integrated Java and Spring Boot microservices, and improved performance through lazy loading and efficient state management.</p>
<div className="tags">
<span>React</span>
<span>Angular</span>
<span>Java</span>
<span>Spring Boot</span>
</div>
</div>
<span className="exp-location">Remote</span>
</article>
<article>
<div className="exp-date">2019 — 2021</div>
<div>
<h3>Cognizant Technology Solutions</h3>
<p className="exp-role">Software Engineer</p>
<p>Developed responsive interfaces and reusable components, connected frontend features to Java services, and contributed to code reviews.</p>
<div className="tags">
<span>JavaScript</span>
<span>HTML &amp; CSS</span>
<span>Java</span>
</div>
</div>
<span className="exp-location">Hyderabad, India</span>
</article>
</div>
</section>
  );
}
