import { Project } from '@/types/project';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
console.log('Using Strapi URL:', STRAPI_URL);

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/projects?populate=*`, {
      next: { revalidate: 60 }, // Revalidate every minute
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();

    if (!data.data || !Array.isArray(data.data)) {
      console.error('Unexpected data structure:', data);
      return [];
    }

    return data.data.map((item: any) => ({
      id: item.id,
      title: item.Title,
      description: item.Description,
      image: {
        url: item.Image?.[0]?.url 
          ? `${STRAPI_URL}${item.Image[0].url}`
          : '/placeholder.png',
        alt: item.Title,
      },
      link: item.Link,
      GLink: item.GLink || item.github_link || item.githubLink || item.GithubLink,
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export interface AboutData {
  name: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  available: boolean;
  resume: {
    url: string;
    name: string;
  } | null;
}

export async function getAbout(): Promise<AboutData> {
  try {
    const url = `${STRAPI_URL}/api/abouts?populate=*`;
    
    const response = await fetch(url, {
      next: { revalidate: 60 },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch about data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.data) {
      throw new Error('No about data found in response');
    }

    // Get the first about entry
    const item = Array.isArray(data.data) ? data.data[0] : data.data;
    if (!item) {
      throw new Error('No about data found in response');
    }

    // Use attributes if available, otherwise assume attributes are directly on the item
    const itemAttributes = item.attributes || item;

    if (!itemAttributes || typeof itemAttributes !== 'object') {
       throw new Error('Invalid about data structure');
    }

    const mappedData = {
      name: itemAttributes?.Name || 'Subrat',
      title: itemAttributes?.Title || 'A designer & CS under-graduate from India.',
      description: Array.isArray(itemAttributes?.Description) 
                   ? itemAttributes.Description.map((block: any) => block.children?.map((child: any) => child.text).join('')).join('\n\n')
                   : itemAttributes?.Description || 'I blend technical skills with design to create efficient, visually appealing applications. I aim to develop scalable solutions for seamless user experiences.\n\nOutside of work, I focus on motion graphics and UI/UX design, constantly honing my skills, and play video games.',
      image: {
        url: itemAttributes?.Image?.data?.[0]?.attributes?.url 
          ? `${STRAPI_URL}${itemAttributes.Image.data[0].attributes.url}`
          : '/portrait.webp',
        alt: itemAttributes?.Name || 'Subrat',
      },
      
      available: itemAttributes?.Available ?? true,
      resume: itemAttributes?.Resume ? {
        url: `${STRAPI_URL}${itemAttributes.Resume.url}`,
        name: itemAttributes.Resume.name,
      } : null,
    };

    return mappedData;
  } catch (error) {
    console.error('Error fetching about data:', error);
    throw error; // Re-throw the error to be handled by the component
  }
} 