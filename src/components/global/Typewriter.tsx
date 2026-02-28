"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    words: string[];
    speed?: number;
    deleteSpeed?: number;
    pause?: number;
    className?: string;
}

export default function Typewriter({ words, speed = 80, deleteSpeed = 40, pause = 2000, className = "" }: TypewriterProps) {
    const [displayed, setDisplayed] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [typing, setTyping] = useState(true);
    const [cursorBlink, setCursorBlink] = useState(true);

    useEffect(() => {
        const blinkInterval = setInterval(() => setCursorBlink(b => !b), 530);
        return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];
        let timeout: ReturnType<typeof setTimeout>;

        if (typing) {
            if (displayed.length < currentWord.length) {
                timeout = setTimeout(() => setDisplayed(currentWord.slice(0, displayed.length + 1)), speed);
            } else {
                timeout = setTimeout(() => setTyping(false), pause);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), deleteSpeed);
            } else {
                timeout = setTimeout(() => {
                    setWordIndex(i => i + 1);
                    setTyping(true);
                }, deleteSpeed);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, wordIndex, words, speed, deleteSpeed, pause]);

    return (
        <span className={className}>
            {displayed}
            <span className={`inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle transition-opacity ${cursorBlink ? "opacity-100" : "opacity-0"}`} />
        </span>
    );
}
