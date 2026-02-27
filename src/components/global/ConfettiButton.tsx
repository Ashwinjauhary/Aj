"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Piece {
    x: number; y: number; vx: number; vy: number; rot: number; rotV: number;
    color: string; size: number; shape: "circle" | "square";
}

export default function ConfettiButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const [pieces, setPieces] = useState<Piece[]>([]);

    const fire = () => {
        const colors = ["#f59e0b", "#3b82f6", "#a855f7", "#ef4444", "#10b981", "#f97316", "#fff"];
        const newPieces = Array.from({ length: 60 }, () => ({
            x: 50 + (Math.random() - 0.5) * 10,
            y: 50,
            vx: (Math.random() - 0.5) * 14,
            vy: -(Math.random() * 12 + 5),
            rot: Math.random() * 360,
            rotV: (Math.random() - 0.5) * 20,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            shape: (Math.random() > 0.5 ? "circle" : "square") as "circle" | "square",
        }));
        setPieces(newPieces);
        setTimeout(() => setPieces([]), 2000);
    };

    return (
        <div className="relative inline-block">
            <button onClick={fire} className={className}>
                {children}
            </button>
            <AnimatePresence>
                {pieces.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                            background: p.color,
                            borderRadius: p.shape === "circle" ? "50%" : "2px",
                        }}
                        initial={{ x: 0, y: 0, rotate: p.rot, opacity: 1 }}
                        animate={{
                            x: p.vx * 20,
                            y: [0, p.vy * 10, p.vy * 10 + 80],
                            rotate: p.rot + p.rotV * 20,
                            opacity: [1, 1, 0],
                        }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
