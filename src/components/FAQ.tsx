'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'opening-hours',
      question: 'מהן שעות הפתיחה של המספרה?',
      answer: 'אנחנו פתוחים בימים א׳-ה׳ בין השעות 9:00-20:00, ביום ו׳ בין השעות 9:00-14:00, ובשבת אנחנו סגורים.'
    },
    {
      id: 'appointment',
      question: 'האם צריך לקבוע תור מראש?',
      answer: 'כן, אנחנו ממליצים לקבוע תור מראש כדי להבטיח את זמינות הספר המועדף עליך. ניתן לקבוע תור דרך האתר שלנו או בטלפון 03-1234567.'
    },
    {
      id: 'payment',
      question: 'אילו שיטות תשלום מקבלים?',
      answer: 'אנחנו מקבלים תשלום במזומן, כרטיסי אשראי, אפליקציות תשלום כמו ביט ו-PayBox, וכן תשלום דרך האפליקציה שלנו.'
    },
    {
      id: 'parking',
      question: 'האם יש חניה ליד המספרה?',
      answer: 'כן, יש חניון ציבורי במרחק של 50 מטר מהמספרה. בנוסף, יש מספר מקומות חניה ברחוב שלנו שהם בתשלום בין השעות 9:00-17:00.'
    },
    {
      id: 'duration',
      question: 'כמה זמן לוקח תספורת?',
      answer: 'תספורת רגילה אורכת בין 30-45 דקות. תספורת עם עיצוב או צביעה יכולה לקחת בין שעה לשעתיים, תלוי בסוג הטיפול.'
    },
    {
      id: 'children',
      question: 'האם המספרה מתאימה לילדים?',
      answer: 'בהחלט! יש לנו ספרים מיוחדים לילדים ואזור משחקים קטן שיעזור לילדים להרגיש בנוח בזמן התספורת. אנחנו מציעים גם מחירים מיוחדים לתספורות ילדים.'
    },
    {
      id: 'services',
      question: 'מה כולל השירות במספרה?',
      answer: 'השירות שלנו כולל ייעוץ לפני התספורת, שמפו, תספורת, סטיילינג וייעוץ לטיפול בשיער בבית. בתספורות מיוחדות אנחנו מציעים גם טיפולי שיער מתקדמים, צביעה, החלקות ועוד.'
    },
    {
      id: 'products',
      question: 'האם אתם מוכרים מוצרי שיער?',
      answer: 'כן, אנחנו מציעים מגוון רחב של מוצרי שיער מקצועיים כולל שמפו, מרכך, מוצרי סטיילינג, וטיפולים מיוחדים לשיער. הספרים שלנו ישמחו לייעץ לך על המוצרים המתאימים ביותר לסוג השיער שלך.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion(id);
    }
  };

  return (
    <section 
      id="faq-section" 
      dir="rtl" 
      className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-right text-transparent bg-clip-text bg-gradient-to-l from-[#45B7D1] to-[#FF6B6B]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          שאלות נפוצות
        </motion.h2>
        
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <motion.button
                className="w-full text-right p-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-opacity-50"
                onClick={() => toggleAccordion(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`content-${item.id}`}
                whileHover={{ backgroundColor: 'rgba(69, 183, 209, 0.05)' }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-bold text-lg text-[#45B7D1]">{item.question}</span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#FF6B6B] flex-shrink-0"
                >
                  {openId === item.id ? <FiMinus size={24} /> : <FiPlus size={24} />}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    id={`content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-700 text-right">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-[#45B7D1]/10 rounded-lg border border-[#45B7D1]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-right">
              <h3 className="text-xl font-bold text-[#45B7D1] mb-2">יש לך שאלה נוספת?</h3>
              <p className="text-gray-700">אנחנו כאן כדי לעזור! צור איתנו קשר בטלפון או בוואטסאפ</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B6B] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#FF6B6B]/90 transition-colors"
            >
              צור קשר
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;