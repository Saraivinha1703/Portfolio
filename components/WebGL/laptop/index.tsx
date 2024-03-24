'use client';
import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { 
    GLTFLoader 
} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'

export function LaptopModel() {
    const ref = useRef()

    const model = useLoader(GLTFLoader, "/3d-models/laptop.gltf")
    
    let mixer: THREE.AnimationMixer
    if (model.animations.length) {
        mixer = new THREE.AnimationMixer(model.scene);
        model.animations.forEach((clip: THREE.AnimationClip) => {
            const action = mixer.clipAction(clip)
            action.repetitions = 1
            action.clampWhenFinished = true
            action.play();
        });
    }

    useFrame((_, delta) => {
        mixer?.update(delta)
    })

    model.scene.traverse((child: { isMesh: any; castShadow: boolean; receiveShadow: boolean; material: { side: number; }; }) => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = THREE.FrontSide
        }
    })

    return (
        <mesh 
            ref={ref} 
            position={[0, 1.3, 0]}
            rotation={[0.5, 0, 0]}
        >
            <primitive             
                object={model.scene}
                scale={1.4}
            />
        </mesh>
    )
}