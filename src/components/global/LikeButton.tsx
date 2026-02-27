"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface LikeButtonProps {
    slug: string;
    baseCount?: number;
}

export default function LikeButton({ slug, baseCount = 42 }: LikeButtonProps) {
    const key = `like_${slug}`;
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(baseCount);
    const [burst, setBurst] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(key);
        if (stored) { setLiked(true); setCount(baseCount + 1); }
    }, [key, baseCount]);

    const toggle = () => {
        if (liked) {
            localStorage.removeItem(key);
            setLiked(false);
            setCount(c => c - 1);
        } else {
            localStorage.setItem(key, "1");
            setLiked(true);
            setCount(c => c + 1);
            setBurst(true);
            setTimeout(() => setBurst(false), 600);
        }
    };

    return (
        <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.85 }}
            className="relative mt-4 flex items-center gap-2 glass px-4 py-2 rounded-full text-sm cursor-none hover:bg-white/5 transition-colors"
        >
            <motion.div animate={burst ? { scale: [1, 1.5, 1] } : {}}>
                <Heart size={15} className={liked ? "fill-red-500 text-red-500" : "text-gray-400"} />
            </motion.div>
            <span className={liked ? "text-red-400" : "text-gray-400"}>{count}</span>

            {burst && (
                <motion.span
                    initial={{ opacity: 1, y: 0, x: "-50%" }}
                    animate={{ opacity: 0, y: -20 }}
                    className="absolute -top-4 left-1/2 text-red-400 text-xs pointer-events-none"
                >
                    +1 ❤️
                </motion.span>
            )}
        </motion.button>
    );
}
