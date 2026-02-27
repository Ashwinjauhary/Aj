"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
    const [inputVal, setInputVal] = useState("");
    const [history, setHistory] = useState([
        { type: "system", text: "Welcome to VanshOS v2.4. Type 'help' to see available commands." }
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputVal.trim()) return;

        const cmd = inputVal.trim().toLowerCase();
        const newHistory = [...history, { type: "user", text: `> ${inputVal}` }];

        switch (cmd) {
            case "help":
                newHistory.push({ type: "system", text: "Available commands: info, contact, clear, social" });
                break;
            case "info":
                newHistory.push({ type: "system", text: "Vansh Agnihotri - BCA 2nd Yr. React Developer. Building next-level experiences." });
                break;
            case "contact":
                newHistory.push({ type: "system", text: "Email: vanshagnihotri520@gmail.com | Phone: 9569534925" });
                break;
            case "social":
                newHistory.push({ type: "system", text: "Instagram: vansh_agnihotri____ | LinkedIn: Vansh Agnihotri" });
                break;
            case "clear":
                setHistory([]);
                setInputVal("");
                return;
            default:
                newHistory.push({ type: "error", text: `Command not found: ${cmd}. Type 'help' for options.` });
        }

        setHistory(newHistory);
        setInputVal("");
    };

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history]);

    return (
        <div className="w-full min-h-screen px-4 md:px-24 pt-32 pb-40 flex flex-col lg:flex-row gap-12 items-center justify-center">

            {/* Traditional Contact Info Grid */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex flex-col"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white text-glow">
                    Initiate Contact.
                </h1>
                <p className="text-gray-400 text-lg mb-12 max-w-md">
                    Whether it's a freelance gig, an internship opportunity, or just a technical discussion, I'm always open to connect.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
                    <a href="mailto:vanshagnihotri520@gmail.com" className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition group cursor-none">
                        <Mail className="text-gray-400 group-hover:text-white transition-colors" size={32} />
                        <span className="text-white font-medium">Email Me</span>
                    </a>

                    <a href="tel:+919569534925" className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition group cursor-none">
                        <Phone className="text-gray-400 group-hover:text-white transition-colors" size={32} />
                        <span className="text-white font-medium">9569534925</span>
                    </a>

                    <a href="#" target="_blank" rel="noreferrer" className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition group cursor-none">
                        <Instagram className="text-gray-400 group-hover:text-[#E1306C] transition-colors" size={32} />
                        <span className="text-white font-medium">@vansh_agnihotri____</span>
                    </a>

                    <a href="#" target="_blank" rel="noreferrer" className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition group cursor-none">
                        <Linkedin className="text-gray-400 group-hover:text-[#0077b5] transition-colors" size={32} />
                        <span className="text-white font-medium">LinkedIn</span>
                    </a>
                </div>
            </motion.div>

            {/* Interactive Terminal */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
            >
                <div className="glass w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden flex flex-col border border-white/20 shadow-2xl">
                    {/* Terminal Header */}
                    <div className="w-full h-12 bg-black/40 border-b border-white/10 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 font-mono text-xs text-gray-400 flex items-center gap-2">
                            <Terminal size={12} /> guest@vansh-os:~
                        </span>
                    </div>

                    {/* Terminal Body */}
                    <div className="flex-1 p-6 overflow-y-auto font-mono text-sm leading-relaxed flex flex-col gap-2">
                        {history.map((line, i) => (
                            <div
                                key={i}
                                className={`${line.type === 'system' ? 'text-green-400' : line.type === 'user' ? 'text-white' : 'text-red-400'}`}
                            >
                                {line.text}
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>

                    {/* Terminal Input */}
                    <form onSubmit={handleCommand} className="w-full bg-black/20 p-4 border-t border-white/10 flex items-center gap-2">
                        <span className="text-green-400 font-mono">$&gt;</span>
                        <input
                            type="text"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            className="flex-1 bg-transparent outline-none text-white font-mono placeholder:text-white/20"
                            placeholder="Type a command..."
                            autoFocus
                        />
                        <button type="submit" className="text-gray-400 hover:text-white transition cursor-none p-2">
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
