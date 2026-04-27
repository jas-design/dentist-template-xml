import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-slate-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Modern Dental Clinic"
                className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              
              {/* Stats Floating Card */}
              <div className="absolute top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-dark-navy">25+</h4>
                    <p className="text-sm text-slate-500 font-bold uppercase">Years exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h5 className="text-primary font-bold tracking-widest uppercase mb-4">About Us</h5>
            <h2 className="section-title mb-8">
              Your Journey to a <span className="text-primary">Healthier Smile</span> Begins Here
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Dental Care Dentist, we combine years of expertise with a passion for excellence in oral health. Our goal is to provide a relaxed and professional environment where every patient feels heard and cared for.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                'Experienced Doctor',
                'Advanced Technology',
                'Personalized Treatment',
                'Modern Environment'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-bold text-dark-navy capitalize">{item}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary px-10 py-4 shadow-xl shadow-primary/20 cursor-pointer">
              Our Full Story <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
