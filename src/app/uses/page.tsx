"use client";

import { motion } from "framer-motion";

const uses = [
    {
        category: "💻 Hardware",
        items: [
            { name: "Laptop", desc: "My primary machine for everything — from VSCode to Blender" },
            { name: "Noise-Cancelling Headphones", desc: "Essential for deep work and lo-fi sessions" },
            { name: "External Monitor", desc: "2nd display for reference + browser preview" },
        ],
    },
    {
        category: "⌨️ Editor & Terminal",
        items: [
            { name: "VS Code", desc: "With GitHub Copilot, Dracula Pro theme, and JetBrains Mono font" },
            { name: "Windows Terminal + PowerShell", desc: "Oh My Posh for the pretty prompt" },
            { name: "Git Bash", desc: "For when I need Unix commands on Windows" },
        ],
    },
    {
        category: "🛠️ Dev Tools",
        items: [
            { name: "GitHub", desc: "All repos, Git history, and Actions for CI/CD" },
            { name: "Vercel", desc: "Deploy everything in 30 seconds" },
            { name: "Postman", desc: "API testing and debugging" },
            { name: "Figma", desc: "Wireframes and component design before building" },
            { name: "Supabase", desc: "My go-to for backend + auth in side projects" },
        ],
    },
    {
        category: "🎨 Design",
        items: [
            { name: "Figma", desc: "UI design, prototyping, component systems" },
            { name: "Coolors.co", desc: "Color palette generation" },
            { name: "Phosphor Icons / Lucide", desc: "Consistent icon sets" },
            { name: "Google Fonts", desc: "Inter, Orbitron, JetBrains Mono" },
        ],
    },
    {
        category: "📦 Dev Stack",
        items: [
            { name: "Next.js + TypeScript", desc: "My default for any web project now" },
            { name: "Tailwind CSS v4", desc: "Utility-first, always up to date" },
            { name: "Framer Motion", desc: "Animation layer — nothing beats it for React" },
            { name: "React Three Fiber", desc: "3D in React without leaving the ecosystem" },
            { name: "FastAPI (Python)", desc: "When I need a quick ML or AI backend" },
        ],
    },
    {
        category: "🧠 AI Tools",
        items: [
            { name: "GitHub Copilot", desc: "Autocompletion — saves ~30% of typing time" },
            { name: "Claude / ChatGPT", desc: "Rubber duck + second opinion on architecture" },
            { name: "Gemini API", desc: "LLM integration in my projects" },
        ],
    },
    {
        category: "📱 Apps",
        items: [
            { name: "Notion", desc: "Project planning, notes, and research" },
            { name: "Spotify", desc: "Lo-fi hip hop, phonk, and ambient while coding" },
            { name: "Discord", desc: "Dev communities and hackathon teams" },
        ],
    },
];

export default function UsesPage() {
    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
                <span className="font-mono text-sm text-gray-500 tracking-widest uppercase">Setup</span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mt-4 mb-4">Uses</h1>
                <p className="text-gray-400 text-lg mb-20 max-w-2xl">
                    Every tool, app, and piece of gear I use daily to build, design, and ship. Inspired by the{" "}
                    <a href="https://uses.tech" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline cursor-none">/uses.tech</a> community.
                </p>

                <div className="flex flex-col gap-16">
                    {uses.map((section, si) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: si * 0.05 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">{section.category}</h2>
                            <div className="flex flex-col gap-3">
                                {section.items.map((item, ii) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: ii * 0.06 }}
                                        className="glass p-5 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
