import config from '@/utils/config';
import { GithubLogo, LinkedinLogo, TwitterLogo, Heart } from '@phosphor-icons/react';

const Footer = () => {
  const { personalInfo, socialLinks } = config;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-12 border-t border-indigo-900/30 absolute bottom-0 w-full">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-indigo-300 font-light text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-indigo-400/60 text-xs mt-1">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubLogo size={20} weight="fill" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={20} weight="fill" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <TwitterLogo size={20} weight="fill" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-indigo-400/60 flex items-center justify-center">
            Developed with <Heart size={14} weight="fill" className="mx-1 text-pink-500" /> in
            Saskatoon, SK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
