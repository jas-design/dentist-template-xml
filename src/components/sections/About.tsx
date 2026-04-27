import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-slate-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=800"
                    alt="Dental Work"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Years Experience Badge Overlay */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-primary rounded-full border-4 border-white flex flex-col items-center justify-center text-white shadow-lg">
                    <span className="text-xl font-black leading-none">15+</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-center px-2">Years of Exp</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=400"
                    alt="Smiling Patient"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600&h=400"
                    alt="Equipment"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Sparkle Decoration */}
              <div className="absolute -bottom-10 -left-10 text-primary/10">
                <Star size={80} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h5 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary"></span> About Us
            </h5>
            <h2 className="section-title mb-8 font-black lg:text-6xl">
              Your Journey to a <span className="text-primary">Healthier Smile</span> Begins Here
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
              The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and advanced dental treatments. With dental practice throughout the world.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {[
                'Experienced Team',
                'Comprehensive Services',
                'State-Of-The-Art Technology',
                'Emergency Dental Services'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 size={12} fill="currentColor" className="text-white" />
                  </div>
                  <span className="font-bold text-dark-navy text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all flex items-center gap-2 shadow-2xl shadow-primary/30 cursor-pointer group">
              Read More About Us <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all"><ArrowRight size={14} /></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
