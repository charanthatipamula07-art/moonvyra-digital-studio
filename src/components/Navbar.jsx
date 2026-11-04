import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Send } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-xl border-b border-outline-variant/40 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'bg-surface/70 backdrop-blur-lg border-b border-outline-variant/30'
        }`}
      >
        <div className="h-20 max-w-[1200px] mx-auto px-gutter flex items-center justify-between gap-space-md">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-space-sm text-left group transition-transform focus:outline-none"
            aria-label="MOONVYRA Home"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="MOONVYRA Logo"
                className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(171,115,255,0.4)]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary-container to-secondary items-center justify-center text-on-primary font-bold shadow-[0_0_15px_#ab73ff]"
              >
                ✦
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-space-grotesk text-title-lg font-bold tracking-wider text-on-surface uppercase group-hover:text-primary transition-colors">
                MOONVYRA
              </span>
              <span className="font-manrope text-[11px] tracking-widest text-on-surface-variant hidden sm:inline-block">
                DIGITAL DESIGN STUDIO
              </span>
            </div>
          </button>

          {/* Desktop Navigation Pill Bar */}
          <nav
            className="hidden lg:flex items-center gap-space-xs px-1.5 py-1 rounded-full bg-surface-container-lowest/80 border border-outline-variant/30 shadow-inner backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-1.5 rounded-full transition-all duration-200 text-sm font-manrope font-semibold ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(171,115,255,0.45)]'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Hamburger */}
          <div className="flex items-center gap-space-sm">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:inline-flex items-center justify-center gap-2 px-space-md py-2 rounded-full font-manrope font-semibold text-sm text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_20px_rgba(171,115,255,0.45)] hover:shadow-[0_0_28px_rgba(171,115,255,0.65)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Status Indicator Avatar */}
            <div
              className="hidden sm:flex w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/50 items-center justify-center group relative cursor-pointer"
              title="Global Studio Active"
              onClick={() => handleNavClick('contact')}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-surface-container-high text-on-surface border border-outline-variant/40 hover:bg-surface-container-highest transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-canvas-void/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-surface-container-low/95 border-l border-outline-variant/30 backdrop-blur-2xl p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <span className="font-manrope text-xs tracking-widest text-primary uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Navigation Portal
                </span>
                <span className="text-xs font-mono text-secondary">2026 Ready</span>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all font-manrope font-semibold text-base ${
                        isActive
                          ? 'bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(171,115,255,0.4)]'
                          : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-on-primary-container' : 'text-outline'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-outline-variant/30 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-full font-manrope font-semibold text-sm text-on-primary bg-gradient-to-r from-primary-container via-primary to-secondary shadow-[0_0_20px_rgba(171,115,255,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all"
              >
                <span>Initiate Transmission</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="text-center font-inter text-xs text-on-surface-variant pt-2">
                <p>moonvyradigitaldesignstudio@gmail.com</p>
                <p className="mt-1 text-secondary font-mono">Direct: 9000777244</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
