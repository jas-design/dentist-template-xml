import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <Calendar size={24} />
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-xl lg:text-2xl font-display font-black text-white leading-none">
                  Dental Care
                </span>
                <span className="text-sm font-display font-bold text-primary tracking-widest uppercase leading-none">
                  Dentist
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-8 max-w-xs leading-relaxed">
              We provide the highest level of general, cosmetic, and specialist dental treatments in New York. Your comfort is our priority.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xl font-display font-black mb-8 uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'News & Articles', 'Book Appointment'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-400 hover:text-primary flex items-center gap-2 group transition-all font-bold">
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xl font-display font-black mb-8 uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-4">
              {['Dental Care', 'Dental Implants', 'Cosmetic Dentistry', 'Root Canal', 'Invisalign'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-slate-400 hover:text-primary flex items-center gap-2 group transition-all font-bold">
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xl font-display font-black mb-8 uppercase tracking-widest text-primary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-slate-400">
                <MapPin size={24} className="text-primary shrink-0" />
                <span className="font-medium">24/11 Robert Road , New York , USA</span>
              </li>
              <li className="flex gap-4 text-slate-400">
                <Phone size={24} className="text-primary shrink-0" />
                <span className="font-medium">+(123) 698-5245</span>
              </li>
              <li className="flex gap-4 text-slate-400">
                <Mail size={24} className="text-primary shrink-0" />
                <span className="font-medium">info@dentalcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Copyright © 2026 Dental Care Dentist. All Rights Reserved.</p>
          <div className="flex gap-8 text-slate-500 font-bold uppercase text-xs tracking-widest">
            <a href="#" className="hover:text-primary transition-all">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-all">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
