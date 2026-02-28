"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderGit2, Compass, Mail, User, BookOpen, Wrench, Clock, Terminal, List, ChevronUp } from "lucide-react";
import { useState } from "react";

const mainNav = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About", href: "/about", icon: <User size={18} /> },
    { name: "Skills", href: "/skills", icon: <Compass size={18} /> },
    { name: "Projects", href: "/work", icon: <FolderGit2 size={18} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={18} /> },
];

const moreNav = [
    { name: "Certifications", href: "/journey#certifications", icon: <BookOpen size={16} /> },
    { name: "Roadmap", href: "/journey#roadmap", icon: <Clock size={16} /> },
    { name: "Timeline", href: "/journey#timeline", icon: <List size={16} /> },
    { name: "Education", href: "/journey#education", icon: <Wrench size={16} /> },
    { name: "Terminal", href: "/terminal", icon: <Terminal size={16} /> },
];

export default function FloatingDock() {
    const pathname = usePathname();
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
            {/* More menu */}
            <AnimatePresence>
                {showMore && (
                    <motion.nav
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="glass rounded-2xl p-2 flex items-center gap-1 flex-wrap justify-center max-w-xs"
                    >
                        {moreNav.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link key={item.name} href={item.href} onClick={() => setShowMore(false)} className="relative group">
                                    <div className={`relative px-3 py-2 rounded-xl flex flex-col items-center gap-1 transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                        {isActive && <motion.div layoutId="more-indicator" className="absolute inset-0 bg-white/10 rounded-xl" />}
                                        <span className="relative z-10">{item.icon}</span>
                                        <span className="relative z-10 text-[10px] font-mono">{item.name}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Main dock */}
            <nav className="glass rounded-full p-1.5 md:p-2 flex items-center gap-0.5 md:gap-1">
                {mainNav.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href} className="relative group">
                            <span className="sr-only">{item.name}</span>
                            <div className={`relative px-2.5 md:px-3 py-2 md:py-2.5 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                {isActive && <motion.div layoutId="dock-indicator" className="absolute inset-0 bg-white/10 rounded-full" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                                <span className="relative z-10 group-hover:scale-110 transition-transform duration-200 block scale-90 md:scale-100">{item.icon}</span>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                    <div className="glass px-3 py-1 text-xs text-white rounded-md whitespace-nowrap">{item.name}</div>
                                </div>
                            </div>
                        </Link>
                    );
                })}

                {/* Divider */}
                <div className="w-px h-5 md:h-6 bg-white/10 mx-0.5 md:mx-1" />

                {/* More button */}
                <button onClick={() => setShowMore(v => !v)} className="relative group px-2.5 md:px-3 py-2 md:py-2.5 rounded-full text-gray-400 hover:text-white transition-colors cursor-none">
                    <motion.span animate={{ rotate: showMore ? 180 : 0 }} transition={{ duration: 0.2 }} className="block scale-90 md:scale-100">
                        <ChevronUp size={18} />
                    </motion.span>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="glass px-3 py-1 text-xs text-white rounded-md whitespace-nowrap">More</div>
                    </div>
                </button>
            </nav>
        </div>
    );
}
