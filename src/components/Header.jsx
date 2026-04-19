import React, { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { navItems, profile } from "../mock";
import { Button } from "./ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
      const y = window.scrollY + 140;
      for (const s of sections) {
        if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 group"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 neon-border">
              <Code2 className="h-4 w-4 text-cyan-300" />
              <span className="absolute inset-0 rounded-lg pulse-glow" />
            </span>
            <span className="display-font text-lg font-semibold tracking-tight">
              <span className="text-white">lovely</span>
              <span className="text-cyan-400">.dev</span>
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition ${
                    active === item.id
                      ? "text-cyan-300"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg px-5"
            >
              Hire Me
            </Button>
          </div>

          <button
            className="lg:hidden text-slate-200 p-2"
            onClick={() => setOpen(!open)}
            aria-label="toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong p-3 scale-in">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                      active === item.id
                        ? "text-cyan-300 bg-cyan-400/5"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  onClick={() => scrollTo("contact")}
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg"
                >
                  Hire Me
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
