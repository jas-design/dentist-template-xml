import React from 'react';
import { motion } from 'motion/react';
import { TEAM } from '../../constants';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-24 bg-light-bg" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-primary font-bold tracking-widest uppercase mb-4">Our Team</h5>
          <h2 className="section-title">
            Meet Our <span className="text-primary">Expert Dentists</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Our highly skilled professionals are dedicated to providing you with the highest quality of care and state-of-the-art treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] border border-slate-50 overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/5] m-3 rounded-[2rem]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {[Facebook, Twitter, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white text-primary flex items-center justify-center hover:bg-dark-navy hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-black text-dark-navy mb-1 uppercase tracking-tight">{member.name}</h4>
                <p className="text-primary text-sm font-bold tracking-widest uppercase">{member.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
