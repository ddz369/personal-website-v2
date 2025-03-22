import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import {
  StackSimple,
  Code,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  FileTs,
  BracketsCurly,
} from '@phosphor-icons/react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-950"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-24 h-24 rotate-45 border border-indigo-800 opacity-30"></div>
        <div className="absolute top-[40%] left-[5%] w-16 h-16 rotate-45 border border-indigo-700 opacity-30"></div>
        <div className="absolute top-[25%] left-[35%] w-10 h-10 rotate-45 bg-indigo-900 opacity-15"></div>
        <div className="absolute bottom-[15%] right-[25%] w-20 h-20 rotate-45 border-2 border-indigo-700 opacity-25"></div>
        <div className="absolute bottom-[35%] left-[15%] w-12 h-12 rotate-45 bg-indigo-800 opacity-15"></div>
        <div className="absolute top-[60%] right-[5%] w-8 h-8 rotate-45 bg-indigo-900 opacity-20"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-25 pointer-events-none">
        <div className="absolute top-1/4 right-[-7%] w-[45%] h-[50%] rounded-full bg-indigo-800 blur-[110px]"></div>
        <div className="absolute bottom-[-7%] left-[-7%] w-[45%] h-[50%] rounded-full bg-indigo-700 blur-[110px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-8">
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 p-1">
                <div className="rounded-full bg-gray-900 h-full w-full p-3 hover:scale-110 transition-all duration-300">
                  <div className="bg-indigo-950 h-full w-full rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500 overflow-hidden">
                    <div className="h-full w-full rounded-full opacity-40 bg-indigo-800 overflow-hidden absolute inset-0" />
                    <Image
                      width={400}
                      height={400}
                      src="/avatar.png"
                      alt="Darvin Zhang Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-indigo-900 shadow-lg rounded-full p-2 animate-float hover:-translate-y-2 transition-all duration-300">
                <BracketsCurly className="w-6 h-6 md:w-7 md:h-7 text-indigo-300" weight="fill" />
              </div>
              <div className="absolute -bottom-2 -left-4 bg-indigo-900 shadow-lg rounded-full p-2 animate-float-delay-1 hover:-translate-y-2 transition-all duration-300">
                <FileTs className="w-6 h-6 md:w-7 md:h-7 text-indigo-300" weight="fill" />
              </div>
              <div className="absolute -top-4 -right-4 bg-indigo-900 shadow-lg rounded-full p-2 animate-float-delay-2 hover:-translate-y-2 transition-all duration-300">
                <StackSimple className="w-6 h-6 md:w-7 md:h-7 text-indigo-300" weight="fill" />
              </div>
              <div className="absolute -bottom-2 -right-4 bg-indigo-900 shadow-lg rounded-full p-2 animate-float-delay-3 hover:-translate-y-2 transition-all duration-300">
                <Code className="w-6 h-6 md:w-7 md:h-7 text-indigo-300" weight="fill" />
              </div>

              <div className="absolute bottom-9 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-800 to-blue-900 backdrop-blur-lg px-4 py-2 rounded-full shadow-lg">
                <div className="flex gap-6">
                  <a
                    href="https://github.com/ddz369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <GithubLogo className="w-5 h-5" weight="regular" />
                  </a>
                  <a
                    href="https://linkedin.com/in/darvinzhang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinLogo className="w-5 h-5" weight="regular" />
                  </a>
                  <a
                    href="https://x.com/ddz369"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <TwitterLogo className="w-5 h-5" weight="regular" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 flex flex-col md:items-start items-center md:text-left text-center pt-4 md:pt-0">
            <span className="text-indigo-300 text-lg mb-1">Hello, I am</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-400 bg-clip-text text-transparent pb-2">
              Darvin Zhang
            </h1>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 mb-8 text-indigo-200">
              <span className="text-sm sm:text-base font-light">Software Engineer</span>
              <span className="text-indigo-500">•</span>
              <span className="text-sm sm:text-base font-light">Full Stack Developer</span>
              <span className="text-indigo-500">•</span>
              <span className="text-sm sm:text-base font-light">UI/UX Enthusiast</span>
            </div>

            <p className="text-lg text-indigo-300 mb-8 max-w-2xl font-light">
              I specialize in creating sophisticated digital products that combine elegant design
              with robust functionality. Let&apos;s collaborate on your next innovative project.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <Link href="#projects">
                <Button variant="primary" size="lg" className="rounded-full">
                  View Portfolio
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
