// Mock data for Lovely Tiwari's portfolio
// TODO: Replace with backend endpoints once integrated

export const profile = {
  name: "Lovely Tiwari",
  firstName: "Lovely",
  lastName: "Tiwari",
  title: "Full Stack Developer",
tagline:
  "Building scalable web, mobile & cloud-powered digital experiences",
  summary:
  "Full Stack Developer with experience building scalable web and mobile applications using React.js, Next.js, Node.js, Python, MongoDB, Firebase, and React Native. Delivered 8+ real-world projects independently, managing complete development lifecycles from planning and architecture to deployment and maintenance. Passionate about creating performant, user-centric digital products with clean architecture and modern technologies.",
longBio:
  "I specialize in developing modern full-stack applications with a strong focus on scalability, performance, and user experience. My expertise spans frontend engineering with React.js and Next.js, backend systems with Node.js and Python, cloud integrations, REST API development, and cross-platform mobile applications using React Native. I enjoy taking ownership of complete projects, solving complex technical challenges, and continuously learning emerging technologies to build impactful digital experiences.",
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
      "Developing scalable full-stack web and mobile applications using React.js, Next.js, Node.js, Python, MongoDB, and Firebase.",
      "Leading complete project lifecycles independently — from requirement analysis and system architecture to deployment and production maintenance.",
      "Building secure REST APIs, real-time systems, admin dashboards, authentication flows, and payment integrations for production-grade applications.",
      "Optimizing application performance, responsiveness, and backend scalability for improved user experience and system reliability.",
      "Collaborating directly with stakeholders and clients to transform business requirements into high-quality digital solutions."
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Python",
      "MongoDB",
      "Firebase",
      "AWS",
      "REST APIs"
    ]
  },

  {
    id: "exp-2",
    company: "GALAS IT Solutions",
    role: "MERN Stack Developer Intern",
    period: "Oct 2024 — Apr 2025",
    location: "Remote",
    current: false,
    bullets: [
      "Worked on MERN stack applications and developed reusable frontend components using React.js.",
      "Implemented authentication systems, API integrations, and responsive user interfaces for client projects.",
      "Integrated Firebase services and optimized MongoDB database queries for improved application performance.",
      "Participated in debugging, feature development, deployment workflows, and collaborative code reviews."
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Firebase",
      "JavaScript"
    ]
  },

  {
    id: "exp-3",
    company: "Acmegrade",
    role: "Student Trainee",
    period: "Apr 2024 — May 2024",
    location: "Gwalior, Madhya Pradesh",
    current: false,
    bullets: [
      "Developed full-stack web applications using HTML, CSS, JavaScript, Bootstrap, Java, and MySQL.",
      "Built responsive user interfaces and implemented backend functionalities for academic projects.",
      "Learned software development workflows, debugging practices, and database design fundamentals."
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Java",
      "MySQL"
    ]
  }
];

// Placeholder projects — user will provide real details later
export const projects = [
  {
    id: "proj-1",
    title: "E-Commerce Order & Shipment Management System",
    category: "Full Stack Web Application",
    description:
      "Developed a production-grade e-commerce order management platform with Shiprocket integration, real-time shipment tracking, AWB generation, COD & prepaid order handling, return management workflows, and admin dashboards. Implemented complete order lifecycle automation with secure APIs and scalable backend architecture.",
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Shiprocket API",
      "Tailwind CSS"
    ]
  },

  {
    id: "proj-2",
    title: "Portfolio & AI Assistant Platform",
    category: "Modern Portfolio Application",
    description:
      "Built a responsive developer portfolio platform with dynamic sections, AI-powered assistant integration, animated UI components, and optimized SEO performance. Designed scalable frontend architecture with reusable components and responsive layouts.",
    tech: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion"
    ]
  },

  {
    id: "proj-3",
    title: "Cross-Platform Mobile App",
    category: "Mobile Application",
    description:
      "Developed a cross-platform mobile application using React Native and Expo with Firebase authentication, real-time database integration, push notifications, and responsive mobile UI. Focused on performance optimization and smooth user experience across Android devices.",
    tech: [
      "React Native",
      "Expo",
      "Firebase",
      "JavaScript",
      "REST APIs"
    ]
  },

  {
    id: "proj-4",
    title: "Admin Dashboard & CRM System",
    category: "Business Management Platform",
    description:
      "Created a scalable admin dashboard and CRM system featuring user management, analytics tracking, proposal workflows, authentication systems, and responsive data tables with filtering and search functionalities.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "Tailwind CSS"
    ]
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
  { label: "Years Experience", value: "1.5+" },
  { label: "Tech Stack Expertise", value: "10+" },
  { label: "Production Deployments", value: "Multiple" }
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
