import React from 'react';
import { ArrowRight, Quote, Sparkles } from 'lucide-react';

interface CreatorSpotlightProps {
  onReadStory: (storyId: string) => void;
}

export const CreatorSpotlight: React.FC<CreatorSpotlightProps> = ({ onReadStory }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#241D2B] text-[#F2EBDD] border-b border-[#42364E] relative overflow-hidden">
      {/* Decorative vertical guide lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#42364E]/40 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Label */}
        <div className="flex items-center justify-between border-b border-[#42364E] pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#B86F5A] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B86F5A]" />
            <span>CREATOR SPOTLIGHT</span>
          </div>
          <span className="text-xs font-mono text-[#788276]">
            PORTFOLIO & PROFILE / 2026
          </span>
        </div>

        {/* Asymmetrical Split: Editorial Portrait & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Portrait & Caption (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#42364E] p-4 bg-[#1A1420]">
              {/* Corner crosshairs */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#B86F5A]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#B86F5A]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#B86F5A]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#B86F5A]" />

              <div className="relative aspect-[3/4] overflow-hidden bg-[#241D2B]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                  alt="Maya Sen"
                  className="w-full h-full object-cover grayscale contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1420]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#DDD1BE]">
                  <span className="text-[#B86F5A] block text-[10px] uppercase tracking-widest">
                    LONDON / KYOTO
                  </span>
                  <span>STUDIO PORTRAIT — 2026</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#42364E] flex items-center justify-between text-xs font-mono text-[#B8AA98]">
                <span>FOCUS: CALM INTERACTION</span>
                <span>MAYA SEN STUDIO</span>
              </div>
            </div>
          </div>

          {/* Right Column: Name, Discipline, Big Quote, Link to story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Creator Name */}
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#788276] block mb-2">
                FEATURED PRACTITIONER
              </span>
              <h3 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] text-[#FAF6EE] mb-4">
                MAYA SEN
              </h3>

              {/* Discipline */}
              <p className="text-base sm:text-xl text-[#B8AA98] font-body font-light leading-relaxed mb-8">
                Independent digital designer exploring identity, interfaces and visual systems.
              </p>

              {/* Dramatic Pull Quote */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#B86F5A] py-2 mb-10">
                <Quote className="w-8 h-8 text-[#B86F5A]/40 mb-3" />
                <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#FAF6EE] font-normal leading-snug mb-4">
                  "Good design doesn't ask for attention. It earns it."
                </blockquote>
                <div className="text-xs font-mono text-[#B8AA98] uppercase tracking-wider">
                  — Maya Sen, in conversation with OFFSET
                </div>
              </div>
            </div>

            {/* Link to her story */}
            <div className="pt-6 border-t border-[#42364E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#788276]">
                FEATURED ESSAY: <br className="hidden sm:inline" />
                <span className="text-[#DDD1BE]">"Designing for Attention, Not Distraction"</span>
              </div>
              <button
                id="spotlight-read-story-btn"
                onClick={() => onReadStory('designing-for-attention-not-distraction')}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#FAF6EE] text-[#241D2B] font-mono text-xs uppercase tracking-[0.16em] hover:bg-[#B86F5A] hover:text-[#FAF6EE] transition-colors"
              >
                <span>READ HER ESSAY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
