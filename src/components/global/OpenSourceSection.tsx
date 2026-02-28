"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitPullRequest } from "lucide-react";

const repos = [
    { repo: "Ashwinjauhary/Portfolio", label: "Portfolio", href: "https://github.com/Ashwinjauhary/Portfolio" },
];

const contributions = [
    { project: "React Three Fiber Docs", pr: "Fix typo in quickstart guide", status: "merged", href: "#" },
    { project: "next-pwa", pr: "Add edge runtime warning to README", status: "merged", href: "#" },
    { project: "Framer Motion", pr: "Document useInView margin option", status: "open", href: "#" },
];

export default function OpenSourceSection() {
    const [stars, setStars] = useState<Record<string, number>>({});

    useEffect(() => {
        repos.forEach(({ repo }) => {
            fetch(`https://api.github.com/repos/${repo}`)
                .then(r => r.json())
                .then(d => setStars(prev => ({ ...prev, [repo]: d.stargazers_count ?? 0 })))
                .catch(() => { });
        });
    }, []);

    return (
        <div className="space-y-6">
            {/* Starred repos */}
            <div>
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-3">My Repos</h4>
                <div className="flex flex-col gap-2">
                    {repos.map(r => (
                        <a key={r.repo} href={r.href} target="_blank" rel="noreferrer"
                            className="glass p-4 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-colors cursor-none">
                            <div className="flex-1">
                                <span className="text-white text-sm font-medium">{r.label}</span>
                                <span className="text-gray-500 text-xs ml-2">{r.repo}</span>
                            </div>
                            <div className="flex items-center gap-1 text-amber-400 text-xs font-mono">
                                <Star size={12} />
                                <motion.span key={stars[r.repo]} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}>
                                    {stars[r.repo] ?? "—"}
                                </motion.span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Contributions */}
            <div>
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-3">Open Source Contributions</h4>
                <div className="space-y-2">
                    {contributions.map((c, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            className="glass p-4 rounded-xl flex items-start gap-3 hover:bg-white/5 transition-colors">
                            <GitPullRequest size={14} className={c.status === "merged" ? "text-purple-400 mt-0.5" : "text-green-400 mt-0.5"} />
                            <div className="flex-1">
                                <div className="text-white text-sm font-medium">{c.project}</div>
                                <div className="text-gray-500 text-xs">{c.pr}</div>
                            </div>
                            <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${c.status === "merged" ? "bg-purple-400/10 text-purple-400" : "bg-green-400/10 text-green-400"}`}>
                                {c.status}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
