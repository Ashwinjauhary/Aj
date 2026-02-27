"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const posts = [
    {
        slug: "building-ganga-scavenger",
        title: "How I Built an Autonomous River-Cleaning Robot Dashboard",
        date: "Feb 2025",
        readTime: "8 min",
        tag: "IoT · WebRTC · PWA",
        excerpt: "From zero to live telemetry: the story of building a real-time mission control dashboard for an Arduino-based autonomous boat with WebSocket, WebRTC video, and GPS mapping.",
        emoji: "🚤",
        baseCount: 47,
    },
    {
        slug: "framer-motion-secrets",
        title: "10 Framer Motion Tricks That Made My Portfolio Go Viral",
        date: "Jan 2025",
        readTime: "5 min",
        tag: "Animation · React",
        excerpt: "The specific animation patterns that got the most attention — from magnetic buttons to page transitions, scroll-driven reveals, and smooth cursor interactions.",
        emoji: "✨",
        baseCount: 63,
    },
    {
        slug: "nextjs-pwa-guide",
        title: "Making Your Next.js App Installable — The Right Way",
        date: "Dec 2024",
        readTime: "6 min",
        tag: "Next.js · PWA · Service Worker",
        excerpt: "A practical guide to PWA setup in Next.js 14+ without the headaches: manifest, service worker, offline support, and iOS quirks — all explained clearly.",
        emoji: "📱",
        baseCount: 38,
    },
    {
        slug: "python-eye-tracking",
        title: "Building a Hands-Free Computer With Just a Webcam",
        date: "Nov 2024",
        readTime: "10 min",
        tag: "Python · OpenCV · MediaPipe",
        excerpt: "How I used MediaPipe Face Mesh and PyAutoGUI to map gaze direction to screen coordinates — enabling full mouse control by blinking, all running at 30 FPS on a laptop.",
        emoji: "👁️",
        baseCount: 91,
    },
    {
        slug: "bca-to-production",
        title: "From BCA Textbooks to Production Apps — My 2-Year Journey",
        date: "Oct 2024",
        readTime: "7 min",
        tag: "Career · Learning",
        excerpt: "Why I stopped following the syllabus and started shipping real projects. What worked, what failed, and what I'd tell my past self.",
        emoji: "🚀",
        baseCount: 124,
    },
];

const LikeButton = dynamic(() => import("@/components/global/LikeButton"), { ssr: false });
const ShareButton = dynamic(() => import("@/components/global/ShareButton"), { ssr: false });

export default function BlogPage() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    return (
        <div className="w-full min-h-screen px-6 md:px-24 pt-32 pb-40">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
                <span className="font-mono text-sm text-gray-500 tracking-widest uppercase">Writing</span>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mt-4 mb-4">Blog</h1>
                <p className="text-gray-400 text-lg mb-20 max-w-2xl">
                    Thoughts on building, learning, and shipping. Real projects, dev tips, and the journey of going from student to developer.
                </p>

                <div className="flex flex-col gap-6">
                    {posts.map((post, i) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all border border-white/5 hover:border-white/15"
                        >
                            <div className="flex items-start gap-5">
                                <span className="text-4xl hidden md:block">{post.emoji}</span>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                                        <span className="glass px-3 py-1 rounded-full text-xs text-amber-400 font-mono">{post.tag}</span>
                                        <span className="text-gray-500 text-xs font-mono">{post.date} · {post.readTime} read</span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <LikeButton slug={post.slug} baseCount={post.baseCount} />
                                        <ShareButton title={post.title} />
                                        <span className="text-white/30 text-xs font-mono ml-auto">Full post coming soon →</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 glass rounded-3xl p-10 text-center border border-white/10"
                >
                    {subscribed ? (
                        <div>
                            <div className="text-4xl mb-4">🎉</div>
                            <h2 className="text-2xl font-bold text-white mb-2">You're on the list!</h2>
                            <p className="text-gray-400">I'll let you know when I publish new articles.</p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-bold text-white mb-3">Get Notified When I Publish</h2>
                            <p className="text-gray-400 mb-8">No spam. 1-2 articles per month. Real dev content.</p>
                            <div className="flex gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition cursor-none"
                                />
                                <button
                                    onClick={() => { if (email.includes("@")) setSubscribed(true); }}
                                    className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors cursor-none shrink-0"
                                >
                                    Notify Me
                                </button>
                            </div>
                        </>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}
