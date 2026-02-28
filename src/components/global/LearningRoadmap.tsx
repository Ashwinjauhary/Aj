"use client";

import { motion } from "framer-motion";

const roadmap = [
    {
        category: "✅ Mastered",
        color: "text-green-400",
        dot: "bg-green-400",
        items: ["HTML/CSS/JS", "React", "Next.js", "Tailwind CSS", "Git & GitHub", "Python basics"],
    },
    {
        category: "🟡 Current Focus",
        color: "text-amber-400",
        dot: "bg-amber-400",
        items: ["TypeScript (deepening)", "Three.js / R3F", "FastAPI + ML APIs", "Docker basics", "Supabase / PostgreSQL"],
    },
    {
        category: "🔵 Next Up",
        color: "text-blue-400",
        dot: "bg-blue-400",
        items: ["Rust fundamentals", "WebAssembly", "LLM fine-tuning", "System design basics", "AWS / GCP core services"],
    },
    {
        category: "🌌 Long-Term",
        color: "text-purple-400",
        dot: "bg-purple-400",
        items: ["Distributed systems", "WebGPU", "Custom LLM agents", "Open source maintainer", "Technical writing"],
    },
];

export default function LearningRoadmap() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roadmap.map((section, si) => (
                <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.1 }}
                    className="glass rounded-2xl p-5 border border-white/5"
                >
                    <h4 className={`font-semibold mb-4 ${section.color}`}>{section.category}</h4>
                    <ul className="space-y-2">
                        {section.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${section.dot}`} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
    );
}
