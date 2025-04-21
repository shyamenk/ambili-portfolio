"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Award,
  Film,
  Palette,
  Mail,
  BookOpen,
  Images,
  User2,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: <Home size={18} />, href: "#home" },
  { name: "Awards", icon: <Award size={18} />, href: "#awards" },
  { name: "Movies", icon: <Film size={18} />, href: "#movies" },
  { name: "Arts", icon: <Palette size={18} />, href: "#artworks" },
  { name: "Exhibition", icon: <BookOpen size={18} />, href: "#exhibition" },
  { name: "Gallery", icon: <Images size={18} />, href: "#gallery" },
  { name: "About", icon: <User2 size={18} />, href: "#about" },
  { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed h-14 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#home" className="group flex items-center space-x-2">
              <span
                className={`font-serif text-2xl font-bold ${
                  scrolled ? "text-white" : "text-white"
                }`}
              >
                AMBILI
              </span>
              <span
                className={`h-1 w-1 rounded-full ${
                  scrolled ? "bg-[#C8A456]" : "bg-white"
                }`}
              ></span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center space-x-1 px-2 py-1 text-sm font-bold transition-all duration-300 ${
                    scrolled
                      ? "text-gray-300 hover:text-[#C8A456]"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <span className="h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#C8A456]"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled
                  ? "text-white hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-300 hover:text-[#C8A456] hover:bg-gray-800/50 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
