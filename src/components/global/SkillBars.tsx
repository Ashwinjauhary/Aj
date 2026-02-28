"use client";

import { motion } from "framer-motion";



const skills = [
    { name: "React / Next.js", pct: 88, color: "#60a5fa" },
    { name: "TypeScript", pct: 80, color: "#a78bfa" },
    { name: "Tailwind CSS", pct: 92, color: "#34d399" },
    { name: "Three.js / R3F", pct: 72, color: "#f59e0b" },
    { name: "Framer Motion / GSAP", pct: 83, color: "#f472b6" },
    { name: "Python / FastAPI", pct: 75, color: "#fb923c" },
    { name: "OpenCV / MediaPipe", pct: 70, color: "#e879f9" },
    { name: "Node.js / Supabase", pct: 74, color: "#2dd4bf" },
    { name: "React Native / Expo", pct: 68, color: "#facc15" },
    { name: "Git / CI-CD", pct: 82, color: "#94a3b8" },
];

export default function SkillBars() {
    return (
        <div className="space-y-4">
            {skills.map((skill, i) => (
                <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-xs font-mono text-gray-500">{skill.pct}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: skill.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.pct}%` }}
                            transition={{ duration: 1.2, delay: i * 0.07, ease: [0.33, 1, 0.68, 1] }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
