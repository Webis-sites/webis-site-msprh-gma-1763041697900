'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const ProductsSection: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'שמפו מקצועי',
      description: 'שמפו איכותי לכל סוגי השיער, מעניק ברק וחיות',
      imageUrl: 'https://images.unsplash.com/photo-1594125311687-3e21e0cf4e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'שמן זקן',
      description: 'שמן טבעי לטיפוח הזקן, מרכך ומעניק מראה בריא',
      imageUrl: 'https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      name: 'ווקס לשיער',
      description: 'ווקס חזק במיוחד לעיצוב מושלם לאורך כל היום',
      imageUrl: 'https://images.unsplash.com/photo-1581071275949-997e6e8f55d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      name: 'ג\'ל עיצוב',
      description: 'ג\'ל עיצוב גמיש לשליטה מלאה בתסרוקת שלך',
      imageUrl: 'https://images.unsplash.com/photo-1626015449568-e887b06d6cc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      name: 'קרם גילוח',
      description: 'קרם גילוח עשיר להגנה על העור בזמן הגילוח',
      imageUrl: 'https://images.unsplash.com/photo-1626015448418-18b5a84eda2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 6,
      name: 'תכשירי טיפוח',
      description: 'סדרת מוצרים לטיפוח כולל לשיער ולעור הפנים',
      imageUrl: 'https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 7,
      name: 'מסכת שיער',
      description: 'מסכה מזינה לשיער יבש ופגום, מחזירה לחות וברק',
      imageUrl: 'https://images.unsplash.com/photo-1643123237307-fbbc66a1a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 8,
      name: 'ספריי מעצב',
      description: 'ספריי לקיבוע התסרוקת עם הגנה מפני לחות',
      imageUrl: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ]);

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Item variants for individual card animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="products-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#f0f0f0] to-[#e0f7ff] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Retro Style */}
        <div className="mb-12 text-center relative">
          <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEgMSAyLjEgMi4ydjE5LjZjMCAxLjItLjkgMi4yLTIuMSAyLjJIMjRjLTEuMiAwLTIuMS0xLTIuMS0yLjJWMjAuMmMwLTEuMi45LTIuMiAyLjEtMi4yaDEyeiIgc3Ryb2tlPSIjRkY2QjZCIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNDUgMzZjMS4yIDAgMi4xIDEgMi4xIDIuMnYxOS42YzAgMS4yLS45IDIuMi0yLjEgMi4ySDE1Yy0xLjIgMC0yLjEtMS0yLjEtMi4yVjM4LjJjMC0xLjIuOS0yLjIgMi4xLTIuMmgzMHoiIHN0cm9rZT0iIzQ1QjdEMSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] drop-shadow-[0.05em_0.05em_0_rgba(0,0,0,0.15)]">
              המוצרים שלנו
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#45B7D1] opacity-70 skew-x-12"></div>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto font-medium">
            מגוון מוצרי טיפוח איכותיים לשיער ולעור הפנים, נבחרו בקפידה על ידי הספרים המקצועיים שלנו
          </p>
        </div>

        {/* Products Grid with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#45B7D1]/20 group"
              style={{
                backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)",
                backdropFilter: "blur(10px)"
              }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-[#45B7D1]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={product.imageUrl}
                  alt={`תמונה של ${product.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={product.id <= 4}
                />
                <div className="absolute top-0 left-0 w-16 h-16 bg-[#FF6B6B] -translate-y-8 -translate-x-8 transform rotate-45 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-5 text-right">
                <h3 className="text-xl font-bold mb-2 text-[#45B7D1]">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                {/* More Info Button */}
                <button 
                  className="inline-flex items-center gap-2 bg-[#45B7D1] hover:bg-[#3da6be] text-white py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-opacity-50"
                  aria-label={`למידע נוסף על ${product.name}`}
                >
                  <FaInfoCircle className="ml-1" />
                  <span>למידע נוסף</span>
                </button>
              </div>

              {/* Retro Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-[#FF6B6B] to-[#45B7D1]"></div>
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#FF6B6B] opacity-70"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;