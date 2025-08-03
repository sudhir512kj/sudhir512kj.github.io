import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 200 / 100, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(200, 100);
    renderer.setClearColor(0x000000, 0);
    
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '-20px';
    canvas.style.right = '-20px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    
    cardRef.current.style.position = 'relative';
    cardRef.current.appendChild(canvas);
    sceneRef.current = { scene, camera, renderer, canvas };

    // Create floating particles
    const geometry = new THREE.SphereGeometry(0.05, 8, 8);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6
    });

    const particles = [];
    for (let i = 0; i < 10; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.x = (Math.random() - 0.5) * 4;
      particle.position.y = (Math.random() - 0.5) * 2;
      particle.position.z = (Math.random() - 0.5) * 2;
      scene.add(particle);
      particles.push(particle);
    }

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      
      particles.forEach((particle, index) => {
        particle.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
        particle.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (sceneRef.current && cardRef.current) {
        cardRef.current.removeChild(sceneRef.current.canvas);
        sceneRef.current.renderer.dispose();
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
};

export default FloatingCard;