"use client";

import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
    title: string;
    text?: string;
    url?: string;
}

export default function ShareButton({ title, text, url }: ShareButtonProps) {
    const [shared, setShared] = useState(false);

    const share = async () => {
        const shareData = {
            title,
            text: text ?? title,
            url: url ?? (typeof window !== "undefined" ? window.location.href : ""),
        };

        if (navigator.share && navigator.canShare?.(shareData)) {
            try {
                await navigator.share(shareData);
                setShared(true);
                setTimeout(() => setShared(false), 2000);
            } catch { }
        } else {
            // Fallback: copy to clipboard
            await navigator.clipboard.writeText(shareData.url);
            setShared(true);
            setTimeout(() => setShared(false), 2000);
        }
    };

    return (
        <motion.button
            onClick={share}
            whileTap={{ scale: 0.9 }}
            className="glass px-3 py-2 rounded-full flex items-center gap-2 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-none"
        >
            <Share2 size={13} />
            {shared ? "Copied! ✓" : "Share"}
        </motion.button>
    );
}
