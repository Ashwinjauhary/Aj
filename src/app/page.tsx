"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

const roles = [
  "BCA Student",
  "React Developer",
  "Digital Creator",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "3", label: "Hackathons" },
  { value: "2+", label: "Years Coding" },
  { value: "∞", label: "Ideas Brewing" },
];

const featuredProject = {
  title: "Ganga Scavenger",
  tag: "AI + IoT + WebRTC",
  description:
    "Autonomous river-cleaning robot with real-time mission control dashboard. Genesis-powered 3D simulation, live telemetry, and PWA support.",
  href: "/work",
  image: "https://images.unsplash.com/photo-1620021676839-4d6d7bb5f7f0?q=80&w=2070&auto=format&fit=crop",
};

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Three.js", "Framer Motion", "GSAP", "Python",
  "FastAPI", "Node.js", "MongoDB", "Git",
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Three.js", "Framer Motion", "GSAP", "Python",
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden w-full py-2">
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        className="flex gap-4 whitespace-nowrap"
      >
        {[...items, ...items].map((skill, i) => (
          <span
            key={i}
            className="glass px-5 py-2 rounded-full text-gray-300 text-sm font-medium shrink-0"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="z-10 text-center px-4 flex flex-col items-center"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-gray-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance & internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 text-glow"
          >
            Vansh Agnihotri.
          </motion.h1>

          {/* Slot Machine */}
          <div className="h-10 md:h-14 overflow-hidden relative w-full text-center flex items-center justify-center mb-8">
            <motion.div
              key={roleIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute text-xl md:text-3xl font-light text-gray-300 tracking-wide"
            >
              {roles[roleIndex]}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="max-w-lg text-gray-400 text-sm md:text-base leading-relaxed mb-10"
          >
            Building next-level web experiences that merge dark mode minimalism
            with high-end interactive elements.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/work"
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors cursor-none"
            >
              View Work
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 glass border border-white/20 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-none"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 gap-2 pointer-events-none"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="w-full px-6 md:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Featured Project ── */}
      <section className="w-full px-6 md:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">Featured</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">Latest Project</h2>
        </motion.div>

        <Link href={featuredProject.href} className="group block cursor-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden glass"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featuredProject.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="glass px-3 py-1 rounded-full text-xs text-amber-400 font-mono mb-3 inline-block">
                  {featuredProject.tag}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white">{featuredProject.title}</h3>
                <p className="text-gray-300 text-sm mt-2 max-w-lg hidden md:block">{featuredProject.description}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0">
                <ArrowUpRight size={22} />
              </div>
            </div>
          </motion.div>
        </Link>
      </section>

      {/* ── Skills Marquee ── */}
      <section className="w-full py-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">Tech Stack</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">The Arsenal</h2>
          </div>
          <div className="flex flex-col gap-3">
            <MarqueeRow items={skills} />
            <MarqueeRow items={[...skills].reverse()} reverse />
          </div>
        </motion.div>
      </section>

      {/* ── About / Philosophy ── */}
      <section className="w-full px-6 md:px-24 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">About</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              I don't wait. I build.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a 2nd-year BCA student who refuses to follow the slow, traditional path. While most
              students are studying textbooks, I'm shipping production apps, contributing to open
              source, and competing in hackathons.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My focus: <span className="text-white font-medium">React, Next.js, AI integration, and interactive 3D web</span>.
              I believe the best way to learn is by building things that scare you a little.
            </p>
            <Link
              href="/journey"
              className="group inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300 transition-colors cursor-none"
            >
              See my full journey <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: "⚡", title: "Fast Learner", desc: "From zero to production within days of discovering a new tech." },
              { icon: "🧠", title: "AI-First Mindset", desc: "Every project explores AI integration — from vision to language models." },
              { icon: "🎨", title: "Design Obsessed", desc: "I believe great code and great design are inseparable." },
              { icon: "🚀", title: "Shipping Focused", desc: "I prioritize working software over perfect software — then iterate." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass p-5 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GitHub Activity CTA ── */}
      <section className="w-full px-6 md:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto border border-white/10"
        >
          <Sparkles className="mx-auto mb-6 text-amber-400" size={40} />
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Let's Build Something</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            I'm always open to freelance projects, collaborations, and internship opportunities.
            Let's create something remarkable together.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-none"
            >
              Get In Touch
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="glass border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors cursor-none flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* spacer for dock */}
      <div className="h-32" />
    </div>
  );
}
