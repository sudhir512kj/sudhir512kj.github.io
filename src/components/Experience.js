import React, { useState, useEffect } from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experienceData.experiences);
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-4 border-blue-400">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute -left-10 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="ml-4 bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-400 hover:shadow-xl transition-all hover:translate-x-2">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{exp.title}</h3>
                  <p className="text-gray-600 font-medium mb-1">{exp.company} - {exp.location}</p>
                  <p className="text-blue-500 font-medium text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;