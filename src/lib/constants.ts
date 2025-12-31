export const siteConfig = {
  name: "Tomaz Junior",
  title: "Senior Software Engineer II",
  company: "HubSpot",
  description:
    "Senior Software Engineer at HubSpot. Building web applications with React, TypeScript, and Node.js.",
  links: {
    github: "https://github.com/TomazJunior",
    linkedin: "https://www.linkedin.com/in/tomaz-junior/",
  },
};

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "linkprofile",
    title: "LinkProfile.co",
    description:
      "A link-in-bio service for creators and professionals to share multiple links with a single URL. Build your personal landing page in minutes.",
    url: "https://linkprofile.co",
    image: "/images/projects/linkprofile.png",
  },
  {
    id: "preciosa-detalhes",
    title: "Preciosa Detalhes",
    description:
      "Avatar customization web app for wedding invitations. Create personalized flower girl invitation cards with customizable features like skin, hair, clothes, and accessories.",
    url: "https://personalizacao.preciosadetalhes.com.br",
    image: "/images/projects/preciosa-detalhes.png",
  },
  {
    id: "sweetduo",
    title: "SweetDuo.ie",
    description:
      "Website for SweetDuo, showcasing their products and services with a modern, responsive design.",
    url: "https://sweetduo.ie",
    image: "/images/projects/sweetduo.png",
  },
];

export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const experiences: Experience[] = [
  {
    id: "hubspot-2",
    company: "HubSpot",
    title: "Senior Software Engineer II",
    location: "Dublin, Ireland",
    startDate: "Jan 2022",
    endDate: "Present",
  },
  {
    id: "hubspot-1",
    company: "HubSpot",
    title: "Senior Software Engineer I",
    location: "Dublin, Ireland",
    startDate: "Dec 2019",
    endDate: "Jan 2022",
  },
  {
    id: "accenture",
    company: "Accenture",
    title: "Senior Software Engineer",
    location: "Dublin, Ireland",
    startDate: "Aug 2017",
    endDate: "Nov 2019",
    description:
      "Full Stack development with Microservice/Serverless architecture using Node and AWS Lambda. Angular 4+ frontend applications.",
  },
  {
    id: "distantjob",
    company: "DistantJob",
    title: "Software Developer",
    location: "Remote",
    startDate: "Aug 2015",
    endDate: "Aug 2017",
    description:
      "Web development with NodeJS backend, AngularJS frontend, and MySQL/MongoDB/Redis databases.",
  },
  {
    id: "instituto-atlantico",
    company: "Instituto Atlântico",
    title: "Software Developer",
    location: "Fortaleza, Brazil",
    startDate: "May 2014",
    endDate: "Jul 2015",
    description:
      "HP R&D Team. Front-end with KnockoutJS, back-end with Java/Spring, desktop development with VSTO.",
  },
  {
    id: "fortes",
    company: "Fortes Informática",
    title: "Software Developer",
    location: "Fortaleza, Brazil",
    startDate: "Aug 2010",
    endDate: "May 2014",
    description:
      "ERP development with Delphi and C# (ASP.NET MVC). Transport management and sales quotation systems.",
  },
  {
    id: "proteus",
    company: "Proteus Consultoria",
    title: "Software Developer",
    location: "Fortaleza, Brazil",
    startDate: "Jul 2006",
    endDate: "Aug 2010",
    description:
      "Security asset management applications using C#, VB.NET, and SQL Server.",
  },
  {
    id: "rr-sistemas",
    company: "RR Sistemas",
    title: "Software Developer",
    location: "Fortaleza, Brazil",
    startDate: "Mar 2004",
    endDate: "Jul 2006",
    description:
      "Financial ERP development with VB.NET and C#. Windows and web-based solutions.",
  },
];

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
}

export const education: Education[] = [
  {
    id: "tus",
    school: "Technological University of the Shannon",
    degree: "Master's Degree",
    field: "Software Design with Artificial Intelligence",
    startYear: "2023",
    endYear: "2024",
  },
  {
    id: "fa7",
    school: "Faculdade 7 de Setembro",
    degree: "Specialization",
    field: "Mobile Devices & Computer Science",
    startYear: "2012",
    endYear: "2014",
  },
  {
    id: "fic-systems",
    school: "FIC - Faculdade Integrada do Ceará",
    degree: "Bachelor's Degree",
    field: "System Analysis",
    startYear: "2007",
    endYear: "2011",
  },
  {
    id: "fic-accounting",
    school: "FIC - Faculdade Integrada do Ceará",
    degree: "Technical Degree",
    field: "Accounting",
    startYear: "2002",
    endYear: "2006",
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Java", "Spring", "REST APIs", "GraphQL"],
  },
  {
    name: "Database & Messaging",
    skills: ["DynamoDB", "MongoDB", "Redis", "MySQL", "PostgreSQL", "Kafka"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (Lambda, S3, DynamoDB, SQS, SNS, API Gateway, CloudWatch, IAM)", "Serverless", "Docker", "CI/CD"],
  },
  {
    name: "AI & Machine Learning",
    skills: ["LLMs", "Prompt Engineering", "Claude API", "OpenAI API", "RAG"],
  },
  {
    name: "Testing",
    skills: ["Cypress", "Jest", "Mocha", "Cucumber", "Jasmine"],
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-developer",
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    issueDate: "Jun 2018",
    expirationDate: "Jun 2020",
  },
];

export const navItems = [
  { name: "home.tsx", path: "/" },
  { name: "experience.tsx", path: "/experience" },
  { name: "education.tsx", path: "/education" },
  { name: "skills.tsx", path: "/skills" },
  { name: "projects.tsx", path: "/projects" },
  { name: "contact.tsx", path: "/contact" },
];
