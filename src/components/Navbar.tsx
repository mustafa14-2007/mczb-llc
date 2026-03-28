import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Portfolio', href: isHome ? '#portfolio' : '/#portfolio' },
    { name: 'Structure', href: isHome ? '#structure' : '/#structure' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="MCZB LLC" 
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              document.getElementById('nav-logo-fallback')?.classList.remove('hidden');
            }}
          />
          <div id="nav-logo-fallback" className="hidden text-2xl font-serif font-bold tracking-widest text-white">
            MCZB <span className="metallic-text">LLC</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel py-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
