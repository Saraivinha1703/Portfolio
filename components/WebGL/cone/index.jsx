"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

export function Cone(props) {
  const ref = useRef();
  
  useFrame(
    (_, delta) => {
      ref.current.rotation.y += delta - 0.03;
    }
    );
    
    return (
      <mesh
      ref={ref}
      scale={1.5}
      {...props}
      >
      <coneGeometry args={[0.8, 1.5, 3]} />
      <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.5} chromaticAberration={0.4} backside />
    </mesh>
  );
}