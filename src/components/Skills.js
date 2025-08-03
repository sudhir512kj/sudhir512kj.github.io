import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Microservices', level: 85 },
        { name: 'RESTful APIs', level: 92 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Jenkins', level: 75 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Golang', level: 82 },
        { name: 'Python', level: 78 },
        { name: 'JavaScript', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            My technical expertise spans across various technologies and tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">💻</span>
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              {category.skills.map((skill, idx) => (
                <div key={idx} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;