"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

// A wrapper to just hold the points instead of recreating them, Drei's Stars already returns Points
function PointCloud() {
    const ref = useRef<any>(null);
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 20;
            ref.current.rotation.y -= delta / 30;
        }
    });
    return (
        <group ref={ref}>
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </group>
    )
}

export default function Background3D() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <color attach="background" args={["#050505"]} />
                <ambientLight intensity={0.5} />
                <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
                    <PointCloud />
                </Float>
            </Canvas>
        </div>
    );
}
