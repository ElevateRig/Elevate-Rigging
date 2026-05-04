import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const LOGO_URL =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698cd5bad7e1e48b5bbabdb4/02480612b_ELEVATE9_25noLVWhiteCopy-ElevateNOLVWhite3.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <img src={LOGO_URL} alt="Elevate Rigging" className="h-10 md:h-12 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-lime-400 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="tel:7024964491"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-green-500 text-black font-semibold px-5 py-2.5 rounded-full hover:from-lime-400 hover:to-green-400 transition-all duration-200 text-sm"
          >
            <Phone className="w-4 h-4" />
            (702) 496-4491
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-zinc-300 hover:text-lime-400 font-medium transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7024964491"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-green-500 text-black font-semibold px-5 py-2.5 rounded-full text-sm mt-2"
          >
            <Phone className="w-4 h-4" />
            (702) 496-4491
          </a>
        </div>
      )}
    </header>
  );
}
