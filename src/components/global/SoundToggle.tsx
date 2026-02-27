"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
    const [enabled, setEnabled] = useState(false);
    const audioCtx = useRef<AudioContext | null>(null);

    const playTick = () => {
        if (!enabled) return;
        if (!audioCtx.current) audioCtx.current = new AudioContext();
        const ctx = audioCtx.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800;
        osc.type = "sine";
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
    };

    useEffect(() => {
        if (!enabled) return;
        const handleClick = () => playTick();
        const handleHover = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            if (el.tagName === "A" || el.tagName === "BUTTON" || el.closest("a") || el.closest("button")) {
                playTick();
            }
        };
        document.addEventListener("click", handleClick);
        document.addEventListener("mouseover", handleHover);
        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("mouseover", handleHover);
        };
    }, [enabled]);

    return (
        <motion.button
            onClick={() => setEnabled(e => !e)}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-40 right-6 z-50 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-none"
            title={enabled ? "Mute sounds" : "Enable hover sounds"}
        >
            {enabled
                ? <Volume2 size={16} className="text-green-400" />
                : <VolumeX size={16} className="text-gray-500" />
            }
        </motion.button>
    );
}
