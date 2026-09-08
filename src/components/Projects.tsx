export default function Projects() {
  return (
<section className="section wrap" id="projects">
<div className="section-heading">
<div>
<p className="eyebrow">01 / SELECTED WORK</p>
<h2>Built with purpose.<br/>
<span className="muted">Designed for people.</span>
</h2>
</div>
<p>A closer look at the problems I solve,<br/>and the engineering behind them.</p>
</div>
<div className="project-grid">
<article className="project">
<div className="project-visual">
<div className="visual-meta">
<span>VOICE → STRUCTURE</span>
<span>01</span>
</div>
<div className="project-word">Less friction.<br/>
<em>More clarity.</em>
</div>
<div aria-label="Audio processing flow" className="flow">
<span>Audio</span>
<b>→</b>
<span>Transcript</span>
<b>→</b>
<span className="flow-end">Structured notes</span>
</div>
<div className="visual-caption">AI AUDIO NOTE PLATFORM</div>
</div>
<div className="project-body">
<p className="eyebrow">AI INTEGRATION · FRONTEND DEVELOPMENT</p>
<h3>Giving voice notes a second life.</h3>
<p>A frontend that turns spoken thoughts into structured summaries and key points through speech-to-text and LLM APIs.</p>
<div className="tags">
<span>React</span>
<span>TypeScript</span>
<span>LLM APIs</span>
</div>
<details>
<summary>Explore the engineering <span>+</span>
</summary>
<div className="detail-content">
<h4>The challenge</h4>
<p>Voice notes are easy to capture, but difficult to scan and reuse as structured content.</p>
<h4>My contribution</h4>
<p>Built the React and TypeScript frontend, integrated AI APIs, and managed asynchronous responses so the result is presented clearly.</p>
<h4>The approach</h4>
<p>Capture audio, transcribe it, process the transcript with an LLM, and present the resulting summaries and key points in the UI.</p>
<a className="text-link repo-audio" href="https://github.com/nannapanenir" rel="noopener" target="_blank">Explore my GitHub ↗</a>
</div>
</details>
</div>
</article>
<article className="project project-api">
<div className="project-visual">
<div className="visual-meta">
<span>COMPLEXITY → CONFIDENCE</span>
<span>02</span>
</div>
<div className="project-word">Different APIs.<br/>
<em>One clear view.</em>
</div>
<div aria-label="API comparison flow" className="flow">
<span>Responses</span>
<b>→</b>
<span>Normalize</span>
<b>→</b>
<span className="flow-end">Compare</span>
</div>
<div className="visual-caption">API COMPARISON VALIDATOR</div>
</div>
<div className="project-body">
<p className="eyebrow">DEVELOPER TOOLING · API INTEGRATION</p>
<h3>Making inconsistencies visible.</h3>
<p>A comparison tool that brings differences between API responses into focus, making data discrepancies easier to investigate.</p>
<div className="tags">
<span>Angular</span>
<span>TypeScript</span>
<span>REST APIs</span>
</div>
<details>
<summary>Explore the engineering <span>+</span>
</summary>
<div className="detail-content">
<h4>The challenge</h4>
<p>Inconsistent responses across APIs made debugging difficult and comparisons tedious.</p>
<h4>My contribution</h4>
<p>Built the frontend interface and comparison logic, with an emphasis on making differences easy to understand.</p>
<h4>The approach</h4>
<p>Request data from multiple APIs, normalize responses, compare keys and values, and highlight differences in the interface.</p>
<a className="text-link repo-api" href="https://github.com/nannapanenir" rel="noopener" target="_blank">Explore my GitHub ↗</a>
</div>
</details>
</div>
</article>
</div>
<div className="projects-footer">
<p>More experiments, code, and things I’m building.</p>
<a className="text-link" href="https://github.com/nannapanenir" rel="noopener" target="_blank">Find me on GitHub ↗</a>
</div>
</section>
  );
}
