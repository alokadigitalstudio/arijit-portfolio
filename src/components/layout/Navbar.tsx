"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const current = section as HTMLElement;

        if (
          scrollY >= current.offsetTop &&
          scrollY < current.offsetTop + current.offsetHeight
        ) {
          setActive(
            current.id.charAt(0).toUpperCase() +
              current.id.slice(1)
          );
        }
      });

      // Check if scrolled
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/20" 
          : "bg-white/80 backdrop-blur-sm"
      } border-b border-slate-200/50`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300"
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Arijit
          </span>
          <span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                active === link.name
                  ? "text-blue-600 bg-blue-50/80"
                  : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/50"
              }`}
            >
              {link.name}
              {active === link.name && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Hire Me Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-white font-medium text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
        >
          <Sparkles size={16} />
          Hire Me
        </motion.a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors relative z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} className="text-slate-700" /> : <Menu size={28} className="text-slate-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-slate-200/50"
          >
            <div className="container max-w-6xl mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * navLinks.indexOf(link) }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    active === link.name
                      ? "text-blue-600 bg-blue-50/80"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {link.name}
                  {active === link.name && (
                    <motion.div
                      layoutId="activeNavMobile"
                      className="mt-1 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </motion.a>
              ))}
              
              {/* Mobile Hire Me Button */}
              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block text-center mt-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/25 transition-all duration-300"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}