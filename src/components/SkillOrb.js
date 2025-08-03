import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SkillOrb = ({ skill, index }) => {
  const orbRef = useRef(null);

  useEffect(() => {
    if (!orbRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(60, 60);
    renderer.setClearColor(0x000000, 0);
    orbRef.current.appendChild(renderer.domElement);

    // Create skill orb
    const geometry = new THREE.SphereGeometry(0.8, 16, 16);
    const material = new THREE.MeshBasicMaterial({ 
      color: new THREE.Color().setHSL((skill.level / 100) * 0.3, 0.7, 0.6),
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });

    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      orb.rotation.x += 0.01;
      orb.rotation.y += 0.02;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      orbRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [skill.level]);

  return (
    <div 
      ref={orbRef} 
      style={{
        width: '60px',
        height: '60px',
        display: 'inline-block',
        marginRight: '10px'
      }}
    />
  );
};

export default SkillOrb;