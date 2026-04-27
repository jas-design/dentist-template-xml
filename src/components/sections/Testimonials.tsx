import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

const Testimonials = () => {
  return (
    <section className="py-24 bg-light-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-primary font-bold tracking-widest uppercase mb-4">Success Stories</h5>
          <h2 className="section-title">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl relative border border-slate-50">
              <Quote className="absolute top-10 right-10 text-primary/5" size={120} />
              <div className="relative z-10">
                <div className="flex text-secondary mb-8">
                  {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                </div>
                <p className="text-2xl lg:text-3xl font-display font-bold text-slate-700 italic mb-12 leading-relaxed">
                  "{TESTIMONIALS[0].content}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-8">
                  <div className="flex items-center gap-6">
                    <img src={TESTIMONIALS[0].avatar} alt={TESTIMONIALS[0].name} className="w-20 h-20 rounded-full object-cover border-4 border-primary/10 shadow-lg" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="text-2xl font-black text-dark-navy">{TESTIMONIALS[0].name}</h4>
                      <p className="text-primary font-bold tracking-widest uppercase text-sm">{TESTIMONIALS[0].role}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-dark-navy hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer">
                      <ChevronLeft size={28} />
                    </button>
                    <button className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white hover:bg-dark-navy transition-all duration-300 shadow-lg shadow-primary/20 cursor-pointer">
                      <ChevronRight size={28} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
