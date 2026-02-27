"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "2025",
        title: "Going Deeper",
        description: "Exploring Genesis physics simulation, IoT dashboards, and PWA deployment. Competing in state-level hackathons and picking up freelance projects targeting production-level quality.",
        color: "bg-amber-400",
        glow: "shadow-[0_0_15px_rgba(251,191,36,0.6)]",
    },
    {
        year: "2024",
        title: "BCA 2nd Year — Specialized Web Focus",
        description: "Deepened knowledge in advanced React patterns, Next.js architecture, and interactive 3D web with Three.js & R3F. Built AI-integrated apps including the Ganga Scavenger dashboard and Eye Mouse Control.",
        color: "bg-blue-400",
        glow: "shadow-[0_0_15px_rgba(96,165,250,0.6)]",
    },
    {
        year: "2023",
        title: "BCA 1st Year — Foundational Mastery",
        description: "Started BCA degree. Built foundational knowledge in C, C++, and Data Structures. Created first AI-integrated mini-projects and learned vanilla web tech (HTML, CSS, JS).",
        color: "bg-green-400",
        glow: "shadow-[0_0_15px_rgba(74,222,128,0.6)]",
    },
    {
        year: "2022",
        title: "The Genesis",
        description: "Discovered the passion for programming. Began self-teaching Python and basic web concepts. Decided to pursue BCA to formalize CS education.",
        color: "bg-purple-400",
        glow: "shadow-[0_0_15px_rgba(192,132,252,0.6)]",
    },
];

const skillGroups = [
    {
        category: "Frontend",
        icon: "🖥️",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    },
    {
        category: "3D & Creative",
        icon: "🎨",
        skills: ["Three.js", "React Three Fiber", "Drei", "WebGL", "Lenis"],
    },
    {
        category: "Backend",
        icon: "⚙️",
        skills: ["Node.js", "FastAPI", "Python", "REST APIs", "WebSocket"],
    },
    {
        category: "AI & ML",
        icon: "🧠",
        skills: ["OpenCV", "MediaPipe", "scikit-learn", "Gemini API", "LangChain"],
    },
    {
        category: "Tools",
        icon: "🛠️",
        skills: ["Git & GitHub", "Vercel", "MongoDB", "Supabase", "Figma"],
    },
    {
        category: "Learning",
        icon: "🚀",
        skills: ["Rust (basics)", "Docker", "AWS basics", "Graph QL", "Redis"],
    },
];

const certifications = [
    { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023", color: "text-amber-400" },
    { title: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2023", color: "text-blue-400" },
    { title: "Python Basics", issuer: "HackerRank", year: "2022", color: "text-green-400" },
    { title: "React Developer", issuer: "Udemy", year: "2024", color: "text-purple-400" },
];

export default function JourneyPage() {
    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">The Journey</h1>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-24 max-w-2xl">
                    I am a 2nd-year BCA student. I am not waiting until graduation to build production-ready software.
                    My journey is about bypassing the traditional pace and accelerating directly into building next-level digital experiences.
                </p>

                {/* Timeline */}
                <section className="mb-32">
                    <div className="relative border-l border-white/20 pl-8 ml-4 md:ml-2 space-y-16">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className={`absolute w-4 h-4 ${item.color} rounded-full -left-[41px] top-2 ${item.glow}`} />
                                <span className="font-mono text-sm tracking-widest text-gray-500">{item.year}</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Skill Groups Grid */}
                <section className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white">The Arsenal</h2>
                        <p className="text-gray-500 mt-2">What I use to build cool things.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillGroups.map((group, gi) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: gi * 0.08 }}
                                className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{group.icon}</span>
                                    <h3 className="text-white font-semibold">{group.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs font-medium cursor-none"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-32">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-10"
                    >
                        Certifications
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass p-5 rounded-2xl flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <div>
                                    <h4 className="text-white font-semibold">{cert.title}</h4>
                                    <p className="text-gray-500 text-sm">{cert.issuer}</p>
                                </div>
                                <span className={`font-mono text-sm font-bold ${cert.color}`}>{cert.year}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* What I'm Learning Now */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass rounded-3xl p-8 md:p-12 border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-green-400 font-mono text-sm tracking-widest uppercase">Currently Learning</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Rust", emoji: "🦀", desc: "Systems programming for WebAssembly targets." },
                                { title: "Docker & CI/CD", emoji: "🐳", desc: "Containerised deployments and GitHub Actions." },
                                { title: "LLM Fine-tuning", emoji: "🤖", desc: "Training small models on custom datasets." },
                            ].map((item) => (
                                <div key={item.title} className="text-center p-4">
                                    <span className="text-4xl block mb-3">{item.emoji}</span>
                                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </div>
    );
}
