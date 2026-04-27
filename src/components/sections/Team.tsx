import React from 'react';
import { motion } from 'motion/react';
import { TEAM } from '../../constants';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-24 bg-light-bg" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-primary"></span> Our Team
          </h5>
          <h2 className="section-title font-black lg:text-6xl">
            Our <span className="text-primary">Friendly Dentists</span> Team
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto leading-relaxed font-bold">
            We are committed to sustainability, eco-friendly initiatives.
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
              className="bg-white rounded-[2.5rem] border border-slate-50 overflow-hidden group shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/5] m-4 rounded-[2rem]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-6 pb-8 text-center">
                <h4 className="text-xl font-black text-dark-navy mb-1">{member.name}</h4>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{member.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
