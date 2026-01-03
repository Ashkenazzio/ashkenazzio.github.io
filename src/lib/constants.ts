import { Github, Linkedin, Mail, LucideIcon } from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    href: 'https://github.com/ashkenazzio',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/ashkenazzio',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:ashkenazzio@gmail.com',
    label: 'Email',
  },
];
