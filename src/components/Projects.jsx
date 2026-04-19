import React from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "../mock";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 reveal">
          <div className="max-w-2xl">
            <p className="mono text-sm text-cyan-400 mb-3">// 04 — projects</p>
            <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Selected <span className="gradient-text">work</span>.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Detailed case studies coming soon. Each project was shipped end-to-end with a focus on performance, clean architecture and delightful UX.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="group relative rounded-2xl glass overflow-hidden hover:border-cyan-400/30 hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Visual header */}
              <div className="relative h-44 overflow-hidden border-b border-slate-800/80">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(circle at 80% 80%, rgba(14,165,233,0.18), transparent 60%), linear-gradient(135deg, #0b1220 0%, #0a0e18 100%)",
                  }}
                />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="mono text-6xl font-bold text-cyan-300/20 group-hover:text-cyan-300/40 transition">
                    0{i + 1}
                  </div>
                </div>
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/70 border border-cyan-400/25">
                  <Sparkles className="h-3 w-3 text-cyan-300" />
                  <span className="mono text-[10px] text-cyan-200 uppercase tracking-wider">{p.category}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="display-font text-xl font-semibold text-white group-hover:text-cyan-200">
                    {p.title}
                  </h3>
                  {p.placeholder && (
                    <span className="mono text-[10px] px-2 py-0.5 rounded-full border border-slate-700 text-slate-400">
                      TBA
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="mono text-[11px] px-2 py-1 rounded bg-cyan-400/5 border border-cyan-400/15 text-cyan-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <button
                    disabled={p.placeholder}
                    className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 disabled:text-slate-500 disabled:cursor-not-allowed"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </button>
                  <span className="text-slate-700">•</span>
                  <button
                    disabled={p.placeholder}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-200 disabled:text-slate-500 disabled:cursor-not-allowed"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="mono text-xs text-slate-500">// more projects coming soon — stay tuned</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
