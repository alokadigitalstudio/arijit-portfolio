"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Zap, Users } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -30]);

  return (
    <section 
      ref={ref}
      id="about" 
      className="relative py-24 overflow-hidden"
    >
      {/* Background Elements - Hero থেকে কানেক্টেড */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/80 via-white to-blue-50/20" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

      <motion.div 
        className="container max-w-5xl mx-auto px-4"
        style={{ opacity, y }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200/50 bg-purple-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-purple-700"
          >
            <Code2 size={14} className="text-purple-500" />
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Building websites that
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              look modern & perform
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              I'm <strong className="text-blue-600">Arijit Sanki</strong>, a 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> Full Stack Web Developer</span>
              <br className="hidden sm:block" />
              specializing in modern business websites, landing pages, and web applications.
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                My focus is on <strong>clean UI</strong>, <strong>fast performance</strong>, and 
                <strong> SEO-friendly development</strong> that helps businesses generate more leads 
                and convert visitors into customers.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Rocket, label: "Projects", value: "5+" },
                { icon: Users, label: "Clients", value: "10+" },
                { icon: Zap, label: "Uptime", value: "99%" },
                { icon: Code2, label: "Commits", value: "500+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-100 hover:border-blue-200 transition-all duration-300 group"
                >
                  <stat.icon size={20} className="text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-xl text-slate-800">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills/Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-lg">
              <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <Zap size={18} className="text-blue-500" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js", "React", "TypeScript", "Tailwind CSS",
                  "Node.js", "Express", "MongoDB", "PostgreSQL",
                  "GraphQL", "Docker", "AWS", "Framer Motion"
                ].map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 border border-slate-200/50 hover:border-blue-300 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-purple-50/80 border border-blue-100/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">2+ Years Experience</p>
                  <p className="text-xs text-slate-400">Building production-ready applications</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Connecting Gradient to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}