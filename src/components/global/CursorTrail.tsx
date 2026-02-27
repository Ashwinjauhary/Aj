"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 20;

interface Point {
    x: number;
    y: number;
    life: number;
}

export default function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const points = useRef<Point[]>([]);
    const mouse = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);
    const isTouch = useRef(false);

    useEffect(() => {
        isTouch.current = window.matchMedia("(hover: none)").matches;
        if (isTouch.current) return;

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            points.current.push({ x: e.clientX, y: e.clientY, life: 1 });
            if (points.current.length > TRAIL_LENGTH) {
                points.current.shift();
            }
        };
        window.addEventListener("mousemove", onMove);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            points.current = points.current
                .map((p) => ({ ...p, life: p.life - 0.05 }))
                .filter((p) => p.life > 0);

            points.current.forEach((p, i) => {
                const radius = (i / TRAIL_LENGTH) * 6 + 1;
                const alpha = p.life * 0.5;
                ctx.beginPath();
                ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${200 + i * 5}, 80%, 70%, ${alpha})`;
                ctx.fill();
            });

            rafRef.current = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
        return null;
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[9998] pointer-events-none"
        />
    );
}
