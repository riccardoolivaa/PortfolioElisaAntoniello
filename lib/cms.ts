import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

// Legge tutti i progetti
export function getAllProjects() {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    console.log('Projects directory does not exist, returning empty array');
    return [];
  }

  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    const projects = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          ...data,
          content,
        };
      })
      .sort((a: any, b: any) => {
        const dateA = new Date(a.date || 0).getTime();
        const dateB = new Date(b.date || 0).getTime();
        return dateB - dateA; // Ordine decrescente (più recente prima)
      });

    console.log(`Loaded ${projects.length} projects from CMS`);
    return projects;
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

// Legge un singolo progetto per slug
export function getProjectBySlug(slug: string) {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`Project not found: ${slug}`);
    return null;
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

// Legge tutte le immagini della gallery
export function getAllGalleryImages() {
  const galleryDirectory = path.join(contentDirectory, 'gallery');
  
  if (!fs.existsSync(galleryDirectory)) {
    console.log('Gallery directory does not exist, returning empty array');
    return [];
  }

  try {
    const fileNames = fs.readdirSync(galleryDirectory);
    const images = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(galleryDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          id: fileName.replace(/\.md$/, ''),
          ...data,
        };
      })
      .sort((a: any, b: any) => {
        // Prima ordina per order se presente
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        // Altrimenti per data
        const dateA = new Date(a.date || 0).getTime();
        const dateB = new Date(b.date || 0).getTime();
        return dateB - dateA;
      });

    console.log(`Loaded ${images.length} gallery images from CMS`);
    return images;
  } catch (error) {
    console.error('Error reading gallery:', error);
    return [];
  }
}

// Filtra immagini gallery per categoria
export function getGalleryImagesByCategory(category: string) {
  const allImages = getAllGalleryImages();
  if (category === 'all') {
    return allImages;
  }
  return allImages.filter((img: any) => img.category === category);
}

// Legge le impostazioni generali
export function getSiteSettings() {
  const settingsPath = path.join(contentDirectory, 'settings', 'general.yml');
  
  if (!fs.existsSync(settingsPath)) {
    console.log('Settings file not found, using defaults');
    return {
      siteName: 'Elisa Antoniello',
      tagline: 'Allestimento Scenico - Accademia Teatro alla Scala',
      email: 'ellimj9@gmail.com',
      phone: '+39 388 394 0674',
      whatsapp: '393883940674',
      instagram: 'elisaantoniello',
      cvFile: '/cv/Curriculum_Elisa_Antoniello.pdf',
    };
  }

  try {
    const fileContents = fs.readFileSync(settingsPath, 'utf8');
    const { data } = matter(fileContents);
    
    // Assicura che ci sia sempre un path per il CV
    if (!data.cvFile) {
      data.cvFile = '/cv/Curriculum_Elisa_Antoniello.pdf';
    }
    
    return data;
  } catch (error) {
    console.error('Error reading settings:', error);
    return {
      siteName: 'Elisa Antoniello',
      tagline: 'Allestimento Scenico - Accademia Teatro alla Scala',
      email: 'ellimj9@gmail.com',
      phone: '+39 388 394 0674',
      whatsapp: '393883940674',
      instagram: 'elisaantoniello',
      cvFile: '/cv/Curriculum_Elisa_Antoniello.pdf',
    };
  }
}

// Legge la pagina About
export function getAboutPage() {
  const aboutPath = path.join(contentDirectory, 'pages', 'about.md');
  
  if (!fs.existsSync(aboutPath)) {
    console.log('About page not found, using defaults');
    return {
      title: 'Chi Sono',
      tagline: 'Una studentessa appassionata di allestimento scenico che trasforma visioni teatrali in realtà',
      bio: '',
      skills: [],
      content: '',
      client: '',
      role: '',
      team: [],
    };
  }

  try {
    const fileContents = fs.readFileSync(aboutPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title || 'Chi Sono',
      tagline: data.tagline || 'Una studentessa appassionata di allestimento scenico',
      bio: data.bio || '',
      skills: data.skills || [],
      content: content || '',
      client: data.client || '',
      role: data.role || '',
      team: data.team || [],
    };
  } catch (error) {
    console.error('Error reading about page:', error);
    return {
      title: 'Chi Sono',
      tagline: 'Una studentessa appassionata di allestimento scenico',
      bio: '',
      skills: [],
      content: '',
      client: '',
      role: '',
      team: [],
    };
  }
}

// Legge le immagini statiche del sito
export function getSiteImages() {
  const imagesPath = path.join(contentDirectory, 'settings', 'site-images.yml');
  
  if (!fs.existsSync(imagesPath)) {
    console.log('Site images config not found, using defaults');
    return {
      heroImage: '/images/hero-placeholder.png',
      aboutProfessional: '/images/about-professional.png',
      aboutBackstage: '/images/about-backstage.jpg',
      aboutPreview: '/images/about-professional.png',
      logo: '/images/logo.png',
    };
  }

  try {
    const fileContents = fs.readFileSync(imagesPath, 'utf8');
    const { data } = matter(fileContents);
    return data;
  } catch (error) {
    console.error('Error reading site images:', error);
    return {
      heroImage: '/images/hero-placeholder.png',
      aboutProfessional: '/images/about-professional.png',
      aboutBackstage: '/images/about-backstage.jpg',
      aboutPreview: '/images/about-professional.png',
      logo: '/images/logo.png',
    };
  }
}

// Legge le impostazioni del chatbot
export function getChatbotSettings() {
  const chatbotPath = path.join(contentDirectory, 'settings', 'chatbot.json');
  
  if (!fs.existsSync(chatbotPath)) {
    return {
      name: 'La Maschera di Scena',
      welcomeMessage: 'Ciao! 🎭 Come posso aiutarti?',
      responses: {},
    };
  }

  try {
    const fileContents = fs.readFileSync(chatbotPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading chatbot settings:', error);
    return {
      name: 'La Maschera di Scena',
      welcomeMessage: 'Ciao! 🎭 Come posso aiutarti?',
      responses: {},
    };
  }
}

// Filtra progetti per categoria
export function getProjectsByCategory(category: string) {
  const allProjects = getAllProjects();
  if (category === 'All' || category === 'all') {
    return allProjects;
  }
  return allProjects.filter((project: any) => project.category === category);
}

// Ottiene tutti gli slug dei progetti per SSG
export function getAllProjectSlugs() {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => ({
        slug: fileName.replace(/\.md$/, ''),
      }));
  } catch (error) {
    console.error('Error getting project slugs:', error);
    return [];
  }
}