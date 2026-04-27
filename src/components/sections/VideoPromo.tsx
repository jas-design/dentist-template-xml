import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const VideoPromo = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600&h=800" 
            alt="Clinic Video" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-dark-navy/40 backdrop-blur-[2px] flex items-center justify-center text-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h5 className="text-white font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
                <span className="w-8 h-[2px] bg-primary"></span> Visit Clinic
              </h5>
              <h2 className="text-4xl lg:text-6xl font-display font-black text-white mb-8 leading-tight">
                Comprehensive Dental Care For All Ages
              </h2>
              <button className="px-8 py-4 bg-white text-dark-navy rounded-full font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all flex items-center gap-3 shadow-2xl shadow-black/20 mx-auto cursor-pointer group">
                Play Video <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-all"><Play size={16} fill="currentColor" /></div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPromo;
