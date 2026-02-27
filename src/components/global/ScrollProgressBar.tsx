"use client";

import { useEffect, useState } from "react";
import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
            style={{
                scaleX,
                background: "linear-gradient(90deg, #f59e0b, #3b82f6, #a855f7)",
            }}
        />
    );
}
