"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Download, MapPin, Code2, Zap, Briefcase, Users } from "lucide-react";
import Magnetic from "@/components/global/Magnetic";

const values = [
    { icon: <Code2 size={20} />, title: "Web Development", desc: "Building modern, responsive applications" },
    { icon: <Zap size={20} />, title: "Problem Solving", desc: "Finding elegant solutions to complex problems" },
    { icon: <Briefcase size={20} />, title: "Business & Stocks", desc: "Strategic thinking and market analysis" },
    { icon: <Users size={20} />, title: "Leadership", desc: "Guiding teams and organizing events" },
];

const journey = [
    {
        year: "2024",
        title: "Started BCA Journey",
        desc: "Joined PSIT Kanpur with determination to excel",
    },
    {
        year: "2024-Q4",
        title: "Technical Growth",
        desc: "Learning React, JavaScript, and modern development tools",
    },
    {
        year: "2025",
        title: "Full-Stack Focus",
        desc: "Expanding into backend technologies and industry preparation",
    },
];

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <div className="max-w-5xl mx-auto">

                {/* Hero */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16 md:mb-24">
                    <span className="text-gray-500 font-mono text-sm tracking-widest uppercase">About Me</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white mt-4 mb-6 leading-tight">
                        Hi, I'm Ashwin Jauhary
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 mb-8 flex-wrap">
                        <span className="glass px-3 py-1 rounded-full text-[10px] md:text-xs font-mono text-amber-400">BCA Student</span>
                        <span className="glass px-3 py-1 rounded-full text-[10px] md:text-xs font-mono text-blue-400">Web Developer</span>
                        <span className="glass px-3 py-1 rounded-full text-[10px] md:text-xs font-mono text-green-400">Tech Enthusiast</span>
                        <span className="text-white/20 mx-2 hidden md:inline">·</span>
                        <div className="flex items-center gap-2 mt-2 md:mt-0 w-full md:w-auto">
                            <MapPin size={14} />
                            <span className="text-xs md:text-sm">Kanpur, Uttar Pradesh, India</span>
                        </div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-4">
                        I'm a 2nd-year BCA student at PSIT Kanpur. I love building modern, responsive, and interactive web applications. My long-term goal is to achieve academic excellence, secure a good placement, start my own business, and grow in the stock & investment world.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-10">
                        Exploring technology, building projects, and aiming for a future in business & investments.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Magnetic>
                            <a
                                href="/Ashwin_Jauhary_Resume.pdf"
                                download
                                className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors cursor-none"
                            >
                                <Download size={16} />
                                Download Resume
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/work" className="flex items-center gap-2 glass border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-none">
                                Explore Projects <ArrowUpRight size={14} />
                            </Link>
                        </Magnetic>
                    </div>
                </motion.div>

                {/* Photo + Bio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass rounded-3xl h-64 md:h-80 flex items-center justify-center border border-white/10 overflow-hidden relative group"
                    >
                        <img
                            src="/profile.png"
                            alt="Ashwin Jauhary"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        {[
                            { label: "Education", value: "BCA @ PSIT Kanpur (2024–2027)", emoji: "🎓" },
                            { label: "Interests", value: "Web Development, Business, Stocks, AI", emoji: "💡" },
                            { label: "Hobbies", value: "Gym, Tech Projects, Leadership", emoji: "🏋️" },
                            { label: "Email", value: "ashwin2431333@gmail.com", emoji: "✉️" },
                        ].map((item) => (
                            <div key={item.label} className="flex items-start gap-4 border-b border-white/5 pb-3">
                                <span className="text-xl shrink-0">{item.emoji}</span>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">{item.label}</span>
                                    <span className="text-white text-sm mt-1">{item.value}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats */}
                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { value: "5+", label: "Programming Languages" },
                            { value: "10+", label: "Projects Built" },
                            { value: "15+", label: "Technologies Learned" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-8 rounded-2xl text-center flex flex-col items-center justify-center"
                            >
                                <span className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</span>
                                <span className="text-gray-400 text-sm">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Values -> What I Love */}
                <section className="mb-24">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
                        <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Passions</span>
                        <h2 className="text-4xl font-bold text-white mt-2">What I Love</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors"
                            >
                                <div className="text-amber-400 mb-3">{v.icon}</div>
                                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* My Journey Timeline */}
                <section className="mb-24">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
                        <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Timeline</span>
                        <h2 className="text-4xl font-bold text-white mt-2">My Journey</h2>
                    </motion.div>
                    <div className="relative border-l border-white/20 pl-8 ml-4 md:ml-2 space-y-12">
                        {journey.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute w-4 h-4 bg-amber-400 rounded-full -left-[41px] top-1 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                                <span className="font-mono text-sm tracking-widest text-amber-400">{item.year}</span>
                                <h3 className="text-2xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Collab Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-10 md:p-14 text-center border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <span className="text-4xl block mb-6">🚀</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Build Something Amazing</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Always eager to take on new challenges and collaborate on innovative projects.</p>
                    <Link href="/contact" className="relative z-10 inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-none">
                        Get In Touch
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
