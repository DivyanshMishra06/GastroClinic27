import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import DrVayuGuide from './components/DrVayuGuide';
import HomePage from './pages/HomePage';


const AboutPage        = lazy(() => import('./pages/AboutPage'));
const ClinicsPage      = lazy(() => import('./pages/ClinicsPage'));
const ServicesPage     = lazy(() => import('./pages/ServicesPage'));
const AppointmentPage  = lazy(() => import('./pages/AppointmentPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const ContactPage      = lazy(() => import('./pages/ContactPage'));
const PrivacyPage      = lazy(() => import('./pages/PrivacyPage'));
const TermsPage        = lazy(() => import('./pages/TermsPage'));
const DisclaimerPage   = lazy(() => import('./pages/DisclaimerPage'));

function SplashScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4"
      >
        <img src="/images/logo.png" alt="Gastro Clinic 27" className="w-24 h-24 object-contain" />
        <div className="text-center">
          <p className="font-display font-bold text-primary-900 text-2xl tracking-tight">Gastro Clinic 27</p>
          <p className="text-accent-500 text-sm font-medium tracking-widest uppercase mt-1">Expert Digestive Care</p>
        </div>
        <div className="flex gap-1.5 mt-3">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-2 h-2 rounded-full bg-primary-400"
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.22 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}



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
          const navbarOffset = 80; // info banner (~22px) + sticky header (~90px)
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
        <Suspense fallback={<div className="min-h-screen" />}>
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
        </Suspense>
      </motion.div>
    </AnimatePresence>
     
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  return (
      <>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onDone={() => setShowSplash(false)} />}
      </AnimatePresence>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
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
    </>
  );
}
