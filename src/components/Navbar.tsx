import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Tattoo', href: '#tattoo' },
    { label: 'Furo Humanizado', href: '#furo-humanizado' },
    { label: 'Sobrancelhas', href: '#sobrancelhas' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#292725]/90 backdrop-blur-md border-b border-[#A89582]/20 py-3 text-[#F5F0E9]'
            : 'bg-gradient-to-b from-[#292725]/80 via-[#292725]/40 to-transparent py-5 text-[#F5F0E9]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif-editorial tracking-wide font-medium whitespace-nowrap shrink-0 hover:text-[#DCCFC0] transition-colors"
          >
            {BUSINESS_INFO.name}
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#DCCFC0]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative group whitespace-nowrap shrink-0"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#A77B58] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={BUSINESS_INFO.whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#A77B58] hover:bg-[#8e6545] text-white shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>Agendar Horário</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#DCCFC0] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A77B58]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#292725]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8 text-[#F5F0E9] animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between border-b border-[#A89582]/20 pb-5">
            <span className="font-serif-editorial text-2xl tracking-wide">{BUSINESS_INFO.name}</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#DCCFC0] hover:text-white"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-editorial text-2xl tracking-wide text-[#F5F0E9] hover:text-[#A77B58] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-[#A89582]/20 pt-6 flex flex-col gap-4">
            <a
              href={BUSINESS_INFO.whatsappLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full bg-[#A77B58] hover:bg-[#8e6545] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Falar no WhatsApp
            </a>
            <p className="text-center text-xs text-[#A89582]">
              {BUSINESS_INFO.city} — {BUSINESS_INFO.state}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
