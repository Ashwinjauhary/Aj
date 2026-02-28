"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Hackathon Mentor",
        role: "Senior Engineer at FAANG",
        text: "Ashwin's Ganga Scavenger project was one of the most complete technical submissions we've seen from a student. Live telemetry, WebRTC, and a production-ready PWA — impressive at any level.",
        avatar: "HM",
        color: "#60a5fa",
    },
    {
        name: "Project Collaborator",
        role: "Fellow Developer",
        text: "Working with Ashwin on ClubSphere was seamless. He shipped features fast, wrote clean code, and had great instincts for UX. The AI quiz feature was entirely his idea and it became the most-used part of the app.",
        avatar: "PC",
        color: "#34d399",
    },
    {
        name: "College Professor",
        role: "BCA Department, CSJMU",
        text: "Among students who go beyond the syllabus, Ashwin stands out. He applies computer science concepts to real-world problems and always brings something that wasn't in any lecture.",
        avatar: "CP",
        color: "#f59e0b",
    },
    {
        name: "Tech Fest Judge",
        role: "Startup Founder",
        text: "The Eye Mouse Control system was elegant in its simplicity. No special hardware, just a webcam and 200 lines of Python. That's the kind of problem-solving that gets you hired.",
        avatar: "TJ",
        color: "#a78bfa",
    },
];

export default function TestimonialsCarousel() {
    const [idx, setIdx] = useState(0);
    const [dir, setDir] = useState(1);

    const prev = useCallback(() => { setDir(-1); setIdx(i => (i - 1 + testimonials.length) % testimonials.length); }, []);
    const next = useCallback(() => { setDir(1); setIdx(i => (i + 1) % testimonials.length); }, []);

    useEffect(() => {
        const t = setInterval(next, 5000);
        return () => clearInterval(t);
    }, [next]);

    const t = testimonials[idx];

    return (
        <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={dir}>
                <motion.div
                    key={idx}
                    custom={dir}
                    variants={{
                        enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (d: number) => ({ x: -d * 60, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="glass rounded-3xl p-8 md:p-10 border border-white/10"
                >
                    <Quote size={32} className="mb-6 opacity-20" style={{ color: t.color }} />
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: t.color + "33", border: `1px solid ${t.color}55` }}>
                            {t.avatar}
                        </div>
                        <div>
                            <div className="text-white font-semibold">{t.name}</div>
                            <div className="text-gray-500 text-sm">{t.role}</div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                        <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                            className={`w-2 h-2 rounded-full transition-colors cursor-none ${i === idx ? "bg-white" : "bg-white/20"}`} />
                    ))}
                </div>
                <div className="flex gap-2">
                    <button onClick={prev} className="glass w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-none">
                        <ChevronLeft size={16} />
                    </button>
                    <button onClick={next} className="glass w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-none">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
