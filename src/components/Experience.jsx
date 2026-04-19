import React from "react";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "../mock";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <p className="mono text-sm text-cyan-400 mb-3">// 03 — experience</p>
          <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Career <span className="gradient-text">journey</span>.
          </h2>
        </div>

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-5 lg:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-slate-700 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative grid lg:grid-cols-2 gap-8 items-start reveal`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 top-2">
                  <span className="relative flex h-3.5 w-3.5">
                    {exp.current && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70 animate-ping" />
                    )}
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-cyan-400 border-4 border-slate-950" />
                  </span>
                </div>

                {/* Card — alternating side on desktop */}
                <div className={`pl-14 lg:pl-0 ${i % 2 === 0 ? "lg:pr-14" : "lg:col-start-2 lg:pl-14"}`}>
                  <div className="glass rounded-2xl p-6 hover:border-cyan-400/25 hover:-translate-y-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span className="mono text-xs text-cyan-300/80">{exp.period}</span>
                      {exp.current && (
                        <span className="mono text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className="display-font text-xl font-semibold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-3 text-sm text-slate-400 mt-1.5">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {exp.location}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                          <span className="text-cyan-400 mt-1.5">▪</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="mono text-[11px] px-2 py-1 rounded bg-slate-900/60 border border-slate-700 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
