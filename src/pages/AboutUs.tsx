import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Team from '../components/sections/Team';
import { Shield, Award, MapPin } from 'lucide-react';

const AboutUs = () => {
  return (
    <main>
      <PageHeader title="About Us" />
      <About />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Our Mission', desc: 'To provide world-class dental care with a personal touch, ensuring every patient leaves with a confident smile.' },
              { icon: Award, title: 'Certifications', desc: 'Our clinic is certified by leading global dental associations, ensuring the highest safety and treatment standards.' },
              { icon: MapPin, title: 'Our Story', desc: 'Founded in 2010, we have grown from a small family practice to New York\'s most trusted multi-specialty dental clinic.' },
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 text-center hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue mx-auto mb-8">
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-dark-blue mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Team />
    </main>
  );
};

export default AboutUs;
