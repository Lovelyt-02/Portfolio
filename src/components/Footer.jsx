import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../mock";

const Footer = () => {
  const year = new Date().getFullYear();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-slate-800/80 mt-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="display-font text-xl font-semibold">
              <span className="text-white">lovely</span>
              <span className="text-cyan-400">.dev</span>
            </div>
            <p className="mt-3 text-sm text-slate-400 max-w-xs leading-relaxed">
              Full Stack Developer crafting scalable web & mobile experiences from Hyderabad, India.
            </p>
          </div>

          <div>
            <p className="mono text-xs text-slate-500 uppercase tracking-widest mb-3">Quick Links</p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
              {["about", "skills", "experience", "projects", "education", "contact"].map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-slate-300 hover:text-cyan-300 capitalize">
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono text-xs text-slate-500 uppercase tracking-widest mb-3">Connect</p>
            <div className="flex gap-2">
              {[
                { href: profile.github, Icon: Github, label: "GitHub" },
                { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-400/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 mono text-xs text-slate-500">{profile.email}</p>
            <p className="mono text-xs text-slate-500">{profile.phone}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800/70 flex items-center justify-between flex-wrap gap-3">
          <p className="mono text-xs text-slate-500">
            © {year} Lovely Tiwari — Crafted with <span className="text-cyan-300">React</span>,{" "}
            <span className="text-cyan-300">Tailwind</span> & lots of ☕
          </p>
          <button
            onClick={toTop}
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
