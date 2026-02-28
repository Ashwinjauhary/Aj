"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [light, setLight] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "light" && !light) {
            setLight(true);
            document.documentElement.classList.add("light");
        }
    }, [light]);

    const toggle = () => {
        setLight(prev => {
            const next = !prev;
            if (next) {
                document.documentElement.classList.add("light");
                localStorage.setItem("theme", "light");
            } else {
                document.documentElement.classList.remove("light");
                localStorage.setItem("theme", "dark");
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
            title={light ? "Switch to dark mode" : "Switch to light mode"}
        >
            <motion.div
                key={light ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {light ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-blue-300" />}
            </motion.div>
        </motion.button>
    );
}
