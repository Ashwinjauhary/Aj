"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BOOT_SEQUENCE = [
    "AshwinOS v3.0 — Booting...",
    "Loading kernel modules...",
    "Mounting filesystem: OK",
    "Initializing network interfaces: OK",
    "Loading AI subsystems: OK",
    "Welcome to AshwinOS. Type 'help' to begin.",
];

const COMMANDS: Record<string, () => string[]> = {
    help: () => [
        "Available commands:",
        "  about      — Who is Ashwin?",
        "  skills     — View tech stack",
        "  projects   — List projects",
        "  contact    — Get contact info",
        "  blog       — Latest blog posts",
        "  hire       — How to work with me",
        "  joke       — Random dev joke",
        "  matrix     — Go deeper... 🟩",
        "  clear      — Clear terminal",
        "  exit       — Go back",
    ],
    about: () => [
        "Ashwin Jauhary",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "Location  : Kanpur, UP, India",
        "Education : BCA, 2nd Year",
        "Status    : Open for freelance & internships",
        "Superpower: Ships before the idea is 'ready'",
    ],
    skills: () => [
        "Tech Stack [████████░░] 80%",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "Frontend : React, Next.js, TypeScript, Tailwind",
        "3D/Anim  : Three.js, R3F, Framer Motion, GSAP",
        "Backend  : FastAPI, Node.js, Supabase",
        "AI/ML    : Gemini API, OpenCV, MediaPipe, sklearn",
        "Tools    : Git, Docker, Figma, Vercel",
    ],
    projects: () => [
        "Projects:",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "1. Ganga Scavenger  — AI + IoT + WebRTC  [LIVE]",
        "2. AI Crime Predictor — ML + FastAPI      [DONE]",
        "3. Eye Mouse Control — OpenCV + MediaPipe [DONE]",
        "4. Network Detector  — Python + Scapy     [DONE]",
        "5. ClubSphere        — React Native + AI  [LIVE]",
        "6. Portfolio 3D      — R3F + GSAP         [LIVE]",
    ],
    contact: () => [
        "Contact Info:",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "Email    : ashwin2431333@gmail.com",
        "GitHub   : github.com/Ashwinjauhary",
        "LinkedIn : linkedin.com/in/",
        "Phone    : +91 95556 81211",
    ],
    blog: () => [
        "Latest Posts:",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "1. How I Built an Autonomous Robot Dashboard",
        "2. 10 Framer Motion Tricks for Portfolio",
        "3. Making Next.js Apps PWA-Ready",
        "Visit /blog to read →",
    ],
    hire: () => [
        "How to Work With Me:",
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "✓ Freelance projects (React, Next.js, UI/UX)",
        "✓ Internships (remote or hybrid)",
        "✓ Hackathon team collaborations",
        "✓ Open source contributions",
        "→ Email: ashwin2431333@gmail.com",
        "→ Or visit /contact",
    ],
    joke: () => {
        const jokes = [
            ["Why do programmers prefer dark mode?", "Because light attracts bugs! 🐛"],
            ["What's a developer's favorite tea?", "Java! ☕"],
            ["How many programmers does it take to change a light bulb?", "None. That's a hardware problem."],
            ["Why did the React developer go broke?", "Because he kept using too many hooks 🪝"],
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    },
    matrix: () => ["Wake up, Neo...", "The Matrix has you...", "Follow the white rabbit 🐇", "→ Just kidding. But keep building."],
    whoami: () => ["ashwin@ashwin-portfolio:~$ You are a visitor curious enough to open the terminal. Respect."],
    ls: () => ["about/  blog/  work/  journey/  contact/  playground/  secret/"],
    pwd: () => ["/home/ashwin/portfolio"],
    date: () => [new Date().toString()],
    uname: () => ["AshwinOS 3.0 — Built on Next.js 16, Three.js, Framer Motion"],
};

export default function TerminalPage() {
    const [boot, setBoot] = useState<string[]>([]);
    const [booted, setBooted] = useState(false);
    const [lines, setLines] = useState<{ type: "out" | "cmd"; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [histIdx, setHistIdx] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let i = 0;
        const int = setInterval(() => {
            if (i < BOOT_SEQUENCE.length) { setBoot(prev => [...prev, BOOT_SEQUENCE[i]]); i++; }
            else { clearInterval(int); setBooted(true); }
        }, 300);
        return () => clearInterval(int);
    }, []);

    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [lines, boot]);

    const run = (cmd: string) => {
        const trimmed = cmd.trim().toLowerCase();
        setLines(prev => [...prev, { type: "cmd", text: `ashwin@portfolio:~$ ${cmd}` }]);
        if (!trimmed) return;
        setHistory(prev => [trimmed, ...prev]);
        setHistIdx(-1);
        if (trimmed === "clear") { setLines([]); return; }
        if (trimmed === "exit") { window.history.back(); return; }
        const fn = COMMANDS[trimmed];
        if (fn) {
            fn().forEach(line => setLines(prev => [...prev, { type: "out", text: line }]));
        } else {
            setLines(prev => [...prev, { type: "out", text: `Command not found: ${trimmed}. Type 'help' for commands.` }]);
        }
    };

    return (
        <div className="w-full min-h-screen px-4 md:px-12 pt-16 pb-40 flex items-start justify-center">
            <div className="w-full max-w-4xl">
                {/* Terminal window chrome */}
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-3 border-b border-white/10">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="ml-4 text-gray-400 text-xs font-mono">ashwin@portfolio — AshwinOS 3.0</span>
                    </div>

                    <div
                        className="bg-black/80 font-mono text-sm p-6 min-h-[70vh] max-h-[80vh] overflow-y-auto cursor-text"
                        onClick={() => inputRef.current?.focus()}
                    >
                        {/* Boot sequence */}
                        {boot.map((line, i) => (
                            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="text-green-400/70 mb-1">
                                {line}
                            </motion.div>
                        ))}

                        {booted && (
                            <>
                                <div className="mt-4 mb-4 border-t border-white/10" />
                                {/* Command history */}
                                {lines.map((l, i) => (
                                    <div key={i} className={`mb-1 ${l.type === "cmd" ? "text-amber-400" : "text-gray-300"}`}>
                                        {l.text}
                                    </div>
                                ))}

                                {/* Input */}
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-amber-400 shrink-0">ashwin@portfolio:~$</span>
                                    <input
                                        ref={inputRef}
                                        autoFocus
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                        onKeyDown={e => {
                                            if (e.key === "Enter") { run(input); setInput(""); }
                                            if (e.key === "ArrowUp") {
                                                const idx = Math.min(histIdx + 1, history.length - 1);
                                                setHistIdx(idx);
                                                setInput(history[idx] ?? "");
                                            }
                                            if (e.key === "ArrowDown") {
                                                const idx = Math.max(histIdx - 1, -1);
                                                setHistIdx(idx);
                                                setInput(idx === -1 ? "" : history[idx]);
                                            }
                                        }}
                                        className="flex-1 bg-transparent outline-none text-white caret-amber-400"
                                        spellCheck={false}
                                        autoComplete="off"
                                    />
                                    <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-amber-400">█</motion.span>
                                </div>
                            </>
                        )}
                        <div ref={bottomRef} />
                    </div>
                </div>
                <p className="text-center text-gray-600 text-xs font-mono mt-4">Type 'help' to get started · Arrow keys for history</p>
            </div>
        </div>
    );
}
