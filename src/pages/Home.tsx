import React from 'react';
import Hero from '../components/sections/Hero';
import InfoBar from '../components/sections/InfoBar';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import AppointmentBar from '../components/sections/AppointmentBar';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import Insurance from '../components/sections/Insurance';
import FAQ from '../components/sections/FAQ';
import Team from '../components/sections/Team';
import CTABanner from '../components/sections/CTABanner';
import Blog from '../components/sections/Blog';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <InfoBar />
      <About />
      <Services />
      <Stats />
      <AppointmentBar />
      <Insurance />
      <Testimonials />
      <FAQ />
      <Team />
      <CTABanner />
      <Blog />
      <ContactSection />
    </main>
  );
};

export default Home;
