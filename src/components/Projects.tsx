import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Projects() {
  const featuredProjects = [
    {
      id: 1,
      title: 'AI Audio Note Platform',
      summary: 'Converts voice input into structured notes using speech-to-text and LLM APIs',
      problem: 'Voice notes are easy to capture but hard to convert into structured content',
      approach: 'Capture audio from frontend, convert to text using speech-to-text, process transcript using LLM APIs, structure output into summaries and key points, handle async responses and update UI',
      contribution: 'Built frontend using React and TypeScript, integrated AI APIs, focused on clear UI presentation',
      techStack: ['React', 'TypeScript', 'LLM APIs', 'REST APIs'],
      githubUrl: 'https://github.com/nannapanenir/ai-audio-notes',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'API Comparison Validator Tool',
      summary: 'Tool to compare API responses and identify inconsistencies',
      problem: 'Different APIs returning inconsistent data made debugging difficult',
      approach: 'Send requests to multiple APIs, normalize responses, compare keys and values, highlight differences in UI',
      contribution: 'Built frontend interface, implemented comparison logic, focused on usability',
      techStack: ['Angular', 'TypeScript', 'REST APIs'],
      githubUrl: 'https://github.com/nannapanenir/api-validator',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Real projects focusing on frontend development and AI integration.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Problem</h4>
                      <p className="text-slate-600 dark:text-slate-400">{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Approach</h4>
                      <p className="text-slate-600 dark:text-slate-400">{project.approach}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">My Contribution</h4>
                      <p className="text-slate-600 dark:text-slate-400">{project.contribution}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              More projects available on GitHub
            </p>
            <a
              href="https://github.com/nannapanenir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
            >
              <Github size={20} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}