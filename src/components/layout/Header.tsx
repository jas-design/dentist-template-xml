import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
            <Calendar size={24} />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl lg:text-2xl font-display font-black text-dark-navy leading-none">
              Dental Care
            </span>
            <span className="text-sm lg:text-base font-display font-bold text-primary tracking-widest uppercase leading-none">
              Dentist
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'text-primary after:w-full' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary shadow-lg shadow-primary/20">
            Book Appointment <Calendar size={18} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-dark-navy" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white z-[70] p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center text-primary">
                    <Calendar size={18} />
                  </div>
                  <span className="font-display font-black text-dark-navy">Dental Care</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-dark-navy">
                  <X size={32} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-xl font-display font-medium text-dark-navy hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="btn-primary mt-4" onClick={() => setIsOpen(false)}>
                  Book Appointment <Calendar size={18} />
                </Link>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-slate-500 mb-2">Need Help?</p>
                  <a href="tel:+1987628745" className="text-xl font-bold text-primary flex items-center gap-2">
                    <Phone size={20} /> (+1) 987 628 745
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
