"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ForgeCore() {
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.12;
      innerRef.current.rotation.y = t * 0.08;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = -t * 0.06;
      outerRef.current.rotation.z = t * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Inner glowing core — solid with distortion */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[1.6, 6]} />
          <MeshDistortMaterial
            color="#F74C00"
            emissive="#FF4500"
            emissiveIntensity={0.6}
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* Wireframe shell — larger, counter-rotating */}
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[2.1, 1]} />
          <meshBasicMaterial
            color="#F74C00"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>

        {/* Thin orbiting ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.8, 0.008, 16, 100]} />
          <meshBasicMaterial color="#FF8C00" transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function Particles() {
  const count = 150;

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#FF8C00"
        size={0.015}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.08} />
      <pointLight
        position={[4, 4, 4]}
        color="#F74C00"
        intensity={3}
        distance={15}
      />
      <pointLight
        position={[-3, -2, 3]}
        color="#FF8C00"
        intensity={1.5}
        distance={12}
      />
      <ForgeCore />
      <Particles />
    </Canvas>
  );
}
