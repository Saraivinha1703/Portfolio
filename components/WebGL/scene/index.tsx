'use client'
import { Canvas } from "@react-three/fiber";
import { Cone } from "../cone";
import { useTheme } from "next-themes";
import { Particles } from "../particles";
import { useState } from "react";
import { PerformanceMonitor } from "@react-three/drei";

export function Scene()
{
    const [dpr, setDpr] = useState(2)
    const {resolvedTheme} = useTheme();
    const getBgColor = () : string => {
        switch(resolvedTheme)
        {
            case 'dark':
                return "hsl(240, 10%, 3.9%)"
            case 'light':
                return "hsl(0, 0%, 90%)"
            case 'halloween':
                return "hsl(20, 14.29%, 4.12%)"
            case 'royal':
                return "hsl(183.16, 100%, 96.27%)"
            default:
                return "hsl(0, 0%, 90%)"
        }
    }

    return (
        <div className="absolute w-full h-screen top-0 z-0">
            <Canvas shadows={true} dpr={dpr}>
                <PerformanceMonitor 
                    onDecline={() => setDpr(1.5)}
                    onIncline={() => setDpr(2)}
                >
                    <color attach="background" args={[getBgColor()]} />
                    <ambientLight intensity={0.4} />
                    <spotLight position={[-2, 2, 0]} angle={3} penumbra={10} />
                    <spotLight position={[0, 0, 1]} angle={3} penumbra={10} />
                    <pointLight position={[2, 1.5, 1]} />
                    <pointLight position={[0, 0, 0]} />
                    <Cone position={[0, 1, 0]} scale={2} rotation={[-0.3,0,0]} />
                    <Particles />
                </PerformanceMonitor>
            </Canvas>
        </div>
    );
}