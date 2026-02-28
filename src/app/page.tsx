"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ArrowUpRight, Github, Sparkles } from "lucide-react";
import Link from "next/link";
import Typewriter from "@/components/global/Typewriter";
import dynamic from "next/dynamic";
const TestimonialsCarousel = dynamic(() => import("@/components/global/TestimonialsCarousel"), { ssr: false });
const GitHubStats = dynamic(() => import("@/components/global/GitHubStats"), { ssr: false });

const roles = [
  "BCA Student",
  "Web Developer",
  "Tech Enthusiast",
];

const stats = [
  { value: "10+", label: "Skills & Tools" },
  { value: "3+", label: "Major Projects" },
  { value: "24/7", label: "Learning Mindset" },
];

const featuredProject = {
  title: "ClubSphere",
  tag: "React.js + TypeScript + Supabase + AI",
  description:
    "Full-stack role-based platform for managing college clubs and events with AI reports.",
  href: "/work",
  image: "/projects/clubsphere.png",
};

const skills = [
  "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React.js", "Next.js", "Responsive Web Design", "SPA Architecture", "UI/UX Principles", "Framer Motion", "Node.js", "Express.js", "RESTful API", "JWT Auth", "RBAC", "API Security", "Generative AI", "Prompt Engineering", "AI Integration", "Chatbot Arch", "Gemini API", "JavaScript (ES6+)", "TypeScript", "Python", "C", "C++", "MongoDB", "Mongoose ODM", "PostgreSQL", "SQLite", "Schema Design", "Supabase", "Appwrite", "Vercel", "Render", "Cloudflare", "Flutter", "Dart", "Git & GitHub", "npm", "CI/CD Basics", "Figma", "VS Code", "Cursor", "OOP", "Problem Solving", "Data Flow", "Full-Stack Arch", "MVP Planning", "Product Dev", "Scalable Design"
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // We avoid using the `.glass` class here because animating ~100 elements 
  // with backdrop-filter: blur() causes severe performance degradation (lag).
  return (
    <div className="flex overflow-hidden w-full py-2">
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 250, ease: "linear", repeat: Infinity }}
        className="flex gap-4 whitespace-nowrap will-change-transform"
      >
        {[...items, ...items].map((skill, i) => (
          <span
            key={i}
            className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-gray-300 text-sm font-medium shrink-0"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  // Disabled scroll based opacity mapping due to Lenis conflicts on init

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <motion.div
          className="z-10 text-center px-4 flex flex-col items-center"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-gray-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance & internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 text-glow"
          >
            Ashwin Jauhary.
          </motion.h1>

          {/* Typewriter role */}
          <div className="h-10 md:h-14 flex items-center justify-center mb-8">
            <Typewriter
              words={roles}
              speed={75}
              deleteSpeed={35}
              pause={2200}
              className="text-xl md:text-3xl font-light text-gray-300 tracking-wide"
            />
          </div>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="max-w-lg text-gray-400 text-sm md:text-base leading-relaxed mb-10"
          >
            Exploring technology, building projects, and aiming for a future in business & investments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
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
          initial={{ opacity: 1 }}
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
      <section className="w-full px-4 md:px-24 py-16">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-7xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-xs md:text-sm whitespace-nowrap">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Featured Project ── */}
      <section className="w-full px-6 md:px-24 py-16">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-7xl mx-auto"
        >
          <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">Featured</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">Latest Project</h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Link href={featuredProject.href} className="group block cursor-none">
            <motion.div
              initial={{ opacity: 1, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden glass"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${featuredProject.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="glass px-3 py-1 rounded-full text-[10px] md:text-xs text-amber-400 font-mono mb-3 inline-block">
                    {featuredProject.tag}
                  </span>
                  <h3 className="text-2xl md:text-5xl font-bold text-white">{featuredProject.title}</h3>
                  <p className="text-gray-300 text-sm mt-2 max-w-lg hidden sm:block">{featuredProject.description}</p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0 self-end md:self-auto">
                  <ArrowUpRight size={20} className="md:w-[22px] md:h-[22px]" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* ── Skills Marquee ── */}
      <section className="w-full py-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
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

      {/* ── Fast Forward Overview ── */}
      <section className="w-full px-6 md:px-24 py-24 glass-panel border-y border-white/5 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 1, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">About</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Hi, I'm Ashwin Jauhary
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a 2nd-year BCA student at PSIT Kanpur. I love building modern, responsive, and interactive web applications. My long-term goal is to achieve academic excellence, secure a good placement, start my own business, and grow in the stock & investment world.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My focus: <span className="text-white font-medium">React, Next.js, AI integration, and Scalable Backend</span>.
              I believe the best way to learn is by building things that matter.
            </p>
            <Link
              href="/journey"
              className="group inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300 transition-colors cursor-none"
            >
              See my full journey <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: "🚀", title: "Modern UI/UX", desc: "Animated interfaces, responsive layouts, and accessible components." },
              { icon: "⚡", title: "Performance", desc: "Optimized assets and interactions for a smooth, fast user experience." },
              { icon: "🛠️", title: "Real Projects", desc: "Showcasing hands-on work with clean code and documentation." },
              { icon: "🧠", title: "Learning Mindset", desc: "Always exploring new tech and aiming for growth." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
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

      {/* ── Testimonials ── */}
      <section className="w-full px-6 md:px-24 py-16">
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} className="mb-10 max-w-4xl mx-auto">
          <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">Social Proof</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">What People Say</h2>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── GitHub Stats + CTA ── */}
      <section className="w-full px-6 md:px-24 py-16">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <GitHubStats username="Ashwinjauhary" />
          </div>
          <div className="glass rounded-3xl p-10 md:p-16 text-center border border-white/10">
            <Sparkles className="mx-auto mb-6 text-amber-400" size={40} />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Let's Build Something</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              I'm always open to freelance projects, collaborations, and internship opportunities.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors cursor-none">Get In Touch</Link>
              <a href="https://github.com/Ashwinjauhary" target="_blank" rel="noreferrer" className="glass border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors cursor-none flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* spacer for dock */}
      <div className="h-32" />
    </div>
  );
}
