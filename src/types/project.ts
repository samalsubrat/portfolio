export interface Project {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  technologies?: string[];
  link?: string;
  GLink?: string;
} 