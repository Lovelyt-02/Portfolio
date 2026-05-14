import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Computer, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import { profile } from "../mock";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill in all fields to send your message." });
      return;
    }
    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: profile.name,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thanks! I've received your message and will get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Submission failed",
        description: "Something went wrong while sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const items = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: MapPin, label: "Location", value: profile.location, href: "#" },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl reveal">
          <p className="mono text-sm text-cyan-400 mb-3">// 06 — contact</p>
          <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Let&apos;s build <span className="gradient-text">something</span>.
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            Have a project in mind, a role to fill, or just want to say hi? Drop a message — I reply within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4 reveal">
            {items.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 glass rounded-xl p-5 hover:border-cyan-400/30 hover:-translate-y-0.5"
              >
                <div className="h-11 w-11 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                  <Icon className="h-4.5 w-4.5 text-cyan-300" />
                </div>
                <div className="flex-1">
                  <p className="mono text-[11px] text-slate-500 uppercase tracking-wider">{label}</p>
                  <p className="text-slate-200 text-sm mt-0.5 group-hover:text-cyan-200">{value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-cyan-300" />
              </a>
            ))}

            <div className="glass rounded-xl p-5">
              <p className="mono text-[11px] text-slate-500 uppercase tracking-wider mb-3">Socials</p>
              <div className="flex gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200 hover:bg-cyan-400/5"
                >
                  <Computer className="h-4 w-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200 hover:bg-cyan-400/5"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-2xl p-6 reveal space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="mono text-xs text-slate-400 uppercase tracking-wider">Name</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className="mt-2 bg-slate-900/60 border-slate-700 focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400/60 text-slate-100 placeholder:text-slate-500"
                />
              </div>
              <div>
                <label className="mono text-xs text-slate-400 uppercase tracking-wider">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@domain.com"
                  className="mt-2 bg-slate-900/60 border-slate-700 focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400/60 text-slate-100 placeholder:text-slate-500"
                />
              </div>
            </div>
            <div>
              <label className="mono text-xs text-slate-400 uppercase tracking-wider">Message</label>
              <Textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                placeholder="Tell me about your project…"
                className="mt-2 bg-slate-900/60 border-slate-700 focus-visible:ring-cyan-400/50 focus-visible:border-cyan-400/60 text-slate-100 placeholder:text-slate-500 resize-none"
              />
            </div>
            <div className="flex items-center justify-between gap-3 pt-2">
              <p className="mono text-[11px] text-slate-500">Avg response time: ~6h</p>
              <Button
                type="submit"
                disabled={sending}
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg px-5 h-11 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                {sending ? "Sending…" : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
