import React from 'react';
import { Mail, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer({ setActivePage }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 pt-space-xl pb-space-lg relative overflow-hidden">
      {/* Subtle Bottom Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-primary/5 rounded-full blur-[140px]"></div>

      <div className="max-w-[1200px] mx-auto px-gutter relative z-10">
        {/* Hairline Divider with Center Node */}
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-primary-container/40 to-transparent mb-space-xl flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#d6baff]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg pb-space-xl">
          {/* Studio Brand & Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <img
                src="/images/logo.png"
                alt="MOONVYRA"
                className="h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(171,115,255,0.4)]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="font-space-grotesk text-headline-sm font-bold tracking-tight text-primary">
                MOONVYRA
              </span>
            </div>

            <p className="font-manrope text-title-md font-semibold text-secondary flex items-center gap-2">
              <span>Dream • Design • Develop</span>
              <span className="text-primary text-xs">✦</span>
            </p>

            <p className="font-inter text-body-md text-on-surface-variant max-w-sm mt-space-xs leading-relaxed">
              High-luxury celestial digital craftsmanship. Engineering next-generation web presences, obsidian interfaces, and ethereal design ecosystems.
            </p>

            {/* Direct Contact Block */}
            <div className="flex flex-col gap-2 mt-space-sm font-inter text-body-sm text-on-surface-variant">
              <a
                href="mailto:moonvyradigitaldesignstudio@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="truncate">moonvyradigitaldesignstudio@gmail.com</span>
              </a>

              <a
                href="https://instagram.com/moonvyra_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-secondary transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span>Instagram: @moonvyra_</span>
              </a>

              <a
                href="tel:9000777244"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span>Direct: 9000777244</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-manrope text-title-md font-semibold text-on-surface flex items-center gap-1.5">
              <span>Navigation</span>
            </span>
            <ul className="flex flex-col gap-space-xs font-inter text-body-sm text-on-surface-variant">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-primary transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-primary transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-primary transition-colors text-left">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-primary transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-manrope text-title-md font-semibold text-on-surface">Studio Capabilities</span>
            <ul className="flex flex-col gap-space-xs font-inter text-body-sm text-on-surface-variant">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  Website Design
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  UI/UX Design
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  Branding & Identity
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-primary transition-colors text-left">
                  High-Impact Landing Pages
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-manrope text-title-md font-semibold text-on-surface">Studio Ethos</span>
            <ul className="flex flex-col gap-space-xs font-inter text-body-sm text-on-surface-variant">
              <li className="flex items-center gap-1.5">
                <span className="text-primary text-xs">✦</span>
                <span>Global Availability</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-secondary text-xs">✦</span>
                <span>Celestial Precision</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-primary text-xs">✦</span>
                <span>Art & Engineering</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-manrope font-semibold text-sm transition-colors"
                >
                  <span>Initiate Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left font-inter text-body-sm text-on-surface-variant">
          <p>© 2026 MOONVYRA Digital Design Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-script text-lg text-primary/80 hidden sm:inline">infinite possibilities</span>
            <p className="text-on-surface-variant/80">Precision crafted for the new digital era.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
