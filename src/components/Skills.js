import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Frameworks',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot & Spring Framework', level: 90 },
        { name: 'JavaScript, Python, Golang', level: 85 },
        { name: 'Frontend - React, HTML, CSS', level: 92 },
      ],
    },
    {
      title: 'Enterprise & Distributed Systems',
      skills: [
        { name: 'Distributed Systems Design', level: 85 },
        { name: 'System Architecture (HLD/LLD)', level: 88 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Scalability Engineering', level: 75 },
      ],
    },
    {
      title: 'Data & Caching',
      skills: [
        { name: 'Database Design & Optimization', level: 88 },
        { name: 'MongoDB, DynamoDB, Cassandra', level: 85 },
        { name: 'PostgreSQL, MySQL', level: 80 },
        { name: 'Redis, Kafka', level: 75 },
      ],
    },
    {
      title: 'Security & Reliability',
      skills: [
        { name: 'Application Security', level: 95 },
        { name: 'Cybersecurity Principles', level: 82 },
        { name: 'SIEM Tools', level: 78 }
      ],
    },
    {
      title: "Cloud Stack",
      skills: [
        { name: "AWS - Networking, Serverless, Storage, EKS / ECS / ECR, Databases", level: 90 },
        { name: "GCP - Networking, Databases, BigQuery, Storage, AIML", level: 90 },
        { name: "Azure - Computing, Networking, Storage, Databases, KeyVault", level: 80 }
      ]
    },
    {
      title: "Logging & Monitoring",
      skills: [
        { name: "Grafana & Prometheus", level: 90 },
        { name: "ElasticSearch", level: 90 }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        { name: "Docker & Kubernetes", level: 90 },
        { name: "GitHub, GitLab, GitHub Actions", level: 90 },
        { name: "Hashicorp Vault", level: 80 }
      ]
    },
    {
      title: "Software Development Practices",
      skills: [
        { name: "TDD and DDD", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            My technical expertise spans across various technologies and tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-lg leading-none">💻</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              {category.skills.map((skill, idx) => (
                <div key={idx} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-3 rounded-full transition-all duration-1000"
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