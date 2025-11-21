import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const homeMenuItems = ['Home', 'About', 'Skills', 'Experience', 'Certifications', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-white text-xl hover:text-blue-400 transition-colors">
            SUDHIR MEENA
          </Link>

          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              homeMenuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))
            ) : (
              <Link
                to="/"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            )}
            <Link
              to="/mentorship"
              className={`text-white hover:text-blue-400 transition-colors ${
                location.pathname === '/mentorship' ? 'text-blue-400' : ''
              }`}
            >
              Mentorship
            </Link>
            <a
              href="/SudhirMeena_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isHomePage ? (
                homeMenuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white hover:text-blue-400 px-3 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))
              ) : (
                <Link
                  to="/"
                  className="block text-white hover:text-blue-400 px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link
                to="/mentorship"
                className="block text-white hover:text-blue-400 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Mentorship
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;