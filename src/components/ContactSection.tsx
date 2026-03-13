
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail, Linkedin, Copy, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactSection: React.FC = () => {
  const budgets = ['<$5k', '$5k–$15k', '$15k–$30k', '$30k–$60k', '$60k+'];

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus('loading');
    try {
      // TODO (B10): Replace with Supabase Edge Function POST
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
      console.log('[ContactForm] Submission:', formData);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleRetry = () => {
    setStatus('idle');
    setErrors({});
  };

  return (
    <section className="bg-bg-dark pt-32 pb-40 rounded-t-[80px] overflow-hidden" id="contact-form">
      {/* Honeypot field — hidden from real users, catches bots */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Contact Us</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-white">
            Have a growth challenge? <br />
            <span className="text-primary">Let's talk about it.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-8">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 p-16 rounded-[40px] text-center backdrop-blur-sm border border-white/10"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Message Received!</h3>
                <p className="text-xl text-white/60 mb-10">We'll get back to you within 24 hours to schedule your strategy audit.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 p-16 rounded-[40px] text-center backdrop-blur-sm border border-red-500/20"
              >
                <div className="w-20 h-20 bg-error rounded-full flex items-center justify-center mx-auto mb-8">
                  <AlertCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">Something went wrong</h3>
                <p className="text-white/60 mb-8">We couldn't send your message. Please try again or email us directly.</p>
                <button
                  onClick={handleRetry}
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} method="post" className="space-y-12" noValidate>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      className={`bg-transparent border-b py-4 text-white text-xl outline-none transition-colors placeholder:text-white/10 ${errors.name ? 'border-error' : 'border-white/20 focus:border-primary'}`}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-error text-xs mt-1">{errors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      className={`bg-transparent border-b py-4 text-white text-xl outline-none transition-colors placeholder:text-white/10 ${errors.email ? 'border-error' : 'border-white/20 focus:border-primary'}`}
                    />
                    {errors.email && (
                      <span id="email-error" className="text-error text-xs mt-1">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-company" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Company</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="bg-transparent border-b border-white/20 py-4 text-white text-xl outline-none focus:border-primary transition-colors placeholder:text-white/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, timeline, and channels"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    className={`bg-transparent border-b py-4 text-white text-xl outline-none transition-colors resize-none placeholder:text-white/10 ${errors.message ? 'border-error' : 'border-white/20 focus:border-primary'}`}
                  />
                  {errors.message && (
                    <span id="message-error" className="text-error text-xs mt-1">{errors.message}</span>
                  )}
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">Monthly Marketing Budget?</label>
                  <div className="flex flex-wrap gap-3">
                    {budgets.map(budget => (
                      <label key={budget} className="relative group cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          checked={formData.budget === budget}
                          onChange={() => setFormData(prev => ({ ...prev, budget }))}
                          className="peer sr-only"
                        />
                        <span className="px-6 py-3 rounded-full border border-white/10 text-white/60 text-sm font-bold peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-white/5 transition-all block">
                          {budget}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group w-full md:w-auto bg-primary text-white px-12 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-2 hover:bg-primary-dark active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 p-10 rounded-[32px] border border-white/10">
              <h4 className="text-white text-xl font-display font-bold mb-8">Have a project in mind?</h4>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-20 rounded-xl overflow-hidden grayscale">
                  <img src="https://picsum.photos/seed/lead/100/120" alt="Osoba O. - Growth Systems Architect" width="100" height="120" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-bold text-lg">Osoba O.</p>
                    <a
                      href="https://www.linkedin.com/company/marketing-extension"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <p className="text-white/40 text-sm mb-4">Growth Systems Architect</p>
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Copy size={14} className="text-white" />
                    </div>
                    <span className="text-white/60 text-sm group-hover:text-white transition-colors">hello@marketingext.com</span>
                  </div>
                </div>
              </div>
              <a href="mailto:hello@marketingext.com" className="w-full py-4 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-white font-bold hover:bg-white/5 transition-all">
                Send Email <Mail size={18} />
              </a>
            </div>

            <div className="bg-white/5 p-10 rounded-[32px] border border-white/10">
              <h4 className="text-white text-xl font-display font-bold mb-8">Interested in partnership?</h4>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-20 rounded-xl overflow-hidden grayscale">
                  <img src="https://picsum.photos/seed/partner/100/120" alt="Motilola A. - Client Partnerships Lead" width="100" height="120" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-bold text-lg">Motilola A.</p>
                    <a
                      href="https://www.linkedin.com/company/marketing-extension"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <p className="text-white/40 text-sm mb-4">Client Partnerships Lead</p>
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Copy size={14} className="text-white" />
                    </div>
                    <span className="text-white/60 text-sm group-hover:text-white transition-colors">motilola@marketingext.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
