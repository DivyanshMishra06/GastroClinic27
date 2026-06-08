import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Phone, Calendar, Star, ArrowRight, Shield, Award, Users, Clock,
  ChevronRight, ChevronLeft, Heart, Activity, Stethoscope, CheckCircle, MapPin, BookOpen,
  Quote, BadgeCheck, GraduationCap, Microscope
} from 'lucide-react';
import { doctorInfo, clinicCredentials, clinicAchievements, testimonials, services } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value);
    if (isNaN(num)) { setDisplay(value); return; }
    const suffix = value.replace(/[0-9]/g, '');
    let current = 0;
    const steps = 60;
    const increment = num / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(current) + suffix);
    }, 1500 / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

const StatCard = ({ icon: Icon, value, label, color }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -6, scale: 1.04 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="text-center p-4 sm:p-6 cursor-default"
  >
    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
      <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
    </div>
    <p className="font-display text-2xl sm:text-4xl font-bold text-white mb-1">
      <AnimatedNumber value={value} />
    </p>
    <p className="text-xs sm:text-sm text-white font-medium">{label}</p>
  </motion.div>
);

function GlassStatCard({ num, decimals = 0, suffix = '', label, icon: Icon, iconBg, iconColor, glow }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(current);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, num]);

  const formatted = num >= 1000
    ? Math.round(count).toLocaleString()
    : count.toFixed(decimals);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.07, y: -10, boxShadow: `0 0 36px ${glow}` }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      className="bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-2xl p-5 text-center cursor-default group"
    >
      <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <p className="font-display text-3xl font-bold text-white mb-1 tabular-nums">
        {formatted}{suffix}
      </p>
      <p className="text-white/70 text-xs font-semibold tracking-widest uppercase">{label}</p>
    </motion.div>
  );
}

const clinicPhotos = [
  { src: '/images/clinic1.jpg', label: 'Shahjahanpur Clinic' },
  { src: '/images/clinic2.jpg', label: 'Tilhar Clinic' },
  { src: '/images/clinic3.jpg', label: 'Nigohi Clinic' },
];

const educationResources = [
  {
    img: '/images/digestive-system.jpg',
    title: 'Digestive System Anatomy',
    desc: 'Complete anatomy of the gastrointestinal tract explained',
    tag: 'Education',
  },
  {
    img: '/images/bristol-chart.jpg',
    title: 'Bristol Stool Chart',
    desc: 'Understand what your stool says about your gut health',
    tag: 'Diagnosis',
  },
  {
    img: '/images/ibs-diet.jpg',
    title: 'IBS Diet Guide',
    desc: 'What to eat and avoid if you have Irritable Bowel Syndrome',
    tag: 'Nutrition',
  },
  {
    img: '/images/rda-macro.jpg',
    title: 'Macro Nutrients RDA',
    desc: 'Recommended daily allowance of carbs, protein, fat & more',
    tag: 'Nutrition',
  },
  {
    img: '/images/rda-micro.jpg',
    title: 'Trace & Micro Nutrients',
    desc: 'Daily requirements of vitamins, minerals & micronutrients',
    tag: 'Nutrition',
  },
];

const clinicValues = [
  { icon: Heart, label: 'Affordable Rates', desc: 'Quality care at rates every patient can afford', color: 'bg-red-100 dark:bg-red-950/40 text-red-600' },
  { icon: Shield, label: 'Expert Surgeons', desc: 'FMAS · FIAGES · DNB certified specialists', color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-600' },
  { icon: MapPin, label: '5 Locations', desc: 'Clinics across Shahjahanpur region', color: 'bg-orange-100 dark:bg-orange-950/40 text-orange-600' },
  { icon: Users, label: '50,000+ Patients', desc: 'Trusted by families across the district', color: 'bg-purple-100 dark:bg-purple-950/40 text-purple-600' },
];

const heroSlides = [
  { src: '/images/doctor.jpg',       label: 'Expert Gastroenterologist', sub: 'FMAS · FIAGES · DNB · MS' },
  { src: '/images/consultation.jpg', label: 'Patient-First Consultation',  sub: 'Compassionate Care' },
  { src: '/images/clinic1.jpg',      label: 'Shahjahanpur Clinic',         sub: 'Mon–Sat · 2–6 PM' },
  { src: '/images/clinic2.jpg',      label: 'Tilhar Clinic',               sub: 'Every Thursday · 10 AM–1 PM' },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % heroSlides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[current].src}
            alt={heroSlides[current].label}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-900/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-5 left-5 right-5"
          >
            <p className="text-white font-display font-bold text-lg leading-tight">{heroSlides[current].label}</p>
            <p className="text-white/90 text-xs mt-0.5">{heroSlides[current].sub}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute top-4 right-4 flex gap-1.5 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}

