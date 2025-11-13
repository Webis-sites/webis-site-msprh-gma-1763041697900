'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaScissors, FaCalendarAlt } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      aria-label="מספרה גמא - מספרה מוביל בישראל"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="מספרה מודרנית"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10"></div>
        
        {/* Retro Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ1QjdEMSIgb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 z-20"></div>
      </div>

      {/* Content Container */}
      <motion.div 
        className="relative z-30 h-full w-full flex flex-col justify-center items-end px-6 md:px-16 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="max-w-3xl text-right">
          {/* Decorative Element */}
          <motion.div 
            variants={itemVariants}
            className="mb-4 inline-block"
          >
            <FaScissors className="text-[#FF6B6B] text-4xl inline-block transform -rotate-12" />
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 text-right"
            style={{ 
              color: '#45B7D1',
              textShadow: '3px 3px 0px rgba(255, 107, 107, 0.5)',
              fontFamily: '"Press Start 2P", system-ui, sans-serif'
            }}
          >
            מספרה מוביל בישראל
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-white text-right"
            style={{ 
              fontFamily: '"VT323", monospace',
              letterSpacing: '0.5px'
            }}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg mb-10 text-right max-w-2xl"
          >
            אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="inline-block"
          >
            <button 
              className="group relative overflow-hidden px-8 py-4 bg-[#FF6B6B] text-white font-bold text-lg rounded-md hover:bg-[#ff5252] transition-colors duration-300 flex items-center"
              style={{ 
                boxShadow: '4px 4px 0px #45B7D1',
              }}
              aria-label="קבע תור עכשיו"
            >
              <span className="relative z-10 flex items-center">
                קבע תור עכשיו
                <FaCalendarAlt className="mr-2 text-xl" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#45B7D1] transform translate-y-full group-hover:translate-y-0 transition-transform duration-200"></span>
            </button>
          </motion.div>
          
          {/* Retro Decorative Element */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 border-t-4 border-dashed border-[#FF6B6B] w-32 opacity-70"
          ></motion.div>
        </div>
      </motion.div>
      
      {/* Pixelated Corner Decoration */}
      <div className="absolute top-0 left-0 w-24 h-24 z-20 opacity-70">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="20" height="20" fill="#45B7D1" />
          <rect x="20" y="0" width="20" height="20" fill="#FF6B6B" />
          <rect x="0" y="20" width="20" height="20" fill="#FF6B6B" />
          <rect x="40" y="0" width="20" height="20" fill="#45B7D1" />
          <rect x="0" y="40" width="20" height="20" fill="#45B7D1" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;