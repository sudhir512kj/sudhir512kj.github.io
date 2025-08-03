// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
  // Load experiences from JSON
  loadExperiences();
  
  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  // Add shadow and change background on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-sm');
      navbar.style.padding = '0.5rem 0';
    } else {
      navbar.classList.remove('shadow-sm');
      navbar.style.padding = '1rem 0';
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
  });
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash !== '') {
        e.preventDefault();
        
        const hash = this.hash;
        const targetElement = document.querySelector(hash);
        
        window.scrollTo({
          top: targetElement.offsetTop - navbar.offsetHeight,
          behavior: 'smooth'
        });
        
        // Update URL hash
        history.pushState(null, null, hash);
      }
    });
  });
  
  // Update active nav link based on scroll position
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  // Initialize active nav link on page load
  updateActiveNavLink();
  
  // Form submission handling
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Add animation to elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, .skill-item, .timeline-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('fadeIn');
      }
    });
  };
  
  // Run animation check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Run animation check on initial load
  animateOnScroll();
});

// Load experiences from JSON file
function loadExperiences() {
  fetch('data/experience.json')
    .then(response => response.json())
    .then(data => {
      const timeline = document.getElementById('experience-timeline');
      timeline.innerHTML = '';
      
      data.experiences.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const responsibilitiesList = exp.responsibilities.map(resp => `<li>${resp}</li>`).join('');
        const techBadges = exp.technologies.map(tech => `<span class="badge bg-secondary me-1 mb-1">${tech}</span>`).join('');
        
        timelineItem.innerHTML = `
          <div class="timeline-content shadow-sm">
            <h4>${exp.title}</h4>
            <p class="company">${exp.company} - ${exp.location}</p>
            <p class="period">${exp.period}</p>
            <p class="description">${exp.description}</p>
            <ul>${responsibilitiesList}</ul>
            <div class="mt-3">
              <strong>Technologies:</strong><br>
              ${techBadges}
            </div>
          </div>
        `;
        
        timeline.appendChild(timelineItem);
      });
    })
    .catch(error => {
      console.error('Error loading experiences:', error);
      document.getElementById('experience-timeline').innerHTML = '<p class="text-center">Unable to load experience data.</p>';
    });
}