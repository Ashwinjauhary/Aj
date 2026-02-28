"use client";

import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Web & Frontend Development",
        tag: "CORE STRENGTH",
        tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
        icon: "🖥️",
        skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React.js", "Next.js", "Responsive Web Design", "SPA Architecture", "UI/UX Principles", "Framer Motion"],
    },
    {
        category: "Backend & API Development",
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "RESTful API", "JWT Auth", "RBAC", "API Security"],
    },
    {
        category: "AI & Emerging Tech",
        tag: "SMART POSITIONING",
        tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
        icon: "🤖",
        skills: ["Generative AI", "Prompt Engineering", "AI Integration", "Chatbot Arch", "Gemini API"],
    },
    {
        category: "Programming Languages",
        icon: "💻",
        skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C", "C++"],
    },
    {
        category: "Databases & Data Layer",
        icon: "🗄️",
        skills: ["MongoDB", "Mongoose ODM", "PostgreSQL", "SQLite", "Schema Design"],
    },
    {
        category: "Backend Platforms & Cloud",
        icon: "☁️",
        skills: ["Supabase", "Appwrite", "Vercel", "Render", "Cloudflare"],
    },
    {
        category: "Mobile Development",
        tag: "SECONDARY",
        tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
        icon: "📱",
        skills: ["Flutter", "Dart"],
    },
    {
        category: "Developer Tools & Workflow",
        icon: "🛠️",
        skills: ["Git & GitHub", "npm", "CI/CD Basics", "Figma", "VS Code", "Cursor"],
    },
    {
        category: "CS & Engineering Fundamentals",
        icon: "📐",
        skills: ["OOP", "Problem Solving", "Data Flow", "Full-Stack Arch"],
    },
    {
        category: "Product, System & Execution",
        icon: "🚀",
        skills: ["MVP Planning", "Product Dev", "Scalable Design"],
    },
    {
        category: "Leadership & Soft Skills",
        icon: "🤝",
        skills: ["Team Leadership", "Project Ownership", "Tech Docs", "Event Mgmt"],
    },
];

export default function SkillsPage() {
    return (
        <div className="w-full min-h-screen px-4 md:px-24 pt-24 md:pt-32 pb-40">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-6xl mx-auto">
                <span className="font-mono text-xs md:text-sm text-gray-500 tracking-widest uppercase">Tech Stack</span>
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white mt-4 mb-4">Tech Stack</h1>
                <p className="text-gray-400 text-lg mb-20 max-w-2xl">
                    A powerful, scalable, and modern technology arsenal.
                </p>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {skillsData.map((section, si) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: si * 0.05 }}
                            className="glass p-8 rounded-3xl break-inside-avoid shadow-xl hover:bg-white/5 transition-colors border border-white/5"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">{section.icon}</span>
                                    <h2 className="text-xl font-bold text-white leading-tight">{section.category}</h2>
                                </div>
                            </div>

                            {section.tag && (
                                <div className="mb-6">
                                    <span className={`inline-block px-3 py-1 rounded text-xs font-mono font-bold border ${section.tagColor}`}>
                                        {section.tag}
                                    </span>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {section.skills.map((skill, ii) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: ii * 0.03 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-gray-300 text-sm font-medium cursor-none hover:bg-white hover:text-black transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
