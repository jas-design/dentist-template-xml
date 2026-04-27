import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../../constants';
import * as LucideIcons from 'lucide-react';

const Diagnosis = () => {
  const leftFeatures = WHY_CHOOSE_US.slice(0, 3);
  const rightFeatures = WHY_CHOOSE_US.slice(3, 6);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-primary"></span> Why Choose Us
          </h5>
          <h2 className="section-title mb-4 font-black lg:text-6xl">
            Diagnosis of <span className="text-primary">Dental Diseases</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed font-bold">
            We are committed to sustainability, eco-friendly initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            {leftFeatures.map((feature, idx) => {
              const Icon = (LucideIcons as any)[feature.icon] || LucideIcons.CheckCircle2;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 text-right lg:flex-row-reverse"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-black text-dark-navy mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column - Tooth Image */}
          <div className="relative flex items-center justify-center p-12">
             {/* Decorative circles */}
             <div className="absolute inset-0 border-[20px] border-primary/5 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute inset-20 border border-primary/10 rounded-full border-dashed" />
             
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10"
             >
               <img 
                 src="https://cdn-icons-png.flaticon.com/512/1048/1048946.png" // Placeholder for a tooth 3D model icon
                 alt="Tooth"
                 className="w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(51,153,166,0.3)] filter brightness-110"
               />
             </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {rightFeatures.map((feature, idx) => {
              const Icon = (LucideIcons as any)[feature.icon] || LucideIcons.CheckCircle2;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-black text-dark-navy mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
