import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: '🐙', link: 'https://github.com/sudhir512kj', label: 'GitHub' },
    { icon: '💼', link: 'https://www.linkedin.com/in/sudhir-meena-b29982b7/', label: 'LinkedIn' },
    { icon: '🐦', link: 'https://twitter.com/sudhir5125', label: 'Twitter' },
    { icon: '📧', link: 'mailto:sudhirmeena230995@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Sudhir Meena</h3>
            <p className="text-gray-400">Software Engineer</p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-6 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © 2023 Sudhir Meena. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;