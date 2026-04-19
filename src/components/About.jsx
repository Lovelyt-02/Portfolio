import React from "react";
import { Code, Cpu, Database, Rocket } from "lucide-react";
import { profile } from "../mock";

const pillars = [
  { Icon: Code, title: "Frontend Craft", desc: "Pixel-precise, responsive UIs with React & Next.js." },
  { Icon: Cpu, title: "Backend Logic", desc: "Secure APIs & business logic with Node.js and Python." },
  { Icon: Database, title: "Data & Cloud", desc: "MongoDB, Firebase and AWS for scalable storage." },
  { Icon: Rocket, title: "Ship to Prod", desc: "Owning the full lifecycle from idea to release." },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal">
            <p className="mono text-sm text-cyan-400 mb-3">// 01 — about</p>
            <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Building <span className="gradient-text">reliable</span> digital products.
            </h2>
            <div className="mt-6 h-px w-20 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>

          <div className="lg:col-span-7 space-y-5 reveal">
            <p className="text-slate-300 text-lg leading-relaxed">
              {profile.summary}
            </p>
            <p className="text-slate-400 leading-relaxed">
              {profile.longBio}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="mono text-xs text-slate-500 uppercase tracking-wider">Based in</p>
                <p className="text-slate-200 mt-1">{profile.location}</p>
              </div>
              <div>
                <p className="mono text-xs text-slate-500 uppercase tracking-wider">Role</p>
                <p className="text-slate-200 mt-1">{profile.title}</p>
              </div>
              <div>
                <p className="mono text-xs text-slate-500 uppercase tracking-wider">Availability</p>
                <p className="text-cyan-300 mt-1">{profile.availability}</p>
              </div>
              <div>
                <p className="mono text-xs text-slate-500 uppercase tracking-wider">Experience</p>
                <p className="text-slate-200 mt-1">{profile.yearsExperience} years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ Icon, title, desc }, idx) => (
            <div
              key={title}
              className="group relative rounded-xl glass p-6 hover:border-cyan-400/30 hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="h-11 w-11 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:bg-cyan-400/15">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="display-font text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{desc}</p>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
