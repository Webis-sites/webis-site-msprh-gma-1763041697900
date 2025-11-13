'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUserGraduate, FaGem, FaHandshake, FaSmile, FaTag } from 'react-icons/fa';
import Image from 'next/image';

// Define types for our selling points
interface SellingPoint {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const WhyChooseUs: React.FC = () => {
  // Define our selling points
  const sellingPoints: SellingPoint[] = [
    {
      id: 1,
      icon: <FaAward className="text-3xl md:text-4xl" />,
      title: "ניסיון רב שנים",
      description: "צוות המספרה שלנו מביא איתו שנים של ניסיון וידע מקצועי בתחום",
      color: "#45B7D1"
    },
    {
      id: 2,
      icon: <FaUserGraduate className="text-3xl md:text-4xl" />,
      title: "מומחים מוסמכים",
      description: "כל הספרים שלנו הם בעלי הסמכות מקצועיות והכשרה מתקדמת",
      color: "#FF6B6B"
    },
    {
      id: 3,
      icon: <FaGem className="text-3xl md:text-4xl" />,
      title: "מוצרים איכותיים",
      description: "אנו משתמשים רק במוצרים הטובים ביותר לשיער שלך",
      color: "#45B7D1"
    },
    {
      id: 4,
      icon: <FaHandshake className="text-3xl md:text-4xl" />,
      title: "שירות אישי",
      description: "כל לקוח מקבל יחס אישי ומותאם לצרכים הייחודיים שלו",
      color: "#FF6B6B"
    },
    {
      id: 5,
      icon: <FaSmile className="text-3xl md:text-4xl" />,
      title: "סביבה נעימה",
      description: "המספרה שלנו מעוצבת כדי להעניק לך חוויה נעימה ומרגיעה",
      color: "#45B7D1"
    },
    {
      id: 6,
      icon: <FaTag className="text-3xl md:text-4xl" />,
      title: "מחירים הוגנים",
      description: "אנו מציעים שירות מקצועי במחירים הוגנים וללא הפתעות",
      color: "#FF6B6B"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section 
      id="why-choose-us" 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-100"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#45B7D1] inline-block relative">
            למה לבחור בנו?
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FF6B6B] rounded-full"></div>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-right">
            במספרה גמא אנחנו מחויבים לאיכות, מקצועיות וחווית לקוח מעולה
          </p>
        </motion.div>

        {/* Retro-inspired geometric pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r-2 border-[#45B7D1] h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 w-full absolute top-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-b-2 border-[#FF6B6B] w-full"></div>
            ))}
          </div>
        </div>

        {/* Selling Points in a creative layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sellingPoints.map((point, index) => (
            <motion.div 
              key={point.id}
              className={`
                relative overflow-hidden rounded-lg p-6 shadow-lg
                ${index % 2 === 0 ? 'transform md:translate-y-8' : ''}
                bg-white border-t-4
              `}
              style={{ borderColor: point.color }}
              variants={itemVariants}
            >
              {/* Retro geometric accent */}
              <div 
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10"
                style={{ backgroundColor: point.color }}
              ></div>
              <div 
                className="absolute bottom-0 left-0 w-full h-1"
                style={{ backgroundColor: point.color }}
              ></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div 
                  className="p-3 rounded-full flex-shrink-0"
                  style={{ color: point.color }}
                >
                  {point.icon}
                </div>
                <div className="text-right">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: point.color }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
              
              {/* Pixelated corner accent */}
              <div className="absolute bottom-0 left-0 w-12 h-12 opacity-20">
                <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`${i % 3 === 0 ? 'bg-[#45B7D1]' : 'bg-[#FF6B6B]'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative image */}
        <motion.div 
          className="mt-16 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="מספרה גמא - חוויית לקוח מעולה"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">חוויה שלא תשכח</h3>
              <p className="text-white/80">אנחנו כאן כדי להעניק לך את השירות הטוב ביותר</p>
            </div>
          </div>
          
          {/* Retro VHS glitch effect */}
          <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay">
            <div className="h-full w-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#FF6B6B]"></div>
              <div className="absolute top-1/4 left-0 w-full h-1 bg-[#45B7D1]"></div>
              <div className="absolute top-2/4 left-0 w-full h-1 bg-[#FF6B6B]"></div>
              <div className="absolute top-3/4 left-0 w-full h-1 bg-[#45B7D1]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;