import React, { useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Laptop,
  Layers,
  Terminal,
  Sparkles,
  Palette,
  Code,
  ShieldCheck,
  Zap,
  Globe,
  Award,
  CheckCircle2,
  Mail,
  Send,
  MessageSquare
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

export default function Home({ setActivePage, onOpenProject, setInquiryPrefill }) {
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [quickForm, setQuickForm] = useState({ name: '', email: '', objective: 'complete-website' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const filterOptions = [
    { label: 'All Work', value: 'All' },
    { label: 'Web Design', value: 'Web Design' },
    { label: 'UI/UX', value: 'UI/UX' },
    { label: 'Branding', value: 'Branding' },
  ];

  const filteredProjects = portfolioFilter === 'All'
    ? portfolioProjects.slice(0, 3)
    : portfolioProjects.filter(p => p.category.toLowerCase().includes(portfolioFilter.toLowerCase())).slice(0, 3);

  const handleQuickFormSubmit = (e) => {
    e.preventDefault();
    if (!quickForm.name.trim() || !quickForm.email.trim()) {
      setFormError('Please complete all required fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(quickForm.email)) {
      setFormError('Please enter a valid work email.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className="w-full relative overflow-hidden bg-background text-on-surface">
      {/* Dynamic Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[140px] opacity-70"></div>
      <div className="pointer-events-none absolute top-[30%] -left-64 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[160px] opacity-50"></div>
      <div className="pointer-events-none absolute top-[65%] -right-64 w-[600px] h-[600px] bg-primary-container/15 rounded-full blur-[170px] opacity-50"></div>

      {/* HERO SECTION */}
      <section className="relative w-full max-w-[1200px] mx-auto px-gutter pt-space-lg lg:pt-space-xl pb-space-xl flex flex-col items-center">
        {/* Top Floating Eyebrow Badge */}
        <div className="flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md shadow-[0_0_20px_rgba(171,115,255,0.18)] mb-space-md border border-outline-variant/30">
          <span className="text-primary text-xs select-none">✦</span>
          <span className="font-manrope text-xs uppercase tracking-widest text-primary-fixed font-semibold">
            A New Digital Era Begins
          </span>
          <span className="text-secondary text-xs select-none">✦</span>
        </div>

        {/* Main Headline with Typographic Depth */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-space-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-[1.1] mb-space-md">
            We Build{' '}
            <span className="text-secondary drop-shadow-[0_0_35px_rgba(181,197,251,0.45)]">
              Digital Experiences
            </span>{' '}
            Beyond Imagination.
          </h1>
          <p className="font-inter text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Your vision deserves more than an ordinary website. We combine creativity, technology, and thoughtful design to craft unforgettable digital ecosystems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md">
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-manrope font-semibold text-base text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_28px_rgba(171,115,255,0.4)] hover:shadow-[0_0_40px_rgba(171,115,255,0.65)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                setActivePage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-manrope font-semibold text-base text-secondary bg-surface-container-high/70 hover:bg-surface-container-highest/90 hover:text-on-surface backdrop-blur-md border border-outline-variant/30 transition-all"
            >
              Explore Our Work
            </button>
          </div>
        </div>

        {/* Visual Centerpiece: Celestial Emblem & Hero Portal */}
        <div className="relative w-full mt-space-xl flex justify-center items-center">
          <div className="relative w-full max-w-3xl aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2/1] rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.8)] bg-surface-container-low group border border-outline-variant/30">
            {/* Generated Background Art */}
            <img
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              alt="Cinematic celestial digital artwork featuring glowing neon crescent moon emblem with silver chrome typography MOONVYRA"
              src="/images/hero-artwork.jpg"
              onError={(e) => {
                e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBhgOlRDV7SoBaxxkIKoifDkE-kKy2oLBED357SuhMaC-hHC3hZE4k-Ijt3dzWiJSTZa7xZDljaVXJlJQcP-LieIHdlZhmEWYAOBU61c4S7mSamXkYPNz8DLs5KmH6ki8RdT4P5tExc688cnsbdLJQc5iPR5NE9ArHSesq-OzwafzAmfYPTZILjPQ_5GoJwkuAgro_izFwPaP5WK9TP78Oek_QFKlHB_cCSknGuokXi";
              }}
            />

            {/* Scrim Overlay for Typographic Crispness */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/60 via-transparent to-surface-container-lowest/60"></div>

            {/* Live Badge overlay */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 flex items-center gap-space-sm bg-surface-container-lowest/80 backdrop-blur-lg px-4 py-2 rounded-full shadow-lg border border-outline-variant/40">
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_#ab73ff]"></div>
              <span className="font-manrope text-xs text-on-surface tracking-wider uppercase font-semibold">
                Dream • Design • Develop
              </span>
            </div>

            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 hidden sm:flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-lg px-4 py-2 rounded-full border border-outline-variant/40">
              <span className="font-inter text-xs text-secondary">Global Studios</span>
              <span className="font-manrope text-xs text-primary font-semibold">● 2026 Ready</span>
            </div>
          </div>
        </div>

        {/* Capability Feature Badges Grid */}
        <div className="w-full mt-space-lg grid grid-cols-2 md:grid-cols-4 gap-space-sm">
          <div
            onClick={() => setActivePage('services')}
            className="cursor-pointer bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex items-center gap-space-sm hover:bg-surface-container-high transition-colors border border-outline-variant/20"
          >
            <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-manrope font-semibold text-sm text-on-surface truncate">Website Design</div>
              <div className="font-inter text-xs text-on-surface-variant">Immersive & Responsive</div>
            </div>
          </div>

          <div
            onClick={() => setActivePage('services')}
            className="cursor-pointer bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex items-center gap-space-sm hover:bg-surface-container-high transition-colors border border-outline-variant/20"
          >
            <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0">
              <Palette className="w-5 h-5 text-secondary" />
            </div>
            <div className="min-w-0">
              <div className="font-manrope font-semibold text-sm text-on-surface truncate">UI/UX Design</div>
              <div className="font-inter text-xs text-on-surface-variant">Human-Centric Journeys</div>
            </div>
          </div>

          <div
            onClick={() => setActivePage('services')}
            className="cursor-pointer bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex items-center gap-space-sm hover:bg-surface-container-high transition-colors border border-outline-variant/20"
          >
            <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <div className="font-manrope font-semibold text-sm text-on-surface truncate">Web Development</div>
              <div className="font-inter text-xs text-on-surface-variant">High-Speed Architecture</div>
            </div>
          </div>

          <div
            onClick={() => setActivePage('services')}
            className="cursor-pointer bg-surface-container-low/70 backdrop-blur-md p-4 rounded-xl flex items-center gap-space-sm hover:bg-surface-container-high transition-colors border border-outline-variant/20"
          >
            <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-secondary" />
            </div>
            <div className="min-w-0">
              <div className="font-manrope font-semibold text-sm text-on-surface truncate">Brand Identity</div>
              <div className="font-inter text-xs text-on-surface-variant">Couture Visual Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SEPARATOR ORBITAL HAIRLINE */}
      <div className="w-full max-w-[1200px] mx-auto px-gutter my-space-md">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-container/40 to-transparent"></div>
      </div>

      {/* SERVICES SECTION */}
      <section className="w-full max-w-[1200px] mx-auto px-gutter py-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary text-xs">✦</span>
              <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
                Capabilities
              </span>
            </div>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
              Our Services
            </h2>
            <p className="font-manrope text-base sm:text-lg text-on-surface-variant mt-1">
              Transforming Ideas Into Digital Reality
            </p>
          </div>
          <p className="font-inter text-sm sm:text-base text-on-surface-variant max-w-md">
            From celestial brand identities to production-grade web infrastructure, we engineer digital touchpoints tailored for hyper-growth.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Card 1 */}
          <div
            onClick={() => setActivePage('services')}
            className="group cursor-pointer bg-surface-container/60 hover:bg-surface-container-high/90 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-outline-variant/30"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary-container/20 transition-all duration-300 mb-space-md">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="font-manrope text-xs font-semibold text-secondary uppercase tracking-widest">
                01 / Digital
              </span>
              <h3 className="font-space-grotesk text-xl font-bold text-on-surface mt-1 mb-2">
                Website Design
              </h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Modern, hyper-responsive websites architected for fluid conversion, organic immersion, and unforgettable impressions.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm flex items-center justify-between">
              <span className="font-manrope text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">
                Learn More
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => setActivePage('services')}
            className="group cursor-pointer bg-surface-container/60 hover:bg-surface-container-high/90 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-outline-variant/30"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest/80 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary-container/30 transition-all duration-300 mb-space-md">
                <Layers className="w-6 h-6" />
              </div>
              <span className="font-manrope text-xs font-semibold text-secondary uppercase tracking-widest">
                02 / Experience
              </span>
              <h3 className="font-space-grotesk text-xl font-bold text-on-surface mt-1 mb-2">
                UI/UX Design
              </h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Intuitive & engaging interactions engineered through ergonomic research, precision wireframing, and sleek glassmorphism.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm flex items-center justify-between">
              <span className="font-manrope text-xs font-semibold text-on-surface-variant group-hover:text-secondary transition-colors">
                Learn More
              </span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => setActivePage('services')}
            className="group cursor-pointer bg-surface-container/60 hover:bg-surface-container-high/90 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-outline-variant/30"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary-container/20 transition-all duration-300 mb-space-md">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="font-manrope text-xs font-semibold text-secondary uppercase tracking-widest">
                03 / Engineering
              </span>
              <h3 className="font-space-grotesk text-xl font-bold text-on-surface mt-1 mb-2">
                Web Development
              </h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Scalable, lightning-fast web builds built on modern stacks, ensuring zero latency, SEO dominance, and airtight security.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm flex items-center justify-between">
              <span className="font-manrope text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">
                Learn More
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => setActivePage('services')}
            className="group cursor-pointer bg-surface-container/60 hover:bg-surface-container-high/90 backdrop-blur-xl p-space-md rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-outline-variant/30"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest/80 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary-container/30 transition-all duration-300 mb-space-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-manrope text-xs font-semibold text-secondary uppercase tracking-widest">
                04 / Brand
              </span>
              <h3 className="font-space-grotesk text-xl font-bold text-on-surface mt-1 mb-2">
                Branding Systems
              </h3>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                Bespoke logomarks, ethereal color theory, typography kits, and comprehensive brand books that establish timeless prestige.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm flex items-center justify-between">
              <span className="font-manrope text-xs font-semibold text-on-surface-variant group-hover:text-secondary transition-colors">
                Learn More
              </span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Additional Capabilities Horizontal Strip */}
        <div className="mt-space-md p-space-md rounded-2xl bg-surface-container-low/50 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-space-md border border-outline-variant/30">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-manrope font-semibold text-base text-on-surface">
                Looking for Custom High-Converting Landing Pages?
              </div>
              <div className="font-inter text-xs sm:text-sm text-on-surface-variant">
                We deliver rapid sprint releases with full mobile optimization and custom motion design.
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setInquiryPrefill('High-Impact Landing Page Sprint');
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-2.5 rounded-full font-manrope font-semibold text-sm text-on-surface bg-surface-container-high hover:bg-surface-container-highest transition-colors border border-outline-variant/40"
          >
            Discuss Your Sprint →
          </button>
        </div>
      </section>

      {/* METRICS & PHILOSOPHY STRIP */}
      <section className="w-full bg-surface-container-lowest/80 py-space-xl border-y border-outline-variant/20">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center">
            <div className="flex flex-col items-center">
              <span className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                100+
              </span>
              <span className="font-manrope font-semibold text-base text-on-surface mt-1">Projects Delivered</span>
              <span className="font-inter text-xs sm:text-sm text-on-surface-variant">Celestial precision across all screens</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
                50+
              </span>
              <span className="font-manrope font-semibold text-base text-on-surface mt-1">Global Clients</span>
              <span className="font-inter text-xs sm:text-sm text-on-surface-variant">Founders, Web3 & Luxury enterprises</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-fixed">
                5+
              </span>
              <span className="font-manrope font-semibold text-base text-on-surface mt-1">Continents Reached</span>
              <span className="font-inter text-xs sm:text-sm text-on-surface-variant">Borderless collaborative studios</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-fixed">
                99.8%
              </span>
              <span className="font-manrope font-semibold text-base text-on-surface mt-1">Client Satisfaction</span>
              <span className="font-inter text-xs sm:text-sm text-on-surface-variant">Long-term brand retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO SECTION */}
      <section className="w-full max-w-[1200px] mx-auto px-gutter py-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary text-xs">✦</span>
              <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              Selected Works
            </h2>
            <p className="font-manrope text-base text-on-surface-variant mt-1">
              Some of our finest cosmic digital creations
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setPortfolioFilter(opt.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-manrope font-semibold transition-all ${
                  portfolioFilter === opt.value
                    ? 'bg-gradient-to-r from-primary-container to-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-high/80 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-outline-variant/30'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio 3-Card Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProject(project)}
              className="group cursor-pointer flex flex-col bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container transition-all duration-300 border border-outline-variant/30 hover:border-primary/50 shadow-lg hover:shadow-[0_12px_32px_-8px_rgba(169,112,255,0.25)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container-highest">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-xs font-manrope font-semibold text-primary border border-outline-variant/30">
                  {project.tag}
                </div>
              </div>
              <div className="p-space-md flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-space-grotesk text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-sm text-on-surface-variant mt-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs flex items-center justify-between text-secondary font-manrope font-semibold text-xs uppercase tracking-wider">
                  <span>Case Study</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Work Explorer Button */}
        <div className="mt-space-lg text-center">
          <button
            onClick={() => {
              setActivePage('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-surface-container-high text-on-surface font-manrope font-semibold text-sm hover:bg-surface-container-highest transition-colors border border-outline-variant/30"
          >
            <span>View Full Studio Archive</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </button>
        </div>
      </section>

      {/* METHODOLOGY / PHILOSOPHY SECTION */}
      <section className="w-full bg-surface-container-low/40 py-space-xl border-y border-outline-variant/20">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-primary text-xs">✦</span>
              <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
                Our Methodology
              </span>
              <span className="text-primary text-xs">✦</span>
            </div>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
              The 4-Pillar Process
            </h2>
            <p className="font-inter text-base text-on-surface-variant mt-2">
              How we turn abstract ideas into world-class digital artifacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Step 1 */}
            <div className="p-space-md rounded-2xl bg-surface-container/70 border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="text-primary font-space-grotesk text-3xl font-bold opacity-40 mb-2">01</div>
                <h3 className="font-space-grotesk text-xl font-bold text-on-surface mb-2">Dream</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  Discovery workshops, market analysis, emotional intent mapping, and establishing your boldest digital ambition.
                </p>
              </div>
              <div className="mt-space-md text-xs font-manrope font-semibold text-primary uppercase tracking-wider">
                Phase 1 • Alignment
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-space-md rounded-2xl bg-surface-container/70 border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="text-secondary font-space-grotesk text-3xl font-bold opacity-40 mb-2">02</div>
                <h3 className="font-space-grotesk text-xl font-bold text-on-surface mb-2">Design</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  Wireframing, UI kits, obsidian glass styling, responsive architecture, and iterative user experience prototypes.
                </p>
              </div>
              <div className="mt-space-md text-xs font-manrope font-semibold text-secondary uppercase tracking-wider">
                Phase 2 • Prototype
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-space-md rounded-2xl bg-surface-container/70 border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="text-primary-container font-space-grotesk text-3xl font-bold opacity-40 mb-2">03</div>
                <h3 className="font-space-grotesk text-xl font-bold text-on-surface mb-2">Develop</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  Clean modular code, dynamic animations, rigorous cross-device testing, and high-performance server tuning.
                </p>
              </div>
              <div className="mt-space-md text-xs font-manrope font-semibold text-primary-container uppercase tracking-wider">
                Phase 3 • Engineering
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-space-md rounded-2xl bg-surface-container/70 border border-outline-variant/30 flex flex-col justify-between">
              <div>
                <div className="text-primary-fixed-dim font-space-grotesk text-3xl font-bold opacity-40 mb-2">04</div>
                <h3 className="font-space-grotesk text-xl font-bold text-on-surface mb-2">Deliver</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  Global deployment, search engine indexation, speed verification, analytics onboarding, and continuous evolution.
                </p>
              </div>
              <div className="mt-space-md text-xs font-manrope font-semibold text-primary-fixed-dim uppercase tracking-wider">
                Phase 4 • Launch
              </div>
            </div>
          </div>

          {/* Quote Banner Verbatim from Image & Design System */}
          <div className="mt-space-xl p-space-lg rounded-2xl bg-gradient-to-r from-surface-container-high/60 via-surface-container/80 to-surface-container-high/60 backdrop-blur-xl text-center shadow-xl border border-outline-variant/30">
            <p className="font-space-grotesk text-xl sm:text-2xl lg:text-3xl font-bold text-on-surface tracking-wide">
              “Your Vision. Our Creativity.{' '}
              <span className="text-secondary drop-shadow-[0_0_20px_rgba(181,197,251,0.5)] font-cinzel">
                Infinite Possibilities.
              </span>”
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="font-script text-xl text-primary font-normal">celestial craftsmanship</span>
              <span className="text-outline-variant">•</span>
              <span className="font-manrope text-xs uppercase tracking-widest text-primary font-semibold">
                MOONVYRA Studio Motto
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO TRUST & EXCELLENCE GUARANTEES (REPLACING FAKE TESTIMONIALS AS INSTRUCTED) */}
      <section className="w-full max-w-[1200px] mx-auto px-gutter py-space-xl">
        <div className="text-center max-w-xl mx-auto mb-space-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-primary text-xs">✦</span>
            <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
              Studio Standards & Trust
            </span>
            <span className="text-primary text-xs">✦</span>
          </div>
          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
            Engineered For Excellence
          </h2>
          <p className="font-inter text-sm sm:text-base text-on-surface-variant mt-1">
            We hold ourselves to mathematical standards of craftsmanship, privacy, and architectural stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Trust Pillar 1 */}
          <div className="p-space-md rounded-2xl bg-surface-container/60 backdrop-blur-md flex flex-col justify-between border border-outline-variant/30">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-3">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-manrope text-base font-bold text-on-surface mb-1">
                Zero Template Bloat
              </h3>
              <p className="font-inter text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Every line of CSS and React component is custom-crafted. No bloated multi-megabyte themes or slow drag-and-drop engines.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center gap-2 text-primary font-manrope text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Bespoke Code</span>
            </div>
          </div>

          {/* Trust Pillar 2 */}
          <div className="p-space-md rounded-2xl bg-surface-container/60 backdrop-blur-md flex flex-col justify-between border border-outline-variant/30">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary-container/30 flex items-center justify-center text-secondary mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-manrope text-base font-bold text-on-surface mb-1">
                Sub-Second Speed
              </h3>
              <p className="font-inter text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Optimized images, tree-shaken bundles, and modern edge delivery ensuring your visitors experience instant transitions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center gap-2 text-secondary font-manrope text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>95+ Lighthouse Score</span>
            </div>
          </div>

          {/* Trust Pillar 3 */}
          <div className="p-space-md rounded-2xl bg-surface-container/60 backdrop-blur-md flex flex-col justify-between border border-outline-variant/30">
            <div>
              <div className="w-10 h-10 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-manrope text-base font-bold text-on-surface mb-1">
                Full IP Ownership
              </h3>
              <p className="font-inter text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Complete unrestricted intellectual property, copyright transfer, Figma component libraries, and clean Git repository access.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center gap-2 text-primary font-manrope text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Commercial Freedom</span>
            </div>
          </div>

          {/* Trust Pillar 4 */}
          <div className="p-space-md rounded-2xl bg-surface-container/60 backdrop-blur-md flex flex-col justify-between border border-outline-variant/30">
            <div>
              <div className="w-10 h-10 rounded-xl bg-secondary-container/30 flex items-center justify-center text-secondary mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-manrope text-base font-bold text-on-surface mb-1">
                Global Hypercare
              </h3>
              <p className="font-inter text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                30 days of complimentary post-launch monitoring, cross-browser validation, speed verification, and analytics onboarding.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center gap-2 text-secondary font-manrope text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>30-Day Launch Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION / CONTACT PREVIEW */}
      <section className="w-full max-w-[1200px] mx-auto px-gutter py-space-xl" id="contact-preview">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-surface-container-high via-surface-container to-surface-container-low p-space-lg lg:p-space-xl shadow-2xl border border-outline-variant/40">
          {/* Ambient Backlight */}
          <div className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary text-xs">✦</span>
                <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
                  Initiate Transmission
                </span>
              </div>

              <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
                Let’s Create Something{' '}
                <span className="text-secondary drop-shadow-[0_0_25px_rgba(181,197,251,0.4)]">
                  Amazing.
                </span>
              </h2>

              <p className="font-inter text-base sm:text-lg text-on-surface-variant max-w-lg mt-2 leading-relaxed">
                Ready to ascend beyond the mundane web? Share your vision with our senior design leads and receive an actionable roadmap in 24 hours.
              </p>

              <div className="mt-space-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Email Quick Pill */}
                <a
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-highest/80 hover:bg-surface-container-highest text-on-surface font-manrope font-semibold text-xs sm:text-sm transition-colors border border-outline-variant/40"
                  href="mailto:moonvyradigitaldesignstudio@gmail.com"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>moonvyradigitaldesignstudio@gmail.com</span>
                </a>

                {/* Instagram Quick Pill */}
                <a
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-highest/80 hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface font-manrope font-semibold text-xs sm:text-sm transition-colors border border-outline-variant/40"
                  href="https://instagram.com/moonvyra_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-secondary font-bold">@</span>
                  <span>moonvyra_</span>
                </a>
              </div>
            </div>

            {/* Quick Intake Card */}
            <div className="lg:col-span-5 bg-surface-container-lowest/90 backdrop-blur-2xl p-space-md sm:p-space-lg rounded-2xl border border-outline-variant/40 shadow-xl">
              <div className="font-space-grotesk text-xl font-bold text-on-surface mb-1">
                Schedule a Briefing
              </div>
              <p className="font-inter text-xs sm:text-sm text-on-surface-variant mb-space-md">
                Tell us about your upcoming venture.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-surface-container text-center space-y-3 border border-primary/40 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-primary-container/20 text-primary mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-space-grotesk font-bold text-lg text-on-surface">
                    Transmission Acknowledged
                  </h4>
                  <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                    Our lead architect will review your briefing and reach out within 24 hours at <span className="text-primary font-mono">{quickForm.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setQuickForm({ name: '', email: '', objective: 'complete-website' });
                    }}
                    className="text-xs font-manrope font-semibold text-secondary hover:underline pt-2 block mx-auto"
                  >
                    Submit another briefing
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-space-sm" onSubmit={handleQuickFormSubmit}>
                  {formError && (
                    <div className="p-2.5 rounded-lg bg-error-container/40 border border-error/50 text-error text-xs font-inter">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                      Your Name *
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter"
                      placeholder="e.g. Orion Vance"
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                      Work Email *
                    </label>
                    <input
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter"
                      placeholder="orion@company.com"
                      value={quickForm.email}
                      onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                      type="email"
                    />
                  </div>

                  <div>
                    <label className="font-manrope text-xs font-semibold text-on-surface-variant block mb-1">
                      Primary Objective
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-inter"
                      value={quickForm.objective}
                      onChange={(e) => setQuickForm({ ...quickForm, objective: e.target.value })}
                    >
                      <option value="complete-website">Complete Website Design & Build</option>
                      <option value="ui-ux">UI/UX Interface System</option>
                      <option value="branding">Brand Identity & Aesthetic</option>
                      <option value="landing-page">High-Conversion Landing Page</option>
                    </select>
                  </div>

                  <button
                    className="mt-2 w-full py-3 rounded-full font-manrope font-semibold text-sm text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_20px_rgba(171,115,255,0.4)] hover:shadow-[0_0_30px_rgba(171,115,255,0.6)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
