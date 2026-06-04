import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Phone } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { doctorInfo } from '../data';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Clinics', path: '/clinics' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Info Banner */}
      <div className="bg-gradient-to-r from-primary-700 to-accent-700 text-white text-center py-2 px-4 text-sm font-medium">
        <span className="mr-2">📍</span>
        OPD: Shahjahanpur (Tue) · Tilhar · Nigohi · Shahabad · Powayan — Book:{' '}
        <a href={`tel:${doctorInfo.phone}`} className="underline font-bold hover:text-primary-100 transition-colors">
          {doctorInfo.phone}
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-white dark:bg-gray-950'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
                <span className="text-white text-xs font-bold select-none">G27</span>
                <img
                  src="/images/logo.svg"
                  alt="Gastro Clinic 27"
                  className="absolute inset-0 w-full h-full object-contain p-1"
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <p className="font-display font-bold text-gray-900 dark:text-white text-sm lg:text-base leading-tight">
                  Gastro Clinic 27
                </p>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">Dr. Vayu · Gastro Surgeon</p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${doctorInfo.phone}`}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{doctorInfo.phone}</span>
              </a>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link to="/appointment" className="btn-primary text-sm py-2.5">
                Book Appointment
              </Link>
            </div>

            {/* Mobile Right */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      location.pathname === link.path
                        ? 'bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 space-y-2 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={`tel:${doctorInfo.phone}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    <Phone className="w-4 h-4 text-primary-600" />
                    {doctorInfo.phone}
                  </a>
                  <Link
                    to="/appointment"
                    className="block w-full text-center btn-primary text-sm py-3"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
