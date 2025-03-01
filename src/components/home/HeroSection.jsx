import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

function FloatingCube({ position, size, color }) {
  const meshRef = useRef();

  // Smooth rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.4} />
    </mesh>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Canvas */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
          {/* Ambient light for overall illumination */}
          <ambientLight intensity={9} />

          {/* Directional lights to highlight the cubes */}
          <directionalLight position={[10, 10, 10]} intensity={5} color="white" />
          <directionalLight position={[-10, -10, 10]} intensity={5} color="white" />

          {/* Large cubes with distinct colors */}
          <FloatingCube position={[-20, 15, -20]} size={[8, 8, 8]} color="rgb(14, 30, 52)" />
          <FloatingCube position={[20, -15, -20]} size={[8, 8, 8]} color="rgb(42, 6, 8)" />

          {/* Medium cubes with different colors */}
          <FloatingCube position={[-10, -10, -10]} size={[6, 6, 6]} color="rgb(15, 34, 58)" />
          <FloatingCube position={[10, 10, -10]} size={[6, 6, 6]} color="rgb(52, 14, 30)" />

          {/* Small cubes for added detail */}
          <FloatingCube position={[-5, 5, -5]} size={[4, 4, 4]} color="rgb(30, 52, 14)" />
          <FloatingCube position={[5, -5, -5]} size={[4, 4, 4]} color="rgb(58, 15, 34)" />
        </Canvas>
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 p-6 rounded-lg text-center">
        <motion.h1
          className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text uppercase"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Saafqeon
        </motion.h1>
        <motion.h2
          className="text-3xl text-white font-semibold mt-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Where Innovation Meets Excellence
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 mt-6 leading-6 max-w-3xl mx-auto text-justify"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn" }}
        >
          Turning Possibilities into Reality. At Saafqeon, we bridge the gap between
          innovation and execution. Specializing in AI, we provide
          end-to-end IT solutions ensuring seamless integration and continuous support.
        </motion.p>
      </div>
    </div>
  );
}