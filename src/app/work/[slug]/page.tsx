"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useParams } from "next/navigation";

// Mock data: In a real app, this would be fetched from a CMS or local JSON.
const caseStudies: Record<string, any> = {
    "ai-crime-predictor": {
        title: "AI Crime Pattern Predictor",
        description: "A comprehensive AI-powered system that analyzes historical crime data to predict hotspots, classify risk levels, and provide actionable intelligence via a full-stack dashboard.",
        stack: ["React", "Python", "FastAPI", "TensorFlow", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
    },
    "ganga-scavenger": {
        title: "Ganga Scavenger Dashboard",
        description: "An administrative and monitoring dashboard with glassmorphism UI to track live sensor data, deploy cleaning assets, and visualize river purity metrics in real-time.",
        stack: ["Next.js", "TypeScript", "Framer Motion", "Recharts"],
        image: "https://images.unsplash.com/photo-1620021676839-4d6d7bb5f7f0?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
    },
    "eye-mouse-control": {
        title: "Eye Mouse Control",
        description: "An accessibility-focused application utilizing computer vision to track gaze and map it directly to OS cursor commands, enabling hands-free computer operation.",
        stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
        image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2000&auto=format&fit=crop",
        year: "2023",
    }
};

export default function CaseStudyPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = caseStudies[slug];

    if (!project) return <div className="min-h-screen flex text-white items-center justify-center text-2xl">Project Not Found.</div>;

    return (
        <div className="w-full min-h-screen pb-40">
            {/* Hero Image Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[60vh] md:h-[80vh] relative"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                <div className="absolute top-12 left-6 md:left-24 z-50">
                    <Link href="/work" className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 text-white hover:bg-white/10 transition">
                        <ArrowLeft size={16} />
                        <span>Back to Work</span>
                    </Link>
                </div>

                <div className="absolute bottom-12 left-6 md:left-24 right-6 md:right-24 z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap gap-4 text-gray-300 font-mono text-sm"
                    >
                        <span className="glass px-4 py-2 rounded-full">Date: {project.year}</span>
                        <span className="glass px-4 py-2 rounded-full">Role: Frontend Development</span>
                        <div className="flex gap-2">
                            <a href="#" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-none"><Github size={18} /></a>
                            <a href="#" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-none"><ExternalLink size={18} /></a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Overview</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-16">
                        {project.description}
                    </p>

                    <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">Technology Stack</h2>
                    <div className="flex flex-wrap gap-4 mb-24">
                        {project.stack.map((tech: string) => (
                            <span key={tech} className="border border-white/20 px-6 py-3 rounded-full text-white text-lg hover:bg-white/5 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Add more sections for deeper case studies (Problems, Solutions, Results) in the future. */}
                    <div className="w-full h-px bg-white/10 my-24" />

                    <div className="text-center">
                        <h3 className="text-2xl text-white mb-6">Need a digital partner?</h3>
                        <Link href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                            Let's Talk
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
