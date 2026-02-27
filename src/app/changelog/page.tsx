"use client";

import { motion } from "framer-motion";

const changelog = [
    {
        version: "v2.0.0",
        date: "Feb 27, 2025",
        type: "major",
        changes: [
            "Complete redesign — Glass Universe aesthetic with dark mode",
            "Added 3D WebGL particle background using React Three Fiber",
            "Custom cursor with magnetic effect and cursor trail",
            "Scroll-progress bar across all pages",
            "Page transitions with Framer Motion",
            "PWA support — installable with offline caching via service worker",
            "Dynamic OG image generation via Edge API",
            "Full SEO: metadata, sitemap, robots.txt, structured data",
        ],
    },
    {
        version: "v1.5.0",
        date: "Jan 2025",
        type: "feature",
        changes: [
            "Added /work/[slug] case study pages for all 6 projects",
            "Project filtering by tech tag on /work",
            "Skills marquee animation on home page",
            "Hackathon trophy cabinet on /journey",
            "Certifications section on /journey",
            "Currently Learning section",
        ],
    },
    {
        version: "v1.2.0",
        date: "Dec 2024",
        type: "feature",
        changes: [
            "Added /about page with fun facts and philosophy",
            "/uses page with full tool stack",
            "/now page — current focus areas",
            "/playground with 3 interactive demos",
            "/terminal — VanshOS 3.0 fake OS",
            "/blog with 5 posts and newsletter CTA",
            "Like button system with localStorage",
        ],
    },
    {
        version: "v1.0.0",
        date: "Nov 2024",
        type: "initial",
        changes: [
            "Initial portfolio launch",
            "Home, Work, Journey, Contact pages",
            "Smooth scroll with Lenis",
            "FloatingDock navigation",
            "Background3D scene",
            "Custom cursor component",
        ],
    },
];

const typeColor: Record<string, string> = {
    major: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    feature: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    initial: "text-green-400 bg-green-400/10 border-green-400/30",
};

export default function ChangelogPage() {
    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
                <span className="font-mono text-sm text-gray-500 tracking-widest uppercase">History</span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mt-4 mb-4">Changelog</h1>
                <p className="text-gray-400 text-lg mb-20 max-w-2xl">
                    Every version of this portfolio, documented. Building in public — improvements logged here.
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

                    <div className="flex flex-col gap-12">
                        {changelog.map((entry, i) => (
                            <motion.div
                                key={entry.version}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="pl-14 relative"
                            >
                                {/* Dot */}
                                <div className="absolute left-[19px] top-1 w-3 h-3 rounded-full bg-white/20 border-2 border-white/40" />

                                <div className="flex items-center gap-3 mb-4 flex-wrap">
                                    <h2 className="text-2xl font-bold text-white font-mono">{entry.version}</h2>
                                    <span className={`px-2 py-0.5 rounded text-xs font-mono border ${typeColor[entry.type]}`}>{entry.type}</span>
                                    <span className="text-gray-500 text-xs font-mono">{entry.date}</span>
                                </div>

                                <ul className="space-y-2">
                                    {entry.changes.map((c, ci) => (
                                        <motion.li
                                            key={ci}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: ci * 0.05 }}
                                            className="flex items-start gap-2 text-gray-300 text-sm"
                                        >
                                            <span className="text-green-400 mt-0.5 shrink-0">+</span>
                                            {c}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
