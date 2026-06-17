"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FlowingFabric() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (geometryRef.current) {
      const positions = geometryRef.current.attributes.position;
      const posArray = positions.array as Float32Array;
      
      for (let i = 0; i < posArray.length; i += 3) {
        const x = posArray[i];
        const y = posArray[i + 1];
        
        // Complex sine wave combination for silk-like undulating movement
        const z = 
          Math.sin(x * 1.5 + time * 0.8) * 0.6 +
          Math.sin(y * 1.2 + time * 0.5) * 0.4 +
          Math.sin((x + y) * 0.5 + time * 0.3) * 0.5;

        posArray[i + 2] = z;
      }
      
      positions.needsUpdate = true;
      geometryRef.current.computeVertexNormals();
    }
    
    if (meshRef.current) {
      // Slowly rotate and drift the fabric
      meshRef.current.rotation.z = time * 0.03;
      meshRef.current.rotation.x = -Math.PI / 3 + Math.sin(time * 0.1) * 0.05;
      meshRef.current.rotation.y = Math.sin(time * 0.05) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <planeGeometry ref={geometryRef} args={[35, 35, 64, 64]} />
      <meshPhysicalMaterial 
        color="#ffffff" 
        emissive="#ffffff"
        emissiveIntensity={0.05}
        roughness={0.15}
        metalness={0.6}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen transition-opacity duration-1000">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={0.2} color="#ffffff" />
        <directionalLight position={[10, 10, 10]} intensity={3} color="#F2FF64" />
        <directionalLight position={[-10, -10, 5]} intensity={3} color="#C19BE3" />
        <pointLight position={[0, 0, 8]} intensity={3} color="#ffffff" distance={20} />
        
        {/* Soft fog to fade out edges */}
        <fog attach="fog" args={['#C19BE3', 10, 30]} />
        
        <FlowingFabric />
      </Canvas>
    </div>
  );
}
