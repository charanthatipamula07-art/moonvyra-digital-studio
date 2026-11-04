import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Search,
  Filter,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';

export default function Portfolio({ onOpenProject, setActivePage, setInquiryPrefill }) {
  const [selectedCategory, setSelectedCategory] = useState('All Work');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All Work' ||
        p.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full relative overflow-hidden bg-background text-on-surface pt-space-lg pb-space-xl">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 right-1/3 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px] opacity-70"></div>
      <div className="pointer-events-none absolute top-1/2 -left-64 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[160px] opacity-40"></div>

      <div className="max-w-[1200px] mx-auto px-gutter relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-space-lg">
          <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md shadow-[0_0_20px_rgba(171,115,255,0.18)] mb-space-md border border-outline-variant/30">
            <span className="text-primary text-xs">✦</span>
            <span className="font-manrope text-xs uppercase tracking-widest text-primary-fixed font-semibold">
              Selected Creations
            </span>
            <span className="text-secondary text-xs">✦</span>
          </div>

          <h1 className="font-space-grotesk text-3xl sm:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-tight">
            The Studio{' '}
            <span className="text-secondary drop-shadow-[0_0_35px_rgba(181,197,251,0.45)] font-cinzel">
              Archive.
            </span>
          </h1>

          <div className="mt-2">
            <span className="font-script text-2xl text-primary font-normal">
              bespoke digital couture
            </span>
          </div>

          <p className="font-inter text-base sm:text-lg text-on-surface-variant mt-space-sm leading-relaxed">
            Explore our curated showcase of decentralized interfaces, luxury e-commerce flagships, and cybernetic SaaS platforms built with cosmic precision.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-xl mb-space-lg flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {portfolioCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = cat === 'All Work'
                ? portfolioProjects.length
                : portfolioProjects.filter(p => p.category.toLowerCase().includes(cat.toLowerCase())).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-manrope font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-primary-container to-primary text-on-primary shadow-[0_0_15px_rgba(171,115,255,0.4)]'
                      : 'bg-surface-container-high/80 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-outline-variant/30'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-on-primary/20 text-on-primary' : 'bg-surface-container-lowest text-outline'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
            <input
              type="text"
              placeholder="Search by keyword, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-container-high/80 border border-outline-variant/40 text-on-surface placeholder:text-outline text-xs sm:text-sm focus:outline-none focus:border-primary transition-all font-inter"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-surface-container/30 rounded-3xl border border-outline-variant/30 p-8">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-space-grotesk font-bold text-xl text-on-surface">No projects found</h3>
            <p className="font-inter text-sm text-on-surface-variant mt-1">
              Try adjusting your search criteria or category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Work');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-surface-container-high text-xs font-manrope font-semibold text-primary hover:bg-surface-container-highest"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenProject(project)}
                className="group cursor-pointer flex flex-col bg-surface-container-low rounded-2xl overflow-hidden hover:bg-surface-container transition-all duration-300 border border-outline-variant/30 hover:border-primary/50 shadow-lg hover:shadow-[0_12px_32px_-8px_rgba(169,112,255,0.25)] hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-xs font-manrope font-semibold text-primary border border-outline-variant/30">
                    {project.tag}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-xs font-manrope font-semibold text-secondary border border-outline-variant/30 uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-space-md flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="font-space-grotesk text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-inter text-sm text-on-surface-variant mt-2 leading-relaxed line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech badges snippet */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies?.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-surface-container-high text-[10px] font-mono text-on-surface-variant border border-outline-variant/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-secondary font-manrope font-semibold text-xs uppercase tracking-wider">
                    <span className="group-hover:text-primary transition-colors">View Deep Case Study</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Portfolio Footer CTA */}
        <div className="mt-space-xl p-space-lg rounded-3xl bg-gradient-to-r from-surface-container-high/60 via-surface-container to-surface-container-high/60 backdrop-blur-xl border border-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary text-xs">✦</span>
              <span className="font-manrope text-xs font-semibold text-primary uppercase tracking-widest">
                Custom Architectural Inquiries
              </span>
            </div>
            <h3 className="font-space-grotesk text-2xl font-bold text-on-surface">
              Have a Unique Vision in Mind?
            </h3>
            <p className="font-inter text-xs sm:text-sm text-on-surface-variant mt-1">
              We engineer tailored digital presences for clients worldwide with guaranteed performance SLAs.
            </p>
          </div>

          <button
            onClick={() => {
              setInquiryPrefill('Custom Portfolio Project Inquiry');
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 px-8 py-3.5 rounded-full font-manrope font-semibold text-sm text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_20px_rgba(171,115,255,0.4)] hover:shadow-[0_0_28px_rgba(171,115,255,0.6)] hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            <span>Commission a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
