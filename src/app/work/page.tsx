"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const allProjects = [
    {
        title: "Ganga Scavenger Dashboard",
        slug: "ganga-scavenger",
        role: "Frontend Engineer",
        year: "2024",
        tags: ["React", "IoT", "WebRTC", "PWA"],
        description: "Real-time autonomous river-cleaning robot mission control. Live telemetry, video feed, GPS map, and AI debris detection dashboard with PWA offline support.",
        image: "https://images.unsplash.com/photo-1620021676839-4d6d7bb5f7f0?q=80&w=2070&auto=format&fit=crop",
        featured: true,
    },
    {
        title: "AI Crime Predictor",
        slug: "ai-crime-predictor",
        role: "Full-Stack Dev",
        year: "2024",
        tags: ["Python", "FastAPI", "ML", "React"],
        description: "Machine learning model that predicts crime hotspots using historical data, time patterns, and geospatial analysis with an interactive heatmap dashboard.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        featured: true,
    },
    {
        title: "Eye Mouse Control",
        slug: "eye-mouse-control",
        role: "Systems Dev",
        year: "2023",
        tags: ["Python", "OpenCV", "MediaPipe", "Accessibility"],
        description: "Hands-free computer control using eye gaze tracking with MediaPipe face mesh. Enables people with motor disabilities to operate a computer using only their eyes.",
        image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2000&auto=format&fit=crop",
        featured: false,
    },
    {
        title: "Network Threat Detector",
        slug: "network-sniffer",
        role: "Systems Dev",
        year: "2024",
        tags: ["Python", "Scapy", "Security", "TUI"],
        description: "Real-time network packet sniffer with threat detection engine, a rich terminal dashboard, and alerting for port scans, ARP spoofing, and DDoS patterns.",
        image: "https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=2127&auto=format&fit=crop",
        featured: false,
    },
    {
        title: "3D Portfolio v1",
        slug: "portfolio-3d",
        role: "Creative Dev",
        year: "2024",
        tags: ["Three.js", "R3F", "GSAP", "Next.js"],
        description: "Immersive 3D portfolio with WebGL canvas, post-processing effects, scroll-driven animations, and a custom particle galaxy background.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        featured: false,
    },
    {
        title: "ClubSphere",
        slug: "clubsphere",
        role: "Full-Stack Dev",
        year: "2024",
        tags: ["React Native", "Supabase", "AI", "Mobile"],
        description: "College club management app with AI quiz generation, daily notifications, event tracking, and role-based access for admins, members, and guests.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        featured: false,
    },
];

const allTags = ["All", "React", "Python", "ML", "IoT", "Three.js", "Mobile", "Security"];

export default function WorkPage() {
    const [activeTag, setActiveTag] = useState("All");

    const filtered = activeTag === "All"
        ? allProjects
        : allProjects.filter((p) => p.tags.includes(activeTag));

    const [featured, rest] = [
        filtered.filter((p) => p.featured),
        filtered.filter((p) => !p.featured),
    ];

    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                    Selected Work
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mb-10">
                    A curated showcase of AI-driven, interactive, and production-grade web applications.
                </p>

                {/* Filter Tags */}
                <div className="flex flex-wrap gap-2 mb-20">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-none ${activeTag === tag
                                    ? "bg-white text-black"
                                    : "glass text-gray-300 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Featured Projects (large) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTag + "-featured"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-12 md:gap-24 w-full mb-24"
                >
                    {featured.map((project, index) => (
                        <Link
                            key={project.slug}
                            href={`/work/${project.slug}`}
                            className="group relative w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center cursor-none"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="w-full md:w-2/3 h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden glass"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                {/* Tags on image */}
                                <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="glass px-3 py-1 text-xs text-gray-300 rounded-full font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                                className="w-full md:w-1/3 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4 text-sm font-mono text-gray-400 border-b border-white/10 pb-4">
                                        <span>{project.role}</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                                </div>

                                <div className="mt-8 flex items-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                        <ArrowUpRight size={20} />
                                    </div>
                                    <span className="text-base font-medium">View Case Study</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Grid Projects (smaller) */}
            {rest.length > 0 && (
                <>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-white mb-8 border-t border-white/10 pt-12"
                    >
                        More Projects
                    </motion.h2>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTag + "-grid"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {rest.map((project, i) => (
                                <Link key={project.slug} href={`/work/${project.slug}`} className="group cursor-none">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="glass rounded-2xl overflow-hidden h-full hover:bg-white/5 transition-colors"
                                    >
                                        <div
                                            className="w-full h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-mono">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                                                <span>{project.role}</span>
                                                <span>{project.year}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </>
            )}

            {filtered.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-500 py-24"
                >
                    No projects found for "{activeTag}".
                </motion.div>
            )}
        </div>
    );
}
