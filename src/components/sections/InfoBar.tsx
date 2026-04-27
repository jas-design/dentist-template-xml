import React from 'react';
import { Phone, Clock, Calendar } from 'lucide-react';

const InfoBar = () => {
  return (
    <div className="container mx-auto px-4 -mt-12 relative z-30">
      <div className="glass-morphism rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        <div className="p-8 flex items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Phone size={28} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Quick Contact</p>
            <h4 className="text-dark-navy text-xl font-black">(+1) 987 628 745</h4>
          </div>
        </div>

        <div className="p-8 flex items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Clock size={28} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Opening Hours</p>
            <h4 className="text-dark-navy text-xl font-black">Mon - Sat: 9am - 8pm</h4>
          </div>
        </div>

        <div className="p-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Calendar size={28} />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Location</p>
              <h4 className="text-dark-navy text-xl font-black">New York, USA</h4>
            </div>
          </div>
          <button className="bg-primary p-4 rounded-xl text-white hover:scale-110 transition-all shadow-lg shadow-primary/30 cursor-pointer">
            <Calendar size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
