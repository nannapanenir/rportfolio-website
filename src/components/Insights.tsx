import { BookOpen, Lightbulb, Zap } from 'lucide-react';

export default function Insights() {
  const insights = [
    {
      id: 1,
      title: 'Building Better Enterprise Frontends with Angular and React',
      description: 'Exploring patterns for scalable component architecture, state management, and performance optimization in large-scale enterprise applications.',
      icon: <BookOpen size={24} />,
      color: 'blue',
      readTime: '8 min read',
      category: 'Frontend Architecture'
    },
    {
      id: 2,
      title: 'What I\'m Learning About AI-Integrated Product Experiences',
      description: 'Practical insights from integrating LLM APIs into user interfaces, designing prompt workflows, and creating context-aware applications.',
      icon: <Zap size={24} />,
      color: 'purple',
      readTime: '6 min read',
      category: 'AI Integration'
    },
    {
      id: 3,
      title: 'Designing Scalable UI Systems for Real Business Workflows',
      description: 'Lessons learned from building component libraries, design systems, and reusable patterns that actually work in enterprise environments.',
      icon: <Lightbulb size={24} />,
      color: 'indigo',
      readTime: '10 min read',
      category: 'Design Systems'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
        category: 'text-blue-600 dark:text-blue-400'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        icon: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
        category: 'text-purple-600 dark:text-purple-400'
      },
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-800',
        icon: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400',
        category: 'text-indigo-600 dark:text-indigo-400'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="insights" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What I'm Exploring
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Thoughts and learnings from building modern frontend applications, 
              integrating AI capabilities, and solving real engineering challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => {
              const colors = getColorClasses(insight.color);
              return (
                <div
                  key={insight.id}
                  className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                >
                  <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {insight.icon}
                  </div>
                  
                  <div className="mb-4">
                    <span className={`${colors.category} text-sm font-semibold uppercase tracking-wide`}>
                      {insight.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {insight.readTime}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                      Coming Soon
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                I'm working on sharing more insights about frontend engineering, AI integration, 
                and building better user experiences. Follow me on LinkedIn for updates.
              </p>
              <a
                href="https://www.linkedin.com/in/n-ramgopal-0642821b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}