import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

// Legge tutti i progetti
export function getAllProjects() {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

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
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return projects;
}

// Legge un singolo progetto per slug
export function getProjectBySlug(slug: string) {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

// Legge le impostazioni generali
export function getSiteSettings() {
  const settingsPath = path.join(contentDirectory, 'settings', 'general.yml');
  
  if (!fs.existsSync(settingsPath)) {
    return {
      siteName: 'Elisa Antoniello',
      tagline: 'Allestimento Scenico - Accademia Teatro alla Scala',
      email: 'elisa.antoniello@example.com',
      phone: '+39 390 123 4567',
      whatsapp: '393901234567890',
      instagram: 'elisaantoniello',
    };
  }

  const fileContents = fs.readFileSync(settingsPath, 'utf8');
  const { data } = matter(fileContents);
  return data;
}

// Legge la pagina About
export function getAboutPage() {
  const aboutPath = path.join(contentDirectory, 'pages', 'about.md');
  
  if (!fs.existsSync(aboutPath)) {
    return {
      title: 'About Me',
      tagline: 'A passionate scenic design student transforming theatrical visions into reality',
      bio: '',
      skills: [],
      content: '',
      client: '',
      role: '',
      team: [],
    };
  }

  const fileContents = fs.readFileSync(aboutPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title || 'About Me',
    tagline: data.tagline || 'A passionate scenic design student transforming theatrical visions into reality',
    bio: data.bio || '',
    skills: data.skills || [],
    content: content || '',
    client: data.client || '',
    role: data.role || '',
    team: data.team || [],
  };
}

// Legge le immagini statiche del sito
export function getSiteImages() {
  const imagesPath = path.join(contentDirectory, 'settings', 'site-images.yml');
  
  if (!fs.existsSync(imagesPath)) {
    return {
      heroImage: '/images/hero-placeholder.png',
      aboutProfessional: '/images/about-professional.jpg',
      aboutBackstage: '/images/about-backstage.jpg',
      aboutPreview: '/images/about-preview.jpg',
    };
  }

  const fileContents = fs.readFileSync(imagesPath, 'utf8');
  const { data } = matter(fileContents);
  return data;
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

  const fileContents = fs.readFileSync(chatbotPath, 'utf8');
  return JSON.parse(fileContents);
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

  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
}