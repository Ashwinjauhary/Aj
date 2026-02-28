"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    type: string;
    message: string;
}

export default function HireForm() {
    const [form, setForm] = useState<FormData>({ name: "", email: "", type: "freelance", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setStatus("loading");

        try {
            // EmailJS - free tier, no backend needed
            // Replace with your EmailJS service/template/public key
            const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
                    template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
                    user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key",
                    template_params: {
                        from_name: form.name,
                        from_email: form.email,
                        inquiry_type: form.type,
                        message: form.message,
                    },
                }),
            });
            if (res.ok) setStatus("success");
            else setStatus("error");
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-10 rounded-2xl text-center"
            >
                <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">I'll get back to you within 24 hours.</p>
            </motion.div>
        );
    }

    const types = ["Freelance Project", "Internship", "Collaboration", "Just Chat"];

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl space-y-5 border border-white/10"
        >
            <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs text-gray-500 mb-1 font-mono tracking-widest uppercase">Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition cursor-none"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-xs text-gray-500 mb-1 font-mono tracking-widest uppercase">Email</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition cursor-none"
                        placeholder="your@email.com"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs text-gray-500 mb-2 font-mono tracking-widest uppercase">Inquiry Type</label>
                <div className="flex flex-wrap gap-2">
                    {types.map((t) => (
                        <button
                            key={t}
                            type="button"
                            onClick={() => setForm({ ...form, type: t })}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-none ${form.type === t
                                ? "bg-white text-black"
                                : "glass text-gray-300 hover:bg-white/10"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-xs text-gray-500 mb-1 font-mono tracking-widest uppercase">Message</label>
                <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition resize-none cursor-none"
                    placeholder="Tell me about your project, idea, or just say hi..."
                    required
                />
            </div>

            {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Try emailing directly at ashwin2431333@gmail.com
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors cursor-none disabled:opacity-50"
            >
                {status === "loading" ? (
                    <><Loader size={18} className="animate-spin" /> Sending...</>
                ) : (
                    <><Send size={18} /> Send Message</>
                )}
            </button>
        </motion.form>
    );
}
