"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubStats {
    public_repos: number;
    followers: number;
    following: number;
    name: string;
    login: string;
    bio: string;
}

export default function GitHubStats({ username = "Ashwinjauhary" }: { username?: string }) {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(r => r.json())
            .then(d => { setStats(d); setLoading(false); })
            .catch(() => setLoading(false));
    }, [username]);

    const items = stats
        ? [
            { label: "Repos", value: stats.public_repos },
            { label: "Followers", value: stats.followers },
            { label: "Following", value: stats.following },
        ]
        : [
            { label: "Repos", value: "—" },
            { label: "Followers", value: "—" },
            { label: "Following", value: "—" },
        ];

    return (
        <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5 flex items-center gap-5 hover:bg-white/5 transition-colors cursor-none border border-white/10 group"
        >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-lg shrink-0">
                G
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">@{username}</span>
                    {loading && <span className="text-gray-500 text-xs font-mono">loading...</span>}
                </div>
                <div className="flex gap-4">
                    {items.map(i => (
                        <div key={i.label} className="text-center">
                            <div className="text-white font-bold text-sm">{i.value}</div>
                            <div className="text-gray-500 text-xs">{i.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            <span className="text-gray-500 group-hover:text-white transition-colors text-xs">View →</span>
        </motion.a>
    );
}
