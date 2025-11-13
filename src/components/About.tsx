"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaScissors, FaUsers, FaAward, FaClock } from "react-icons/fa";

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const statsData = [
    {
      icon: <FaScissors className="text-[#45B7D1] text-2xl" />,
      value: "15+",
      label: "שנות ניסיון",
    },
    {
      icon: <FaUsers className="text-[#45B7D1] text-2xl" />,
      value: "5000+",
      label: "לקוחות מרוצים",
    },
    {
      icon: <FaAward className="text-[#45B7D1] text-2xl" />,
      value: "12",
      label: "פרסים מקצועיים",
    },
    {
      icon: <FaClock className="text-[#45B7D1] text-2xl" />,
      value: "7",
      label: "ימים בשבוע",
    },
  ];

  return (
    <section
      id="about-us"
      dir="rtl"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-100 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Image Column */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border-4 border-[#FF6B6B] shadow-xl"
            style={{
              boxShadow: "8px 8px 0 #45B7D1",
              background:
                "linear-gradient(45deg, rgba(69, 183, 209, 0.2), rgba(255, 107, 107, 0.2))",
            }}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="פנים מספרה גמא - עיצוב מודרני ומקצועי"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Retro overlay pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkI2QiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 mix-blend-overlay pointer-events-none"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 text-right"
          >
            <div className="relative mb-6">
              <h2
                className="text-5xl md:text-6xl font-bold text-[#45B7D1] mb-2 relative z-10"
                style={{
                  textShadow: "3px 3px 0 #FF6B6B",
                  fontFamily: "'Press Start 2P', cursive, sans-serif",
                }}
              >
                אודותינו
              </h2>
              <div className="absolute -bottom-2 right-0 w-32 h-3 bg-[#FF6B6B] opacity-70 z-0"></div>
            </div>

            <p className="text-xl leading-relaxed mb-8 text-right">
              אנחנו מספרה מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו
              מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-md border-2 border-[#45B7D1] text-center relative overflow-hidden group"
                  style={{
                    boxShadow: "4px 4px 0 #FF6B6B",
                  }}
                >
                  {/* Retro corner triangles */}
                  <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-t-[#FF6B6B] border-r-[#FF6B6B] opacity-70"></div>
                  <div className="absolute bottom-0 left-0 border-b-[20px] border-l-[20px] border-b-[#45B7D1] border-l-[#45B7D1] opacity-70"></div>

                  <div className="flex flex-col items-center">
                    <div className="mb-3 bg-gray-100 p-3 rounded-full">
                      {stat.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-1 text-gray-800">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                  
                  {/* Pixelated hover effect */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBpeGVscyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiM0NUI3RDEiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PHJlY3QgeD0iMTAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI0ZGNkI2QiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48cmVjdCB4PSIwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkY2QjZCIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNDVCN0QxIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwaXhlbHMpIi8+PC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;