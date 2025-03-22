import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Link } from '@phosphor-icons/react';
import Button from '@/components/Button';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/utils/animation';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

const projectsData: Project[] = [
  {
    id: 'personal-site-v2',
    title: 'Personal Website v2',
    description:
      "My latest portfolio website built with Next.js, TypeScript, and Tailwind CSS 4.0. Features a modern design with smooth animations and responsive layout. I'll try to keep it updated with my latest projects and skills.",
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel', 'Supabase'],
    image: '/images/personal-site-v2.png',
    link: 'https://darvinzhang.com',
    github: 'https://github.com/ddz369/personal-website-v2',
  },
  {
    id: 'healthtalk',
    title: 'HealthTalk Platform',
    description:
      'A telehealth application connecting patients with healthcare providers via a digital meeting room. Features video consultations, secure messaging, invoicing, a subscription model, a dashboard for managing patient information, 2FA, and more.',
    technologies: [
      'React',
      'Google Realtime Database',
      'Django',
      'Lightsail',
      'Docker',
      'AWS',
      'Stripe',
      'Twilio',
      '2FA',
      'HIPAA',
      'Chime',
      'PostgreSQL',
      'Tailwind CSS',
      'Celery',
      'Redis',
      'GraphQL',
    ],
    image: '/images/healthtalk.png',
    link: 'https://healthtalk.com',
  },
  {
    id: 'shingleguard',
    title: 'ShingleGuard Roofing App',
    description:
      'A freelance project I did for a roofing company to help them gain more customers by providing a platform for them to showcase their services and get more leads.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'EmailJS',
      'Vercel',
      'reCAPTCHA',
    ],
    image: '/images/shingleguard.png',
    link: 'https://shingleguard.ca',
  },
  {
    id: 'diitalk',
    title: 'DiiTalk Messaging App',
    description:
      'An encrypted messaging platform with real-time communication, file sharing, and group chat functionality. Also known as the FIRST and the ONLY app that lets you make FREE local & international dialled calls to ANYONE, ANYWHERE!',
    technologies: [
      'PHP',
      'PostgreSQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Kubernetes',
      'AWS',
      'Docker',
      'Nginx',
      'Redis',
      'Celery',
      'GraphQL',
      'SOAP',
      'Twilio',
      'VoIP',
      'iOS',
      'Android',
    ],
    image: '/images/diitalk.png',
    link: 'https://download.cnet.com/download/diitalk-call-chat-earn/3000-12941_4-78172686.html',
  },
  {
    id: 'globalcare',
    title: 'GlobalCare Health Portal',
    description:
      'A freelance project I did for a client to help them find leads for a concierge service for surgeries within Turkey.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'Material UI',
      'Vercel',
    ],
    image: '/images/globalcare.png',
    link: 'https://globalcarecanada.com',
  },
  {
    id: 'personal-site-v1',
    title: 'Personal Website v1',
    description:
      "My first portfolio website showcasing my early web development skills. Because of this new project, I currently don't use this website anymore. You can still see the code on my GitHub and some of my older projects from University on it.",
    technologies: [
      'React',
      'Flask',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'Google Cloud',
      'Google App Engine',
    ],
    image: '/images/personal-site-v1.png',
    github: 'https://github.com/ddz369/personal-website',
  },
  {
    id: 'lynkcoin',
    title: 'LynkCoin',
    description:
      'A two-man website being developed in Python, React, and Google App Engine. In a nutshell, it is a platform for generating and completing tasks for a new cryptocurrency called LynkCoin. The site is still under development.',
    technologies: [
      'React',
      'Blockchain',
      'Crypto',
      'Websockets',
      'JWT',
      'Express',
      'Flask',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'Google Cloud',
      'Google App Engine, OAuth',
      'REST API',
    ],
    image: '/images/lynkcoin.png',
  },
];

