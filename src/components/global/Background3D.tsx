"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Background3D() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const update = () => setIsLight(document.documentElement.classList.contains("light"));
        update();
        // Watch for class changes (theme toggle)
        const observer = new MutationObserver(update);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    const bgColor = isLight ? "#f0ede6" : "#050505";

    return (
        <div
            className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-500 pointer-events-none"
            style={{ backgroundColor: bgColor }}
        >
            {/* Setting maximum device pixel ratio to 1.5 drastically improves performance on high-DPI screens */}
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
                <color attach="background" args={[bgColor]} />
                <ambientLight intensity={0.5} />
                {/* 
                  Using the built-in Stars animation logic which is shader-based and much faster 
                  than doing CPU-side rotation via useFrame and <Float> 
                */}
                <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={1.5} />
            </Canvas>
        </div>
    );
}
