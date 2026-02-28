"use client";

import { motion } from "framer-motion";

const nowItems = [
    { emoji: "📚", label: "Studying", desc: "BCA 2nd year — databases, OS, Java, and computer networks." },
    { emoji: "🚀", label: "Building", desc: "Ashwin Portfolio (this site!) — pushing every limit of Next.js 16 and Three.js." },
    { emoji: "🤖", label: "Exploring", desc: "LLM fine-tuning and building small domain-specific AI tools using Gemini and LangChain." },
    { emoji: "🦀", label: "Learning", desc: "Rust basics — aiming to understand memory safety before trying WebAssembly." },
    { emoji: "🐳", label: "DevOps", desc: "Docker + GitHub Actions — containerising my projects and setting up proper CI/CD pipelines." },
    { emoji: "🎯", label: "Goal for 2025", desc: "Land a remote internship, publish 5 blog posts, and build one project that goes viral on Twitter." },
];

export default function NowPage() {
    const lastUpdated = "March 1, 2026";

    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
                <span className="font-mono text-sm text-gray-500 tracking-widest uppercase">Now</span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mt-4 mb-4">What I&apos;m Doing Now</h1>
                <p className="text-gray-400 text-sm mb-16 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Last updated: {lastUpdated} · Inspired by{" "}
                    <a href="https://nownownow.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline cursor-none">nownownow.com</a>
                </p>

                <div className="flex flex-col gap-6">
                    {nowItems.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass p-6 rounded-2xl flex items-start gap-5 hover:bg-white/5 transition-colors border border-white/5"
                        >
                            <span className="text-3xl">{item.emoji}</span>
                            <div>
                                <h3 className="text-white font-bold mb-2">{item.label}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        This page is a snapshot of my life right now. It changes as I grow.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
