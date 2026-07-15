"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Tag, 
  Code2, 
  CheckCircle, 
  Image as ImageIcon,
  Calendar,
  User,
  ArrowRight
} from "lucide-react";
import * as React from 'react';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  // Related projects (excluding current)
  const relatedProjects = projects.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-blue-50/20" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700">
              <Tag size={14} className="text-blue-500" />
              {project.category}
            </span>
            
            {project.live && project.live !== "#" && (
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-green-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-green-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl">
            {project.description}
          </p>

          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <Code2 size={16} className="text-slate-400" />
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-200/50 group"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Image Overlay Actions */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            {project.live && project.live !== "#" && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 hover:text-blue-600 shadow-lg transition-colors"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid lg:grid-cols-3 gap-8"
        >
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                Project Overview
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {project.description}
              </p>
              <p className="text-slate-600 leading-relaxed">
                This project was built with a focus on {project.tech?.join(", ")}. 
                The goal was to create a {project.category.toLowerCase()} that delivers 
                exceptional user experience and meets all business requirements.
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                    >
                      <CheckCircle size={18} className="text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                  <ImageIcon size={20} />
                  Project Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl overflow-hidden border border-slate-200/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${project.title} gallery ${index + 1}`}
                        className="w-full h-32 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Info Card */}
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg">
              <h4 className="font-semibold text-slate-800 mb-4">Project Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Category</span>
                  <span className="text-slate-700 font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status</span>
                  <span className="text-green-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    {project.live && project.live !== "#" ? "Live" : "In Development"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tech Stack</span>
                  <span className="text-slate-700 font-medium">{project.tech?.length || 0} tools</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border border-blue-100/50 shadow-lg">
              <h4 className="font-semibold text-slate-800 mb-2">Interested in this project?</h4>
              <p className="text-sm text-slate-600 mb-4">
                Let's discuss how I can help you build something similar.
              </p>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-white font-medium text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 w-full justify-center"
              >
                Let's Work Together
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-slate-200/50"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">Related Projects</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  className="group p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-xs text-slate-500">{related.category}</p>
                    </div>
                    <ArrowRight size={16} className="ml-auto text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to all projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}