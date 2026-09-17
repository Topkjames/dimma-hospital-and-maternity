export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'maternity' | 'general' | 'diagnostics' | 'emergency';
  icon: string;
  highlights: string[];
  features: string[];
}

export interface DoctorPlaceholder {
  id: string;
  role: string;
  department: string;
  description: string;
  availability: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'maternity' | 'appointments' | 'emergency';
}

export interface HealthArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  department: string;
  reasonForVisit: string;
  message: string;
}

