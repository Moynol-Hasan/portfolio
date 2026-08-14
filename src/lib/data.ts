export const profile = {
  name: "Md. Moynol Hasan Ome",
  role: "Software Engineer",
  tagline: "Frontend Engineer — React.js & Next.js",
  location: "Dhaka, Bangladesh",
  phone: "01835930726",
  email: "ome3953@gmail.com",
  avatar: "/ome.jpg",
  resumeUrl: "/resume/Md_Moynol_Hasan_Ome_Resume.pdf",
  resumeName: "Md_Moynol_Hasan_Ome_Resume.pdf",
  summary:
    "Software Engineer at Polygon Technology with over 2.5 years of experience in frontend development, specializing in React.js and Next.js. Strong foundation in data structures and algorithms, with a track record of solving 2000+ problems across competitive programming platforms. Passionate about building scalable, user-focused applications and delivering clean, maintainable code.",
  socials: {
    linkedin: "https://linkedin.com/in/md-moynol-hasan-ome",
    github: "https://github.com/Moynol-Hasan",
  },
} as const;

export const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "2000+", label: "Problems Solved" },
  { value: "3+", label: "SaaS Products" },
  { value: "3★", label: "CodeChef Coder" },
] as const;

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C", "C++", "Java", "JavaScript", "TypeScript"] },
  { group: "Core Concepts", items: ["Data Structures & Algorithms", "OOP"] },
  {
    group: "Web Development",
    items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React.js", "Next.js"],
  },
  { group: "State Management", items: ["Redux"] },
  { group: "Version Control", items: ["Git", "GitHub"] },
  { group: "Database", items: ["Oracle SQL"] },
  { group: "Containerization", items: ["Docker"] },
];

export const experience = [
  {
    company: "Polygon Technology",
    role: "Software Engineer",
    location: "Dhaka, Bangladesh",
    period: "Jan 2024 - Present",
    points: [
      "Contributed to a Phishing Simulation Platform, a SaaS product improving employee cybersecurity awareness through simulated phishing campaigns.",
      "Built the complete frontend of the official Bangladesh National Parliament (Jatiya Sangsad) website — a public government portal.",
      "Built a Visitor Management System (VMS) — a SaaS solution enabling organizations to manage and track visitor access efficiently.",
      "Worked on Shukhee, an e-health platform by Grameen Digital Healthcare Solutions, enhancing the frontend for a smoother, more responsive experience.",
      "Developed an Energy Monitoring System, an IoT-based solution for real-time tracking and visualization of energy consumption.",
    ],
  },
  {
    company: "University of Information Technology and Sciences",
    role: "Competitive Programming Mentor",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 - Dec 2023",
    points: [
      "Trained junior students in programming, teaching the fundamentals from the ground up.",
      "Mentored and guided them through competitive programming — problem-solving strategies, data structures, and algorithms.",
      "Helped juniors build confidence and improve their standings in university programming contests.",
    ],
  },
];

export type Project = {
  name: string;
  org: string;
  url?: string;
  tags: string[];
  points: string[];
};

