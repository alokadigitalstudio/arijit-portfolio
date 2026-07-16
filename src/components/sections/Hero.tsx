"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div 
        className="container grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-10 md:py-20"
        style={{ opacity, scale, y }}
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700 mb-6 md:mb-8"
          >
            <Sparkles size={14} className="text-blue-500" />
            Available for Freelance
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            Full Stack
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="mt-4 md:mt-6 max-w-lg mx-auto lg:mx-0 text-base md:text-lg text-slate-600 leading-relaxed">
            Crafting high-performance, SEO-optimized web experiences that
            transform ideas into digital success stories.
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 md:px-8 py-3 md:py-3.5 text-white font-medium shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 md:px-8 py-3 md:py-3.5 font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>

        {/* Right - Profile Image (এখন সব স্ক্রিনে দেখাবে) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          {/* Glow Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-2xl scale-110 animate-pulse" />
          
          {/* Image Container - Responsive Size */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[440px] lg:h-[440px] rounded-full p-1 bg-gradient-to-tr from-blue-500 via-blue-400 to-purple-500 shadow-2xl shadow-blue-500/20">
            <div className="w-full h-full rounded-full bg-white p-2">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-blue-50/50 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/Hero.jpg"
                  alt="Arijit - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Floating Badges - Reponsive */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -right-4 sm:-right-6 md:-right-8 top-10 sm:top-16 md:top-20 bg-white/80 backdrop-blur-md rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-xl border border-white/50"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-slate-700">5+ Projects</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-4 sm:-left-6 md:-left-8 bottom-10 sm:bottom-16 md:bottom-20 bg-white/80 backdrop-blur-md rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-xl border border-white/50"
          >
            <div className="flex items-center gap-2">
              <span className="text-base md:text-lg">⚡</span>
              <span className="text-xs md:text-sm font-medium text-slate-700">99% Uptime</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-blue-500 rounded-full"
          />
        </div>
      </motion.div>

      {/* Connecting Gradient Line to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50/80 pointer-events-none" />
    </section>
  );
}