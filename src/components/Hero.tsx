import { ArrowDown, Github, Linkedin, Download, Mail } from 'lucide-react';
import _ramgopalnresume from "../assets/ramgopaln.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 -z-10"></div>
      
      {/* Subtle background elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-100/30 dark:bg-blue-500/10 rounded-full filter blur-3xl -z-5"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-100/40 dark:bg-indigo-500/10 rounded-full filter blur-3xl -z-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Status Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for new opportunities
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Frontend Engineer building scalable enterprise and AI-enabled web applications
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              I build modern, user-focused web applications using Angular, React, and TypeScript, 
              with supporting backend experience in Java/Spring Boot and a growing focus on AI-integrated features.
            </p>

            {/* Availability Status */}
            <p className="text-lg text-green-600 dark:text-green-400 font-medium">
              Available for Frontend / AI-enabled roles
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
              <a
                href="/ramgopaln.pdf"
                download="ramgopaln.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/nannapanenir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/n-ramgopal-0642821b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>

            {/* Tech Stack Preview */}
            <div className="pt-8">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Core Technologies
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Angular', 'React', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot', 'AI/LLM APIs'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 animate-bounce"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}