export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  image: string;
  technologies: string[];
  duration: string;
  role: string;
  insights: string[];
}

export interface TimelineEvent {
  year: string;
  month: string;
  title: string;
  organization: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 5
  description: string;
  iconImage?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  image: string;
  skills: SkillItem[];
}
