'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaStar, FaStarHalf } from 'react-icons/fa';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  text: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דוד כהן',
    rating: 5,
    text: 'השירות במספרה גמא הוא ברמה הכי גבוהה שפגשתי. הספר הבין בדיוק מה רציתי והתוצאה הייתה מושלמת. האווירה נעימה והצוות מקצועי ביותר.',
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'יוסי לוי',
    rating: 5,
    text: 'אני לקוח קבוע במספרה גמא כבר שנתיים. התספורות תמיד מדויקות והיחס האישי מצוין. ממליץ בחום לכל מי שמחפש מספרה איכותית.',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'משה אברהם',
    rating: 4.5,
    text: 'הגעתי למספרה גמא בהמלצה של חבר ולא התאכזבתי. המחירים הוגנים והתוצאות מעולות. אהבתי במיוחד את הייעוץ המקצועי שקיבלתי לפני התספורת.',
    imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'אבי גולדשטיין',
    rating: 5,
    text: 'מספרה גמא היא המקום הטוב ביותר לתספורת בעיר. הצוות מקצועי, הסביבה נקייה ונעימה, והתוצאות תמיד עולות על הציפיות. ממליץ בחום!',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'נועה ישראלי',
    rating: 5,
    text: 'שירות מדהים! הספרים במספרה גמא מקשיבים ללקוחות ומבינים בדיוק מה צריך. יצאתי מרוצה מאוד מהתספורת והסטיילינג. בהחלט אחזור שוב.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'רון שמעוני',
    rating: 4.5,
    text: 'אווירה נעימה, שירות מקצועי ותוצאות מעולות. מספרה גמא היא בהחלט המקום המועדף עליי לתספורת. הצוות תמיד מסביר פנים ומקצועי.',
    imageUrl: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex flex-row-reverse">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <FaStar key={i} className="text-[#FF6B6B]" />;
        } else if (i === fullStars && hasHalfStar) {
          return <FaStarHalf key={i} className="text-[#FF6B6B]" />;
        } else {
          return <FaStar key={i} className="text-gray-300" />;
        }
      })}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
      }}
      className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#45B7D1] relative overflow-hidden"
    >
      <div className="absolute top-4 left-4 text-[#45B7D1] opacity-20">
        <FaQuoteRight size={40} />
      </div>
      
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image 
            src={testimonial.imageUrl} 
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg text-right">{testimonial.name}</h3>
          <RatingStars rating={testimonial.rating} />
        </div>
      </div>
      
      <blockquote className="relative z-10">
        <p className="text-gray-700 text-right leading-relaxed">{testimonial.text}</p>
      </blockquote>
      
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#45B7D1] opacity-5 rounded-tl-full" />
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF6B6B] mb-4 relative z-10">
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="absolute -bottom-2 right-0 w-full h-3 bg-[#45B7D1] opacity-20 transform -rotate-1"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            הלקוחות שלנו נהנים מחוויית שירות מקצועית ואיכותית במספרה גמא
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
      
      {/* Retro 80s-90s decorative elements */}
      <div className="absolute left-0 top-20 w-8 h-40 bg-[#FF6B6B] opacity-30 hidden lg:block"></div>
      <div className="absolute right-10 bottom-10 w-20 h-20 border-4 border-[#45B7D1] opacity-20 transform rotate-12 hidden lg:block"></div>
      <div className="absolute left-20 bottom-40 w-16 h-16 bg-yellow-300 opacity-20 transform -rotate-12 hidden lg:block"></div>
      
      {/* Zigzag pattern */}
      <div className="absolute right-0 top-0 w-40 h-6 hidden lg:block">
        <svg viewBox="0 0 100 10" preserveAspectRatio="none">
          <path 
            d="M0,0 L10,10 L20,0 L30,10 L40,0 L50,10 L60,0 L70,10 L80,0 L90,10 L100,0 L100,10 L0,10 Z" 
            fill="#FF6B6B" 
            opacity="0.2"
          />
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection;