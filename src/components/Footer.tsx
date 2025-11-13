'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer id="footer" dir="rtl" className="bg-gray-900 text-white pt-12 pb-4 relative overflow-hidden">
      {/* Retro geometric patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-turquoise rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-pink-500 transform rotate-45"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-8 bg-yellow-300"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Column 1: Business Information */}
          <motion.div variants={itemVariants} className="text-right">
            <h2 className="text-2xl font-bold mb-4 text-turquoise-400 relative inline-block">
              מספרה גמא
              <span className="absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-turquoise-400 to-pink-500"></span>
            </h2>
            <p className="mb-4 text-gray-300">
              אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center justify-end gap-2">
                <span>054-1234567</span>
                <FaPhone className="text-turquoise-400" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>info@gamma-salon.co.il</span>
                <FaEnvelope className="text-turquoise-400" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>רחוב הרצל 123, תל אביב</span>
                <FaMapMarkerAlt className="text-turquoise-400" />
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Quick Navigation */}
          <motion.div variants={itemVariants} className="text-right">
            <h2 className="text-2xl font-bold mb-4 text-turquoise-400 relative inline-block">
              ניווט מהיר
              <span className="absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-turquoise-400 to-pink-500"></span>
            </h2>
            <ul className="space-y-2">
              {[
                { name: 'ראשי', href: '/' },
                { name: 'שירותים', href: '/services' },
                { name: 'מוצרים', href: '/products' },
                { name: 'המלצות', href: '/testimonials' },
                { name: 'שאלות נפוצות', href: '/faq' },
                { name: 'צור קשר', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-turquoise-400 transition-colors duration-300 flex items-center justify-end gap-1">
                    <span>{link.name}</span>
                    <span className="text-turquoise-400 transform transition-transform duration-300 group-hover:translate-x-1">&#x200F;&#x2190;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Social Media */}
          <motion.div variants={itemVariants} className="text-right">
            <h2 className="text-2xl font-bold mb-4 text-turquoise-400 relative inline-block">
              עקבו אחרינו
              <span className="absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-turquoise-400 to-pink-500"></span>
            </h2>
            <div className="flex justify-end space-x-4 space-x-reverse mb-6">
              <motion.a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-white hover:bg-green-600 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-white hover:bg-pink-600 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </motion.a>
            </div>
            <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="מספרה גמא"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-2 right-2 text-white font-bold">
                <span className="text-turquoise-400">#</span>מספרה_גמא
              </div>
            </div>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div variants={itemVariants} className="text-right">
            <h2 className="text-2xl font-bold mb-4 text-turquoise-400 relative inline-block">
              הישארו מעודכנים
              <span className="absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-turquoise-400 to-pink-500"></span>
            </h2>
            <p className="mb-4 text-gray-300">
              הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים, טיפים ומידע שימושי.
            </p>
            <form onSubmit={handleSubmit} className="relative mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="הזינו את האימייל שלכם"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-right focus:outline-none focus:ring-2 focus:ring-turquoise-400 text-white"
                required
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="absolute left-1 top-1 bg-turquoise-400 hover:bg-turquoise-500 text-white p-2 rounded-md transition-colors duration-300"
                aria-label="Subscribe"
              >
                <IoIosSend size={20} />
              </button>
            </form>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-400 mb-4"
              >
                תודה שנרשמתם! 🎉
              </motion.div>
            )}
            <div className="flex flex-wrap justify-end gap-2 text-xs text-gray-400">
              <span className="px-2 py-1 bg-gray-800 rounded-full">מספרה</span>
              <span className="px-2 py-1 bg-gray-800 rounded-full">שירות</span>
              <span className="px-2 py-1 bg-gray-800 rounded-full">איכות</span>
              <span className="px-2 py-1 bg-gray-800 rounded-full">מקצועיות</span>
              <span className="px-2 py-1 bg-gray-800 rounded-full">ישראל</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

        {/* Bottom Bar */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 מספרה גמא. כל הזכויות שמורות.</p>
        </div>
      </div>

      <style jsx>{`
        .bg-turquoise-400 {
          background-color: #45B7D1;
        }
        .bg-turquoise-500 {
          background-color: #3da8c1;
        }
        .text-turquoise-400 {
          color: #45B7D1;
        }
        .hover\:bg-turquoise-500:hover {
          background-color: #3da8c1;
        }
        .focus\:ring-turquoise-400:focus {
          --tw-ring-color: #45B7D1;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .bg-turquoise {
          background-color: #45B7D1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;