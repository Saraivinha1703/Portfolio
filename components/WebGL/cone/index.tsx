"use client";
import { useRef } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

export function Cone(props: MeshProps) {
  const ref = useRef({});

  useFrame(
    (_, delta) => {
      ref.current.rotation.y += delta - 0.05;
    }
  );

  return (
    <mesh
      ref={ref}
      scale={1}
      {...props}
    >
      <coneGeometry args={[0.8, 1.5, 3]} />
      <MeshTransmissionMaterial thickness={0.2} roughness={0} transmission={1} ior={1.2} chromaticAberration={0.1} backside />
    </mesh>
  );
}
