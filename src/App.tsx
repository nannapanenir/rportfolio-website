import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
<div className="stack-strip">
<div className="wrap">
<span className="mono">MY EVERYDAY STACK</span>
<span>Angular</span>
<span>React</span>
<span>TypeScript</span>
<span>Java</span>
<span>Spring Boot</span>
<span className="muted">+ a little curiosity</span>
</div>
</div>
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
