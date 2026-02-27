"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Secret easter egg page — accessible via /secret or Konami code

const morseCodes = [
    { letter: "V", morse: "•••—" },
    { letter: "A", morse: "•—" },
    { letter: "N", morse: "—•" },
    { letter: "S", morse: "•••" },
    { letter: "H", morse: "••••" },
];

export default function SecretPage() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 text-center pb-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
                <div className="text-8xl mb-6">🐇</div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">You found the secret.</h1>
                <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                    Few people make it this far. Curiosity is the best trait a developer can have.
                </p>

                <div className="glass rounded-2xl p-6 mb-8 max-w-sm mx-auto">
                    <p className="text-gray-500 text-xs font-mono mb-4 uppercase tracking-widest">My name in Morse</p>
                    <div className="flex gap-4 justify-center">
                        {morseCodes.map(({ letter, morse }) => (
                            <div key={letter} className="text-center">
                                <div className="text-white font-bold text-lg">{letter}</div>
                                <div className="text-amber-400 text-xs font-mono">{morse}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-gray-500 text-sm mb-8">Trigger: Konami code — ↑↑↓↓←→←→BA</p>

                <Link href="/" className="glass px-6 py-3 rounded-full text-white hover:bg-white/10 transition-colors cursor-none">
                    ← Back to home
                </Link>
            </motion.div>
        </div>
    );
}
