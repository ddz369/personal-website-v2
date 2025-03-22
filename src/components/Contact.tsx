import React, { useState, useRef } from 'react';
import { Envelope, User, PaperPlaneTilt } from '@phosphor-icons/react';
import Button from '@/components/Button';
import emailjs from '@emailjs/browser';
import config from '@/utils/config';

const { serviceId, templateId, publicKey } = config.emailJS;

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus('error');
      setFormError('EmailJS configuration is missing. Please check your environment variables.');
      return;
    }

    setFormStatus('submitting');
    setFormError('');

    try {
      const now = new Date();
      const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };

      const formData = new FormData(formRef.current);
      formData.append('date', now.toLocaleDateString(undefined, dateOptions));
      formData.append('time', now.toLocaleTimeString(undefined, timeOptions));
      formData.append('current_year', now.getFullYear().toString());

      const templateParams: Record<string, string> = {};
      formData.forEach((value, key) => {
        templateParams[key] = value.toString();
      });

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });

      setFormStatus('success');
      formRef.current.reset();

      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('error');
      setFormError(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-20 font-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <div className="h-px w-16 bg-indigo-500/30 rounded-full mx-auto mb-6"></div>
          <p className="text-indigo-200/70 max-w-4xl mx-auto">
            Interested in working together? Fill out the form below and I&apos;ll get back to you
            ASAP.
          </p>
        </div>

        <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl px-5 py-10 border border-indigo-800/20 shadow-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 transition-all duration-300 group-hover:text-indigo-300">
                <User weight="light" className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
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
                placeholder="Email"
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
                placeholder="Message"
                className="w-full bg-indigo-950/30 border-0 rounded-lg pl-10 pr-4 py-3 text-indigo-100 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 transition-all duration-300 resize-none placeholder-indigo-400/50"
              />
            </div>

            <div className="flex justify-center mt-5">
              <Button
                type="submit"
                variant="outline"
                size="lg"
                disabled={formStatus === 'submitting'}
                className="opacity-80 flex items-center gap-2"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <span className="inline-block h-4 w-4 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>

            {formStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-800/50 rounded-lg text-green-400 text-center">
                Your message has been sent successfully!
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-900/30 border border-red-800/50 rounded-lg text-red-400 text-center">
                {formError || 'There was an error sending your message. Please try again.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
