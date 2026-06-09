import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import DrVayuGuide from './components/DrVayuGuide';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClinicsPage from './pages/ClinicsPage';
import ServicesPage from './pages/ServicesPage';
import AppointmentPage from './pages/AppointmentPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';

const PAGE_TITLES = {
  '/':             'Gastro Clinic 27 – Expert Digestive Care in Shahjahanpur',
  '/about':        'About Us | Gastro Clinic 27',
  '/clinics':      'Our Clinics | Gastro Clinic 27',
  '/services':     'Our Services | Gastro Clinic 27',
  '/appointment':  'Book Appointment | Gastro Clinic 27',
  '/testimonials': 'Patient Reviews | Gastro Clinic 27',
  '/contact':      'Contact Us | Gastro Clinic 27',
  '/privacy':      'Privacy Policy | Gastro Clinic 27',
  '/terms':        'Terms of Service | Gastro Clinic 27',
  '/disclaimer':   'Medical Disclaimer | Gastro Clinic 27',
};

function TitleUpdater() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? 'Gastro Clinic 27';
  }, [pathname]);
  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait for the page transition animation (0.4s) to finish before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const navbarOffset = 130; // info banner (~40px) + sticky header (~90px)
          const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 450);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center flex-col gap-4">
              <h1 className="font-display text-6xl font-bold text-primary-600">404</h1>
              <p className="text-gray-500">Page not found.</p>
              <Link to="/" className="btn-primary">Go Home</Link>
            </div>
          } />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleUpdater />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1"><AnimatedRoutes /></main>
        <Footer />
        <WhatsAppButton />
        <DrVayuGuide />
      </div>
    </BrowserRouter>
  );
}
