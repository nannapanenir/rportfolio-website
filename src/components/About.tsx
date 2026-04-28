import { Code, Layers, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQFMCUh5dYYcLg/profile-displayphoto-shrink_800_800/B4EZPavZORGcAc-/0/1734541680635?e=1778716800&v=beta&t=bgiv461SCc1AsotfkWGSBTgt0sQD8zsN0wHI8M7VTfA"
                    alt="Ramgopal Nannapaneni"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                  <Code size={32} />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I focus on building frontend-heavy enterprise applications that handle real-world workflows and data complexity. 
                  My work centers around scalable UI systems, performance, and maintainability.
                </p>
                <p>
                  I also have experience working with backend systems using Java and Spring Boot when needed. 
                  Recently, I've been building AI-integrated features using LLM APIs to improve user workflows.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Built</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">AI Projects</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Companies</div>
                </div>
              </div>
            </div>
          </div>

          {/* What I Bring */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Frontend Architecture</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Scalable component systems and modern UI patterns
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Layers className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Full-Stack Integration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Seamless API integration and backend collaboration
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI Integration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                LLM-powered features and intelligent user experiences
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Product Thinking</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                User-focused solutions for enterprise workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}