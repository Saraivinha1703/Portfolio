"use client";
import { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";

export function Cone(props: MeshProps) {
  const ref = useRef<MeshProps>({});
  const [hovered, hover] = useState<boolean>(false);

  useFrame(
    (state, delta) => {
      ref.current.rotation.y += delta -0.01;
    }
  );

  return (
    <mesh
      ref={ref}
      scale={1}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <coneGeometry args={[0.8, 1.5, 3]} />
      <meshStandardMaterial
      attach="material"
        color={"rgb(200, 200, 220)"}
      />
    </mesh>
  );
}
