import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../../constants';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 bg-light-bg" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-primary font-bold tracking-widest uppercase mb-4">Our Services</h5>
          <h2 className="section-title mb-4">
            High Quality <span className="text-primary">Services for You</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our clinic is dedicated to provide full service dentistry for patients of all ages. Experience high-quality care in a comfortable environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Stethoscope;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] transition-all group-hover:scale-110 group-hover:bg-primary/10" />
                
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <IconComponent size={32} />
                </div>
                
                <h3 className="text-xl font-display font-black text-dark-navy mb-4 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">{service.description}</p>
                
                <button className="flex items-center gap-2 text-primary font-bold group/btn text-sm uppercase tracking-wider cursor-pointer">
                  Learn More <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-primary py-4 px-12 shadow-xl shadow-primary/20 cursor-pointer">
            View All Services <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
