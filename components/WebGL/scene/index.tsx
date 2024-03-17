'use client'
import { Canvas } from "@react-three/fiber";
import { Cone } from "../cone";
import { useTheme } from "next-themes";

export function Scene()
{
    const {resolvedTheme} = useTheme();
    const isDark = resolvedTheme === 'dark' || resolvedTheme === 'halloween'

    return (
        <div className="absolute w-full h-screen top-0 z-0">
            <Canvas shadows={true} >
                <color attach="background" args={[isDark ? "#000" : "#fff"]} />
                <ambientLight intensity={0.4} />
                <spotLight position={[-2, 2, 0]} angle={3} penumbra={10} />
                <pointLight position={[2, 1.5, 1]} />
                <Cone position={[0, 1, 0]} scale={2} rotation={[-0.3,0,0]} />
            </Canvas>
        </div>
    );
}