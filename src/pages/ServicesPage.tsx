import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import Services from '../components/sections/Services';
import CTABanner from '../components/sections/CTABanner';
import FAQ from '../components/sections/FAQ';

const ServicesPage = () => {
  return (
    <main>
      <PageHeader title="Our Services" />
      <Services />
      <FAQ />
      <CTABanner />
    </main>
  );
};

export default ServicesPage;
