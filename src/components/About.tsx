import React, { useState } from 'react';
import { Lightbulb, Rocket, Heart } from '@phosphor-icons/react';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/utils/animation';

type TabKey = 'passions' | 'skills' | 'funFacts';

interface TabInfo {
  icon: React.ReactNode;
  title: string;
  content: string[];
}

const About = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('passions');

  const tabs: Record<TabKey, TabInfo> = {
    passions: {
      icon: <Heart weight="regular" className="text-pink-400 w-5 h-5" />,
      title: 'Passions',
      content: [
        'Building intuitive user experiences',
        'Solving complex technical challenges',
        'Learning new technologies',
        'Building meaningful digital solutions',
      ],
    },
    skills: {
      icon: <Rocket weight="regular" className="text-blue-400 w-5 h-5" />,
      title: 'Skills',
      content: [
        'Full-Stack Web Development',
        'Cloud & Infrastructure (AWS, GCP)',
        'CI/CD & DevOps Automation',
        'Backend APIs & Databases',
      ],
    },
    funFacts: {
      icon: <Lightbulb weight="regular" className="text-yellow-400 w-5 h-5" />,
      title: 'Fun Facts',
      content: [
        'Avid gamer & tech enthusiast',
        'Fitness & health advocate',
        'Music lover & board game player',
        'Always learning something new',
      ],
    },
  };

  return (
    <section id="about" className="py-20 font-light">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="slideUp" className="relative" delay={0.2}>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4x bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent mb-2">
                About Me
              </h2>
            </div>
            <StaggerContainer className="text-indigo-200 leading-relaxed space-y-4 relative">
              <StaggerItem animation="fadeIn">
                <p>
                  From the prairies of{' '}
                  <span className="text-indigo-300 font-medium">Saskatoon, SK</span>, I&apos;ve
                  spent the last 7+ years of my life building{' '}
                  <span className="text-indigo-300 font-medium">modern web applications</span>,
                  <span className="text-indigo-300 font-medium"> scalable APIs</span>, and
                  <span className="text-indigo-300 font-medium"> cloud infrastructure</span>.
                </p>
              </StaggerItem>
              <StaggerItem animation="fadeIn">
                <p>
                  While not coding,{' '}
                  <span className="text-indigo-300 font-medium">
                    I enjoy fitness, gaming, and travel
                  </span>{' '}
                  — these activities fuel my creativity and problem-solving skills, bringing fresh
                  perspectives to my technical work.
                </p>
              </StaggerItem>
              <StaggerItem animation="fadeIn">
                <p>
                  Need help with development or infrastructure?{' '}
                  <span className="text-indigo-300 font-medium">Reach out</span> — I enjoy helping
                  others navigate technical challenges.
                </p>
              </StaggerItem>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-indigo-500/30 rounded-br-lg" />
            </StaggerContainer>
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="slideUp"
            delay={0.5}
            className="bg-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/30"
          >
            <div className="flex justify-center mb-6 gap-2 flex-wrap md:flex-nowrap">
              {Object.entries(tabs).map(([key, { icon, title }]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as TabKey)}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-indigo-700/50 text-white'
                      : 'text-indigo-300 hover:bg-indigo-800/30'
                  }`}
                >
                  {icon}
                  <span className="md:block hidden">{title}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[180px] transition-all duration-500">
              <AnimateOnScroll animation="fadeIn" threshold={0.1} delay={0.2}>
                <ul className="space-y-3">
                  {tabs[activeTab].content.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-indigo-400">•</span>
                      <span className="text-indigo-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
