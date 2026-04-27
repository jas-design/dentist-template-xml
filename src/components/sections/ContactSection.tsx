import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-light-bg" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map Column */}
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] lg:h-auto min-h-[500px] relative border-8 border-white group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1683111111111!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info & Form Column */}
          <div className="p-2">
            <h5 className="text-primary font-bold tracking-widest uppercase mb-4">Contact Now</h5>
            <h2 className="section-title mb-8">
              Get Free <span className="text-primary">Professional Consultation</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-dark-navy uppercase tracking-widest mb-1">Clinic Address</h4>
                  <p className="text-slate-500 text-sm font-medium">24/11 Robert Road, New York, USA</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-dark-navy uppercase tracking-widest mb-1">Make A Call</h4>
                  <p className="text-slate-500 text-sm font-medium">+(123) 698-5245</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-dark-navy uppercase tracking-widest mb-1">Email Address</h4>
                  <p className="text-slate-500 text-sm font-medium">info@dentalcare.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-dark-navy uppercase tracking-widest mb-1">Working Hours</h4>
                  <p className="text-slate-500 text-sm font-medium">Mon - Sat: 9:00AM - 8:00PM</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-50">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="p-4 bg-light-bg border border-slate-50 rounded-xl w-full focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm" />
                <input type="email" placeholder="Your Email" className="p-4 bg-light-bg border border-slate-50 rounded-xl w-full focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm" />
              </div>
              <input type="text" placeholder="Subject" className="p-4 bg-light-bg border border-slate-50 rounded-xl w-full focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm" />
              <textarea placeholder="Your Message" rows={4} className="p-4 bg-light-bg border border-slate-50 rounded-xl w-full focus:ring-2 focus:ring-primary/20 outline-none font-medium text-sm" />
              <button className="btn-primary w-full py-4 text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 cursor-pointer">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
