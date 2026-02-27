"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, FolderGit2, Compass, Mail } from "lucide-react";

export default function FloatingDock() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: <Home size={20} /> },
        { name: "Work", href: "/work", icon: <FolderGit2 size={20} /> },
        { name: "Journey", href: "/journey", icon: <Compass size={20} /> },
        { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="glass rounded-full p-2 flex items-center gap-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link key={item.name} href={item.href} className="relative group">
                            <span className="sr-only">{item.name}</span>
                            <div
                                className={`relative px-4 py-3 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="dock-indicator"
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 group-hover:scale-110 transition-transform duration-200 block">
                                    {item.icon}
                                </span>

                                {/* Tooltip on Hover */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                    <div className="glass px-3 py-1 text-xs text-white rounded-md">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
