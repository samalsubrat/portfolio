export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  GLink?: string;
  technologies?: string[];
  image: {
    url: string;
    alt: string;
  };
} 