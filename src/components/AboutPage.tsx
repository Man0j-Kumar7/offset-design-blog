import React from 'react';
import { ArrowUpRight, Compass, Sparkles, BookOpen } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2EBDD] text-[#241D2B] pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header */}
        <div className="border-b border-[#241D2B] pb-8 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B86F5A] block mb-3">
            ABOUT THE PUBLICATION
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.02] tracking-[-0.035em] text-[#241D2B] max-w-5xl mb-8">
            OFFSET IS A PLACE FOR DESIGN THINKING.
          </h1>
          <p className="font-body text-xl sm:text-2xl text-[#241D2B]/85 font-light max-w-3xl leading-relaxed">
            OFFSET explores visual culture, interfaces, branding, typography and emerging creative technology through critical long-form essays, practitioner dialogues, and tactile visual systems.
          </p>
        </div>

        {/* Core Manifesto Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Visual with crop marks (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="border border-[#DDD1BE] p-4 bg-[#FAF6EE]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#241D2B]">
                <img
                  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop"
                  alt="Type drawer and editorial print plates"
                  className="w-full h-full object-cover grayscale-[15%] contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241D2B]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[#FAF6EE] text-xs font-mono">
                  <span>PRINT ARCHIVE & EDITORIAL WORKSHOP</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DDD1BE] flex items-center justify-between text-xs font-mono text-[#788276]">
                <span>ESTABLISHED 2026</span>
                <span>GLOBAL CIRCULATION</span>
              </div>
            </div>
          </div>

          {/* Narrative Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg font-body font-light text-[#241D2B]/85 leading-relaxed">
            <p>
              In an era overwhelmed by algorithmic ephemeral feeds, design has too often been reduced to quick screenshots and momentary trends. OFFSET was founded on a contrary premise: that digital design is an enduring intellectual and cultural discipline deserving of sustained contemplation.
            </p>
            <p>
              We reject the homogenization of the modern web. We believe that interfaces are architecture; that typography is voice made physical; and that interaction design holds the ethical responsibility of dignifying human consciousness.
            </p>
            <p>
              From custom independent type foundries in Berlin to generative interaction studios in Tokyo and spatial interaction labs in Oslo, we document the practitioners who craft with conscience, precision, and soul.
            </p>
            <div className="pt-6 border-t border-[#DDD1BE] flex flex-wrap gap-8 text-xs font-mono text-[#788276]">
              <div>
                <strong className="text-[#241D2B] block text-base font-display">100% INDEPENDENT</strong>
                <span>No sponsored reviews</span>
              </div>
              <div>
                <strong className="text-[#241D2B] block text-base font-display">SLOW PUBLISHING</strong>
                <span>Depth over clickbait</span>
              </div>
              <div>
                <strong className="text-[#241D2B] block text-base font-display">OPEN ARCHIVE</strong>
                <span>Free knowledge access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Philosophy Section: OBSERVE. QUESTION. CREATE. */}
        <section className="bg-[#241D2B] text-[#F2EBDD] p-8 sm:p-14 lg:p-16 border border-[#42364E] mb-20 relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#B86F5A] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL PHILOSOPHY</span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.04em] text-[#FAF6EE] mb-12">
            OBSERVE. QUESTION. CREATE.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-8 border-t border-[#42364E]">
            {/* Pillar 1 */}
            <div>
              <span className="font-display font-bold text-2xl text-[#B86F5A] block mb-2">
                01 — OBSERVE
              </span>
              <h3 className="font-display font-semibold text-xl text-[#FAF6EE] mb-3">
                Uncompromising Attentiveness
              </h3>
              <p className="text-sm font-body font-light text-[#DDD1BE]/80 leading-relaxed">
                Before designing, we examine the subtle physical, emotional, and social realities of human environments. We study the rhythm of daily life and notice where digital systems fracture calm.
              </p>
            </div>

            {/* Pillar 2 */}
            <div>
              <span className="font-display font-bold text-2xl text-[#B86F5A] block mb-2">
                02 — QUESTION
              </span>
              <h3 className="font-display font-semibold text-xl text-[#FAF6EE] mb-3">
                Interrogating Default Assumptions
              </h3>
              <p className="text-sm font-body font-light text-[#DDD1BE]/80 leading-relaxed">
                We challenge standard metrics that measure human engagement by minutes lost to screen scrolling. We ask who benefits from an interaction pattern, and what is surrendered in exchange.
              </p>
            </div>

            {/* Pillar 3 */}
            <div>
              <span className="font-display font-bold text-2xl text-[#B86F5A] block mb-2">
                03 — CREATE
              </span>
              <h3 className="font-display font-semibold text-xl text-[#FAF6EE] mb-3">
                Enduring Visual Craft
              </h3>
              <p className="text-sm font-body font-light text-[#DDD1BE]/80 leading-relaxed">
                We advocate for tactile interfaces, bespoke typography, and respectful software that ages gracefully with its users rather than being discarded for the next novelty cycle.
              </p>
            </div>
          </div>
        </section>

        {/* Masthead & Editorial Board */}
        <div className="border-t border-[#241D2B] pt-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#241D2B]">
              MASTHEAD & CONTRIBUTORS
            </h3>
            <span className="text-xs font-mono text-[#788276] uppercase">
              VOLUME 03 — 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border border-[#DDD1BE] bg-[#FAF6EE]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B86F5A] block mb-1">
                EDITOR IN CHIEF
              </span>
              <h4 className="font-display font-bold text-lg text-[#241D2B]">
                Elena Rostova
              </h4>
              <p className="text-xs font-mono text-[#788276] mt-1">
                Oslo / Stockholm
              </p>
            </div>

            <div className="p-4 border border-[#DDD1BE] bg-[#FAF6EE]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B86F5A] block mb-1">
                CREATIVE DIRECTOR
              </span>
              <h4 className="font-display font-bold text-lg text-[#241D2B]">
                Marcus Vance
              </h4>
              <p className="text-xs font-mono text-[#788276] mt-1">
                Copenhagen
              </p>
            </div>

            <div className="p-4 border border-[#DDD1BE] bg-[#FAF6EE]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B86F5A] block mb-1">
                SENIOR TYPOGRAPHER
              </span>
              <h4 className="font-display font-bold text-lg text-[#241D2B]">
                Julian Thorne
              </h4>
              <p className="text-xs font-mono text-[#788276] mt-1">
                London / Basel
              </p>
            </div>

            <div className="p-4 border border-[#DDD1BE] bg-[#FAF6EE]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B86F5A] block mb-1">
                VISUAL CULTURE EDITOR
              </span>
              <h4 className="font-display font-bold text-lg text-[#241D2B]">
                Nadia Chen
              </h4>
              <p className="text-xs font-mono text-[#788276] mt-1">
                Tokyo / Taipei
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
