'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

interface NavLink {
  id: string;
  title: string;
  href: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { id: 'home', title: 'ראשי', href: '#home' },
    { id: 'services', title: 'שירותים', href: '#services' },
    { id: 'products', title: 'מוצרים', href: '#products' },
    { id: 'testimonials', title: 'המלצות', href: '#testimonials' },
    { id: 'faq', title: 'שאלות נפוצות', href: '#faq' },
    { id: 'contact', title: 'צור קשר', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header 
      id="navbar" 
      dir="rtl" 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#45B7D1]/90 shadow-md' : 'bg-[#45B7D1]/70'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ 
            textShadow: '2px 2px 0 #FF6B6B, -2px -2px 0 #FF6B6B, 2px -2px 0 #FF6B6B, -2px 2px 0 #FF6B6B',
            fontFamily: '"Press Start 2P", cursive, system-ui'
          }}>
            מספרה גמא
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex space-x-1 space-x-reverse text-right"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {navLinks.map((link) => (
            <motion.li key={link.id} whileHover={{ scale: 1.05 }}>
              <Link 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-4 py-2 text-white hover:text-[#FF6B6B] transition-colors duration-200 relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-[#FF6B6B] after:transition-all hover:after:w-full"
                aria-label={`ניווט אל ${link.title}`}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white z-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#45B7D1] shadow-lg z-40 flex flex-col"
            >
              <div className="p-5 mt-16">
                <ul className="space-y-4 text-right">
                  {navLinks.map((link) => (
                    <motion.li 
                      key={link.id}
                      whileHover={{ x: -5 }}
                      className="border-b border-white/20 pb-2"
                    >
                      <Link 
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="block text-white hover:text-[#FF6B6B] transition-colors duration-200"
                        aria-label={`ניווט אל ${link.title}`}
                      >
                        {link.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Retro decoration for mobile menu */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FF6B6B]/30 to-transparent"></div>
              <div className="absolute bottom-10 left-5 right-5 h-0.5 bg-white/30"></div>
              <div className="absolute bottom-20 left-10 right-10 h-0.5 bg-white/20"></div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Overlay for mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>
        
        {/* Retro decoration elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6B6B]"></div>
        <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-white/30"></div>
        
        {/* Grid pattern decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;