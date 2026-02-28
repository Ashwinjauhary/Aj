"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const allProjects = [
    {
        title: "ClubSphere – College Club Platform",
        slug: "clubsphere",
        role: "Full-Stack Dev",
        year: "2024",
        tags: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API"],
        description: "Full-stack role-based platform for managing college clubs and events with AI reports.",
        image: "/projects/clubsphere.png",
        featured: true,
    },
    {
        title: "SolarFlow Viz",
        slug: "solarflow-viz",
        role: "Frontend Dev",
        year: "2024",
        tags: ["React.js", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS"],
        description: "Interactive 3D visualization platform for solar energy workflow monitoring.",
        image: "/projects/solarflow.png",
        featured: true,
    },
    {
        title: "Studify-OS",
        slug: "studify-os",
        role: "Frontend Dev",
        year: "2023",
        tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
        description: "OS-style student workspace for collaboration, tasks, and communication.",
        image: "/projects/studify.png",
        featured: false,
    },
    {
        title: "Codester-Club – Community Platform",
        slug: "codester-club",
        role: "Full-Stack Dev",
        year: "2024",
        tags: ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
        description: "Community platform for college clubs with social and real-time features.",
        image: "/projects/codester.png",
        featured: false,
    },
    {
        title: "Notely – Premium Notes App",
        slug: "notely",
        role: "Mobile Dev",
        year: "2023",
        tags: ["Flutter", "Dart", "Material Design 3"],
        description: "Cross-platform notes app focused on productivity and premium UI/UX.",
        image: "/projects/notely.png",
        featured: false,
    },
    {
        title: "Hi-Tech Portfolio Website",
        slug: "hi-tech-portfolio",
        role: "Frontend Dev",
        year: "2024",
        tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
        description: "Modern animated portfolio showcasing projects, skills, and experience.",
        image: "/projects/hitech.png",
        featured: false,
    },
    {
        title: "Catalyst Crew – Company Website",
        slug: "catalyst-crew",
        role: "Frontend Dev",
        year: "2024",
        tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
        description: "Official website for Catalyst Crew highlighting services and team.",
        image: "/projects/catalyst.png",
        featured: false,
    },
    {
        title: "Invoicyy – GST Billing System",
        slug: "invoicyy",
        role: "Python Dev",
        year: "2024",
        tags: ["Python", "Streamlit", "SQLite", "ReportLab"],
        description: "GST-compliant billing system for Indian businesses (desktop + web).",
        image: "/projects/invoicyy.png",
        featured: false,
    },
    {
        title: "TaskFlow - Advanced Kanban Board",
        slug: "taskflow",
        role: "Full-Stack Dev",
        year: "2024",
        tags: ["TypeScript", "React.js", "Tailwind CSS", "Node.js", "Express.js"],
        description: "Next-gen Kanban with TypeScript, React & Tailwind. Organize smart. Move fast. Visualize everything.",
        image: "/projects/taskflow.png",
        featured: true,
    },
    {
        title: "AJ Verse: To-Do",
        slug: "ajverse-todo",
        role: "Full-Stack Dev",
        year: "2023",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
        description: "A full-stack productivity app with JWT auth, drag & drop, and analytics.",
        image: "/projects/todo.png",
        featured: false,
    },
    {
        title: "AJVerse: Piano",
        slug: "ajverse-piano",
        role: "Frontend Dev",
        year: "2023",
        tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API"],
        description: "Responsive 88-key piano app with real-time audio synthesis and animations.",
        image: "/projects/piano.png",
        featured: false,
    },
    {
        title: "AJVerse: SynapTic",
        slug: "ajverse-synaptic",
        role: "Frontend Dev",
        year: "2023",
        tags: ["React.js", "TypeScript", "Tailwind CSS", "AI"],
        description: "Intelligent AI-powered Tic Tac Toe with sleek responsive UI.",
        image: "/projects/synaptic.png",
        featured: false,
    },
    {
        title: "QuickTools Hub",
        slug: "quicktools-hub",
        role: "Frontend Dev",
        year: "2023",
        tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
        description: "Collection of fast web tools: counters, color changers, todos, and weather.",
        image: "/projects/quicktools.png",
        featured: false,
    },
    {
        title: "Happy Diwali ✨️",
        slug: "happy-diwali",
        role: "Frontend Dev",
        year: "2023",
        tags: ["HTML5", "CSS3", "JavaScript", "PWA"],
        description: "Interactive festival web app with beautiful animations and sound effects.",
        image: "/projects/diwali.png",
        featured: false,
    },
];

const allTags = ["All", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Mobile", "Three.js"];

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
        <div className="w-full min-h-screen px-4 md:px-24 pt-24 md:pt-32 pb-40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-gray-500 mb-2 block">Projects</span>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                    Selected Work
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-xl mb-10">
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
                                className="w-full md:w-2/3 h-[250px] md:h-[500px] relative rounded-3xl overflow-hidden glass shrink-0"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                {/* Tags on image */}
                                <div className="absolute top-6 left-6 flex gap-2 flex-wrap max-w-[80%]">
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
                                    <div className="flex items-center justify-between mb-4 text-xs md:text-sm font-mono text-gray-400 border-b border-white/10 pb-4">
                                        <span>{project.role}</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{project.description}</p>
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
                    No projects found for &quot;{activeTag}&quot;.
                </motion.div>
            )}
        </div>
    );
}
