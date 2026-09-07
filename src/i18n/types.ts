export type Lang = 'en' | 'ru' | 'he';

export type ProjectStats = {
  repo: string;
  url: string;
  desc: string;
  tags: string[];
  stats: true;
};

export type ProjectLive = {
  repo: string;
  url: string;
  desc: string;
  tags: string[];
  stats: false;
  live: string;
};

export type Project = ProjectStats | ProjectLive;

export type DrivingItem = {
  name: string;
  he: string;
  desc: string;
};

export type Job = {
  company: string;
  role: string;
  loc: string;
  period: string;
  bullets: string[];
};

export type Edu = {
  school: string;
  degree: string;
};

export type SiteCopy = {
  dir: 'ltr' | 'rtl';
  nav: { about: string; projects: string; driving: string; resume: string };
  hero: {
    eyebrow: string;
    name: string;
    tagline: string;
    location: string;
    role: string;
  };
  sections: { about: string; projects: string; driving: string; resume: string };
  aboutLong: string[];
  integrations: { heading: string; description: string; privacyLink: string };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    sections: { heading: string; paragraphs: string[] }[];
    revoke: string;
    limitedUse: string;
    contact: string;
  };
  projectsPage: {
    heading: string;
    sub: string;
    stats: { stars: string; forks: string };
    list: Project[];
  };
  driving: {
    heading: string;
    sub: string;
    list: DrivingItem[];
  };
  resume: {
    heading: string;
    sub: string;
    contact: { phone: string; email: string; linkedin: string };
    sections: { education: string; experience: string; skills: string };
    education: Edu[];
    experience: Job[];
    skills: string[];
  };
  modal: {
    close: string;
    inDev: { title: string; message: string };
  };
  footer: { copyright: string; privacy: string };
};
