import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import ContactSection from '../components/sections/ContactSection';
import InfoBar from '../components/sections/InfoBar';

const ContactPage = () => {
  return (
    <main>
      <PageHeader title="Contact Us" />
      <div className="mt-12">
        <InfoBar />
      </div>
      <ContactSection />
    </main>
  );
};

export default ContactPage;
