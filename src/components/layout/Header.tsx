import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
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
          <div className="text-primary">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3C10.5 3 9 3.5 8 4.5C7 5.5 6.5 7 6.5 9C6.5 11 7.5 13 9 14.5C9.5 15 10 16 10 17V19C10 20.5 11 21.5 12 21.5C13 21.5 14 20.5 14 19V17C14 16 14.5 15 15 14.5C16.5 13 17.5 11 17.5 9C17.5 7 17 5.5 16 4.5C15 3.5 13.5 3 12 3Z" />
              <path d="M12 8V11" strokeOpacity="0.4" />
            </svg>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl lg:text-2xl font-display font-black text-dark-navy leading-none tracking-tight">
              Dental Care
            </span>
            <span className="text-[10px] font-display font-bold text-primary tracking-[0.3em] uppercase leading-none">
              Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-sm font-bold tracking-tight first-letter:uppercase ${location.pathname === link.path ? 'text-primary' : 'text-dark-navy'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="nav-link text-sm font-bold tracking-tight flex items-center gap-1 first-letter:uppercase text-dark-navy group-hover:text-primary">
              Pages <ChevronDown size={14} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-slate-50">
              <div className="p-4 space-y-2">
                {['Expert Dentists Team', 'Services', 'Price Plan', 'Blogs', 'Faq', 'Contact Us', 'Login', 'Register'].map((p) => (
                  <Link key={p} to="#" className="block px-4 py-2 text-sm font-bold text-slate-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                    {p}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/contact" className="px-6 py-3 bg-primary text-white rounded-full font-bold text-sm tracking-tight hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
            Book Appointment <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"><Calendar size={14} /></div>
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
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <div className="text-primary">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3C10.5 3 9 3.5 8 4.5C7 5.5 6.5 7 6.5 9C6.5 11 7.5 13 9 14.5C9.5 15 10 16 10 17V19C10 20.5 11 21.5 12 21.5C13 21.5 14 20.5 14 19V17C14 16 14.5 15 15 14.5C16.5 13 17.5 11 17.5 9C17.5 7 17 5.5 16 4.5C15 3.5 13.5 3 12 3Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col -gap-1">
                    <span className="text-lg font-display font-black text-dark-navy leading-none tracking-tight">
                      Dental Care
                    </span>
                    <span className="text-[8px] font-display font-bold text-primary tracking-[0.2em] uppercase leading-none">
                      Clinic
                    </span>
                  </div>
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
