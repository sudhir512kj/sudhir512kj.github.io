import React, { useState, useEffect } from 'react';
import certificationsData from '../data/certifications.json';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setCertifications(certificationsData.certifications);
  }, []);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-blue-600 font-medium">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
              
              <p className="text-gray-700 mb-4">{cert.description}</p>
              
              <div className="mb-4">
                <p className="font-semibold text-gray-800 mb-2">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                ID: {cert.credentialId}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;