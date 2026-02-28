"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, User, Github, ExternalLink } from "lucide-react";

// Helper to quickly pad out new projects
const baseProject = (title: string, tag: string, role: string, year: string, desc: string, image: string, stack: string[]) => ({
    title, tag, role, duration: "1-2 months", status: "Complete",
    description: desc,
    problem: `Building ${title} required solving complex architectural and UI/UX challenges to deliver a seamless, performant experience.`,
    solution: `Architected the application using modern frameworks, prioritizing scalable design, responsive interfaces, and optimized data flow.`,
    result: `Successfully built and deployed. Received positive feedback for the intuitive interface and robust performance.`,
    stack,
    highlights: [
        "Modern aesthetic and responsive design",
        "Optimized state management and performance",
        "Clean, maintainable codebase architecture",
        "Seamless cross-device compatibility",
    ],
    image, year,
    links: { github: "https://github.com/Ashwinjauhary", live: "#" },
});

const caseStudies: Record<string, ReturnType<typeof baseProject>> = {
    "clubsphere": {
        ...baseProject("ClubSphere", "React.js + Supabase", "Full-Stack Dev", "2024", "Full-stack role-based platform for managing college clubs and events with AI reports.", "/projects/clubsphere.png", ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API"]),
        problem: "College clubs struggle to manage members, events, and communication across scattered platforms. No unified platform exists for campus clubs.",
        solution: "Cross-platform application with Supabase backend. Features role-based access, AI-generated reports via Gemini API, and event management.",
        highlights: [
            "AI daily quiz and report generation via Gemini",
            "Role-based access control (admin/member/guest)",
            "Real-time event tracking and notifications",
        ]
    },
    "solarflow-viz": baseProject("SolarFlow Viz", "3D Frontend", "Frontend Dev", "2024", "Interactive 3D visualization platform for solar energy workflow.", "/projects/solarflow.png", ["React.js", "Three.js", "React Three Fiber", "Tailwind CSS"]),
    "studify-os": baseProject("Studify-OS", "React + Supabase", "Frontend Dev", "2023", "OS-style student workspace for collaboration.", "/projects/studify.png", ["React.js", "Vite", "Tailwind CSS", "Supabase"]),
    "codester-club": baseProject("Codester-Club", "Community Platform", "Full-Stack Dev", "2024", "Community platform for college clubs with social features.", "/projects/codester.png", ["React.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"]),
    "notely": baseProject("Notely", "Mobile App", "Mobile Dev", "2023", "Cross-platform notes app focused on productivity.", "/projects/notely.png", ["Flutter", "Dart", "Material Design 3"]),
    "hi-tech-portfolio": baseProject("Hi-Tech Portfolio Website", "Frontend", "Frontend Dev", "2024", "Modern animated portfolio showcasing projects.", "/projects/hitech.png", ["React.js", "Vite", "Tailwind CSS", "Framer Motion"]),
    "catalyst-crew": baseProject("Catalyst Crew", "Company Website", "Frontend Dev", "2024", "Official website for Catalyst Crew highlighting services.", "/projects/catalyst.png", ["React.js", "TypeScript", "Tailwind CSS", "Vite"]),
    "invoicyy": baseProject("Invoicyy", "Python + DB", "Python Dev", "2024", "GST-compliant billing system for Indian businesses.", "/projects/invoicyy.png", ["Python", "Streamlit", "SQLite", "ReportLab"]),
    "taskflow": {
        ...baseProject("TaskFlow", "Full-Stack", "Full-Stack Dev", "2024", "Advanced Kanban Board with TypeScript.", "/projects/taskflow.png", ["TypeScript", "React.js", "Tailwind CSS", "Node.js", "Express.js"]),
        problem: "Managing complex project workflows requires intuitive, drag-and-drop interfaces that remain performant with large datasets.",
        solution: "Built a custom Kanban engine with advanced state management to ensure smooth 60fps drag interactions while syncing to a backend.",
    },
    "ajverse-todo": baseProject("AJ Verse: To-Do", "MERN Stack", "Full-Stack Dev", "2023", "A full-stack productivity app with JWT auth.", "/projects/todo.png", ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]),
    "ajverse-piano": baseProject("AJVerse: Piano", "Web Audio API", "Frontend Dev", "2023", "Responsive 88-key piano app with real-time synthesis.", "/projects/piano.png", ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API"]),
    "ajverse-synaptic": baseProject("AJVerse: SynapTic", "AI Game", "Frontend Dev", "2023", "Intelligent AI-powered Tic Tac Toe with sleek UI.", "/projects/synaptic.png", ["React.js", "TypeScript", "Tailwind CSS", "AI"]),
    "quicktools-hub": baseProject("QuickTools Hub", "Frontend Utilities", "Frontend Dev", "2023", "Collection of fast web utilities.", "/projects/quicktools.png", ["React.js", "TypeScript", "Vite", "Tailwind CSS"]),
    "happy-diwali": baseProject("Happy Diwali ✨️", "Creative Web", "Frontend Dev", "2023", "Interactive festival web app with animations.", "/projects/diwali.png", ["HTML5", "CSS3", "JavaScript", "PWA"]),
};

export default function CaseStudyPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = caseStudies[slug];

    if (!project) return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-white pt-20">
            <h1 className="text-4xl font-bold">Project not found</h1>
            <Link href="/work" className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition cursor-none">
                <ArrowLeft size={16} /> Back to Work
            </Link>
        </div>
    );

    return (
        <div className="w-full min-h-screen pb-40">
            {/* Hero */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative w-full h-[60vh] md:h-[75vh]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-[#050505]/20" />
                <div className="absolute top-8 left-6 md:left-24 z-10 pt-20">
                    <Link href="/work" className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 text-white hover:bg-white/10 transition cursor-none text-sm">
                        <ArrowLeft size={14} /> Back to Work
                    </Link>
                </div>
                <div className="absolute bottom-10 left-6 md:left-24 right-6 md:right-24 z-10">
                    <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass px-3 py-1 rounded-full text-amber-400 font-mono text-xs mb-4 inline-block">{project.tag}</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-3xl md:text-7xl font-extrabold tracking-tight text-white mb-5">{project.title}</motion.h1>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap items-center gap-3">
                        <span className="glass px-3 py-1 rounded-full text-gray-300 text-xs font-mono flex items-center gap-1.5"><User size={11} />{project.role}</span>
                        <span className="glass px-3 py-1 rounded-full text-gray-300 text-xs font-mono flex items-center gap-1.5"><Clock size={11} />{project.duration}</span>
                        <span className="glass px-3 py-1 rounded-full text-green-400 text-xs font-mono flex items-center gap-1.5"><CheckCircle size={11} />{project.status}</span>
                        {project.links?.github && project.links.github !== "#" && <a href={project.links.github} target="_blank" rel="noreferrer" className="glass w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-none"><Github size={14} /></a>}
                        {project.links?.live && project.links.live !== "#" && <a href={project.links.live} target="_blank" rel="noreferrer" className="glass w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-none"><ExternalLink size={14} /></a>}
                    </motion.div>
                </div>
            </motion.div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 mt-20 space-y-20">
                {[
                    { label: "01 — The Problem", color: "text-red-400", content: project.problem },
                    { label: "02 — The Solution", color: "text-blue-400", content: project.solution },
                    { label: "03 — The Result", color: "text-green-400", content: project.result },
                ].map((s, i) => (
                    <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                        <span className={`font-mono text-xs tracking-widest uppercase ${s.color}`}>{s.label}</span>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">{s.content}</p>
                    </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <span className="font-mono text-xs tracking-widest uppercase text-amber-400">Key Features</span>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.highlights.map((h: string, i: number) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="glass p-4 rounded-xl flex items-start gap-3">
                                <CheckCircle size={16} className="text-green-400 mt-0.5 shrink-0" />
                                <span className="text-gray-300 text-sm leading-relaxed">{h}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <span className="font-mono text-xs tracking-widest uppercase text-purple-400">Tech Stack</span>
                    <div className="flex flex-wrap gap-3 mt-6">
                        {project.stack.map((tech: string) => (
                            <motion.span key={tech} whileHover={{ scale: 1.05, y: -2 }} className="glass border border-white/10 px-5 py-2.5 rounded-full text-white text-sm cursor-none hover:border-white/30 transition-colors">{tech}</motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-10 text-center border border-white/10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Want to build something like this?</h3>
                    <p className="text-gray-400 mb-8">Available for freelance, collaborations, and internships.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-none">Hire Me</Link>
                </motion.div>
            </div>
        </div>
    );
}
