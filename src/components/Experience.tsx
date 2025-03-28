import React from 'react';
import { Calendar, Buildings, Code, DeviceMobile, Desktop } from '@phosphor-icons/react';
import config from '@/utils/config';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/utils/animation';
import Image from 'next/image';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  logo: string;
  roleIcon: React.ReactNode;
}

const experienceHistory: ExperienceItem[] = [
  {
    title: 'Full Stack Developer',
    company: 'MDCanada',
    period: 'August 2020 - Present',
    description: [
      'Spearheaded end-to-end website development projects that increased monthly active users by 35%, ensuring cross-browser and multi-platform compatibility using React, TypeScript, Django, and PostgreSQL',
      'Led a small team of developers using Agile methodologies to improve collaboration, reduce bug backlog by 40%, and accelerate project delivery by 20% while consistently meeting strict deadlines and requirements',
      'Developed and optimized RESTful APIs and complex SQL queries, improving application performance by 30% and ensuring seamless integration between front-end interfaces and back-end services',
      'Designed, built, and deployed scalable, highly available websites using Docker, AWS (S3, Lightsail, EKS, ECR, EC2, Route 53, Chime), and Kubernetes, achieving 99.9% uptime',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Django',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Kubernetes',
      'Firebase',
      'TailwindCSS',
    ],
    logo: '/icons/mdcanada-logo.png',
    roleIcon: <Code weight="regular" className="w-5 h-5" />,
  },
  {
    title: 'Software Developer',
    company: 'Diitalk',
    period: 'August 2018 - September 2020',
    description: [
      'Designed and optimized backend systems for VoIP services supporting thousands of daily users, ensuring high performance and reliability',
      'Developed and refactored REST APIs using PHP with PostgreSQL, transitioning to GraphQL which reduced API response times by 65%',
      "Revamped the company's marketing website, implementing a responsive design with HTML, CSS, JavaScript, and Bootstrap, resulting in a 28% increased conversion rate",
      'Performed regression, unit, E2E, and system-level testing to ensure software quality, reducing post-release defects by 45%',
    ],
    technologies: [
      'PHP',
      'PostgreSQL',
      'GraphQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Celery',
      'SOAP',
      'VoIP',
    ],
    logo: '/icons/diitalk-logo.png',
    roleIcon: <DeviceMobile weight="regular" className="w-5 h-5" />,
  },
  {
    title: 'Programmer Analyst',
    company: 'SaskTel',
    period: 'April 2016 - May 2017',
    description: [
      'Developed user-friendly desktop applications in C# with SQL as part of the MAX digital interactive team',
      'Enhanced remote system performance by 35% through maintenance optimization using PowerShell',
      'Designed an improved scheduling system that reduced channel programming conflicts by 60% and decreased manual scheduling time by 75%',
      'Provided technical support through troubleshooting, reducing average resolution time from 3 days to 1 day',
    ],
    technologies: ['C#', 'SQL', 'PowerShell', '.NET', 'Oracle'],
    logo: '/icons/sasktel-logo.svg.png',
    roleIcon: <Desktop weight="regular" className="w-5 h-5" />,
  },
];

const Experience = () => {
  const { resumeLink } = config.personalInfo;

  return (
    <section id="experience" className="py-20 font-light">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimateOnScroll animation="fadeIn" duration={0.6}>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4x bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
            <div className="h-px w-16 bg-indigo-500/30 rounded-full mx-auto mb-6" />
            <p className="text-indigo-200/70 max-w-2xl mx-auto">
              My professional journey as a developer. These experiences have shaped my skills and
              approach to problem-solving.{' '}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-500/30 underline-offset-2 transition-colors"
              >
                View my full resume
              </a>
              .
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-indigo-800/30 transform md:translate-x-0 translate-x-12" />

          <div className="space-y-12">
            {experienceHistory.map((job, index) => (
              <AnimateOnScroll
                key={index}
                animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
                delay={0.2 * index}
                threshold={0.1}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-12 md:left-1/2 w-6 h-6 rounded-full bg-indigo-900 border-2 border-indigo-400 transform -translate-x-3 md:-translate-x-3 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                <div
                  className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} ml-16 md:ml-0`}
                >
                  <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-indigo-800/30 hover:bg-indigo-800/20 transition-colors duration-300">
                    <StaggerContainer>
                      <StaggerItem animation="fadeIn">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2 text-indigo-300">
                            {job.roleIcon}
                            <h3 className="text-xl font-medium text-indigo-200">{job.title}</h3>
                          </div>
                          <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden rounded p-1">
                            <Image
                              src={job.logo}
                              alt={`${job.company} logo`}
                              fill
                              sizes="40px"
                              className="object-contain p-0.5"
                            />
                          </div>
                        </div>
                      </StaggerItem>

                      <StaggerItem animation="fadeIn">
                        <div className="flex flex-wrap items-center gap-2 mb-4 text-indigo-400 text-sm">
                          <Buildings weight="regular" className="w-4 h-4" />
                          <span>{job.company}</span>
                          <span className="w-1 h-1 rounded-full bg-indigo-700" />
                          <Calendar weight="regular" className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                      </StaggerItem>

                      <StaggerItem animation="fadeIn">
                        <ul className="space-y-2 mb-4">
                          {job.description.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex text-sm items-start gap-2 text-indigo-100"
                            >
                              <span className="text-indigo-400 mt-1 flex-shrink-0">•</span>
                              <span className="break-words">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </StaggerItem>

                      <StaggerItem animation="fadeIn">
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-indigo-900/50 rounded-md text-indigo-300 text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </StaggerItem>
                    </StaggerContainer>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
