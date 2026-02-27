"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light") { setDark(false); document.documentElement.classList.remove("dark"); }
    }, []);

    const toggle = () => {
        setDark(d => {
            const next = !d;
            if (next) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
            return next;
        });
    };

    return (
        <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-28 right-6 z-50 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-none"
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <motion.div
                key={dark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {dark ? <Moon size={16} className="text-blue-300" /> : <Sun size={16} className="text-amber-400" />}
            </motion.div>
        </motion.button>
    );
}