const allClinics = [
  { src: '/images/clinic1.jpg', label: 'Shahjahanpur', day: 'Mon – Sat',      time: '2:00 PM – 6:00 PM',  tag: 'Main Clinic' },
  { src: '/images/clinic2.jpg', label: 'Nigohi',       day: 'Every Friday',   time: '10:00 AM – 1:00 PM', tag: 'OPD' },
  { src: '/images/clinic3.jpg', label: 'Shahabad',     day: 'Every Tuesday',  time: '10:00 AM – 1:00 PM', tag: 'OPD' },
  { src: '/images/clinic4.jpg', label: 'Tilhar',       day: 'Every Thursday', time: '10:00 AM – 1:00 PM', tag: 'OPD' },
  { src: '/images/clinic5.jpg', label: 'Powayan',      day: 'Every Sunday',   time: '2:00 PM – 6:00 PM',  tag: 'OPD' },
];

function ClinicShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % allClinics.length), 4000);
    return () => clearInterval(t);
  }, []);

  const clinic = allClinics[active];

  return (
    <div className="grid lg:grid-cols-5 gap-4 items-start">

      {/* Left — Large featured image (full poster, no crop) */}
      <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-video lg:aspect-square">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img src={clinic.src} alt={clinic.label} className="w-full h-full object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Overlay info */}
        <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                {clinic.tag}
              </span>
              <h3 className="font-display text-3xl font-bold text-white mb-1">
                {clinic.label} Clinic
              </h3>
              <p className="text-white/90 text-sm mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" /> {clinic.day} · {clinic.time}
              </p>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 bg-white text-primary-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" /> Book at this Clinic
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Counter badge */}
        <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10">
          {active + 1} / {allClinics.length}
        </div>
      </div>

      {/* Right — Clinic list (vertical on desktop, horizontal scroll on mobile) */}
      <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-1 px-1">
        {allClinics.map((c, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            whileHover={{ x: 4 }}
            className={`relative flex items-center gap-3 p-3 rounded-2xl text-left transition-all duration-300 overflow-hidden shrink-0 lg:shrink w-40 lg:w-auto ${
              i === active
                ? 'bg-primary-600 shadow-lg shadow-primary-500/20'
                : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {/* Thumbnail */}
            <div className="w-12 h-10 lg:w-16 lg:h-14 rounded-xl overflow-hidden shrink-0">
              <img src={c.src} alt={c.label} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className={`font-display font-bold text-xs lg:text-sm truncate ${i === active ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {c.label}
              </p>
              <p className={`text-xs mt-0.5 truncate hidden lg:block ${i === active ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'}`}>
                {c.day}
              </p>
              <p className={`text-xs hidden lg:block ${i === active ? 'text-white/80' : 'text-gray-400 dark:text-gray-500'}`}>
                {c.time}
              </p>
            </div>

            {/* Active indicator */}
            {i === active && (
              <motion.div
                layoutId="activeClinic"
                className="w-1.5 h-6 lg:h-8 bg-white/60 rounded-full shrink-0"
              />
            )}
          </motion.button>
        ))}
      </div>

    </div>
  );
}

