"use client";
import { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";

export function Box(props: MeshProps) {
  const ref = useRef<MeshProps>({});
  const [hovered, hover] = useState<boolean>(false);

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
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#ddd" : "#ccc"} />
    </mesh>
  );
}
