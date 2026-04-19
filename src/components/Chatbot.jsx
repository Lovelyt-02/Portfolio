import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { chatbotIntro, mockChatReply, profile } from "../mock";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: chatbotIntro.greeting },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text) => {
    const q = (text || input).trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    // MOCKED reply — replace with real API call later
    setTimeout(() => {
      const reply = mockChatReply(q);
      setMessages((m) => [...m, { from: "bot", text: reply }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:bg-cyan-300 hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75 animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300" />
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] rounded-2xl glass-strong neon-border flex flex-col overflow-hidden scale-in">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800/80 bg-slate-950/50">
            <div className="relative">
              <div className="h-9 w-9 rounded-lg bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center">
                <Bot className="h-4 w-4 text-cyan-300" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-slate-950" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white leading-tight">Lovely&apos;s AI Assistant</p>
              <p className="mono text-[10px] text-cyan-300/80 mt-0.5">
                <Sparkles className="inline h-2.5 w-2.5 mr-1" />
                powered by AI — online
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/5"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${m.from === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`h-7 w-7 rounded-md flex-shrink-0 flex items-center justify-center ${
                    m.from === "user"
                      ? "bg-slate-800 text-slate-200"
                      : "bg-cyan-400/15 border border-cyan-400/25 text-cyan-300"
                  }`}
                >
                  {m.from === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                </div>
                <div
                  className={`max-w-[78%] text-sm leading-relaxed px-3.5 py-2.5 rounded-xl ${
                    m.from === "user"
                      ? "bg-cyan-400 text-slate-950 rounded-tr-sm"
                      : "bg-slate-900/80 border border-slate-800 text-slate-200 rounded-tl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-2.5">
                <div className="h-7 w-7 rounded-md bg-cyan-400/15 border border-cyan-400/25 text-cyan-300 flex items-center justify-center">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="bg-slate-900/80 border border-slate-800 px-3.5 py-3 rounded-xl rounded-tl-sm flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-bounce" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-bounce" style={{ animationDelay: "0.15s" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-bounce" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {chatbotIntro.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[11px] px-2.5 py-1.5 rounded-full bg-cyan-400/5 border border-cyan-400/20 text-cyan-200 hover:bg-cyan-400/10"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-slate-800/80 p-3 flex items-center gap-2 bg-slate-950/50"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="flex-1 bg-slate-900/70 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="h-9 w-9 rounded-lg bg-cyan-400 text-slate-950 flex items-center justify-center disabled:opacity-40 hover:bg-cyan-300"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="mono text-[10px] text-slate-600 text-center pb-2">
            // demo assistant — real LLM integration coming soon
          </p>
        </div>
      )}
    </>
  );
};

export default Chatbot;
