"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isTouch, setIsTouch] = useState(true);

    // Using useMotionValue avoids React state updates (re-renders) on every mouse movement
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Initialization does not need setState in effect
        const match = window.matchMedia("(hover: none)").matches || window.innerWidth < 768;
        if (match !== isTouch) setIsTouch(match);

        const updateMousePosition = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (isTouch) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
                    border: isHovering ? "1px solid rgba(255, 255, 255, 0.8)" : "2px solid rgba(255, 255, 255, 0.5)",
                    backdropFilter: isHovering ? "blur(4px)" : "none",
                }}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.15,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />
        </>
    );
}

