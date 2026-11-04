import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CosmicBackground from './components/CosmicBackground';
import ProjectModal from './components/ProjectModal';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function App() {
  // Support hash-based SPA routing with graceful fallback
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'services', 'about', 'portfolio', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [activeProject, setActiveProject] = useState(null);
  const [inquiryPrefill, setInquiryPrefill] = useState('');

  // Synchronize hash with page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'about', 'portfolio', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (project) => {
    setActiveProject(project);
  };

  const handleSelectProjectForInquiry = (projectTitle) => {
    setInquiryPrefill(projectTitle);
    setActivePage('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Dynamic Cosmic Background */}
      <CosmicBackground />

      {/* Persistent Navigation */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20 z-10">
        {activePage === 'home' && (
          <Home
            setActivePage={handlePageChange}
            onOpenProject={handleOpenProject}
            setInquiryPrefill={setInquiryPrefill}
          />
        )}
        {activePage === 'services' && (
          <Services
            setActivePage={handlePageChange}
            setInquiryPrefill={setInquiryPrefill}
          />
        )}
        {activePage === 'about' && (
          <About setActivePage={handlePageChange} />
        )}
        {activePage === 'portfolio' && (
          <Portfolio
            onOpenProject={handleOpenProject}
            setActivePage={handlePageChange}
            setInquiryPrefill={setInquiryPrefill}
          />
        )}
        {activePage === 'contact' && (
          <Contact inquiryPrefill={inquiryPrefill} />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Modal Dialog for Project Deep Dive */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onSelectProjectForInquiry={handleSelectProjectForInquiry}
        />
      )}
    </div>
  );
}
