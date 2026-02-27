"use client";

import { useEffect } from "react";

const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

export default function KonamiCode() {
    useEffect(() => {
        let idx = 0;
        const handler = (e: KeyboardEvent) => {
            if (e.keyCode === KONAMI[idx]) {
                idx++;
                if (idx === KONAMI.length) {
                    idx = 0;
                    launchMatrixRain();
                }
            } else {
                idx = 0;
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    return null;
}

function launchMatrixRain() {
    const existing = document.getElementById("matrix-canvas");
    if (existing) { existing.remove(); return; }

    const canvas = document.createElement("canvas");
    canvas.id = "matrix-canvas";
    canvas.style.cssText = "position:fixed;inset:0;z-index:9999;pointer-events:auto;cursor:pointer";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;
    const cols = Math.floor(canvas.width / 16);
    const drops = Array(cols).fill(1);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アイウエオカキクケコ";

    const draw = () => {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0f0";
        ctx.font = "14px monospace";
        drops.forEach((y, i) => {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 16, y * 16);
            if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    };

    const interval = setInterval(draw, 50);
    canvas.onclick = () => { clearInterval(interval); canvas.remove(); };

    // Auto-close after 5s
    setTimeout(() => { clearInterval(interval); canvas.remove(); }, 5000);
}
