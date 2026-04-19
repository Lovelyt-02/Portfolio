// Mock data for Lovely Tiwari's portfolio
// TODO: Replace with backend endpoints once integrated

export const profile = {
  name: "Lovely Tiwari",
  firstName: "Lovely",
  lastName: "Tiwari",
  title: "Full Stack Developer",
  tagline: "Crafting scalable web & mobile experiences",
  summary:
    "Full Stack Developer with hands-on experience delivering scalable web and mobile applications across 8+ real-world projects. Currently at SJ Medialabs, I specialize in end-to-end solutions using modern JavaScript and Python ecosystems — leading projects independently from concept to deployment with strong ownership and accountability.",
  longBio:
    "I enjoy transforming ideas into reliable digital products, architecting clean and maintainable systems, and continuously learning modern technologies to deliver impactful user experiences. My focus spans responsive UI engineering, secure API design, real-time systems and cross-platform mobile apps.",
  location: "Hyderabad, Telangana, India",
  email: "lovelyt7989@gmail.com",
  phone: "+91 7898748290",
  github: "https://github.com/Lovelyt-02",
  linkedin: "https://www.linkedin.com/in/lovely-tiwari-976b14228",
  availability: "Open to full-time & freelance opportunities",
  yearsExperience: "1.5+",
  projectsDelivered: "8+",
  stacksMastered: "10+"
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const skillGroups = [
  {
    category: "Frontend",
    accent: "cyan",
    items: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 93 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    category: "Backend",
    accent: "cyan",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "Express.js", level: 86 },
      { name: "REST APIs", level: 90 },
      { name: "Java", level: 70 }
    ]
  },
  {
    category: "Database & Cloud",
    accent: "cyan",
    items: [
      { name: "MongoDB", level: 88 },
      { name: "Firebase", level: 84 },
      { name: "MySQL", level: 78 },
      { name: "AWS", level: 72 }
    ]
  },
  {
    category: "Mobile & Tools",
    accent: "cyan",
    items: [
      { name: "React Native (Expo)", level: 84 },
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Responsive Design", level: 92 }
    ]
  }
];

export const techStack = [
  "React", "Next.js", "Node.js", "Python", "MongoDB",
  "Firebase", "React Native", "AWS", "Express", "Tailwind",
  "Java", "MySQL", "Bootstrap", "Git"
];