export const projects: Project[] = [
  {
    name: "Cyberwise",
    org: "Polygon Technology",
    tags: ["SaaS", "React.js", "LMS", "Smishing", "In Production"],
    points: [
      "Built a cybersecurity-awareness SaaS that runs simulated phishing and smishing (SMS) campaigns and tracks how employees respond.",
      "Live in production across 3+ renowned banks in Bangladesh for real-world security-awareness programs.",
      "Added a built-in Learning Management System with training modules, plus customizable templates, campaign scheduling, and analytics dashboards.",
    ],
  },
  {
    name: "Bangladesh National Parliament",
    org: "Polygon Technology",
    url: "https://www.parliament.gov.bd/",
    tags: ["Government", "Next.js", "Frontend", "Responsive", "Live"],
    points: [
      "Built the entire frontend of the official Bangladesh National Parliament website by myself.",
      "Created the pages for Members of Parliament, committees, parliament sessions, history, and news.",
      "Made the whole site responsive and fast, so it works well on phones, tablets, and desktops.",
    ],
  },
  {
    name: "Visitor Management System",
    org: "Polygon Technology",
    tags: ["SaaS", "Cloud", "Dashboards"],
    points: [
      "Created a cloud-based Visitor Management System replacing manual sign-in with a digital, secure workflow.",
      "Reduced administrative overhead by automating visitor approvals, notifications, and access logging.",
      "Improved workplace security and transparency with live dashboards and audit trail features.",
    ],
  },
  {
    name: "Shukhee",
    org: "Polygon Technology",
    tags: ["e-Health", "Frontend", "Accessibility"],
    points: [
      "Contributed to Shukhee, an e-health platform by Grameen Digital Healthcare Solutions, enhancing frontend architecture for performance and usability.",
      "Improved UI responsiveness and accessibility for a smoother experience across devices for patients and providers.",
      "Collaborated closely with designers and backend teams to implement user-centric features.",
    ],
  },
  {
    name: "Energy Monitoring System",
    org: "Polygon Technology",
    tags: ["IoT", "Real-time", "Data Viz"],
    points: [
      "Architected and deployed an IoT-based Energy Monitoring System for continuous, real-time collection of power usage data.",
      "Designed intuitive dashboards and customizable visualizations showing consumption trends, peak loads, and cost projections.",
    ],
  },
];

export const competitive = [
  {
    platform: "Codeforces",
    handle: "Moynol_Ome",
    rank: "Pupil",
    rating: "1318",
    url: "https://codeforces.com/profile/Moynol_Ome",
  },
  {
    platform: "CodeChef",
    handle: "ome_1256",
    rank: "3★ Coder",
    rating: "1657",
    url: "https://codechef.com/users/ome_1256",
  },
  {
    platform: "LeetCode",
    handle: "moynol_hasan_ome",
    rank: "Top 30.57%",
    rating: "1555",
    url: "https://leetcode.com/u/moynol_hasan_ome/",
  },
];

export const achievements = [
  "4th Place — Solo Intra-University Victory Day Programming Contest, 2022",
  "5th Place — UITS Inter-University Collaboration Programming Contest 2022 (with BUBT & IUBAT)",
  "7th Place — Intra-University Programming Contest, 2022",
  "24th Place — EDU Inter-University Programming Contest, 2022",
];

export const certifications = [
  "Top 10 in YCPC conducted by Phitron",
  "Proggy Buggy 2023 (International Programming Contest)",
  "Proggy Buggy 2022 (International Programming Contest)",
];

export type Education = {
  level: string;
  period: string;
  title: string;
  school: string;
  points: string[];
  coursework?: string[];
};

export const education: Education[] = [
  {
    level: "Bachelor's Degree",
    period: "2020 - 2023",
    title: "Information Technology (IT)",
    school: "University of Information Technology and Sciences",
    points: [
      "Maintained above 3.50 CGPA in every semester.",
      "Actively attended intra-university programming contests.",
      "Introduced freshers and juniors to competitive programming and helped them grow their skills.",
    ],
    coursework: [
      "Object Oriented Programming",
      "Databases",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Data Mining",
      "Advanced DSA",
    ],
  },
  {
    level: "Higher Secondary",
    period: "2017 - 2019",
    title: "Higher Secondary Certificate (HSC)",
    school: "Shaheed Bir Bikram Ramijuddin Cantonment College, Dhaka",
    points: [
      "Passed HSC with GPA 5.00.",
      "Built a strong base in physics and mathematics.",
      "Studied English language and literature.",
    ],
  },
  {
    level: "Secondary School",
    period: "2015 - 2016",
    title: "Secondary School Certificate (SSC)",
    school: "B.B.M High School & College",
    points: [
      "Passed SSC with GPA 5.00.",
      "Built a strong base in physics and mathematics.",
      "Studied English language and literature.",
    ],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Coding", href: "#competitive" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
