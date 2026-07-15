"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Eye, Clock } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, -20]);

  return (
    <section 
      ref={ref}
      id="projects" 
      className="relative py-24 overflow-hidden"
    >
      {/* Background - Services থেকে কানেক্টেড */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50/10 via-white to-blue-50/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-indigo-700"
          >
            <Eye size={14} className="text-indigo-500" />
            Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl md:text-5xl font-bold"
          >
            Featured
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-600 leading-relaxed"
          >
            A few projects that showcase my design and development skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            transition={{ delay: 0.25, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => {
            const isComingSoon = project.status === "coming-soon";
            const isLive = project.status === "live";

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 overflow-hidden hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 ${
                  isComingSoon ? "opacity-90" : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-72 w-full object-cover transition duration-700 ${
                      isComingSoon ? "group-hover:scale-105" : "group-hover:scale-110"
                    }`}
                  />
                  
                  {/* Coming Soon Overlay */}
                  {isComingSoon && (
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/40 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
                        <Clock size={32} className="text-amber-500" />
                        <span className="text-sm font-bold text-amber-600">Coming Soon</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay on Hover - শুধু Live Projects এর জন্য */}
                  {isLive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}
                  
                  {/* Quick Actions on Hover - Live Link (শুধু Live Projects এর জন্য) */}
                  {isLive && (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.live && project.live !== "#" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 hover:text-indigo-600 shadow-lg transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  )}

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {/* Category Badge */}
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm text-indigo-600 border border-indigo-100/50">
                      {project.category}
                    </span>
                    
                    {/* Status Badge */}
                    {isLive && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-50/90 backdrop-blur-sm text-green-600 border border-green-200/50 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live
                      </span>
                    )}
                    
                    {isComingSoon && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-50/90 backdrop-blur-sm text-amber-600 border border-amber-200/50 flex items-center gap-1">
                        <Clock size={12} />
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <Link
                      href={`/projects/${project.slug}`}
                      className={`flex-shrink-0 p-2 rounded-full border border-slate-200 text-slate-400 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 group-hover:scale-105 ${
                        isComingSoon ? "pointer-events-none opacity-50" : ""
                      }`}
                    >
                      <ExternalLink size={16} />
                    </Link>
                  </div>

                  {/* Tech Stack */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                            isComingSoon 
                              ? "bg-slate-100/50 text-slate-400" 
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          isComingSoon 
                            ? "bg-slate-100/50 text-slate-400" 
                            : "bg-slate-100 text-slate-400"
                        }`}>
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3.5 text-white font-medium shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300"
          >
            View All Projects
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Connecting Gradient to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50/20 to-transparent pointer-events-none" />
    </section>
  );
}