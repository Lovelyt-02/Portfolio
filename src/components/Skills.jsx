import React, { useEffect, useRef, useState } from "react";
import { skillGroups, techStack } from "../mock";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <p className="mono text-sm text-cyan-400 mb-3">// 02 — skills</p>
          <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            My <span className="gradient-text">toolbox</span>.
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            A curated stack refined across 8+ real-world projects — from building responsive UIs to architecting resilient backends and cross-platform mobile apps.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="glass rounded-2xl p-6 hover:border-cyan-400/25 reveal"
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="display-font text-xl font-semibold text-white">{group.category}</h3>
                <span className="mono text-xs text-cyan-300/80">0{gi + 1}</span>
              </div>
              <div className="space-y-4">
                {group.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-slate-200 font-medium">{s.name}</span>
                      <span className="mono text-xs text-cyan-300/80">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-300 transition-all duration-[1400ms] ease-out"
                        style={{
                          width: visible ? `${s.level}%` : "0%",
                          boxShadow: "0 0 12px rgba(34, 211, 238, 0.4)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 reveal">
          <p className="mono text-xs text-slate-500 uppercase tracking-widest mb-4">// tech I work with</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="mono text-xs px-3 py-1.5 rounded-md border border-slate-700 bg-slate-900/40 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-200 hover:bg-cyan-400/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
