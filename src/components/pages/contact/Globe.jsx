import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RotatingGlobe() {
  const globeRef = useRef();
  const [texture, setTexture] = useState(null);

  // Infinite rotation using useFrame hook
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.005; // Slow rotation along the Y axis
    }
  });

  useEffect(() => {
    // Load texture when the component mounts
    const loader = new THREE.TextureLoader();
    loader.load(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTG6P7JDwOSzKct6mUega1hf3H6B-H-lq_w&s',  // Make sure the texture is placed in the public folder
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (err) => {
        console.error('Error loading texture:', err);
      }
    );
  }, []);

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1, 64, 64]} />
      {texture && <meshStandardMaterial map={texture} />}
    </mesh>
  );
}

function GlobeRotate() {
  return (
    <Canvas
      style={{ height: '100vh', width: '100%' }}
      camera={{ position: [1.8, 1.8, 2], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Rotating Globe with Texture */}
      <RotatingGlobe />

      {/* OrbitControls for interactivity (disabled zoom) */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default GlobeRotate;
