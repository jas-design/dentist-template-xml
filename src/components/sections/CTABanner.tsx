import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-primary rounded-[3.5rem] mx-4 my-12 shadow-2xl shadow-primary/20">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
      <div className="container mx-auto px-8 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">
              We Are Accepting <br />
              <span className="text-secondary underline decoration-secondary decoration-4 underline-offset-8">New Patients</span>
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-lg leading-relaxed font-medium">
              Don't wait for dental pain to start. Schedule your comprehensive oral exam and experience modern, gentle dentistry.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-8 py-4 bg-white text-primary rounded-xl font-black uppercase tracking-widest text-sm shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2 cursor-pointer">
                Book Appointment <Calendar size={20} />
              </button>
              <a href="tel:+1987628745" className="px-8 py-4 bg-dark-navy text-white rounded-xl font-black uppercase tracking-widest text-sm shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2">
                Emergency Call <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Expert Dentist"
                className="w-full max-w-sm mx-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
