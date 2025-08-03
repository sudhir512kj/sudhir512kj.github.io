import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'BasBeta E-commerce Platform',
      subtitle: 'Full-Stack Application',
      description: 'Complete e-commerce solution for custom merchandise with integrated payment processing, inventory management, and order tracking.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      metrics: ['Live Production', 'Payment Gateway', 'Inventory System'],
      link: 'https://github.com/sudhir512kj/BasBeta',
      linkText: 'Visit Project',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2 ${project.featured ? 'border-2 border-blue-400' : 'border border-gray-200'
                }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.subtitle}</p>
                  </div>
                </div>
                {project.featured && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, idx) => (
                    <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      📈 {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 font-medium mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${project.featured
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
              >
                🔗 {project.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;