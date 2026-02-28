"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Calendar, Briefcase, Github, Linkedin, ArrowUpRight } from "lucide-react";
import HireForm from "@/components/global/HireForm";
import Magnetic from "@/components/global/Magnetic";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen px-4 md:px-24 pt-24 md:pt-32 pb-40">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-5/12 flex flex-col"
                >
                    <span className="font-mono text-sm tracking-widest uppercase text-gray-500 mb-2">Let&apos;s Connect</span>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white text-glow">
                        Get in Touch
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg mb-12">
                        I&apos;m always interested in new opportunities, collaborations, and interesting projects. Let&apos;s discuss how we can work together!
                    </p>

                    <div className="space-y-10">
                        {/* Direct Contact */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-xl flex items-center gap-2">Contact Info</h3>
                            <div className="space-y-4">
                                <a href="mailto:ashwin2431333@gmail.com" className="flex items-start gap-4 group cursor-none">
                                    <div className="glass w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-white/10 transition">
                                        <Mail className="text-gray-400 group-hover:text-white transition" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-sm font-mono tracking-widest uppercase mb-1">Email</div>
                                        <div className="text-white">ashwin2431333@gmail.com</div>
                                    </div>
                                </a>
                                <a href="tel:+919555681211" className="flex items-start gap-4 group cursor-none">
                                    <div className="glass w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-white/10 transition">
                                        <Phone className="text-gray-400 group-hover:text-white transition" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-sm font-mono tracking-widest uppercase mb-1">Phone</div>
                                        <div className="text-white">+91 95556 81211</div>
                                    </div>
                                </a>
                                <div className="flex items-start gap-4 group">
                                    <div className="glass w-12 h-12 flex items-center justify-center rounded-full transition">
                                        <MapPin className="text-gray-400" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-sm font-mono tracking-widest uppercase mb-1">Location</div>
                                        <div className="text-white">Kanpur, UP, India</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-xl">Availability Status</h3>
                            <div className="glass rounded-2xl p-5 space-y-4 border border-white/5">
                                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                    <div className="flex items-center gap-2 text-gray-400"><Clock size={16} /> <span className="text-sm">Response Time</span></div>
                                    <span className="text-white text-sm font-medium">Within 24 hours</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                    <div className="flex items-center gap-2 text-gray-400"><Calendar size={16} /> <span className="text-sm">Availability</span></div>
                                    <span className="text-white text-sm font-medium">Weekdays & Weekends</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gray-400"><Briefcase size={16} /> <span className="text-sm">Current Status</span></div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-green-400 text-sm font-medium">Actively Looking</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-xl">Find Me Online</h3>
                            <div className="flex gap-4">
                                <Magnetic>
                                    <a href="https://github.com/Ashwinjauhary" target="_blank" rel="noreferrer" className="glass px-5 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition cursor-none group border border-white/5">
                                        <Github size={18} className="text-gray-400 group-hover:text-white transition" />
                                        <span className="text-white text-sm font-medium">GitHub</span>
                                        <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </Magnetic>
                                <Magnetic>
                                    <a href="#" target="_blank" rel="noreferrer" className="glass px-5 py-3 rounded-full flex items-center gap-2 hover:bg-[#0077b5]/20 transition cursor-none group border border-white/5">
                                        <Linkedin size={18} className="text-gray-400 group-hover:text-[#0077b5] transition" />
                                        <span className="text-white text-sm font-medium">LinkedIn</span>
                                        <ArrowUpRight size={14} className="text-gray-500 group-hover:text-[#0077b5] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-7/12"
                >
                    <HireForm />
                </motion.div>

            </div>
        </div>
    );
}
