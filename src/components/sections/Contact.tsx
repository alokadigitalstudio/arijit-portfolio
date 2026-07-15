"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Briefcase, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
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
      id="contact" 
      className="relative py-24 overflow-hidden"
    >
      {/* Background - Projects থেকে কানেক্টেড */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/10 via-white to-indigo-50/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700"
          >
            <MessageCircle size={14} className="text-blue-500" />
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl md:text-5xl font-bold"
          >
            Let's Work
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-slate-600 leading-relaxed"
          >
            Have a project in mind? Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            transition={{ delay: 0.25, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid lg:grid-cols-2 gap-8"
        >
          {/* Left - Contact Info */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <a
                href="mailto:arijit.workemail@gmail.com"
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all">
                  <Mail className="text-blue-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-500 text-sm">arijit.workemail@gmail.com</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <a
                href="tel:+917003835601"
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all">
                  <Phone className="text-blue-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <p className="text-slate-500 text-sm">+91 70038 35601</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <a
                href="https://www.linkedin.com/in/arijit-sanki-750b23232"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all">
                  <Briefcase className="text-blue-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">LinkedIn</h3>
                  <p className="text-slate-500 text-sm">Connect with me</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all">
                  <MapPin className="text-blue-600" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Location</h3>
                  <p className="text-slate-500 text-sm">kolkata, India</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 border border-blue-100/50 p-10 flex flex-col justify-center shadow-xl"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-400/10 rounded-full blur-2xl" />

            <div className="relative">
              <h3 className="text-3xl font-bold text-slate-800">
                Have a project in mind?
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                I'm available for freelance projects, business websites,
                landing pages, and custom web applications.
                Let's discuss your ideas.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="mailto:arijit.workemail@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
                >
                  <Mail size={18} />
                  Email Me
                </motion.a>

                <motion.a
                  href="https://wa.me/917003835601"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </motion.a>
              </div>

              {/* Availability Badge */}
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for freelance work</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Connecting Gradient to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50/80 to-transparent pointer-events-none" />
    </section>
  );
}