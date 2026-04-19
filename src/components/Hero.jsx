import React, { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { profile, stats, techStack } from "../mock";

const roles = [
  "Full Stack Developer",
  "React & Next.js Expert",
  "MERN Stack Engineer",
  "React Native Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3.5 py-1.5 mb-6 fade-in-up">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              <span className="text-xs font-medium text-cyan-200">Available for new projects</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
            </div>

            <p className="mono text-sm text-cyan-300/80 mb-4 fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              {"<"} Hi there, I am /{">"}
            </p>
            <h1 className="display-font text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] tracking-tight mb-5 fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
              <span className="gradient-text-muted">{profile.firstName}</span>{" "}
              <span className="gradient-text">{profile.lastName}</span>
            </h1>

            <div className="h-10 mb-6 fade-in-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
              <p className="mono text-xl sm:text-2xl text-slate-300">
                <span className="text-cyan-400">&gt;</span> {text}
                <span className="inline-block w-[3px] h-6 bg-cyan-400 ml-1 blink align-middle" />
              </p>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 fade-in-up" style={{ animationDelay: "0.35s", opacity: 0 }}>
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-3 mb-10 fade-in-up" style={{ animationDelay: "0.45s", opacity: 0 }}>
              <Button
                onClick={() => scrollTo("projects")}
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-xl px-6 h-12 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="rounded-xl px-6 h-12 border-cyan-400/30 bg-transparent text-cyan-100 hover:bg-cyan-400/10 hover:text-white hover:border-cyan-400/60"
              >
                <Mail className="mr-2 h-4 w-4" /> Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-4 fade-in-up" style={{ animationDelay: "0.55s", opacity: 0 }}>
              <span className="mono text-xs text-slate-500">FIND ME ON</span>
              <div className="h-px w-10 bg-slate-700" />
              <div className="flex items-center gap-2">
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
                    className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-400/5 hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: code card */}
          <div className="lg:col-span-5">
            <div className="relative scale-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/30 via-cyan-600/10 to-transparent rounded-2xl blur-xl" />
              <div className="relative rounded-2xl glass-strong neon-border overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="mono text-xs text-slate-500">profile.ts</span>
                </div>
                <pre className="mono text-[13px] leading-relaxed p-5 text-slate-300 overflow-x-auto">
{`const developer = {
  name: "Lovely Tiwari",
  role: "Full Stack Developer",
  location: "Hyderabad, IN",
  stack: ["React", "Next.js",
    "Node.js", "Python",
    "MongoDB", "AWS"],
  currentlyBuilding: "Scalable
    web & mobile apps @ SJ",
  passion: "Clean systems +
    great UX",
  status: "`}<span className="text-cyan-300">{`available`}</span>{`",
};`}
                </pre>
                <div className="border-t border-slate-800/80 px-5 py-3 flex flex-wrap gap-1.5">
                  {techStack.slice(0, 8).map((t) => (
                    <span key={t} className="mono text-[11px] px-2 py-1 rounded bg-cyan-400/5 text-cyan-200 border border-cyan-400/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-5 hover:border-cyan-400/30">
              <div className="display-font text-3xl sm:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
