import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const ROUTE_MESSAGES = {
  '/':             "Welcome! I'm Dr. Vayu — let's find the right care for you.",
  '/about':        "Gastro Clinic 27 has served 50,000+ patients since 2019.",
  '/services':     "Not sure which treatment fits? I can guide you to the right one.",
  '/clinics':      "We have 5 clinics across the Shahjahanpur region!",
  '/appointment':  "Ready to visit? Our doctors are here for you.",
  '/testimonials': "Real stories from real patients — see for yourself.",
  '/contact':      "Have a question? I'll make sure it reaches the right team.",
};

// Path to your cartoon doctor image — save as public/images/doctor-cartoon.png
const DOCTOR_IMG = '/images/doctor-cartoon.png';

export default function DrVayuGuide() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const message = ROUTE_MESSAGES[pathname] ?? ROUTE_MESSAGES['/'];

  // Show intro on every visit to home page
  useEffect(() => {
    if (pathname === '/') {
      const seen = sessionStorage.getItem('drVayuIntroDone');
      if (!seen) {
        setShowIntro(true);
        setIntroComplete(false);
        setBubbleOpen(false);
        const t = setTimeout(() => {
          setShowIntro(false);
          setIntroComplete(true);
          sessionStorage.setItem('drVayuIntroDone', '1');
        }, 2000);
        return () => clearTimeout(t);
      } else {
        setShowIntro(false);
        setIntroComplete(true);
      }
    } else {
      setShowIntro(false);
      setIntroComplete(true);
    }
  }, [pathname]);

  // Show speech bubble after intro collapses — only on desktop (≥640px)
  useEffect(() => {
    if (!introComplete) return;
    if (window.matchMedia('(min-width: 640px)').matches) {
      const t = setTimeout(() => setBubbleOpen(true), 500);
      return () => clearTimeout(t);
    }
  }, [introComplete]);

  return (
    <>
      {/* ── Full Doctor Intro Animation (slides up from bottom) ── */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="doctor-intro"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 350, opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            style={{
              position: 'fixed',
              bottom: 0,
              left: 24,
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            {/* Speech bubble above doctor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 20 }}
              style={{
                background: '#fff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '18px',
                borderBottomLeftRadius: '4px',
                padding: '10px 16px',
                maxWidth: '210px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.14)',
                marginBottom: '10px',
                position: 'relative',
              }}
            >
              <p style={{ fontSize: '10px', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                Dr. Vayu
              </p>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Welcome! I'm Dr. Vayu — let's find the right care for you.
              </p>
              {/* Bubble tail */}
              <div style={{
                position: 'absolute', bottom: '-8px', left: '18px',
                width: '14px', height: '14px',
                background: '#fff',
                border: '1.5px solid #e2e8f0',
                borderTop: 'none', borderLeft: 'none',
                transform: 'rotate(45deg)',
              }} />
            </motion.div>

            {/* Doctor image — bouncing, white bg removed via mix-blend-mode */}
            <motion.div
              animate={{ y: [0, -14, 0, -8, 0] }}
              transition={{ delay: 0.2, duration: 1.6, repeat: 0, ease: 'easeInOut' }}
            >
              <img
                src={DOCTOR_IMG}
                alt="Dr. Vayu"
                style={{
                  height: '200px',
                  width: 'auto',
                  objectFit: 'contain',
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.18))',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Persistent floating button + bubble ── */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
      }}>

        {/* Speech bubble */}
        <AnimatePresence mode="wait">
          {introComplete && bubbleOpen && (
            <motion.div
              key={pathname + '-bubble'}
              initial={{ opacity: 0, y: 12, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-xl rounded-2xl rounded-bl-sm px-4 py-3 max-w-[210px]"
            >
              <button
                onClick={() => setBubbleOpen(false)}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-3 h-3 text-gray-400" />
              </button>
              <p className="text-[11px] font-semibold text-primary-600 dark:text-primary-400 mb-1 tracking-wide uppercase">
                Dr. Vayu
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {message}
              </p>
              <div className="absolute -bottom-[7px] left-5 w-3.5 h-3.5 bg-white dark:bg-gray-900 border-r border-b border-gray-100 dark:border-gray-700 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Doctor image button (replaces DV button) */}
        <AnimatePresence>
          {introComplete && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16 }}
            >
              {/* Gentle float up-down */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <motion.button
                  onClick={() => navigate('/contact#send-message')}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Go to Contact page"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    position: 'relative',
                    display: 'block',
                  }}
                >
                  {/* Circular crop — removes white rectangle, shows only the doctor circle */}
                  <div style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.22)',
                    border: '3px solid #fff',
                  }}>
                    <img
                      src={DOCTOR_IMG}
                      alt="Dr. Vayu"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        transform: 'scale(1.05)',
                      }}
                    />
                  </div>
                  {/* Unread dot */}
                  {!bubbleOpen && (
                    <span style={{
                      position: 'absolute', top: 2, right: 2,
                      width: '13px', height: '13px',
                      borderRadius: '50%',
                      background: '#ef4444',
                      border: '2px solid #fff',
                    }} />
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
