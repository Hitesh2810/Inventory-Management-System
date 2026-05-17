"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function BoxCluster() {
  const group = useRef();
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.22;
      group.current.rotation.x = Math.sin(Date.now() * 0.00045) * 0.12;
    }
  });

  const boxes = [
    [-1.4, 0, 0, "#00d5ff"],
    [0, 0.55, 0.25, "#7c3aed"],
    [1.25, -0.08, -0.2, "#34f5a5"],
    [-0.2, -0.82, 0.12, "#f8c14a"]
  ];

  return (
    <group ref={group}>
      {boxes.map(([x, y, z, color], index) => (
        <Float key={index} speed={1.6 + index * 0.2} rotationIntensity={0.55} floatIntensity={0.55}>
          <mesh position={[x, y, z]}>
            <boxGeometry args={[0.9, 0.9, 0.9]} />
            <meshStandardMaterial color={color} metalness={0.45} roughness={0.18} emissive={color} emissiveIntensity={0.22} />
          </mesh>
          <lineSegments position={[x, y, z]}>
            <edgesGeometry args={[new THREE.BoxGeometry(0.93, 0.93, 0.93)]} />
            <lineBasicMaterial color="white" transparent opacity={0.25} />
          </lineSegments>
        </Float>
      ))}
      <mesh position={[0, 0, -0.45]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#00d5ff" emissiveIntensity={1.6} />
      </mesh>
    </group>
  );
}

export function InventoryScene({ className = "" }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 48 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 4, 4]} intensity={3} color="#00d5ff" />
        <pointLight position={[-4, -2, 3]} intensity={2} color="#7c3aed" />
        <Stars radius={40} depth={20} count={900} factor={3} fade speed={1} />
        <BoxCluster />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
