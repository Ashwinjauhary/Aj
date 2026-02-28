"use client";

import { motion } from "framer-motion";

const stacks = [
    { name: "React/Next.js", count: 8, color: "#60a5fa" },
    { name: "Python", count: 6, color: "#fb923c" },
    { name: "TypeScript", count: 7, color: "#a78bfa" },
    { name: "Tailwind", count: 9, color: "#34d399" },
    { name: "Three.js", count: 4, color: "#f59e0b" },
    { name: "Node.js", count: 5, color: "#2dd4bf" },
];

const max = Math.max(...stacks.map(s => s.count));

export default function TechStackChart() {
    return (
        <div>
            <div className="flex items-end gap-3 h-40 justify-center mb-4">
                {stacks.map((s, i) => (
                    <div key={s.name} className="flex flex-col items-center gap-2 flex-1">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 + 0.6 }}
                            className="text-[11px] font-mono text-gray-500"
                        >
                            {s.count}
                        </motion.span>
                        <div className="w-full flex items-end justify-center" style={{ height: "120px" }}>
                            <motion.div
                                className="w-full rounded-t-lg"
                                style={{ background: s.color, minWidth: "28px" }}
                                initial={{ height: 0 }}
                                animate={{ height: `${(s.count / max) * 120}px` }}
                                transition={{ duration: 1, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
                {stacks.map(s => (
                    <div key={s.name} className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span className="w-2.5 h-2.5 rounded-sm" style={{ background: s.color }} />
                        {s.name}
                    </div>
                ))}
            </div>
            <p className="text-center text-gray-600 text-xs font-mono mt-2">Number of projects using each tech</p>
        </div>
    );
}