function AppointmentSection() {
  const [form, setForm] = useState({ name: '', phone: '', condition: '', location: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const locations = ['Shahjahanpur', 'Shahabad', 'Tilhar', 'Nigohi', 'Powayan'];
  const conditions = [
    'Stomach Pain / Acidity',
    'Gallbladder Stone',
    'Piles / Fissure / Fistula',
    'Hernia',
    'Liver Problem / Jaundice',
    'IBS / Colitis',
    'Endoscopy / Colonoscopy',
    'Other',
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-tag"><Calendar className="w-4 h-4" /> Quick Booking</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-2">
              Book Your Appointment <span className="gradient-text">Online</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
              Fill in your details and we'll confirm your slot via WhatsApp or call within a few hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-3xl p-10 text-center"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">Request Received!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                  Thank you, <strong>{form.name}</strong>. Our team will contact you on <strong>{form.phone}</strong> shortly to confirm your appointment.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', condition: '', location: '', message: '' }); }}
                  className="btn-outline text-sm"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Phone Number *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Problem / Condition *</label>
                    <select
                      name="condition"
                      value={form.condition}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    >
                      <option value="">Select condition</option>
                      {conditions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Preferred Clinic *</label>
                    <select
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    >
                      <option value="">Select location</option>
                      {locations.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">Additional Message (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your symptoms or any other info..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Calendar className="w-4 h-4" /> Confirm Appointment Request</>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Or call us directly at{' '}
                  <a href={`tel:${doctorInfo.phone}`} className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">{doctorInfo.phone}</a>
                </p>
              </form>
            )}
          </motion.div>

          {/* Right — Consultation Image + Why Book + Timings */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Consultation Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="/images/consultation.jpg"
                alt="Doctor Consultation at Gastro Clinic 27"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-white font-display font-bold text-base">Real Consultation Experience</p>
                  <p className="text-white/85 text-xs mt-0.5">Compassionate care, expert diagnosis</p>
                </div>
                <span className="flex items-center gap-1.5 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  OPD Open
                </span>
              </div>
            </div>
            {/* Why book here */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950/40 dark:to-accent-950/40 rounded-3xl p-6 border border-primary-100 dark:border-primary-900">
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-4">Why Book with Us?</h3>
              <ul className="space-y-3">
                {[
                  { icon: BadgeCheck, text: 'MCI Registered doctors — FMAS, FIAGES, DNB certified' },
                  { icon: Shield,     text: 'Affordable consultation & surgery charges' },
                  { icon: Clock,      text: 'Quick appointment confirmation via WhatsApp' },
                  { icon: MapPin,     text: '5 convenient clinic locations across the region' },
                  { icon: Heart,      text: 'Patient-first approach with compassionate care' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <Icon className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* OPD Timings */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent-500" /> OPD Schedule
              </h3>
              <div className="space-y-2">
                {[
                  { day: 'Mon – Sat', loc: 'Shahjahanpur', time: '2:00 PM – 6:00 PM' },
                  { day: 'Tuesday',   loc: 'Shahabad',     time: '10:00 AM – 1:00 PM' },
                  { day: 'Thursday',  loc: 'Tilhar',       time: '10:00 AM – 1:00 PM' },
                  { day: 'Friday',    loc: 'Nigohi',       time: '10:00 AM – 1:00 PM' },
                  { day: 'Sunday',    loc: 'Powayan',      time: '2:00 PM – 6:00 PM' },
                ].map(({ day, loc, time }) => (
                  <div key={loc} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div>
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">{loc}</p>
                      <p className="text-xs text-gray-400">{day}</p>
                    </div>
                    <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 px-2.5 py-1 rounded-lg">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ───── HERO ───── */}
      <section className="relative min-h-screen sm:min-h-[92vh] flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary-700/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent-600/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
          {[
            { icon: Heart, x: '10%', y: '20%', delay: 0 },
            { icon: Activity, x: '85%', y: '15%', delay: 1 },
            { icon: Shield, x: '88%', y: '70%', delay: 2 },
            { icon: Stethoscope, x: '5%', y: '75%', delay: 1.5 },
          ].map(({ icon: Icon, x, y, delay }, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10"
              style={{ left: x, top: y }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
            >
              <Icon size={44} />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Clinic Brand Text */}
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              5+ Years of Trusted Care · 5 Clinic Locations
            </motion.div>

            <motion.div variants={fadeUp} className="mb-2">
              <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">Est. 2019 · Shahjahanpur Region</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
              Gastro Clinic 27
            </motion.h1>

            <motion.p variants={fadeUp} className="text-primary-200 text-xl font-medium mb-2">
              Expert Digestive Care, Close to Home
            </motion.p>

            <motion.p variants={fadeUp} className="text-lg sm:text-2xl lg:text-3xl font-display text-white/90 italic mb-8">
              "{doctorInfo.tagline}"
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a href={`tel:${doctorInfo.phone}`} className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-accent-900/30 hover:-translate-y-0.5">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
              {[
                { label: '50,000+ Patients', icon: Users },
                { label: '5+ Years', icon: Award },
                { label: '5 Clinics', icon: MapPin },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 text-white/85 text-sm">
                  <Icon className="w-4 h-4 text-accent-400" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Logo slides in from right on page load */}
          <div className="hidden lg:flex justify-center items-center">
          <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Soft glow behind */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-400/20 to-primary-400/20 blur-2xl scale-110" />

              {/* Logo card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-white/95 dark:bg-white rounded-3xl shadow-2xl p-8 border border-white/60"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)' }}
              >
                <img
                  src="/images/logo2.png"
                  alt="गैस्ट्रो क्लिनिक 27"
                  className="w-72 h-auto object-contain"
                />

                {/* Bottom tagline strip */}
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-primary-700 text-sm font-semibold tracking-wide">स्वस्थ पाचन, बेहतर जीवन</p>
                  <p className="text-gray-400 text-xs mt-0.5">Shahjahanpur · Est. 2019</p>
                </div>
              </motion.div>

              {/* Top-right decoration dot */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-accent-400 shadow-lg shadow-accent-400/50" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-primary-400 shadow-lg shadow-primary-400/50" />
            </div>
          </motion.div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80V40C360 0 720 80 1440 20V80H0Z" className="fill-white dark:fill-gray-950" />
          </svg>
        </div>
      </section>

      {/* ───── STATS BAR ───── */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden"
          >
            {[
              { icon: Award, value: '5+', label: 'Years of Service', color: 'bg-white/20 text-white' },
              { icon: Users, value: '50K+', label: 'Patients Treated', color: 'bg-white/20 text-white' },
              { icon: MapPin, value: '5', label: 'Clinic Locations', color: 'bg-white/20 text-white' },
              { icon: Star, value: '4.9', label: 'Patient Rating', color: 'bg-white/20 text-white' },
            ].map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── DOCTOR PROFILE ───── */}
      <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — Doctor Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative flex justify-center"
            >
              {/* Decorative background blob */}
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-900/40 dark:to-accent-900/40 blur-3xl opacity-60" />

              {/* Dotted pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, #1a6feb 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
              />
              <div className="absolute bottom-0 left-0 w-24 h-24 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, #0d9488 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
              />

              {/* Doctor photo */}
              <div className="relative z-10">
                <div className="w-64 sm:w-72 lg:w-80 h-72 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800">
                  <img
                    src={doctorInfo.photo}
                    alt="Expert Gastroenterologist"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Experience badge — hidden on mobile to prevent viewport overflow */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="hidden sm:flex absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 items-center gap-3 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Serving from last</p>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">5+ Years</p>
                  </div>
                </motion.div>

                {/* Patients badge — hidden on mobile */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="hidden sm:flex absolute -top-5 -right-5 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 items-center gap-3 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-900/50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Patients Treated</p>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">50,000+</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — Doctor Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {/* Tag */}
              <motion.div variants={fadeUp}>
                <span className="section-tag"><Stethoscope className="w-4 h-4" /> Meet Our Doctors</span>
              </motion.div>

              {/* Name & Title */}
              <motion.div variants={fadeUp} className="mt-4 mb-2">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  We Have <span className="text-indigo-500">Expert Gastro</span> &<br />
                  <span className="gradient-text">Laparoscopic Surgeons</span>
                </h2>
              </motion.div>

              {/* Credentials row */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-5">
                {['MBBS', 'MS', 'DNB', 'FMAS', 'FIAGES', 'MCI Registered'].map(c => (
                  <span key={c} className="inline-flex items-center gap-1 bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-primary-100 dark:border-primary-900">
                    <BadgeCheck className="w-3.5 h-3.5" /> {c}
                  </span>
                ))}
              </motion.div>

              {/* Quote */}
              <motion.div variants={fadeUp} className="relative bg-primary-50 dark:bg-primary-950/40 rounded-2xl p-6 mb-6 shadow-md border-l-4 border-primary-600">
                <p className="text-primary-800 dark:text-primary-200 text-xl sm:text-2xl font-bold leading-snug">
                  If a healthcare solution is not affordable, it is not a solution.
                </p>
              </motion.div>

              {/* Specializations */}
              <motion.div variants={fadeUp} className="mb-6">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Specializations</p>
                <div className="grid grid-cols-2 gap-2">
                  {doctorInfo.specialties.slice(0, 6).map(spec => (
                    <div key={spec} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-accent-500 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stats row */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 mb-7">
                {[
                  { val: '50K+', lab: 'Patients', icon: Users },
                  { val: '5+', lab: 'Years', icon: Award },
                  { val: '12+', lab: 'Certifications', icon: GraduationCap },
                ].map(({ val, lab, icon: Icon }) => (
                  <div key={lab} className="text-center bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm border border-gray-100 dark:border-gray-700">
                    <Icon className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                    <p className="font-display font-bold text-gray-900 dark:text-white text-lg">{val}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{lab}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link to="/appointment" className="btn-primary inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a href={`tel:${doctorInfo.phone}`} className="btn-outline inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {doctorInfo.phone}
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ───── SERVICES PREVIEW ───── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8 sm:mb-12">
            <span className="section-tag"><Stethoscope className="w-4 h-4" /> Our Services</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Expert Gastro Care</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">From endoscopy and laparoscopic surgery to IBS management and liver care — all under one roof at affordable rates.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="card p-6 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">{s.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline inline-flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── CLINIC GALLERY CAROUSEL ───── */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8 sm:mb-12">
            <span className="section-tag"><MapPin className="w-4 h-4" /> Our Clinics</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Clinics, Close to You</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">Clean, well-equipped clinics across 5 locations in Shahjahanpur region — always close to you.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <ClinicShowcase />
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/clinics" className="btn-outline inline-flex items-center gap-2">
              View All Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── FULL-WIDTH IMPACT BANNER ───── */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950 to-primary-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">Est. 2019 · Shahjahanpur</span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3 leading-tight">
                50,000+ Lives <br /><span className="text-accent-400">Transformed</span>
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-5">
                Gastro Clinic 27 has been the region's most trusted digestive care network since 2019 — bringing specialist-level care within reach of every family in Shahjahanpur.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition-all shadow-lg hover:-translate-y-0.5">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/consultation2.jpg"
                  alt="Gastro Clinic 27 – Doctor Consultation"
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
              {[
                { num: 50000, decimals: 0, suffix: '+', lab: 'Patients Treated',  icon: Users,  iconBg: 'bg-blue-500/35',   iconColor: 'text-blue-200',   glow: 'rgba(59,130,246,0.45)' },
                { num: 5,     decimals: 0, suffix: '+', lab: 'Years of Service',  icon: Award,  iconBg: 'bg-teal-500/35',   iconColor: 'text-teal-200',   glow: 'rgba(20,184,166,0.45)' },
                { num: 5,     decimals: 0, suffix: '',  lab: 'Clinic Locations',  icon: MapPin, iconBg: 'bg-purple-500/35', iconColor: 'text-purple-200', glow: 'rgba(168,85,247,0.45)' },
                { num: 4.9,   decimals: 1, suffix: '★', lab: 'Patient Rating',    icon: Star,   iconBg: 'bg-yellow-500/35', iconColor: 'text-yellow-200', glow: 'rgba(234,179,8,0.45)'  },
              ].map((s) => (
                <GlassStatCard key={s.lab} num={s.num} decimals={s.decimals} suffix={s.suffix} label={s.lab} icon={s.icon} iconBg={s.iconBg} iconColor={s.iconColor} glow={s.glow} />
              ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── ABOUT GASTRO CLINIC 27 ───── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-tag"><Award className="w-4 h-4" /> About Gastro Clinic 27</span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted Digestive Care, <span className="gradient-text">Right Here in Shahjahanpur</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{doctorInfo.bio}</p>

              {/* Clinic value pillars */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {clinicValues.map(({ icon: Icon, label, desc, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm cursor-default"
                  >
                    <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">{label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug mt-0.5">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Our Story <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative space-y-4"
            >
              {/* Main announcement image — full, no crop */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/illness_reason.jpg"
                  alt="Gastro Clinic 27 – Common Gastro Illness Reasons"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Two images below */}
              <div className="grid grid-cols-2 gap-4">
                {/* Patient Trust Card */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-600 to-primary-800 p-4 flex flex-col justify-between"
                  style={{ minHeight: '140px' }}
                >
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-display font-bold text-3xl leading-none">50K+</p>
                    <p className="text-white/80 text-xs mt-1">Patients Trusted Us</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-white/60" />
                    <p className="text-white/60 text-xs">Since 2019 · Shahjahanpur</p>
                  </div>
                  {/* Decorative circle */}
                  <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/10" />
                  <div className="absolute -right-2 -bottom-6 w-28 h-28 rounded-full bg-white/5" />
                </motion.div>

                {/* Credentials Card */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-accent-600 to-accent-800 p-4 flex flex-col justify-between"
                  style={{ minHeight: '140px' }}
                >
                  <p className="text-white font-display font-bold text-sm">Certified Specialists</p>
                  <div className="flex flex-col gap-1.5">
                    {['FMAS', 'FIAGES', 'DNB', 'MCI Reg.'].map(c => (
                      <div key={c} className="flex items-center gap-1.5">
                        <BadgeCheck className="w-3.5 h-3.5 text-white/80 shrink-0" />
                        <span className="text-white/90 text-xs font-medium">{c}</span>
                      </div>
                    ))}
                  </div>
                  {/* Decorative */}
                  <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/10" />
                  <div className="absolute -right-2 -bottom-6 w-28 h-28 rounded-full bg-white/5" />
                </motion.div>
              </div>

              {/* Specialties badges */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Services Offered</p>
                <div className="flex flex-wrap gap-2">
                  {doctorInfo.specialties.map((spec) => (
                    <span key={spec} className="inline-flex items-center gap-1.5 bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 text-xs font-medium px-3 py-1.5 rounded-xl">
                      <CheckCircle className="w-3 h-3" /> {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── EDUCATIONAL RESOURCES ───── */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8 sm:mb-12">
            <span className="section-tag"><BookOpen className="w-4 h-4" /> Health Education</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn About Your Gut Health</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">Educational resources from Gastro Clinic 27 to help you understand digestive health better.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationResources.map((resource, i) => (
              <motion.div
                key={resource.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01, boxShadow: '0 24px 48px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-white dark:bg-gray-800">
                  <img
                    src={resource.img}
                    alt={resource.title}
                    className="w-full object-contain block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {resource.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{resource.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS PREVIEW ───── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8 sm:mb-12">
            <span className="section-tag"><Star className="w-4 h-4" /> Patient Reviews</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Thousands</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">Real stories from patients who found better digestive health at Gastro Clinic 27.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="card p-6 cursor-default"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.08, type: 'spring' }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location} · {t.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/testimonials" className="btn-outline inline-flex items-center gap-2">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── APPOINTMENT FORM ───── */}
      <AppointmentSection />

      {/* ───── CTA BANNER ───── */}
      <section className="relative py-16 overflow-hidden">
        {/* Background clinic image */}
        <div className="absolute inset-0">
          <img
            src="/images/clinic4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Gut Problem? Don't Ignore It.
            </h2>
            <p className="text-primary-200 mb-2 max-w-xl mx-auto">
              Book your appointment at Gastro Clinic 27 today and get expert gastro care at affordable rates.
            </p>
            <p className="text-accent-300 text-sm mb-8 font-medium">
              {doctorInfo.taglineHindi} · Shahjahanpur | Shahabad | Tilhar | Nigohi | Powayan
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link to="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all shadow-xl hover:-translate-y-0.5">
                  <Calendar className="w-5 h-5" />
                  Book Appointment Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a href={`tel:${doctorInfo.phone}`} className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5">
                  <Phone className="w-5 h-5" />
                  {doctorInfo.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
