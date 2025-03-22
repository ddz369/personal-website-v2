/**
 * Site configuration values loaded from environment variables
 * Edit the .env file to change these values
 */

interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

interface SiteMetadata {
  title: string;
  description: string;
  author: string;
}

interface PersonalInfo {
  name: string;
  title: string[];
  email: string;
  phone: string;
  resumeLink: string;
}

interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

const socialLinks: SocialLinks = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/ddz369',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/darvinzhang',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://x.com/ddz369',
};

const siteMetadata: SiteMetadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'Darvin Zhang - Software Engineer',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Personal website of Darvin Zhang, a software engineer, full-stack developer, and web developer.',
  author: process.env.NEXT_PUBLIC_AUTHOR || 'Darvin Zhang',
};

const personalInfo: PersonalInfo = {
  name: process.env.NEXT_PUBLIC_NAME || 'Darvin Zhang',
  title: (
    process.env.NEXT_PUBLIC_TITLES || 'Software Engineer,Full Stack Developer,UI/UX Enthusiast'
  ).split(','),
  email: process.env.NEXT_PUBLIC_EMAIL || 'darvin.zhang@gmail.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+16399160165',
  resumeLink:
    process.env.NEXT_PUBLIC_RESUME_LINK ||
    'https://drive.google.com/file/d/1WACaUsBX_RGfPWR2_c2FPERaW4GWp3FW/view?usp=sharing',
};

const emailJS: EmailJSConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

const config = {
  socialLinks,
  siteMetadata,
  personalInfo,
  emailJS,
};

export default config;
