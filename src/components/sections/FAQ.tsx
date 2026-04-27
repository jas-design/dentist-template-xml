import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do you accept insurance?",
      a: "Yes, we accept most major PPO dental insurance plans. Our team can help you verify your coverage and maximize your benefits during your first visit."
    },
    {
      q: "Is dental treatment painful?",
      a: "We prioritize patient comfort above all else. We use modern anesthesia and gentle techniques to ensure your treatment is as comfortable and pain-free as possible."
    },
    {
      q: "Do you offer emergency dental care?",
      a: "Absolutely. We offer same-day emergency appointments for trauma, severe pain, or any urgent dental concerns."
    },
    {
      q: "How often should I visit the dentist?",
      a: "For most patients, we recommend a professional cleaning and exam every six months to maintain optimal oral health and prevent problems before they start."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h5 className="text-primary font-bold tracking-widest uppercase mb-4">Common Questions</h5>
            <h2 className="section-title mb-8">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-light-bg rounded-2xl border border-slate-50 overflow-hidden shadow-sm transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    className="w-full p-6 flex justify-between items-center text-left cursor-pointer"
                  >
                    <span className="text-lg font-black text-dark-navy tracking-tight leading-tight">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-primary text-white rotate-180 shadow-lg shadow-primary/20' : 'bg-white text-primary border border-primary/20'}`}>
                      {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium pt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=800"
              alt="Dentist Consultation"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
