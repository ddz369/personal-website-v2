import React from 'react';
import { Envelope, User, PaperPlaneTilt } from '@phosphor-icons/react';
import Button from '@/components/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 font-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <div className="h-px w-16 bg-indigo-500/30 rounded-full mx-auto"></div>
        </div>

        <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl px-5 py-10 border border-indigo-800/20 shadow-lg">
          <form action="#" method="POST" className="space-y-4">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 transition-all duration-300 group-hover:text-indigo-300">
                <User weight="light" className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-indigo-950/30 border-0 rounded-lg pl-10 pr-4 py-3 text-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300 placeholder-indigo-400/50"
              />
            </div>

            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 transition-all duration-300 group-hover:text-indigo-300">
                <Envelope weight="light" className="w-4 h-4" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-indigo-950/30 border-0 rounded-lg pl-10 pr-4 py-3 text-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300 placeholder-indigo-400/50"
              />
            </div>

            <div className="relative group">
              <div className="absolute left-4 top-4 text-indigo-400 transition-all duration-300 group-hover:text-indigo-300">
                <PaperPlaneTilt weight="light" className="w-4 h-4" />
              </div>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className="w-full bg-indigo-950/30 border-0 rounded-lg pl-10 pr-4 py-3 text-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300 resize-none placeholder-indigo-400/50"
              />
            </div>

            <div className="flex justify-center mt-5 opacity-80">
              <Button type="submit" variant="outline" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
