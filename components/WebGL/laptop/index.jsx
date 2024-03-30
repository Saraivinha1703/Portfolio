'use client';
import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export function LaptopModel() {
    const ref = useRef()

    const model = useLoader(GLTFLoader, "/3d-models/laptop.gltf")
    
    let mixer
    if (model.animations.length) {
        mixer = new THREE.AnimationMixer(model.scene);
        model.animations.forEach((clip) => {
            const action = mixer.clipAction(clip)
            action.repetitions = 1
            action.clampWhenFinished = true
            action.play();
        });
    }

    useFrame((_, delta) => {
        mixer?.update(delta)
    })

    model.scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = THREE.FrontSide
        }
    })

    return (
        <mesh 
            ref={ref} 
            position={[0, 1.5, 0]}
            rotation={[0.5, 0, 0]}
        >
            <primitive             
                object={model.scene}
                scale={1.4}
            />
        </mesh>
    )
}