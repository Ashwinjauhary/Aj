"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Map, Rocket } from "lucide-react";

const timeline = [
    {
        year: "2024 Late",
        title: "Full-Stack Power",
        description: "Expanded into Node.js, Express, and databases, building end-to-end applications.",
        color: "bg-purple-400",
        glow: "shadow-[0_0_15px_rgba(192,132,252,0.6)]",
    },
    {
        year: "2024 Mid",
        title: "React Revolution",
        description: "Mastered React.js and Tailwind CSS, building responsive and interactive UI components.",
        color: "bg-blue-400",
        glow: "shadow-[0_0_15px_rgba(96,165,250,0.6)]",
    },
    {
        year: "2024",
        title: "The Foundation",
        description: "Started BCA at PSIT Kanpur, diving into programming fundamentals and logic building.",
        color: "bg-amber-400",
        glow: "shadow-[0_0_15px_rgba(251,191,36,0.6)]",
    },
];

const certifications = [
    { title: "React Developer", issuer: "Meta", year: "2024", color: "text-amber-400", desc: "Advanced React patterns, state management, and performance optimization." },
    { title: "Node.js Application Development", issuer: "MongoDB", year: "2024", color: "text-green-400", desc: "Building REST APIs, database integration, and backend security." },
    { title: "JavaScript Advanced", issuer: "freeCodeCamp", year: "2023", color: "text-yellow-400", desc: "Deep dive into ES6+, async programming, and data structures." },
    { title: "Web Dev Fundamentals", issuer: "Google", year: "2023", color: "text-blue-400", desc: "Responsive design, accessibility, and modern web best practices." },
];

const roadmapItems = [
    {
        phase: "Current Focus",
        desc: "Mastering full-stack development, deep-diving into Next.js and backend architecture.",
        status: "active",
    },
    {
        phase: "Next 1-2 Months",
        desc: "Building enterprise-level projects and improving system design skills.",
        status: "upcoming",
    },
    {
        phase: "6-12 Months",
        desc: "Securing a high-growth internship or freelance contracts, scaling my network.",
        status: "upcoming",
    },
    {
        phase: "1-2 Years",
        desc: "Graduating with strong fundamentals, launching a startup product, and entering the tech industry.",
        status: "upcoming",
    },
];

export default function JourneyPage() {
    return (
        <div className="w-full min-h-screen px-4 md:px-24 pt-24 md:pt-32 pb-40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
            >
                <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-gray-500 mb-2 block">Journey</span>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-white text-glow">The Journey</h1>
                <p className="text-gray-400 text-base md:text-xl leading-relaxed mb-16 md:mb-24 max-w-2xl">
                    Documenting my path through academia, self-taught engineering, certifications, and what lies ahead.
                </p>

                {/* Timeline */}
                <section className="mb-32" id="timeline">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                            <Rocket className="text-amber-400" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold text-white">Timeline</h2>
                    </motion.div>

                    <div className="relative border-l border-white/20 pl-8 ml-4 md:ml-6 space-y-16">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className={`absolute w-4 h-4 ${item.color} rounded-full -left-[41px] top-2 ${item.glow}`} />
                                <span className="font-mono text-xs md:text-sm tracking-widest text-gray-400 bg-white/5 py-1 px-3 rounded-full border border-white/10">{item.year}</span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-2xl">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mb-32" id="education">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                            <GraduationCap className="text-blue-400" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold text-white">Education</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700">
                            <GraduationCap size={160} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">Bachelor of Computer Applications (BCA)</h3>
                                <span className="glass px-4 py-2 rounded-full text-xs md:text-sm font-mono text-blue-400 w-fit">2024 – 2027</span>
                            </div>
                            <h4 className="text-lg md:text-xl text-gray-300 font-medium mb-4">PSIT Kanpur</h4>
                            <p className="text-gray-400 leading-relaxed max-w-2xl text-base md:text-lg">
                                Currently in my 2nd year, maintaining academic excellence while building real-world projects and learning modern web technologies.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Certifications */}
                <section className="mb-32" id="certifications">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                            <Award className="text-yellow-400" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold text-white">Certifications</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass p-8 rounded-3xl flex flex-col justify-between hover:bg-white/5 transition-colors border border-white/5 relative overflow-hidden"
                            >
                                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                                <div className="mb-6">
                                    <h4 className="text-2xl font-bold text-white mb-2">{cert.title}</h4>
                                    <p className="text-gray-300">{cert.issuer}</p>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{cert.desc}</p>

                                <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white/20" />
                                    <span className={`font-mono text-sm font-bold ${cert.color}`}>{cert.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Roadmap */}
                <section className="mb-10" id="roadmap">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                            <Map className="text-green-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-2">Roadmap</h2>
                            <p className="text-gray-500 text-sm">My Learning & Career Growth Plan</p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {roadmapItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`p-8 rounded-3xl border ${item.status === 'active' ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'glass border-white/5 hover:bg-white/5'} transition-all`}
                            >
                                {item.status === 'active' && (
                                    <span className="inline-block px-3 py-1 bg-green-400/20 text-green-400 text-xs font-mono font-bold rounded-full mb-4 animate-pulse">
                                        CURRENT
                                    </span>
                                )}
                                <h3 className={`text-xl font-bold mb-4 ${item.status === 'active' ? 'text-white' : 'text-gray-300'}`}>
                                    {item.phase}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </motion.div>
        </div>
    );
}
