import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Star, ArrowRight } from 'lucide-react';
import { openCalendly } from '../../utils/config';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-b from-primary/5 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-primary/10 rotate-12">
        <Star size={40} fill="currentColor" />
      </div>
      <div className="absolute top-40 right-20 text-primary/10 -rotate-12">
        <Star size={60} fill="currentColor" />
      </div>
      <div className="absolute top-1/4 left-1/2 text-primary/5">
        <Star size={80} fill="currentColor" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-[5.5rem] font-display font-black leading-[1] text-dark-navy mb-8 tracking-tight">
              Experience <span className="text-primary">Dental Excellence</span> with a Gentle Touch
            </h1>
            
            <p className="text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={openCalendly}
                className="px-8 py-5 bg-primary text-white rounded-full font-bold text-sm tracking-widest uppercase hover:brightness-110 transition-all flex items-center gap-3 shadow-2xl shadow-primary/30 cursor-pointer"
              >
                Make An Appointment <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><ArrowRight size={18} /></div>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Google Rating <span className="text-dark-navy">5.0</span></p>
              <div className="flex text-secondary">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="border-l border-slate-200 pl-4 text-slate-400 text-sm font-bold uppercase tracking-widest">Based On 492 Reviews</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-2xl mx-auto">
              {/* Main Image with rounded-full border like the image */}
              <div className="relative aspect-square rounded-full overflow-hidden border-[1.5rem] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000&h=1000"
                  alt="Doctor"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Dentist Info Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50 z-20"
              >
                <img src="https://i.pravatar.cc/100?u=dent1" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-display font-black text-dark-navy text-sm">Dr. Clara Lee</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Dentist</p>
                </div>
              </motion.div>

              {/* Floating Dental Icons */}
              <div className="absolute top-1/4 -right-8 w-16 h-16 bg-white/40 backdrop-blur-sm rounded-2xl flex items-center justify-center text-primary border border-white/50 shadow-lg animate-pulse">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 3C4.23858 3 2 5.23858 2 8V10C2 12.7614 4.23858 15 7 15H8V18C8 19.6569 9.34315 21 11 21H13C14.6569 21 16 19.6569 16 18V15H17C19.7614 15 22 12.7614 22 10V8C22 5.23858 19.7614 3 17 3H7Z" />
                </svg>
              </div>
              
              <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-white/40 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary border border-white/50 shadow-lg animate-bounce">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
