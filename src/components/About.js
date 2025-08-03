import React from 'react';

const About = () => {
  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '6', label: 'Companies' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Software Engineer with 6+ years of experience architecting enterprise-grade applications and leading development teams in fast-paced environments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">👨‍💼</span>
              </div>
              <h3 className="text-2xl font-semibold">Professional Summary</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Lead Software Engineer specializing in microservices architecture, cloud-native applications, and DevOps practices. Proven track record of delivering scalable solutions that handle millions of requests while maintaining high performance and reliability.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Team Leadership</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">System Architecture</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Performance Optimization</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold">Education & Certifications</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
              <h4 className="text-lg font-semibold mb-2">B.Tech in Computer Science</h4>
              <p className="text-blue-600 font-medium mb-1">National Institute of Technology, Kurukshetra</p>
              <p className="text-gray-500 text-sm">2014 - 2018</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">AWS Certified</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Spring Certified</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Oracle Java SE</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Google Cybersecurity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;