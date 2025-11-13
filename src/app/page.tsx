'use client';

import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}