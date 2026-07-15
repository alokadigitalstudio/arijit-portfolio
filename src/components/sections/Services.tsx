"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  Layout,
  Briefcase,
  MonitorCog,
  Palette,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";

// Icons array - সরাসরি icon components ব্যবহার করছি
const iconComponents = [
  Globe,
  Layout,
  Briefcase,
  MonitorCog,
  Palette,
  Search,
];

const iconColors = [
  "from-blue-500 to-blue-600",
  "from-purple-500 to-purple-600",
  "from-pink-500 to-rose-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
  "from-indigo-500 to-violet-600",
];

const iconBgColors = [
  "bg-blue-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-emerald-50",
  "bg-orange-50",
  "bg-indigo-50",
];

const hoverColors = [
  "group-hover:border-blue-300 group-hover:shadow-blue-100",
  "group-hover:border-purple-300 group-hover:shadow-purple-100",
  "group-hover:border-pink-300 group-hover:shadow-pink-100",
  "group-hover:border-emerald-300 group-hover:shadow-emerald-100",
  "group-hover:border-orange-300 group-hover:shadow-orange-100",
  "group-hover:border-indigo-300 group-hover:shadow-indigo-100",
];

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, -20]);
  
  // For hover animation on cards
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 8,
      },
    },
  };

  return (
    <section 
      ref={ref}
      id="services" 
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/10 to-purple-50/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl"
      />

      <motion.div 
        className="container max-w-6xl mx-auto px-4"
        style={{ opacity, y }}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700"
          >
            <Sparkles size={14} className="text-blue-500" />
            Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl md:text-5xl font-bold"
          >
            What I Can Do For
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Your Business
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-600 leading-relaxed"
          >
            Professional web solutions designed to help businesses
            grow online and achieve their digital goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const IconComponent = iconComponents[index % iconComponents.length];
            const color = iconColors[index % iconColors.length];
            const bgColor = iconBgColors[index % iconBgColors.length];
            const hoverColor = hoverColors[index % hoverColors.length];

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover="hover"
                custom={index}
                className={`group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 ${hoverColor}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient Hover Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-transparent group-hover:from-blue-50/30 group-hover:via-purple-50/30 transition-all duration-500"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon with Animation */}
                <motion.div 
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${color} p-0.5 mb-6 shadow-lg shadow-blue-500/10`}
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <div className={`w-full h-full rounded-2xl ${bgColor} flex items-center justify-center`}>
                    <IconComponent className={`text-transparent bg-gradient-to-br ${color} bg-clip-text`} size={28} />
                  </div>
                </motion.div>

                <div className="relative">
                  <motion.h3 
                    className="text-xl font-semibold text-slate-800"
                    animate={{
                      color: hoveredIndex === index ? "#4F46E5" : "#1E293B",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <motion.span
                      animate={{
                        x: hoveredIndex === index ? 4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.a>
                </div>

                {/* Decorative Dot */}
                <motion.div 
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Number Badge */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-[10px] font-bold flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-gradient-to-r from-blue-50/80 to-purple-50/80 border border-blue-100/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-slate-700">
              Need a custom solution?
            </span>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white font-medium text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
            >
              Let's Talk
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Connecting Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-50/20 to-transparent pointer-events-none" />
    </section>
  );
}