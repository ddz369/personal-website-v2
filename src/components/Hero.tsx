import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import config from '@/utils/config';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/utils/animation';
import { useLoading } from '@/utils/loadingContext';
import {
  StackSimple,
  Code,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  FileTs,
  BracketsCurly,
} from '@phosphor-icons/react';

const TypewriterComponent = dynamic(() => import('typewriter-effect'), { ssr: false });

const Hero = () => {
  const { personalInfo, socialLinks } = config;
  const [isMounted, setIsMounted] = useState(false);
  const { isLoading } = useLoading();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8">
          <motion.div
            className="w-full md:w-2/5 flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 p-1"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: isLoading ? 0.8 : 1, opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              >
                <div className="rounded-full bg-gray-900 h-full w-full p-3 hover:scale-110 transition-all duration-300">
                  <div className="bg-indigo-950 h-full w-full rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500 overflow-hidden">
                    <div className="h-full w-full rounded-full opacity-50 bg-indigo-800 overflow-hidden absolute inset-0" />
                    <Image
                      width={400}
                      height={400}
                      src="/avatar.png"
                      alt={`${personalInfo.name} Avatar`}
                      className="h-full w-full object-cover"
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJeAP9AzgmjAAAAABJRU5ErkJggg=="
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -left-4 bg-indigo-900 shadow-lg rounded-full p-2 animate-float hover:-translate-y-2 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isLoading ? 20 : 0, opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <BracketsCurly className="w-6 h-6 md:w-7 md:h-7 text-indigo-300" weight="fill" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4 bg-indigo-900 shadow-lg rounded-full p-2 animate-float-delay-1 hover:-translate-y-2 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isLoading ? 20 : 0, opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <FileTs className="w-6 h-6 md:w-7 md:h-7 text-indigo-300" weight="fill" />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 bg-indigo-900 shadow-lg rounded-full p-2 animate-float-delay-2 hover:-translate-y-2 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isLoading ? 20 : 0, opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <StackSimple className="w-6 h-6 md:w-7 md:h-7 text-indigo-300" weight="fill" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -right-4 bg-indigo-900 shadow-lg rounded-full p-2 animate-float-delay-3 hover:-translate-y-2 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isLoading ? 20 : 0, opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <Code className="w-6 h-6 md:w-7 md:h-7 text-indigo-300" weight="fill" />
              </motion.div>

              <motion.div
                className="absolute bottom-9 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-800 to-blue-900 backdrop-blur-lg px-4 py-2 rounded-full shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isLoading ? 20 : 0, opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <div className="flex gap-6">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <GithubLogo className="w-5 h-5" weight="regular" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinLogo className="w-5 h-5" weight="regular" />
                  </a>
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <TwitterLogo className="w-5 h-5" weight="regular" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-3/5 flex flex-col md:items-start items-center md:text-left text-center pt-4 md:pt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <StaggerContainer>
              <StaggerItem animation="fadeIn">
                <span className="text-indigo-300 text-lg mb-1">Hello, I am</span>
              </StaggerItem>
              <StaggerItem animation="slideUp">
                <h1 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-400 bg-clip-text text-transparent pb-2">
                  {personalInfo.name}
                </h1>
              </StaggerItem>

              <StaggerItem animation="slideUp">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 mb-8 text-indigo-200">
                  {personalInfo.title.map((title, index) => (
                    <>
                      <span key={`title-${index}`} className="text-sm sm:text-base font-light">
                        {title}
                      </span>
                      {index < personalInfo.title.length - 1 && (
                        <span key={`dot-${index}`} className="text-indigo-500">
                          •
                        </span>
                      )}
                    </>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem animation="fadeIn">
                <p className="text-lg text-indigo-300 mb-8 max-w-2xl font-light">
                  With passion and precision, I craft{' '}
                  <span className="text-indigo-100 font-normal inline-block min-h-[1.5rem] min-w-28">
                    {isMounted ? (
                      <TypewriterComponent
                        options={{
                          strings: [
                            'web applications',
                            'responsive websites',
                            'scalable infrastructure',
                            'RESTful APIs',
                            'cloud solutions',
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                          deleteSpeed: 50,
                        }}
                      />
                    ) : (
                      'web applications'
                    )}
                  </span>{' '}
                  with a focus on performance and user experience. Let&apos;s collaborate on your
                  next innovative project.
                </p>
              </StaggerItem>

              <StaggerItem animation="slideUp">
                <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                  <Link href="#projects">
                    <Button variant="primary" size="lg" className="rounded-full">
                      See My Works
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full border-indigo-700 text-gray-200 hover:bg-indigo-900/30"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
