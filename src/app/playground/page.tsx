"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, Shapes, Play, RotateCcw } from "lucide-react";

// ---- Mini-demo 1: CSS Art Clock ----
function CSSClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(t);
    }, []);
    const s = time.getSeconds() * 6;
    const m = (time.getMinutes() + time.getSeconds() / 60) * 6;
    const h = ((time.getHours() % 12) + time.getMinutes() / 60) * 30;
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-40 h-40 rounded-full border border-white/20 bg-black/20">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute w-1 h-3 bg-white/30 rounded-full" style={{ top: "4px", left: "50%", transformOrigin: "center 76px", transform: `translateX(-50%) rotate(${i * 30}deg)` }} />
                ))}
                {/* Hour */}
                <div className="absolute top-1/2 left-1/2 w-0.5 h-10 bg-white rounded -translate-x-1/2 origin-bottom" style={{ transform: `translateX(-50%) rotate(${h}deg)`, transformOrigin: "bottom center", bottom: "50%" }} />
                {/* Minute */}
                <div className="absolute top-1/2 left-1/2 w-0.5 h-14 bg-gray-300 rounded -translate-x-1/2 origin-bottom" style={{ transform: `translateX(-50%) rotate(${m}deg)`, transformOrigin: "bottom center", bottom: "50%" }} />
                {/* Second */}
                <div className="absolute top-1/2 left-1/2 w-px h-16 bg-amber-400 rounded -translate-x-1/2 origin-bottom" style={{ transform: `translateX(-50%) rotate(${s}deg)`, transformOrigin: "bottom center", bottom: "50%" }} />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="font-mono text-2xl text-white">{time.toLocaleTimeString()}</p>
        </div>
    );
}

// ---- Mini-demo 2: Canvas Sketch Pad ----
function SketchPad() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const drawing = useRef(false);
    const [color, setColor] = useState("#60a5fa");

    const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
        const rect = canvas.getBoundingClientRect();
        if ("touches" in e) {
            return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
        }
        return { x: (e as React.MouseEvent).clientX - rect.left, y: (e as React.MouseEvent).clientY - rect.top };
    };

    const start = (e: React.MouseEvent | React.TouchEvent) => {
        drawing.current = true;
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const { x, y } = getPos(e, canvas);
        ctx.beginPath();
        ctx.moveTo(x, y);
    };
    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        if (!drawing.current) return;
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        const { x, y } = getPos(e, canvas);
        ctx.lineTo(x, y);
        ctx.stroke();
    };
    const clear = () => {
        const canvas = canvasRef.current!;
        canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
    };

    const colors = ["#60a5fa", "#f59e0b", "#34d399", "#f87171", "#a78bfa", "#ffffff"];

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
                {colors.map(c => (
                    <button key={c} onClick={() => setColor(c)} className="w-7 h-7 rounded-full cursor-none border-2 transition-transform hover:scale-110" style={{ background: c, borderColor: color === c ? "white" : "transparent" }} />
                ))}
                <button onClick={clear} className="ml-auto glass px-3 py-1 rounded-full text-xs text-gray-300 flex items-center gap-1 cursor-none hover:bg-white/10"><RotateCcw size={12} /> Clear</button>
            </div>
            <canvas
                ref={canvasRef}
                width={500}
                height={200}
                className="w-full h-48 rounded-xl bg-black/30 cursor-crosshair border border-white/10"
                onMouseDown={start}
                onMouseMove={draw}
                onMouseUp={() => { drawing.current = false; }}
                onMouseLeave={() => { drawing.current = false; }}
                onTouchStart={start}
                onTouchMove={draw}
                onTouchEnd={() => { drawing.current = false; }}
            />
            <p className="text-gray-500 text-xs font-mono">Draw anything ↑</p>
        </div>
    );
}

// ---- Mini-demo 3: Particle Bounce ----
function ParticleBounce() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const count = 25;

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const particles = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            r: Math.random() * 6 + 3,
            hue: Math.random() * 60 + 200,
        }));

        let raf = 0;
        const animate = () => {
            ctx.fillStyle = "rgba(0,0,0,0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < p.r || p.x > canvas.width - p.r) p.vx *= -1;
                if (p.y < p.r || p.y > canvas.height - p.r) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${p.hue}, 80%, 65%)`;
                ctx.fill();
            });
            raf = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(raf);
    }, []);

    return <canvas ref={canvasRef} width={500} height={200} className="w-full h-48 rounded-xl bg-black/30 border border-white/10" />;
}

const demos = [
    { id: "clock", title: "Live CSS Clock", icon: <Palette size={16} />, component: <CSSClock /> },
    { id: "sketch", title: "Sketchpad", icon: <Code2 size={16} />, component: <SketchPad /> },
    { id: "particles", title: "Particle System", icon: <Shapes size={16} />, component: <ParticleBounce /> },
];

export default function PlaygroundPage() {
    const [active, setActive] = useState(demos[0].id);

    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
                <span className="font-mono text-sm text-gray-500 tracking-widest uppercase">Interactive</span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mt-4 mb-4">Playground</h1>
                <p className="text-gray-400 text-lg mb-16 max-w-2xl">
                    Mini-demos, experiments, and fun things I&apos;ve built to explore CSS, Canvas, and creative coding.
                </p>

                <div className="flex gap-2 mb-8 flex-wrap">
                    {demos.map(d => (
                        <button
                            key={d.id}
                            onClick={() => setActive(d.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-none ${active === d.id ? "bg-white text-black" : "glass text-gray-300 hover:bg-white/10"}`}
                        >
                            {d.icon} {d.title}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {demos.map(d => d.id === active && (
                        <motion.div
                            key={d.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="glass rounded-3xl p-8 border border-white/10"
                        >
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Play size={16} className="text-amber-400" /> {d.title}
                            </h2>
                            {d.component}
                        </motion.div>
                    ))}
                </AnimatePresence>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm font-mono">More experiments coming soon 🧪</p>
                </div>
            </motion.div>
        </div>
    );
}
