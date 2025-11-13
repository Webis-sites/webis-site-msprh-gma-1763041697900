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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#45B7D1] mb-4">
              המוצרים שלנו
            </h2>
            <p className="text-lg text-gray-700">
              מוצרי טיפוח איכוtiים למראה מושלם
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#FF6B6B] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
