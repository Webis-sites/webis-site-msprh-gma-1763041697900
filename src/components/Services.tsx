"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaCut, 
  FaBeard, 
  FaRazor, 
  FaSprayCan, 
  FaPalette, 
  FaChild,
  FaHotTub,
  FaGem
} from "react-icons/fa";
import Image from "next/image";

// Define service type
interface Service {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  priceRange: string;
  imageUrl: string;
}

const ServicesSection: React.FC = () => {
  // Services data
  const services: Service[] = [
    {
      id: "mens-haircut",
      icon: <FaCut size={24} />,
      name: "תספורת גברים",
      description: "תספורת מקצועית המותאמת אישית לסגנון ולמבנה הפנים שלך",
      priceRange: "₪60 - ₪90",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "beard-styling",
      icon: <FaBeard size={24} />,
      name: "עיצוב זקן",
      description: "עיצוב וטיפוח זקן מקצועי לקבלת מראה מושלם ומסודר",
      priceRange: "₪40 - ₪70",
      imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "traditional-shave",
      icon: <FaRazor size={24} />,
      name: "גילוח מסורתי",
      description: "חוויית גילוח מסורתית עם תער ומגבת חמה לתחושה מרעננת",
      priceRange: "₪50 - ₪80",
      imageUrl: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "hair-treatment",
      icon: <FaSprayCan size={24} />,
      name: "טיפול שיער",
      description: "טיפולי שיער מתקדמים להחזרת הברק והבריאות לשיער שלך",
      priceRange: "₪80 - ₪150",
      imageUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "hair-coloring",
      icon: <FaPalette size={24} />,
      name: "צביעת שיער",
      description: "צביעת שיער מקצועית עם מגוון צבעים וטכניקות מתקדמות",
      priceRange: "₪120 - ₪200",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "kids-haircut",
      icon: <FaChild size={24} />,
      name: "תספורת ילדים",
      description: "תספורות ידידותיות לילדים בסביבה נעימה ומזמינה",
      priceRange: "₪40 - ₪60",
      imageUrl: "https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "spa-treatment",
      icon: <FaHotTub size={24} />,
      name: "טיפולי ספא לשיער",
      description: "טיפולי ספא מפנקים לשיער הכוללים עיסוי קרקפת ומסכות הזנה",
      priceRange: "₪100 - ₪180",
      imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "premium-styling",
      icon: <FaGem size={24} />,
      name: "עיצוב פרימיום",
      description: "חבילת עיצוב מלאה הכוללת תספורת, צביעה וטיפול מיוחד",
      priceRange: "₪180 - ₪250",
      imageUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      id="services-section" 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-blue-50"
      dir="rtl"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-right mx-auto"
            style={{ 
              color: "#45B7D1",
              textShadow: "2px 2px 0px #FF6B6B",
              fontFamily: "'Press Start 2P', cursive, sans-serif"
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#FF6B6B] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            במספרה גמא אנו מציעים מגוון רחב של שירותים מקצועיים המותאמים לצרכים האישיים שלך
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-[#45B7D1]/20"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              whileFocus="hover"
              tabIndex={0}
              role="button"
              aria-labelledby={`service-title-${service.id}`}
              style={{
                backgroundImage: "linear-gradient(45deg, rgba(69, 183, 209, 0.05) 25%, transparent 25%, transparent 50%, rgba(69, 183, 209, 0.05) 50%, rgba(69, 183, 209, 0.05) 75%, transparent 75%, transparent)",
                backgroundSize: "20px 20px"
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-[#45B7D1] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.priceRange}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-[#45B7D1]/10 text-[#45B7D1] mr-3">
                    {service.icon}
                  </div>
                  <h3 
                    id={`service-title-${service.id}`}
                    className="text-xl font-bold text-gray-800"
                  >
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-right">
                  {service.description}
                </p>
                <motion.button
                  className="w-full py-2 px-4 bg-[#45B7D1] hover:bg-[#3da7c0] text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-opacity-50"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  הזמן תור
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Retro Decorative Elements */}
        <div className="relative mt-16">
          <motion.div 
            className="absolute -top-10 left-0 w-20 h-20 border-4 border-[#FF6B6B] rounded-full opacity-20"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
          <motion.div 
            className="absolute -bottom-10 right-0 w-32 h-32 border-4 border-[#45B7D1] rounded-full opacity-20"
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#FF6B6B] opacity-10"
            animate={{ 
              rotate: 45,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;