const Projects = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index, 300);

      if (swiperInstance.autoplay) {
        swiperInstance.autoplay.stop();

        setTimeout(() => {
          if (swiperInstance.autoplay) {
            swiperInstance.autoplay.start();
          }
        }, 4000);
      }
    }
  };

  return (
    <section id="projects" className="py-20 font-light">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeIn" duration={0.6}>
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4">
              My Recent Works
            </h2>
            <div className="h-px w-16 bg-indigo-500/30 rounded-full mx-auto mb-6"></div>
            <p className="text-indigo-200/70 max-w-2xl mx-auto">
              Here are some of my recent projects. Each showcases different skills and technologies.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slideUp" delay={0.2} duration={0.7}>
          <div className="relative projects-carousel max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              keyboard={{ enabled: true }}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
              onSwiper={swiper => {
                setSwiperInstance(swiper);

                setTimeout(() => {
                  if (swiper && swiper.params) {
                    // @ts-expect-error - Swiper types don't fully match runtime behavior
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    // @ts-expect-error - Swiper types don't fully match runtime behavior
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.update();
                  }
                });
              }}
              className="rounded-xl overflow-hidden"
            >
              {projectsData.map(project => (
                <SwiperSlide key={project.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-indigo-800/20 shadow-lg mx-auto">
                    <div className="project-image h-80 md:h-[320px] rounded-lg overflow-hidden relative group">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-indigo-950/90 z-10 group-hover:opacity-80 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 border border-indigo-400/10 rounded-lg z-20"></div>
                      <div
                        className="w-full h-full bg-indigo-800/30 transform group-hover:scale-105 transition-transform duration-500"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      />
                    </div>
                    <StaggerContainer className="project-details flex flex-col justify-between h-80 md:h-[320px]">
                      <div>
                        <StaggerItem animation="fadeIn">
                          <h3 className="text-2xl text-indigo-100 mb-3 bg-gradient-to-r from-indigo-200 to-purple-200 bg-clip-text">
                            {project.title}
                          </h3>
                        </StaggerItem>
                        <StaggerItem animation="slideUp">
                          <p className="text-indigo-200/70 mb-5 line-clamp-4">
                            {project.description}
                          </p>
                        </StaggerItem>
                        <StaggerItem animation="slideUp">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map(tech => (
                              <span
                                key={tech}
                                className="text-xs bg-indigo-800/40 text-indigo-300 px-3 py-1 rounded-full border border-indigo-700/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </StaggerItem>
                      </div>
                      <StaggerItem animation="slideUp">
                        <div className="flex flex-wrap gap-4 mt-auto">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block"
                            >
                              <Button
                                variant="primary"
                                size="sm"
                                className="flex items-center gap-2 hover:scale-105 transition-transform"
                                type="button"
                              >
                                <Link size={16} />
                                Live Demo
                              </Button>
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block"
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:scale-105 transition-transform"
                                type="button"
                              >
                                View Code
                              </Button>
                            </a>
                          )}
                        </div>
                      </StaggerItem>
                    </StaggerContainer>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              ref={navigationPrevRef}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 rounded-full bg-indigo-900/70 text-indigo-200 hover:bg-indigo-800 hover:text-white cursor-pointer transition-colors shadow-md hover:shadow-indigo-500/20"
            >
              <ArrowLeft size={20} weight="light" />
            </div>
            <div
              ref={navigationNextRef}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 rounded-full bg-indigo-900/70 text-indigo-200 hover:bg-indigo-800 hover:text-white cursor-pointer transition-colors shadow-md hover:shadow-indigo-500/20"
            >
              <ArrowRight size={20} weight="light" />
            </div>

            <AnimateOnScroll animation="slideUp" delay={0.3}>
              <div className="flex justify-center mt-8 gap-3">
                {projectsData.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all cursor-pointer ${
                      activeIndex === index
                        ? 'h-3 w-10 bg-indigo-400 rounded-full shadow-sm shadow-indigo-400/30'
                        : 'h-3 w-3 bg-indigo-700/50 hover:bg-indigo-500/50 rounded-full hover:scale-110 active:scale-95'
                    }`}
                    role="button"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={activeIndex === index ? 'true' : 'false'}
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        goToSlide(index);
                      }
                    }}
                  />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Projects;
