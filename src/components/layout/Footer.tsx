"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/50 bg-gradient-to-b from-white to-slate-50/80">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
      
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 inline-block"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Arijit
              </span>
              <span className="text-blue-600">.</span>
            </Link>

            <p className="mt-2 text-slate-500 text-sm">
              Full Stack Web Developer
            </p>
          </motion.div>

          {/* Center - Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.nav>

          {/* Right - Copyright & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end gap-3"
          >
            <p className="text-sm text-slate-400 text-center md:text-right leading-relaxed">
              © {new Date().getFullYear()} Arijit Sanki.
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span className="text-xs text-slate-400">using Next.js</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Divider with Gradient */}
        <div className="mt-8 pt-6 border-t border-slate-200/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <span>Built with ❤️ & Next.js</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <span className="w-px h-3 bg-slate-200" />
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}