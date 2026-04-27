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
            <Link to="/" className="flex items-center gap-3 mb-8 text-white">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 3C10.5 3 9 3.5 8 4.5C7 5.5 6.5 7 6.5 9C6.5 11 7.5 13 9 14.5C9.5 15 10 16 10 17V19C10 20.5 11 21.5 12 21.5C13 21.5 14 20.5 14 19V17C14 16 14.5 15 15 14.5C16.5 13 17.5 11 17.5 9C17.5 7 17 5.5 16 4.5C15 3.5 13.5 3 12 3Z" />
              </svg>
              <div className="flex flex-col -gap-1">
                <span className="text-xl lg:text-2xl font-display font-black text-white leading-none tracking-tight">
                  Dental Care
                </span>
                <span className="text-[10px] font-display font-bold text-primary tracking-[0.3em] uppercase leading-none">
                  Clinic
                </span>
              </div>
            </Link>
            <p className="text-white/60 mb-10 max-w-xs leading-relaxed font-medium">
              We provide the highest level of general, cosmetic, and specialist dental treatments in New York.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-lg font-black mb-8 text-white">Services</h4>
            <ul className="space-y-4">
              {['Dental Care', 'Dental Implants', 'Cosmetic Dentistry', 'Root Canal', 'Invisalign'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-white/60 hover:text-primary transition-all font-bold text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-lg font-black mb-8 text-white">Information</h4>
            <ul className="space-y-4">
              {['About Us', 'Expert Dentists', 'Latest News', 'Contact Us', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-white/60 hover:text-primary transition-all font-bold text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-lg font-black mb-8 text-white">Quick Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-white/60 text-sm">
                <MapPin size={20} className="text-primary shrink-0" />
                <span className="font-bold">24/11 Robert Road , New York , USA</span>
              </li>
              <li className="flex gap-4 text-white/60 text-sm">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="font-bold">+(123) 698-5245</span>
              </li>
              <li className="flex gap-4 text-white/60 text-sm">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="font-bold">info@dentalcareclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Copyright © 2026 Dental Care Clinic. All Rights Reserved.</p>
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
