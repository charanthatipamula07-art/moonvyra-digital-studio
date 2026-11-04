import React, { useState } from 'react';
import {
  Laptop,
  Layers,
  Terminal,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
  ChevronDown,
  HelpCircle,
  Calculator,
  Compass
} from 'lucide-react';
import { servicesList, engagementTiers, servicesFAQs } from '../data/servicesData';

export default function Services({ setActivePage, setInquiryPrefill }) {
  const [selectedService, setSelectedService] = useState(servicesList[0].id);
  const [openFaq, setOpenFaq] = useState(0);

  // Simple interactive estimator
  const [estType, setEstType] = useState('website');
  const [estSpeed, setEstSpeed] = useState('standard');
  const [estMotion, setEstMotion] = useState('rich');

  const getEstimateRecommendation = () => {
    if (estType === 'landing') {
      return {
        model: 'Sprint Release',
        duration: '10 – 14 Days',
        ideal: 'Single-page high-converting launchpad with full mobile optimization and custom motion.',
      };
    } else if (estType === 'retainer') {
      return {
        model: 'Dedicated Retainer',
        duration: 'Monthly Rolling',
        ideal: 'Dedicated design and frontend engineering capacity with continuous feature evolution.',
      };
    } else {
      return {
        model: 'Flagship Ecosystem',
        duration: '4 – 6 Weeks',
        ideal: 'Multi-page comprehensive digital studio build with custom design system, WebGL effects, and CMS.',
      };
    }
  };

  const currentRec = getEstimateRecommendation();

  return (
    <div className="w-full relative overflow-hidden bg-background text-on-surface pt-space-lg pb-space-xl">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] opacity-60"></div>
      <div className="pointer-events-none absolute top-1/2 -left-64 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[160px] opacity-40"></div>

      <div className="max-w-[1200px] mx-auto px-gutter relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-space-xl">
          <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md shadow-[0_0_20px_rgba(171,115,255,0.18)] mb-space-md border border-outline-variant/30">
            <span className="text-primary text-xs">✦</span>
            <span className="font-manrope text-xs uppercase tracking-widest text-primary-fixed font-semibold">
              Capabilities & Architecture
            </span>
            <span className="text-secondary text-xs">✦</span>
          </div>

          <h1 className="font-space-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-tight">
            Transforming Ideas Into{' '}
            <span className="text-secondary drop-shadow-[0_0_35px_rgba(181,197,251,0.45)] font-cinzel">
              Digital Reality.
            </span>
          </h1>

          <p className="font-inter text-base sm:text-lg text-on-surface-variant mt-space-md leading-relaxed">
            From celestial brand identities to production-grade web infrastructure, we engineer digital touchpoints tailored for hyper-growth, architectural prestige, and effortless performance.
          </p>
        </div>

        {/* 5 Core Services Detailed Breakdown */}
        <div className="space-y-space-xl">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-surface-container/60 border border-outline-variant/30 backdrop-blur-xl shadow-xl hover:border-outline-variant/60 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Core Description */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-space-grotesk text-2xl font-bold text-primary/60">
                        {service.number}
                      </span>
                      <span className="font-manrope text-xs font-semibold text-secondary uppercase tracking-widest bg-surface-container-high/80 px-3 py-1 rounded-full border border-outline-variant/30">
                        {service.subtag}
                      </span>
                    </div>

                    <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-on-surface">
                      {service.title}
                    </h2>

                    <p className="font-manrope text-sm sm:text-base text-primary leading-relaxed font-semibold">
                      {service.tagline}
                    </p>

                    <p className="font-inter text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="font-manrope text-xs uppercase tracking-wider text-on-surface font-bold">
                        What We Deliver:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="font-inter text-xs text-on-surface-variant">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables Card & CTA */}
                  <div className="lg:col-span-5 bg-surface-container-low/90 p-6 rounded-2xl border border-outline-variant/40 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
                      <div className="flex items-center gap-2 text-xs font-manrope font-semibold text-on-surface">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>Timeline: {service.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-manrope font-semibold text-primary">
                        <Target className="w-4 h-4" />
                        <span>Bespoke Scope</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-manrope text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                        Client Handover Assets:
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 font-inter text-xs text-on-surface-variant bg-surface-container px-3 py-2 rounded-xl border border-outline-variant/20"
                          >
                            <span className="text-primary text-xs">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <p className="font-inter text-[11px] text-on-surface-variant/80 italic mb-4">
                        Ideal for: {service.idealFor}
                      </p>

                      <button
                        onClick={() => {
                          setInquiryPrefill(service.title);
                          setActivePage('contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full py-3 rounded-full font-manrope font-semibold text-sm text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_20px_rgba(171,115,255,0.4)] hover:shadow-[0_0_28px_rgba(171,115,255,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                      >
                        <span>Initiate {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & Engagement Estimator */}
        <section className="mt-space-xl p-6 sm:p-8 lg:p-10 rounded-3xl bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-outline-variant/30">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Calculator className="w-4 h-4 text-primary" />
                <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
                  Interactive Scope Advisor
                </span>
              </div>
              <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-on-surface">
                Plan Your Project Parameters
              </h2>
            </div>
            <p className="font-inter text-xs sm:text-sm text-on-surface-variant max-w-sm">
              Select your parameters below to find the optimal engagement structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Control 1: Project Type */}
            <div className="space-y-2">
              <label className="font-manrope text-xs font-bold text-on-surface uppercase tracking-wider block">
                Venture Scope
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: 'landing', label: 'High-Impact Landing Page' },
                  { id: 'website', label: 'Full Digital Flagship (5+ pages)' },
                  { id: 'retainer', label: 'Ongoing Design & Engineering' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEstType(item.id)}
                    className={`p-3 rounded-xl text-left text-xs font-manrope font-semibold transition-all border ${
                      estType === item.id
                        ? 'bg-primary-container text-on-primary-container border-primary shadow-[0_0_12px_rgba(171,115,255,0.4)]'
                        : 'bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Desired Velocity */}
            <div className="space-y-2">
              <label className="font-manrope text-xs font-bold text-on-surface uppercase tracking-wider block">
                Target Timeline
              </label>
              <div className="flex flex-col gap-2">
                {[
                  { id: 'rush', label: 'Rapid Sprint (< 2 Weeks)' },
                  { id: 'standard', label: 'Standard Build (3 – 6 Weeks)' },
                  { id: 'flexible', label: 'Continuous Partnership' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEstSpeed(item.id)}
                    className={`p-3 rounded-xl text-left text-xs font-manrope font-semibold transition-all border ${
                      estSpeed === item.id
                        ? 'bg-secondary-container text-on-secondary-container border-secondary shadow-[0_0_12px_rgba(181,197,251,0.4)]'
                        : 'bg-surface-container text-on-surface-variant hover:text-on-surface border-outline-variant/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Advisor Result Display */}
            <div className="p-5 rounded-2xl bg-surface-container-high/70 border border-outline-variant/40 flex flex-col justify-between">
              <div>
                <span className="font-manrope text-[11px] font-semibold text-secondary uppercase tracking-widest block mb-1">
                  Recommended Model
                </span>
                <h3 className="font-space-grotesk text-xl font-bold text-on-surface">
                  {currentRec.model}
                </h3>
                <div className="inline-block mt-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary text-xs font-manrope font-semibold">
                  Estimated Cadence: {currentRec.duration}
                </div>
                <p className="font-inter text-xs text-on-surface-variant mt-3 leading-relaxed">
                  {currentRec.ideal}
                </p>
              </div>

              <button
                onClick={() => {
                  setInquiryPrefill(`${currentRec.model} Scope Inquiry`);
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-4 w-full py-2.5 rounded-full font-manrope font-semibold text-xs text-on-primary bg-primary hover:bg-primary-container text-on-primary-container transition-all flex items-center justify-center gap-1.5"
              >
                <span>Book Scoping Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Engagement Tiers */}
        <section className="mt-space-xl">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
              Engagement Models
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-1">
              Structured For Your Trajectory
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {engagementTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-space-md sm:p-space-lg rounded-3xl flex flex-col justify-between transition-all border ${
                  tier.featured
                    ? 'bg-surface-container/90 border-primary shadow-[0_0_35px_rgba(171,115,255,0.25)] relative'
                    : 'bg-surface-container-low/70 border-outline-variant/30 hover:border-outline-variant/60'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary font-manrope font-semibold text-xs tracking-wider uppercase shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="font-manrope text-xs uppercase tracking-widest text-secondary font-semibold">
                      {tier.priceRange}
                    </span>
                    <h3 className="font-space-grotesk text-2xl font-bold text-on-surface mt-1">
                      {tier.name}
                    </h3>
                    <p className="font-inter text-xs text-on-surface-variant mt-1">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="py-2.5 px-3 rounded-xl bg-surface-container-high/80 text-xs font-mono text-primary border border-outline-variant/30 mb-5">
                    Cadence: {tier.timeline}
                  </div>

                  <ul className="space-y-2.5">
                    {tier.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 font-inter text-xs text-on-surface-variant">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setInquiryPrefill(`${tier.name} Inquiry`);
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`mt-6 w-full py-3 rounded-full font-manrope font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                    tier.featured
                      ? 'bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary shadow-lg hover:scale-[1.02]'
                      : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest border border-outline-variant/40'
                  }`}
                >
                  <span>Select Model</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES FAQ ACCORDION */}
        <section className="mt-space-xl max-w-3xl mx-auto">
          <div className="text-center mb-space-lg">
            <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" /> Answers to Common Questions
            </span>
            <h2 className="font-space-grotesk text-3xl font-bold text-on-surface mt-1">
              Studio Methodology FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {servicesFAQs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface-container/60 border border-outline-variant/30 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-space-grotesk font-semibold text-base text-on-surface hover:text-primary transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 font-inter text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
