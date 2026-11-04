# MOONVYRA — Premium Digital Design Studio Website

A luxury celestial digital design studio website crafted with **React 18**, **Vite**, and **Tailwind CSS**, faithfully translating the Google Stitch design export files (`code.html`, `DESIGN.md`, `screen.png`) into a production-ready web application.

---

## ✦ Key Highlights & Implementation Details

1. **Preserved Original Branding & Identity**:
   - **Logomark & Typography**: Original MOONVYRA celestial crescent emblem (`public/images/logo.png`), paired with uppercase `Space Grotesk` and `Manrope` typography.
   - **Studio Motto**: *“Dream • Design • Develop”* and *“Your Vision. Our Creativity. Infinite Possibilities.”*
   - **Official Coordinates**: `moonvyradigitaldesignstudio@gmail.com`, Instagram `@moonvyra_`, and direct phone line `9000777244`.

2. **Five Comprehensive Pages**:
   - **Home**: Eyebrow starlight badge, celestial hero portal with live pulsing badge (`Dream • Design • Develop`), capability grid, 4-bento services showcase, custom sprint announcement strip, numerical metrics strip (100+ projects, 50+ clients, 5+ continents, 99.8% satisfaction), 3-card featured portfolio with quick category filters and interactive modal dialog, 4-pillar methodology (`01 Dream`, `02 Design`, `03 Develop`, `04 Deliver`), studio standards & trust guarantee (NO fake testimonials), and quick intake briefing card.
   - **Services**: Deep dive into all 5 core capabilities (Website Design, UI/UX Interface Systems, Web Engineering, Branding Systems, and High-Impact Landing Pages) with deliverables checklists, timelines, interactive scope & timeline advisor, 3 structured engagement models (Sprint Release, Flagship Ecosystem, Dedicated Retainer), and an interactive methodology FAQ accordion.
   - **About Us**: The MOONVYRA origin story & cosmic philosophy, why "Cosmic Obsidian" was created, complete typographic hierarchy specifications, 4 studio pillars, verified benchmarks (100% custom code, <0.5s FCP, 100% IP transfer), authentic leadership collective disciplines, and 5 global collaborative hubs (Zurich, San Francisco, Tokyo, Singapore, Bengaluru).
   - **Portfolio**: Full studio archive featuring live category filters (All Work, Web Design, UI/UX, Branding, SaaS & Web3) with count chips, real-time keyword/tech search, deep case studies, interactive case study modal dialogs (overview, challenge, architectural solution, deliverables, tech stack, and impact metrics), and direct project commissioning hooks.
   - **Contact**: "Initiate Transmission" client briefing portal with field-level validation (name, email, company, service scope, budget, timeline, project message), real-time feedback, simulated transmission animation, and celestial transmission confirmation card with reference ID (`MV-XXXXXX`), direct studio channels, and mutual NDA guarantee.

3. **Strictly No Fake Testimonials**:
   - As explicitly requested, all fake client testimonials and fabricated quotes from `code.html` (e.g. Alexandre S., Elena Lindqvist, Marcus Vance) were excluded.
   - Replaced with authentic **Studio Trust & Excellence Guarantees**: Zero Template Bloat, Sub-Second Speed Guarantee, Full IP & Code Ownership Transfer, and 30-Day Launch Hypercare Warranty.

4. **Typography & Styling Architecture**:
   - **Space Grotesk**: Headlines, hero titles, numerical metrics, display density.
   - **Manrope**: Navigation links, buttons, chips, card headers, form controls.
   - **Inter**: Neutral, high-legibility body copy and longform descriptions over dark canvases.
   - **Cinzel**: Monumental classical serif accents and luxury subtitles.
   - **Allura**: Ethereal handwritten script flourishes for couture contrast.

5. **Cosmic Obsidian Palette System**:
   - Midnight Black Canvas Base: `#050509` / `#131318`
   - Deep Cosmos & Elevation: `#0B0B16` / `#1b1b21`
   - Obsidian Glass Cards: `rgba(17, 17, 31, 0.7)` with `backdrop-filter: blur(16px)` and `#29243A` borders
   - Lavender & Cosmic Purple: `#A970FF` / `#d6baff` / `#ab73ff`
   - Starlight / Moon Blue: `#B9C9FF` / `#b5c5fb`
   - Atmospheric gradients and starlight cross-flares (`✦`)

---

## ✦ Getting Started

### 1. Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
Verify or create a production-optimized bundle:
```bash
npm run build
```
The output is written to `dist/` with full tree-shaking and minification.

### 3. Production Preview
Preview the production build locally:
```bash
npm run preview
```

---

## ✦ Project Structure

```
├── public/
│   └── images/
│       ├── logo.png                # Original MOONVYRA emblem (120x70)
│       ├── hero-artwork.jpg        # Stitch hero portal art
│       ├── project-aetheria.jpg    # Aetheria Vault mockup
│       ├── project-lunaris.jpg     # Lunaris Haute Fragrance mockup
│       └── project-vortex.jpg      # Vortex Neuro mockup
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive header with mobile drawer
│   │   ├── Footer.jsx              # Studio footer with contact details & links
│   │   ├── CosmicBackground.jsx    # Atmospheric glow diffuse layer
│   │   ├── ProjectModal.jsx        # Detailed case study modal dialog
│   │   └── Icons.jsx               # SVG icons
│   ├── data/
│   │   ├── portfolioData.js        # Portfolio case studies and categories
│   │   ├── servicesData.js         # Core services, engagement tiers, FAQs
│   │   └── aboutData.js            # Studio values, leadership, global hubs
│   ├── pages/
│   │   ├── Home.jsx                # Full Stitch-matched landing page
│   │   ├── Services.jsx            # Services & interactive scope advisor
│   │   ├── About.jsx               # Studio ethos, typography & global presence
│   │   ├── Portfolio.jsx           # Studio archive with filters & search
│   │   └── Contact.jsx             # Briefing intake form with validation
│   ├── App.jsx                     # Root router and state orchestration
│   ├── index.css                   # Tailwind base, utilities, and fonts
│   └── main.jsx                    # React 18 DOM mount
├── DESIGN.md                       # Original Stitch design system specs
├── code.html                       # Original Stitch HTML reference
├── screen.png                      # Original full-length Stitch mockup
├── tailwind.config.js              # Stitch colors, spacing, and typography
├── vite.config.js                  # Vite bundler configuration
└── package.json                    # Project dependencies and scripts
```
