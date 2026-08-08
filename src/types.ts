export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'YouTube' | 'Short Form' | 'Promotional' | 'Music Video' | 'Corporate' | 'Color Grading';
  format: '9:16' | '16:9';
  thumbnail: string;
  videoUrl: string;
  embedType: 'video' | 'youtube';
  youtubeId?: string;
  description: string;
  softwareUsed: string[];
  views?: string;
  turnaroundTime: string;
  beforeGradingImage?: string;
  afterGradingImage?: string;
  featured?: boolean;
  instagramUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  popularFor: string;
}

export interface WhyChooseFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface ToolItem {
  name: string;
  shortCode: string;
  iconBg: string;
  textColor: string;
  description: string;
  category: string;
  proficiency: number;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  footageLink: string;
  message: string;
}
