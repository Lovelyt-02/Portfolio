import React from "react";
import { GraduationCap, Award, Languages as LangIcon } from "lucide-react";
import { education, certifications, languages } from "../mock";

const EducationCerts = () => {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <p className="mono text-sm text-cyan-400 mb-3">// 05 — education</p>
          <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Credentials & <span className="gradient-text">growth</span>.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {/* Education */}
          <div className="lg:col-span-2 reveal">
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="h-5 w-5 text-cyan-300" />
              <h3 className="display-font text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.id} className="glass rounded-xl p-5 hover:border-cyan-400/25">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="text-white font-semibold">{e.institute}</h4>
                      <p className="text-sm text-slate-400 mt-0.5">{e.degree}</p>
                    </div>
                    <span className="mono text-xs text-cyan-300/80 whitespace-nowrap">{e.period}</span>
                  </div>
                  <p className="mono text-xs text-slate-500 mt-2">{e.location}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2 mb-5">
                <Award className="h-5 w-5 text-cyan-300" />
                <h3 className="display-font text-xl font-semibold text-white">Certifications</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {certifications.map((c) => (
                  <div key={c.id} className="glass rounded-xl p-4 hover:border-cyan-400/25">
                    <div className="h-9 w-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-3">
                      <Award className="h-4 w-4 text-cyan-300" />
                    </div>
                    <h4 className="text-white font-semibold text-sm leading-snug">{c.title}</h4>
                    <p className="text-xs text-slate-400 mt-1.5">{c.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="reveal">
            <div className="flex items-center gap-2 mb-5">
              <LangIcon className="h-5 w-5 text-cyan-300" />
              <h3 className="display-font text-xl font-semibold text-white">Languages</h3>
            </div>
            <div className="glass rounded-xl p-5 space-y-4">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-200 font-medium text-sm">{l.name}</span>
                    <span className="mono text-xs text-cyan-300/80">{l.level}</span>
                  </div>
                  <div className="h-1 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                      style={{
                        width:
                          l.level === "Native"
                            ? "100%"
                            : l.level === "Professional"
                            ? "85%"
                            : "45%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 glass rounded-xl p-5 neon-border">
              <p className="mono text-xs text-cyan-300 mb-2">// fun fact</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Enjoys turning coffee ☕ + clean code into delightful products that real users love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCerts;
