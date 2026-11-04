import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Globe,
  Code2,
  Shield,
  Zap,
  CheckCircle2,
  Compass,
  Cpu,
  Feather
} from 'lucide-react';
import { studioPillars, studioLeadership, studioHubs, studioStandards } from '../data/aboutData';

export default function About({ setActivePage }) {
  return (
    <div className="w-full relative overflow-hidden bg-background text-on-surface pt-space-lg pb-space-xl">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/3 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] opacity-70"></div>
      <div className="pointer-events-none absolute top-1/2 -right-64 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[160px] opacity-40"></div>

      <div className="max-w-[1200px] mx-auto px-gutter relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-space-xl">
          <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md shadow-[0_0_20px_rgba(171,115,255,0.18)] mb-space-md border border-outline-variant/30">
            <span className="text-primary text-xs">✦</span>
            <span className="font-manrope text-xs uppercase tracking-widest text-primary-fixed font-semibold">
              The MOONVYRA Ethos
            </span>
            <span className="text-secondary text-xs">✦</span>
          </div>

          <h1 className="font-space-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-tight">
            Celestial Artistry.{' '}
            <span className="text-secondary drop-shadow-[0_0_35px_rgba(181,197,251,0.45)] font-cinzel">
              Architectural Finesse.
            </span>
          </h1>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="font-script text-2xl text-primary font-normal">
              where space meets precision
            </span>
          </div>

          <p className="font-inter text-base sm:text-lg text-on-surface-variant mt-space-md leading-relaxed">
            MOONVYRA was founded on an unapologetic belief: the modern web has become homogenized. We replace sterile software templates with cosmic obsidian depth, aerodynamic glassmorphism, and mathematical typography.
          </p>
        </div>

        {/* Narrative & Visual Identity Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-space-md">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xs">✦</span>
              <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
                The Cosmic Obsidian Design System
              </span>
            </div>

            <h2 className="font-space-grotesk text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
              A Symphony of Midnight Canvases and Violet Atmospheres.
            </h2>

            <p className="font-inter text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Our aesthetic draws inspiration from deep space photography, brutalist glass architecture, and haute couture monographs. We treat every web interface as a digital pavilion—an environment where users feel quiet awe, cognitive calm, and intuitive mastery.
            </p>

            <div className="p-5 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 space-y-3">
              <div className="flex items-center gap-2 text-secondary font-manrope font-semibold text-sm">
                <Compass className="w-4 h-4" />
                <span>Our Typographic Architecture:</span>
              </div>
              <ul className="space-y-2 text-xs font-inter text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">•</span>
                  <span><strong className="text-on-surface font-space-grotesk">Space Grotesk:</strong> Engineered for display statements with authoritative geometry and dense letter-spacing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">•</span>
                  <span><strong className="text-on-surface font-manrope">Manrope:</strong> Geometric, open and balanced for controls, chips, and navigational anchors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">•</span>
                  <span><strong className="text-on-surface font-inter">Inter:</strong> High-legibility neutral workhorse ensuring optical comfort over deep dark obsidian surfaces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono">•</span>
                  <span><strong className="text-on-surface font-cinzel">Cinzel & <span className="font-script text-base">Allura</span>:</strong> Classical serif monuments and couture handwritten accents for luxury contrast.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-high border border-outline-variant/40 shadow-2xl group">
              <img
                src="/images/hero-artwork.jpg"
                alt="MOONVYRA Studio Concept"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30">
                <div className="font-space-grotesk font-bold text-sm text-on-surface">
                  MOONVYRA Studio Headquarters
                </div>
                <div className="font-inter text-xs text-secondary mt-0.5">
                  “Dream • Design • Develop”
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Studio Pillars */}
        <section className="mt-space-xl">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-1">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {studioPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-container/60 border border-outline-variant/30 backdrop-blur-md flex flex-col justify-between hover:bg-surface-container-high/80 transition-all duration-300"
              >
                <div>
                  <span className="font-space-grotesk text-3xl font-bold text-primary/40 block mb-3">
                    {pillar.number}
                  </span>
                  <h3 className="font-space-grotesk text-lg font-bold text-on-surface mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Studio Standards Metrics */}
        <section className="mt-space-xl p-space-lg rounded-3xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-xl">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <span className="font-manrope text-xs font-semibold text-secondary uppercase tracking-widest">
              Verified Studio Benchmarks
            </span>
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-on-surface mt-1">
              Zero Compromise Engineering
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {studioStandards.map((std, i) => (
              <div key={i} className="p-4 rounded-2xl bg-surface-container/50 border border-outline-variant/20">
                <span className="font-space-grotesk text-3xl sm:text-4xl font-bold text-primary block">
                  {std.metric}
                </span>
                <span className="font-manrope font-semibold text-sm text-on-surface block mt-1">
                  {std.label}
                </span>
                <span className="font-inter text-xs text-on-surface-variant block mt-0.5">
                  {std.detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Studio Leadership Collective (Authentic Studio Roles - No fake testimonials) */}
        <section className="mt-space-xl">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
              The Collective
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-1">
              Studio Leadership Disciplines
            </h2>
            <p className="font-inter text-xs sm:text-sm text-on-surface-variant mt-1">
              Direct access to senior partners on every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {studioLeadership.map((lead, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-container/60 border border-outline-variant/30 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-space-grotesk text-base font-bold text-on-surface">
                    {lead.role}
                  </h3>
                  <div className="font-manrope text-xs font-semibold text-secondary mt-0.5 mb-3">
                    {lead.discipline}
                  </div>
                  <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                    {lead.bio}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-outline-variant/20 text-[11px] font-mono text-primary">
                  {lead.focus}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Collaborative Studio Hubs */}
        <section className="mt-space-xl">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <span className="font-manrope text-xs font-semibold text-secondary uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Globe className="w-4 h-4" /> Global Presence
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-1">
              24/7 Asynchronous Studios
            </h2>
            <p className="font-inter text-xs sm:text-sm text-on-surface-variant mt-1">
              Seamless delivery across major financial and creative capitals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {studioHubs.map((hub, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30 text-center space-y-1 hover:border-primary/40 transition-colors"
              >
                <div className="text-primary text-xs">✦</div>
                <h4 className="font-space-grotesk font-bold text-base text-on-surface">
                  {hub.city}
                </h4>
                <div className="font-inter text-xs text-secondary font-medium">
                  {hub.country}
                </div>
                <div className="font-mono text-[11px] text-on-surface-variant pt-1">
                  {hub.timezone}
                </div>
                <div className="font-inter text-[11px] text-on-surface-variant/80 pt-1 border-t border-outline-variant/20">
                  {hub.type}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="mt-space-xl p-space-lg sm:p-space-xl rounded-3xl bg-gradient-to-r from-surface-container-high/80 via-surface-container to-surface-container-high/80 text-center border border-outline-variant/40 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
              Ready to Ascend?
            </span>
            <h3 className="font-space-grotesk text-2xl sm:text-4xl font-bold text-on-surface">
              Begin Your Journey With MOONVYRA
            </h3>
            <p className="font-inter text-sm sm:text-base text-on-surface-variant leading-relaxed">
              We welcome visionary founders, luxury brands, and Web3 trailblazers ready to redefine their industry presence.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-manrope font-semibold text-sm text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_20px_rgba(171,115,255,0.4)] hover:shadow-[0_0_30px_rgba(171,115,255,0.6)] hover:scale-[1.02] transition-all"
              >
                <span>Initiate Transmission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
