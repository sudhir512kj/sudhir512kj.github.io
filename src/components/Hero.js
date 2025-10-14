import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ backgroundImage: 'url(/images/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      <div className="container mx-auto px-6 py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen relative z-10">
          <div className="hero-content">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm mb-6">
              Full Stack Developer
            </span>

            <h1 className="hero-title">Sudhir Meena</h1>
            <h2 className="hero-subtitle">Lead Software Engineer</h2>

            <p className="text-lg text-white mb-8 leading-relaxed font-semibold">
              Architecting scalable microservices and cloud-native solutions with 6+ years of enterprise experience in Java, Spring Boot, and DevOps technologies
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-white font-semibold">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>Gurgaon, India</span>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Open to opportunities</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get In Touch
              </a>
              <a
                href="/SudhirMeena_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="hidden lg:block text-center">
            <img
              src="/images/profile_photo_512.jpg"
              srcSet="/images/profile_photo_256.jpg 256w, /images/profile_photo_512.jpg 512w"
              sizes="(max-width: 1024px) 256px, 512px"
              alt="Sudhir Meena"
              className="hero-profile-img mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;