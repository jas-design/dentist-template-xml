import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-b from-primary/5 to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-primary/10 rotate-12">
        <Star size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/10 -rotate-12">
        <Star size={60} fill="currentColor" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Professional Dental Care
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] text-dark-navy mb-6">
              We Provide the <span className="text-primary">Best Dental Care</span> in Our Clinic
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Our clinic offers a full range of dental services, from routine checkups to complete smile makeovers. Your comfort is our top priority.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="btn-primary py-4 px-8 text-lg shadow-lg shadow-primary/20 cursor-pointer">
                Book Appointment <Calendar size={20} />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-dark-navy border border-slate-200 rounded-md font-bold hover:shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer uppercase text-sm tracking-wider">
                Our Services <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=dent${i}`}
                    alt="Patient"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-500 text-sm">
                  <span className="text-dark-navy font-bold">4.9/5</span> from 500+ Happy Patients
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* The dentist image with circular backdrop */}
            <div className="relative z-10 w-full max-w-lg mx-auto">
              <div className="aspect-square bg-primary/10 rounded-full absolute -inset-10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Professional Dentist Smiling"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="absolute -top-6 -right-6 bg-secondary text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white z-20"
              >
                <span className="text-2xl font-black">20%</span>
                <span className="text-[10px] uppercase font-bold">Discount</span>
              </motion.div>

              {/* Doctor Card Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-slate-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Emergency Call</p>
                  <h4 className="font-display font-black text-dark-navy text-lg leading-tight tracking-tight">(+1) 987 628 745</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
