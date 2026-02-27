"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Download, MapPin, Coffee, Music, Code2, Heart, Zap } from "lucide-react";
import Magnetic from "@/components/global/Magnetic";

const funFacts = [
    { emoji: "☕", text: "Runs on chai, not coffee" },
    { emoji: "🎵", text: "Lo-fi beats while coding" },
    { emoji: "🌙", text: "Night owl. Best code after midnight" },
    { emoji: "🏏", text: "Cricket fan — RCB forever" },
    { emoji: "⚡", text: "Built first app in 2022" },
    { emoji: "🎮", text: "CS2 for stress relief" },
];

const values = [
    { icon: <Code2 size={20} />, title: "Ship First, Refine Later", desc: "A working v1 beats a perfect idea stuck in planning." },
    { icon: <Zap size={20} />, title: "Speed is a Feature", desc: "Fast code, fast designs, fast iterations. Momentum > perfection." },
    { icon: <Heart size={20} />, title: "Design Matters Deeply", desc: "The interface IS the product. Ugly tools don't get used." },
    { icon: <Coffee size={20} />, title: "Learn in Public", desc: "I share what I build. Feedback makes me better." },
];

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <div className="max-w-5xl mx-auto">

                {/* Hero */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-24">
                    <span className="text-gray-500 font-mono text-sm tracking-widest uppercase">About</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mt-4 mb-6">
                        Hey, I'm Vansh.
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 mb-8">
                        <MapPin size={14} />
                        <span className="text-sm">Kanpur, Uttar Pradesh, India</span>
                        <span className="text-white/20 mx-2">·</span>
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm text-green-400">Open to opportunities</span>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-4">
                        I'm a 2nd-year BCA student who decided not to wait for a degree to start building real things.
                        Since 2022, I've shipped AI-integrated apps, autonomous robots, mobile apps, and immersive 3D web experiences.
                    </p>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-10">
                        My obsession: making things that feel <em className="text-white not-italic font-semibold">alive</em> — interfaces that respond,
                        animations that breathe, and code that solves problems people actually have.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Magnetic>
                            <a
                                href="/Vansh_Agnihotri_Resume.pdf"
                                download
                                className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors cursor-none"
                            >
                                <Download size={16} />
                                Download Resume
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/contact" className="flex items-center gap-2 glass border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-none">
                                Let's Talk <ArrowUpRight size={14} />
                            </Link>
                        </Magnetic>
                    </div>
                </motion.div>

                {/* Photo + Bio Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass rounded-3xl h-80 flex items-center justify-center border border-white/10 overflow-hidden relative"
                    >
                        <div className="text-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400/30 to-blue-600/30 border border-white/20 mx-auto mb-4 flex items-center justify-center text-5xl font-extrabold text-white">
                                V
                            </div>
                            <p className="text-gray-400 text-sm">Photo coming soon 📸</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        {[
                            { label: "Name", value: "Vansh Agnihotri" },
                            { label: "Location", value: "Kanpur, UP, India" },
                            { label: "Education", value: "BCA, 2nd Year" },
                            { label: "Focus", value: "React, Next.js, AI & 3D Web" },
                            { label: "Status", value: "Available for freelance & internships" },
                            { label: "Email", value: "vanshagnihotri520@gmail.com" },
                        ].map((item) => (
                            <div key={item.label} className="flex items-start gap-4 border-b border-white/5 pb-3">
                                <span className="text-gray-500 text-sm font-mono w-28 shrink-0">{item.label}</span>
                                <span className="text-white text-sm">{item.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Values */}
                <section className="mb-24">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
                        <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Philosophy</span>
                        <h2 className="text-4xl font-bold text-white mt-2">How I Think</h2>
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

                {/* Fun Facts Carousel */}
                <section className="mb-24">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
                        <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Beyond Code</span>
                        <h2 className="text-4xl font-bold text-white mt-2">Fun Facts</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {funFacts.map((fact, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                whileHover={{ scale: 1.03, y: -3 }}
                                className="glass p-5 rounded-2xl text-center cursor-none"
                            >
                                <span className="text-3xl block mb-2">{fact.emoji}</span>
                                <p className="text-gray-300 text-sm">{fact.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Collab Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-10 md:p-14 text-center border border-white/10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Want to collaborate?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">I'm always open to learning from senior devs, working on challenging projects, and contributing to meaningful products.</p>
                    <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-none">
                        Get In Touch
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