export const experiences = [
  {
    id: "exp-1",
    company: "SJ Media Labs Pvt Ltd",
    role: "Full Stack Developer",
    period: "Aug 2025 — Present",
    location: "Greater Hyderabad Area",
    current: true,
    bullets: [
      "Architect and ship end-to-end web & mobile applications using React, Next.js, Node.js and Python.",
      "Own complete project lifecycle — requirement analysis, system design, development, testing and production release.",
      "Build scalable MongoDB/Firebase backends and performant REST APIs powering real-time user experiences.",
      "Collaborate directly with stakeholders to translate product ideas into reliable, maintainable systems."
    ],
    tech: ["React", "Next.js", "Node.js", "Python", "MongoDB", "AWS"]
  },
  {
    id: "exp-2",
    company: "GALAS IT Solutions",
    role: "MERN Stack Developer Intern",
    period: "Oct 2024 — Apr 2025",
    location: "Remote",
    current: false,
    bullets: [
      "Developed production-grade MERN stack features across multiple client projects.",
      "Built reusable React component libraries and authentication flows using JWT & Firebase.",
      "Integrated third-party APIs and optimized MongoDB queries for high-traffic endpoints.",
      "Participated in code reviews, sprint planning and CI/CD deployments."
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Firebase"]
  },
  {
    id: "exp-3",
    company: "Acmegrade",
    role: "Student Trainee",
    period: "Apr 2024 — May 2024",
    location: "Gwalior, Madhya Pradesh",
    current: false,
    bullets: [
      "Designed and developed full-stack websites using HTML, CSS, JavaScript & Bootstrap.",
      "Implemented backend logic with Java and relational data models using MySQL.",
      "Completed structured training in modern web development workflows."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "Java"]
  }
];

// Placeholder projects — user will provide real details later
export const projects = [
  {
    id: "proj-1",
    title: "Coming Soon",
    category: "Full Stack",
    description:
      "Project details will be added shortly. Showcasing production work built with the MERN stack and modern cloud infrastructure.",
    tech: ["React", "Node.js", "MongoDB"],
    placeholder: true
  },
  {
    id: "proj-2",
    title: "Coming Soon",
    category: "Mobile App",
    description:
      "Cross-platform mobile application built with React Native & Expo. Details being added.",
    tech: ["React Native", "Expo", "Firebase"],
    placeholder: true
  },
  {
    id: "proj-3",
    title: "Coming Soon",
    category: "Next.js SaaS",
    description:
      "Server-rendered SaaS application with Next.js, Python backend and scalable cloud deployment.",
    tech: ["Next.js", "Python", "AWS"],
    placeholder: true
  }
];

export const education = [
  {
    id: "edu-1",
    institute: "Jiwaji University",
    degree: "Bachelor of Engineering — Computer Software Engineering",
    period: "Jul 2021 — Jun 2025",
    location: "India"
  },
  {
    id: "edu-2",
    institute: "Saraswati Higher Secondary School",
    degree: "Higher Secondary (Science, Mathematics)",
    period: "2019 — 2020",
    location: "Krishnanagar, Satna"
  }
];

export const certifications = [
  {
    id: "cert-1",
    title: "Full Stack Development — Java",
    issuer: "Core Java, Advanced Java & Android Development"
  },
  {
    id: "cert-2",
    title: "AI Tools Certification",
    issuer: "Modern AI workflow & tooling"
  },
  {
    id: "cert-3",
    title: "Web Development",
    issuer: "Full-stack web fundamentals"
  }
];

export const languages = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Telugu", level: "Elementary" }
];

export const stats = [
  { label: "Projects Delivered", value: "8+" },
  { label: "Tech Stacks", value: "10+" },
  { label: "Client Satisfaction", value: "100%" },
  { label: "Years Coding", value: "3+" }
];

// Chatbot mock responses — will be replaced by backend LLM endpoint
export const chatbotIntro = {
  greeting:
    "Hey! I'm Lovely's AI assistant. Ask me about her skills, experience, projects or how to hire her.",
  suggestions: [
    "What are Lovely's top skills?",
    "Tell me about her experience",
    "How can I contact her?",
    "What tech stack does she use?"
  ]
};

export const mockChatReply = (message) => {
  const m = message.toLowerCase();
  if (m.includes("skill") || m.includes("stack") || m.includes("tech"))
    return "Lovely works across the full stack — React, Next.js, Node.js, Python, MongoDB, Firebase and React Native. She's shipped 8+ production projects end-to-end.";
  if (m.includes("experience") || m.includes("work") || m.includes("job"))
    return "She's currently a Full Stack Developer at SJ Media Labs (Aug 2025 — Present), previously a MERN intern at GALAS IT Solutions and a trainee at Acmegrade.";
  if (m.includes("contact") || m.includes("hire") || m.includes("email") || m.includes("reach"))
    return "You can reach Lovely at lovelyt7989@gmail.com or +91 7898748290. She's based in Hyderabad and open to full-time & freelance roles.";
  if (m.includes("project"))
    return "Lovely has delivered 8+ real-world projects spanning web apps, SaaS platforms and React Native mobile apps. Detailed case studies are being added to the portfolio.";
  if (m.includes("education") || m.includes("degree") || m.includes("study"))
    return "She holds a B.E. in Computer Software Engineering from Jiwaji University (2021—2025).";
  if (m.includes("hello") || m.includes("hi") || m.includes("hey"))
    return "Hey there! Great to meet you. What would you like to know about Lovely?";
  return "Thanks for reaching out! I'm a demo assistant right now — the live AI chat will be wired up shortly. Meanwhile, scroll through the portfolio or drop Lovely an email at lovelyt7989@gmail.com.";
};
