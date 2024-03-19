"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Box(props) {
  const ref = useRef                                                                                                                                                                                   ();

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
