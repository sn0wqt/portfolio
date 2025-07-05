export const portfolioData = {
  name: "Asaad F. Rasul",
  contact: {
    location: "Sulaymaniyah, Iraq",
    phone: "+964 770 012 4848",
    email: "asadfalah2@gmail.com",
    portfolio: "sn0wqt.github.io",
    github: "github.com/sn0wqt",
    linkedin: "linkedin.com/in/asaad-f-rasul",
  },
  education: [
    {
      degree: "M.Sc. in Data Science",
      institution: "University of Graz, Austria",
      period: "Oct 2024 – Present",
      details: "Advanced coursework in machine learning algorithms, statistical modeling, big-data architectures and cloud analytics; co-authoring a study on deep-learning approaches to time-series forecasting.",
    },
    {
      degree: "B.Sc. in Software Engineering",
      institution: "American University of Iraq, Sulaimani",
      period: "Sep 2019 – Jun 2024",
      details: "Cumulative GPA: 3.16/4.00; President's Honor Award for final-semester GPA of 3.82. Led capstone project ArchiEstate, developing end-to-end backend services for a property-management portal with live data synchronization across clients and optimized caching for performance under concurrent load.",
    },
  ],
  languages: [
    { name: "Kurdish", proficiency: "Native" },
    { name: "English", proficiency: "IELTS 8.0" },
    { name: "Arabic", proficiency: "Intermediate" },
    { name: "German", proficiency: "Basic" },
  ],
  coreSkills: {
    languages: ["Java", "JavaScript/TypeScript", "Python", "C/C++", "Objective-C", "HTML/CSS", "Assembly"],
    frameworks: ["Spring Boot", "Node.js/Express", "React", "Zod", "MySQL/Sequelize", "MongoDB", "WebSocket APIs"],
    infrastructure: ["Linux/Unix", "Git/GitHub", "Docker", "AWS", "Google Cloud APIs"],
    specialties: ["Scalable backend architecture", "API design", "Automation scripting", "Reverse engineering", "Real-time feature implementation"],
  },
  professionalExperience: [
    {
      role: "Backend Engineer",
      company: "Architech Iraq",
      period: "Feb 2024 – Sep 2024",
      responsibilities: [
        "Designed and built microservices in Spring Boot and TypeScript to support new mobile and web features.",
        "Integrated a publish/subscribe mechanism for live notifications and order updates, reducing client-perceived latency and server load.",
        "Optimized database schemas and complex queries in MySQL/Sequelize, improving throughput by over 50%.",
      ],
    },
    {
      role: "HR & Development Intern",
      company: "IQ Group",
      period: "Jul 2023 – Sep 2023",
      responsibilities: [
        "Automated HR document workflows with Python, cutting manual processing time by 30%.",
        "Employed Google Cloud Vision and Sheets APIs to extract, validate, and report on incoming data at scale.",
      ],
    },
    {
      role: "Cheats Developer",
      company: "iOSGods (Remote)",
      period: "2014 – 2020",
      responsibilities: [
        "Developed runtime patches and modmenus for iOS games in C++, Assembly, Objective-C, and Logos.",
        "Reverse-engineered application binaries to locate injection points and implement undetectable hooks.",
      ],
    },
  ],
  selectedProjects: [
    {
      title: "Archimenus",
      description: "Backend for restaurant-menu management; implemented live menu updates and efficient data caching to support thousands of simultaneous clients.",
      tags: ["Java", "Spring Boot", "Backend"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Fruj Fresh",
      description: "Order-processing backend for a produce-market mobile app; designed idempotent RESTful APIs and transaction-safe database operations under peak traffic.",
      tags: ["Java", "Spring Boot", "Backend"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "ArchiEstate",
      description: "Full-stack property-management portal (MERN + Tailwind); built server-side validation, role-based access controls, and live synchronization of listings and alerts.",
      tags: ["Full-Stack", "TypeScript", "React", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "PrivacyFreak Bot",
      description: "Telegram bot that removes EXIF metadata from user-uploaded images; implemented secure file handling and concurrent processing queues in Java.",
      tags: ["Java", "Bots", "Backend"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Uncle Movies v2 (Discord)",
      description: "Python bot managing community watch-lists with cinemagoer-based metadata queries.",
      tags: ["Python", "Bots", "Backend"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ],
  certifications: [
    {
      name: "CS50's Introduction to Programming with Python",
      institution: "Harvard University",
      date: "Feb 2025",
    },
    {
      name: "CS50's Introduction to Computer Science",
      institution: "Harvard University",
      date: "Apr 2025",
    },
  ],
};
