"use client";
import { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

export function Box(props: MeshProps) {
  const ref = useRef({});

  useFrame((state, delta) => {
      ref.current.rotation.x += delta - 0.001;
      ref.current.rotation.y += delta - 0.01;
      ref.current.rotation.z += delta - 0.01;
    })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshMatcapMaterial color="#bea6ff" />
    </mesh>
  );
}
