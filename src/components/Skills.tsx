export default function Skills() {
  const skillGroups = [
    {
      title: 'Frontend (Primary)',
      description: 'Core expertise in modern frontend technologies',
      skills: [
        'Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
        'Tailwind', 'Component Architecture', 'State Management', 'Responsive UI'
      ],
      color: 'blue'
    },
    {
      title: 'Backend (Supporting)',
      description: 'Supporting full-stack development capabilities',
      skills: [
        'Java', 'Spring Boot', 'REST APIs', 'Microservices', 'API Integration'
      ],
      color: 'indigo'
    },
    {
      title: 'AI (Emerging)',
      description: 'Building AI-integrated features and workflows',
      skills: [
        'LLM Integration', 'OpenAI APIs', 'Prompt Workflows', 'AI-enabled UI'
      ],
      color: 'purple'
    },
    {
      title: 'Tools',
      description: 'Development and deployment ecosystem',
      skills: [
        'Git', 'GitHub', 'Jenkins', 'Docker', 'AWS', 'CI/CD'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      indigo: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
      purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
      green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const getSkillColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300',
      purple: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
      green: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My technical expertise in frontend development, supporting backend experience, 
              and emerging AI integration capabilities.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 ${getColorClasses(group.color)} transition-all duration-300 hover:shadow-lg`}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {group.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${getSkillColorClasses(group.color)} transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* What I Bring to Teams */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              What I Bring to Teams
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Frontend Excellence
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Deep expertise in Angular and React ecosystems with focus on scalable, maintainable code
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Full-Stack Collaboration
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Seamless integration between frontend and backend systems with strong API design understanding
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  AI Integration
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Practical experience integrating LLM APIs and building AI-powered user experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}