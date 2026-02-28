"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, Volume2, VolumeX, X, ChevronUp } from "lucide-react";

const tracks = [
    { title: "Lo-Fi Study", artist: "ChillHop", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Analog Warmth", artist: "LoFi Girl", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
    { title: "Rainy Day", artist: "Chillwave", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
];

export default function MusicPlayer() {
    const [open, setOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.4);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(tracks[trackIndex].url);
            audioRef.current.volume = volume;
            audioRef.current.loop = false;
        }
        return () => { audioRef.current?.pause(); };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const update = () => setProgress(audio.currentTime / (audio.duration || 1));
        const ended = () => { const next = (trackIndex + 1) % tracks.length; setTrackIndex(next); };
        audio.addEventListener("timeupdate", update);
        audio.addEventListener("ended", ended);
        return () => { audio.removeEventListener("timeupdate", update); audio.removeEventListener("ended", ended); };
    }, [trackIndex]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.src = tracks[trackIndex].url;
        audio.volume = volume;
        if (playing) audio.play().catch(() => { });
    }, [trackIndex]);

    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.muted = muted;
    }, [muted]);

    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.volume = volume;
    }, [volume]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (playing) { audio.pause(); setPlaying(false); }
        else { audio.play().then(() => setPlaying(true)).catch(() => { }); }
    };

    const track = tracks[trackIndex];

    return (
        <div className="fixed bottom-52 right-6 z-50">
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="mb-2 glass rounded-2xl p-4 w-56 border border-white/10"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-white text-xs font-semibold truncate">{track.title}</span>
                            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white cursor-none"><X size={14} /></button>
                        </div>
                        <p className="text-gray-500 text-xs mb-3">{track.artist}</p>

                        {/* Progress bar */}
                        <div className="w-full h-1 bg-white/10 rounded-full mb-3 cursor-pointer" onClick={e => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const pct = (e.clientX - rect.left) / rect.width;
                            if (audioRef.current) audioRef.current.currentTime = pct * (audioRef.current.duration || 0);
                        }}>
                            <div className="h-1 bg-amber-400 rounded-full transition-all" style={{ width: `${progress * 100}%` }} />
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between">
                            <button onClick={() => setTrackIndex(i => (i - 1 + tracks.length) % tracks.length)} className="text-gray-400 hover:text-white cursor-none text-xs font-mono">Prev</button>
                            <button onClick={togglePlay} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white cursor-none">
                                {playing ? <Pause size={15} /> : <Play size={15} />}
                            </button>
                            <button onClick={() => setTrackIndex(i => (i + 1) % tracks.length)} className="text-gray-400 hover:text-white cursor-none text-xs font-mono">Next</button>
                        </div>

                        {/* Volume */}
                        <div className="flex items-center gap-2 mt-3">
                            <button onClick={() => setMuted(m => !m)} className="text-gray-400 hover:text-white cursor-none">
                                {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                            </button>
                            <input type="range" min={0} max={1} step={0.05} value={muted ? 0 : volume} onChange={e => { setVolume(Number(e.target.value)); setMuted(false); }}
                                className="flex-1 h-1 accent-amber-400 cursor-none" />
                        </div>

                        <div className="flex gap-1 mt-3 justify-center">
                            {tracks.map((_, i) => (
                                <button key={i} onClick={() => setTrackIndex(i)} className={`w-1.5 h-1.5 rounded-full cursor-none transition-colors ${i === trackIndex ? "bg-amber-400" : "bg-white/20"}`} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setOpen(o => !o)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 glass rounded-full flex items-center justify-center cursor-none hover:bg-white/10 transition-colors relative ${playing ? "border border-amber-400/40" : ""}`}
            >
                <motion.div animate={playing ? { rotate: 360 } : { rotate: 0 }} transition={playing ? { repeat: Infinity, duration: 3, ease: "linear" } : {}}>
                    <Music size={16} className={playing ? "text-amber-400" : "text-gray-400"} />
                </motion.div>
                {playing && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
            </motion.button>
        </div>
    );
}
