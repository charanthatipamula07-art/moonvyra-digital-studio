import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose, onSelectProjectForInquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-canvas-void/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-container-lowest/95 border border-outline-variant/50 rounded-3xl shadow-[0_24px_64px_-12px_rgba(5,5,9,0.8),0_0_40px_-4px_rgba(169,112,255,0.25)] backdrop-blur-2xl z-10 animate-in zoom-in-95 duration-200">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-surface-container-high/80 border border-outline-variant/40 text-on-surface hover:text-primary hover:bg-surface-container-highest transition-colors flex items-center justify-center focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner Image */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] bg-surface-container-low overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent"></div>

          <div className="absolute bottom-6 left-6 sm:left-8 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-xs font-manrope font-semibold text-primary border border-outline-variant/30 mb-2">
                <span>✦</span>
                <span>{project.tag}</span>
              </div>
              <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
                {project.title}
              </h2>
            </div>
            <div className="font-manrope text-xs tracking-widest uppercase text-secondary bg-surface-container-high/80 px-3 py-1 rounded-full border border-outline-variant/40">
              {project.category}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Metrics Strip */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-surface-container/60 border border-outline-variant/30">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col text-center">
                  <span className="font-space-grotesk text-xl sm:text-2xl font-bold text-primary">
                    {m.value}
                  </span>
                  <span className="font-inter text-xs text-on-surface-variant mt-0.5">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Context & Overview */}
          <div className="space-y-3">
            <h3 className="font-manrope text-lg font-bold text-on-surface flex items-center gap-2">
              <span className="text-primary text-sm">✦</span>
              <span>Project Overview</span>
            </h3>
            <p className="font-inter text-body-md text-on-surface-variant leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30">
              <h4 className="font-manrope text-base font-bold text-secondary mb-2 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-secondary" />
                <span>The Challenge</span>
              </h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low/80 border border-outline-variant/30">
              <h4 className="font-manrope text-base font-bold text-primary mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary" />
                <span>The Engineering Solution</span>
              </h4>
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Technologies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="font-manrope text-sm font-bold text-on-surface uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span>Core Deliverables</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.deliverables?.map((deliv, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container text-xs font-inter text-on-surface border border-outline-variant/30"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    <span>{deliv}</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-manrope text-sm font-bold text-on-surface uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-secondary" />
                <span>Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-surface-container-high text-xs font-mono text-secondary border border-outline-variant/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-manrope font-semibold text-sm text-on-surface block">
                Inspired by {project.title}?
              </span>
              <span className="font-inter text-xs text-on-surface-variant">
                We can architect a bespoke experience tailored for your brand goals.
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectProjectForInquiry(project.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full font-manrope font-semibold text-sm text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_20px_rgba(171,115,255,0.4)] hover:shadow-[0_0_28px_rgba(171,115,255,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Inquire About Similar Build</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
