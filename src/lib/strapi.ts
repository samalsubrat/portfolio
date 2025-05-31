import { Project } from '@/types/project';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/projects?populate=*`, {
      next: { revalidate: 60 }, // Revalidate every minute
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    console.log('Strapi Response:', JSON.stringify(data, null, 2));
    console.log('First project data:', JSON.stringify(data.data[0], null, 2));

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