'use client'
import { getGradientStop, getRandomNumberInRange } from "@/lib/utils";
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MIN_RADIUS = 5.7
const MAX_RADIUS = 6.2
const DEPTH = 5
const LEFT_COLOR = "db2777"
const RIGHT_COLOR = "843dff"
const NUM_POINTS = 1000

function CalculateColor(x)
{
    const maxDiff = MAX_RADIUS * 2
    const distance = x + MAX_RADIUS

    const ratio = distance / maxDiff

    const stop = getGradientStop(ratio, LEFT_COLOR, RIGHT_COLOR)
    return stop
}

export function Particles() {
    const ref = useRef()

    const points = Array.from(
        {length: NUM_POINTS}, 
        (v, k) => k + 1)
        .map((num) => {
            const randomRadius = getRandomNumberInRange(MIN_RADIUS, MAX_RADIUS);
            const randomAngle = Math.random() * Math.PI * 2;

            const x = Math.cos(randomAngle) * randomRadius;
            const y = Math.sin(randomAngle) * randomRadius;
            const z = getRandomNumberInRange(-2, -DEPTH);

            const color = CalculateColor(x);

            return {
                index: num,
                position: [x, y, z],
                color
            }
        })

    useFrame(({clock}) => {
        ref.current.rotation.z = clock.getElapsedTime() * 0.02
    })

    return (
        <group ref={ref}>
            {points.map((point => <Point key={point.index} position={point.position} color={point.color} />))}
        </group>
    )
}

const Point = ({emissive, position, color}) => {
    return (
        <Sphere position={position} scale={0.025}>
                <meshStandardMaterial 
                    color={color}
                    emissive={emissive ?? color}
                    emissiveIntensity={0.5}
                    roughness={0.5} 
                    />
            </Sphere>
    )
}