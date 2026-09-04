import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setErrorMessage('');
    setIsSubscribed(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EAE1D1] text-[#241D2B] border-b border-[#DDD1BE] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-mono uppercase tracking-[0.25em] bg-[#241D2B] text-[#FAF6EE]">
          <Mail className="w-3 h-3 text-[#B86F5A]" />
          <span>DISPATCH LETTER</span>
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] text-[#241D2B] mb-6">
          STAY OFFSET.
        </h2>

        <p className="text-base sm:text-lg text-[#241D2B]/80 font-body font-light max-w-xl mx-auto mb-10 leading-relaxed">
          "Thoughtful design ideas, visual inspiration and creative stories — delivered occasionally."
        </p>

        {isSubscribed ? (
          <div className="p-6 border border-[#B86F5A] bg-[#FAF6EE] max-w-md mx-auto text-center animate-fade-in">
            <CheckCircle2 className="w-8 h-8 text-[#B86F5A] mx-auto mb-3" />
            <h4 className="font-display font-bold text-lg text-[#241D2B] mb-1">
              YOU ARE ON THE LIST
            </h4>
            <p className="text-xs text-[#788276] font-mono">
              Issue dispatches will arrive directly to {email}. Welcome to OFFSET.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <input
                id="newsletter-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-5 py-4 bg-[#FAF6EE] border border-[#DDD1BE] text-[#241D2B] placeholder:text-[#788276] text-sm focus:outline-none focus:border-[#241D2B] transition-colors rounded-none font-body"
                required
              />
            </div>
            <button
              id="newsletter-submit-btn"
              type="submit"
              className="px-7 py-4 bg-[#241D2B] text-[#FAF6EE] font-mono text-xs uppercase tracking-[0.16em] hover:bg-[#B86F5A] transition-colors whitespace-nowrap rounded-none flex items-center justify-center gap-2 group"
            >
              <span>SUBSCRIBE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}

        {errorMessage && (
          <p className="text-xs font-mono text-[#B86F5A] mt-3">
            {errorMessage}
          </p>
        )}

        <div className="mt-8 text-[11px] font-mono text-[#788276]">
          NO SPAM. UNSUBSCRIBE ANY TIME. CURATED EDITORIAL ONLY.
        </div>
      </div>
    </section>
  );
};
