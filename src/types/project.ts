export interface Project {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  link: string;
} 