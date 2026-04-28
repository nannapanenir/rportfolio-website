import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      company: 'CSX Transportation',
      location: 'Jacksonville, FL',
      period: '2024 - Present',
      type: 'Full-time',
      highlights: [
        'Led frontend architecture for enterprise transportation management platform serving 1000+ daily users',
        'Built responsive Angular components with TypeScript, reducing UI development time by 40%',
        'Implemented real-time data visualization dashboards using RxJS and WebSocket integration',
        'Collaborated with backend teams to design REST API contracts and optimize data flow',
        'Mentored junior developers on modern frontend patterns and component architecture best practices'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Spring Boot', 'REST APIs']
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      company: 'CGI',
      location: 'Remote',
      period: '2021 - 2022',
      type: 'Full-time',
      highlights: [
        'Developed enterprise UI components using React and Angular for multiple client projects',
        'Implemented responsive designs and cross-browser compatibility for business-critical applications',
        'Integrated frontend applications with Java/Spring Boot microservices and REST APIs',
        'Optimized application performance through code splitting, lazy loading, and efficient state management',
        'Participated in Agile development processes and collaborated with UX/UI design teams'
      ],
      technologies: ['React', 'Angular', 'JavaScript', 'TypeScript', 'Java', 'Spring Boot']
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      period: '2019 - 2021',
      type: 'Full-time',
      highlights: [
        'Built frontend interfaces for enterprise applications using JavaScript, HTML5, and CSS3',
        'Developed reusable UI components and maintained component libraries for team efficiency',
        'Worked on full-stack features integrating frontend with Java backend services',
        'Implemented responsive web designs and ensured accessibility compliance',
        'Contributed to code reviews and maintained high code quality standards'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Java', 'jQuery', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Experience Highlights
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              5+ years of frontend engineering experience building scalable enterprise applications 
              and collaborating across full-stack development teams.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                      <span className="hidden sm:block">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <span className="hidden sm:block">•</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Progression Summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
              Career Progression
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2019-2021</div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Foundation</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Built core frontend skills and full-stack understanding
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">2021-2023</div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Growth</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Advanced to complex enterprise applications and modern frameworks
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2023-Present</div>
                <div className="font-semibold text-slate-900 dark:text-white mb-1">Leadership</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Senior role with architecture decisions and AI integration focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}