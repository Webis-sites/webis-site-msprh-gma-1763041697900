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
                className="block px-4 py-2 text-white hover:text-[#FF6B6B] transition-colors duration-200 font-medium"
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <button
          className="md:hidden text-white text-2xl z-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-[#45B7D1] shadow-lg md:hidden"
            >
              <ul className="flex flex-col space-y-4 p-8 mt-16">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block text-white hover:text-[#FF6B6B] transition-colors duration-200 text-lg font-medium"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default NavBar;