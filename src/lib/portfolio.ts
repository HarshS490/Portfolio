const hero = {
  name: "Harsh Singh",
  description:
    "I am a passionate software engineer with a focus on building innovative solutions.",
  scrollIndicatorText: "Scroll to explore",
  greeting: "Hi, I'm ",
  resumeLink: "https://example.com/resume.pdf",
  connectLink: "#connect",
};

const about = {
  title: "About Me",
  subtitle: "Who I am",
  bio: [
    "I am Harsh Singh , a student at Delhi Technological University (DTU) pursuing my B.Tech in Information Technology. I'm a passionate software engineer with a strong foundation in full-stack web development and a deep curiosity for solving real-world problems through technology.  I have experience of working in JavaScript, TypeScript, React, Next.js, Node.js, MongoDB, and more.",
    "Whether it's building scalable web apps, architecting clean APIs, I thrive on translating ideas into impactful solutions. ",
    "Beyond code, I enjoy sharpening my problem-solving skills through competitive programming, exploring the latest in AI and developer tools, and crafting products that not only function well but also feel great to use.",
  ],
  details: [
    { label: "Location", value: "Delhi, India" },
    { label: "Specialization", value: "Full Stack Developer" },
  ],
  education: [
    {
      degree: "B. Tech.",
      institution: "Delhi Technological University",
      duration: "2022 - Present",
      cgpa: "9.0 / 10.0",
      major: "Information Technology",
    },
  ],
  qualities: [
    {
      title: "Problem Solver",
      description: "I thrive on challenges and enjoy finding solutions.",
      icon: "Rocket",
      gradient: "from-emerald-400 to-blue-500",
    },
    {
      title: "Critical Thinker",
      description:
        "I analyze problems from multiple angles, question assumptions, and make well-reasoned decisions.",
      icon: "Lightbulb",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Team Player",
      description: "I believe in collaboration and teamwork.",
      icon: "Code",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "User-Focused",
      description:
        "I prioritize creating intuitive, accessible experiences that meet real user needs.",
      icon: "BarChart3",
      gradient: "from-pink-400 to-red-500",
    },
  ],
};

const projects = {
  title: "Projects",
  projects: [
    {
      imagedir: "/projects/slidescribe",
      images: [
        "/login-light.png",
        "/dashboard-light.png",
        "/scriptgeneration-light.png",
        "/login-dark.png",
        "/dashboard-dark.png",
      ],
      projectTitle: "SlideScribe",
      date: "2025",
      description:
        "SlideScribe transforms PowerPoint presentations into spoken scripts using AI. Users can upload slides, and the app generates narration-ready content with spaced delivery. Built with seamless Cloudinary integration and optimized for both light and dark themes.",
      repo: "https://github.com/HarshS490/SlideScribe",
      deployment: "https://slide-scribe.vercel.app/dashboard",
      techStack: ["NextJs", "Prisma", "MongoDb", "TailwindCSS", "Cloudinary"],
    },
    {
      imagedir: "/projects/pulsechat",
      images: ["/chatroom.png", "/chats.png", "/userslist.png", "/login.png"],
      projectTitle: "PulseChat",
      date: "2025",
      description:
        "A real-time chat application with private messaging, friend requests, and image sharing. Powered by Redis and Kafka for event-driven architecture, PulseChat supports a responsive and scalable communication experience.",
      repo: "https://github.com/HarshS490/chat-app2.0",
      deployment: "https://pulsechat-five.vercel.app/",
      techStack: [
        "NextJs",
        "Prisma",
        "Postgresql",
        "Redis",
        "kafka",
        "TailwindCSS",
        "Cloudinary",
      ],
    },
    {
      imagedir: "/projects/tasky",
      images: ["/landing-page.png", "/dashboard.png", "/gantt-chart.png"],
      projectTitle: "Tasky",
      date: "2024",
      description:
        "Tasky is a productivity web app that allows users to organize tasks into projects and visualize timelines using Gantt charts. It combines an intuitive UI with advanced scheduling capabilities powered by SyncFusion.",
      repo: "https://github.com/HarshS490/Tasky",
      deployment: "https://tasky-six-roan.vercel.app/",
      techStack: ["NextJs", "Prisma", "MongoDb", "TailwindCSS", "SyncFusion"],
    },
  ],
};

const skills = {
  title: "Technical Skills",
  descritpion:
    "I've gained proficiency in various technologies throughout my career. Here are the key tools and frameworks I use to build exceptional products.",
  techstack: [
    {
      domain: "Frontend",
      skills: ["reactjs", "nextjs", "html5", "css3", "tailwindcss"],
    },
    {
      domain: "Backend",
      skills: [
        "prisma",
        "nodejs",
        "expressjs",
        "mongodb",
        "postgresql",
        "redis",
        "socketio",
        "docker",
      ],
    },
    {
      domain: "Tools",
      skills: ["vscode", "git", "github", "postman"],
    },
    {
      domain: "Programming Languages",
      skills: ["c/c++", "python", "javascript", "typescript"],
    },
  ],
};

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "Harsh103",
    profileUrl: "https://leetcode.com/u/Harsh103",
    rating: 1868,
    maxRating: 1868,
    rank: 0,
    globalRank: 0,
    problemSolved: 920,
    contests: 46,
    title: "Knight",
    top: 5,
  },
  {
    platform: "Codeforces",
    username: "Harsh103",
    profileUrl: "https://leetcode.com/u/Harsh103",
    rating: 1216,
    maxRating: 1262,
    rank: 0,
    globalRank: 0,
    problemSolved: 245,
    contests: 39,
    title: "Pupil",
  },
  {
    platform: "CodeChef",
    username: "Harsh103",
    profileUrl: "https://leetcode.com/u/Harsh103",
    rating: 1687,
    maxRating: 1687,
    rank: 0,
    globalRank: 0,
    problemSolved: 77,
    title: "3*",
    contests: 15,
    stars: 3,
  },
];

const socials = [
  {
    platform: "linkedin",
    link: "https://www.linkedin.com/in/harshsingh1104/",
  },
  {
    platform: "github",
    link: "https://github.com/HarshS490",
  },
  {
    platform: "email",
    link: "mailto:harshs.3004@gmail.com",
  },
];

export const portFolioConfig = {
  navBar: {
    navLinks: ["Home", "About", "Skills", "Projects", "Contact"],
  },
  hero,
  about,
  projects,
  skills,
  codingProfiles,
  socials,
};
