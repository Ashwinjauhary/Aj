"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Clock, User } from "lucide-react";

const caseStudies: Record<string, any> = {
    "ai-crime-predictor": {
        title: "AI Crime Pattern Predictor",
        tag: "ML + Python + React",
        role: "Full-Stack Dev",
        duration: "1 month",
        status: "Complete",
        description: "A comprehensive AI-powered system that analyzes historical crime data to predict hotspots, classify risk levels, and provide actionable intelligence via a full-stack dashboard.",
        problem: "Law enforcement lacks predictive tools to anticipate crime hotspots before they occur, leading to reactive rather than proactive policing.",
        solution: "Machine learning model trained on historical crime data with geospatial clustering (DBSCAN) and time-series patterns. REST API built with FastAPI, React frontend with an interactive heatmap visualization.",
        result: "Achieved 78% accuracy on test data. Demonstrated at college tech fest. Judges highlighted the real-world applicability for smart city initiatives.",
        stack: ["React", "Python", "FastAPI", "TensorFlow", "Tailwind CSS", "Leaflet.js", "Pandas"],
        highlights: [
            "DBSCAN clustering for hotspot detection",
            "Time-of-day and day-of-week weighting",
            "Interactive heatmap with zoom and filter controls",
            "FastAPI REST endpoint for real-time predictions",
            "78% accuracy on historical crime dataset",
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
        links: { github: "https://github.com/", live: "" },
    },
    "ganga-scavenger": {
        title: "Ganga Scavenger Dashboard",
        tag: "AI + IoT + WebRTC + PWA",
        role: "Frontend Engineer",
        duration: "3 months",
        status: "Live",
        description: "Real-time autonomous river-cleaning robot mission control. Live telemetry, video feed, GPS map, and AI debris detection dashboard with PWA offline support.",
        problem: "The Ganga river faces severe pollution from plastic debris. Manual cleanup boats are slow. We needed an AI-assisted autonomous system with real-time monitoring.",
        solution: "Full-stack mission control dashboard communicating with an Arduino-based boat via Node.js backend. Features real-time telemetry, WebRTC video, GPS route visualization, and debris detection.",
        result: "Successfully demonstrated at college hackathon. Boat autonomously navigated 50m, collected test debris, streamed live data with <200ms latency.",
        stack: ["React", "Vite", "Tailwind CSS", "Node.js", "WebSocket", "WebRTC", "Leaflet.js", "Arduino C++", "PWA"],
        highlights: [
            "Real-time telemetry via WebSocket (GPS, battery, turbidity)",
            "Live video stream with WebRTC — no external service",
            "Interactive Leaflet.js map with GPS tracks",
            "Emergency SCRAM command",
            "PWA — installable offline-capable dashboard",
        ],
        image: "https://images.unsplash.com/photo-1620021676839-4d6d7bb5f7f0?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
        links: { github: "https://github.com/Ashwinjauhary/Ganga-Scavenger", live: "" },
    },
    "eye-mouse-control": {
        title: "Eye Mouse Control",
        tag: "Python + OpenCV + MediaPipe",
        role: "Systems Dev",
        duration: "2 weeks",
        status: "Complete",
        description: "Hands-free computer control using eye gaze tracking with MediaPipe face mesh. Enables people with motor disabilities to operate a computer using only their eyes.",
        problem: "People with motor disabilities cannot use a traditional mouse or keyboard, severely limiting their access to computers and digital services.",
        solution: "Computer vision pipeline using MediaPipe Face Mesh to detect 68 facial landmarks in real time. Gaze direction mapped to screen coordinates. Blink detection triggers click events. Runs at 30 FPS.",
        result: "Successfully demoed to 20+ people. Users with no hands controlled cursor and performed clicks within 30 seconds of starting.",
        stack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
        highlights: [
            "68-landmark facial mesh at 30 FPS",
            "Gaze-to-screen coordinate mapping with calibration",
            "Blink-as-click detection with debounce",
            "Works on any webcam — no special hardware",
            "Latency under 100ms",
        ],
        image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2000&auto=format&fit=crop",
        year: "2023",
        links: { github: "https://github.com/", live: "" },
    },
    "network-sniffer": {
        title: "Network Threat Detector",
        tag: "Python + Scapy + Security",
        role: "Systems Dev",
        duration: "1 month",
        status: "Complete",
        description: "Real-time network packet sniffer with threat detection engine, rich terminal dashboard, and alerting for port scans, ARP spoofing, and DDoS patterns.",
        problem: "Small businesses and developers lack affordable tools for monitoring local networks for threats like ARP spoofing, port scans, or DDoS attacks.",
        solution: "Real-time packet sniffer using Scapy that classifies packets and flags suspicious patterns. Rich TUI dashboard with live packet counts, threat alerts, and protocol breakdowns.",
        result: "Successfully detected simulated ARP spoofing and SYN flood in a controlled lab. Presented as a security awareness tool at college.",
        stack: ["Python", "Scapy", "Rich", "Threading", "Socket"],
        highlights: [
            "Real-time packet capture and protocol analysis",
            "ARP spoofing detection via MAC-IP table diff",
            "Port scan detection via SYN packet frequency",
            "Color-coded threat severity in terminal UI",
            "Threaded capture for non-blocking TUI",
        ],
        image: "https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=2127&auto=format&fit=crop",
        year: "2024",
        links: { github: "https://github.com/", live: "" },
    },
    "portfolio-3d": {
        title: "3D Portfolio v1",
        tag: "Three.js + R3F + GSAP",
        role: "Creative Dev",
        duration: "3 weeks",
        status: "Live",
        description: "Immersive 3D portfolio with WebGL, post-processing, scroll-driven animations, and a custom particle galaxy background.",
        problem: "Most developer portfolios look identical — plain white cards, no personality. I wanted mine to be unforgettable.",
        solution: "Full WebGL experience built with React Three Fiber. Floating 3D geometry reacts to mouse. GSAP powers scroll-triggered section reveals. Post-processing adds cinematic feel.",
        result: "Received positive reactions on social media. Several recruiters reached out specifically mentioning the portfolio's uniqueness.",
        stack: ["Next.js", "Three.js", "React Three Fiber", "Drei", "GSAP", "Framer Motion", "Tailwind CSS"],
        highlights: [
            "Interactive 3D particle galaxy that follows mouse",
            "GSAP scroll-driven section animations",
            "Post-processing: bloom, chromatic aberration",
            "Custom R3F components for floating geometry",
            "Smooth Lenis scroll integration",
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
        links: { github: "https://github.com/Ashwinjauhary/Vansh-Portfolio", live: "https://vanshagnihotri.vercel.app" },
    },
    "clubsphere": {
        title: "ClubSphere",
        tag: "React Native + Supabase + AI",
        role: "Full-Stack Dev",
        duration: "2 months",
        status: "Live · Amazon AppStore",
        description: "College club management app with AI quiz generation, daily notifications, event tracking, and role-based access.",
        problem: "College clubs struggle to manage members, events, and communication across WhatsApp, email chains, and paper. No unified platform exists for campus clubs.",
        solution: "Cross-platform mobile app with Supabase backend. Features role-based access, AI-generated daily quizzes via Gemini API, event management, and push notification cron jobs.",
        result: "Published to Amazon AppStore. 50+ installs. AI quiz feature sees daily engagement with auto-generated questions from BCA syllabus.",
        stack: ["React Native", "Expo", "Supabase", "Gemini AI", "Edge Functions", "Deno"],
        highlights: [
            "AI daily quiz generation via Gemini Edge Function",
            "Role-based access control (admin/member/guest)",
            "Push notifications via Supabase cron + Expo",
            "Amazon AppStore published",
            "Offline caching with Supabase realtime sync",
        ],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
        links: { github: "https://github.com/", live: "" },
    },
};

export default function CaseStudyPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = caseStudies[slug];

    if (!project) return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-white">
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
                <div className="absolute top-8 left-6 md:left-24 z-10">
                    <Link href="/work" className="glass px-4 py-2 rounded-full inline-flex items-center gap-2 text-white hover:bg-white/10 transition cursor-none text-sm">
                        <ArrowLeft size={14} /> Back to Work
                    </Link>
                </div>
                <div className="absolute bottom-10 left-6 md:left-24 right-6 md:right-24 z-10">
                    <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass px-3 py-1 rounded-full text-amber-400 font-mono text-xs mb-4 inline-block">{project.tag}</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-5">{project.title}</motion.h1>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap items-center gap-3">
                        <span className="glass px-3 py-1 rounded-full text-gray-300 text-xs font-mono flex items-center gap-1.5"><User size={11} />{project.role}</span>
                        <span className="glass px-3 py-1 rounded-full text-gray-300 text-xs font-mono flex items-center gap-1.5"><Clock size={11} />{project.duration}</span>
                        <span className="glass px-3 py-1 rounded-full text-green-400 text-xs font-mono flex items-center gap-1.5"><CheckCircle size={11} />{project.status}</span>
                        {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer" className="glass w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-none"><Github size={14} /></a>}
                        {project.links.live && <a href={project.links.live} target="_blank" rel="noreferrer" className="glass w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-none"><ExternalLink size={14} /></a>}
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
                        <p className="text-xl text-gray-300 leading-relaxed mt-4">{s.content}</p>
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
