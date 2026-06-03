import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone, Calendar, Star, ArrowRight, Shield, Award, Users, Clock,
  ChevronRight, Heart, Activity, Stethoscope, CheckCircle
} from 'lucide-react';
import { doctorInfo, testimonials, services } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

const StatCard = ({ icon: Icon, value, label, color }) => (
  <motion.div variants={fadeUp} className="text-center p-6">
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mx-auto mb-4`}>
      <Icon className="w-7 h-7" />
    </div>
    <p className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</p>
  </motion.div>
);

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ───── HERO ───── */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
        {/* background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary-700/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent-600/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
          {/* floating icons */}
          {[
            { icon: Heart, x: '10%', y: '20%', size: 20, delay: 0 },
            { icon: Activity, x: '85%', y: '15%', size: 24, delay: 1 },
            { icon: Shield, x: '88%', y: '70%', size: 20, delay: 2 },
            { icon: Stethoscope, x: '5%', y: '75%', size: 22, delay: 1.5 },
          ].map(({ icon: Icon, x, y, size, delay }, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10"
              style={{ left: x, top: y }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
            >
              <Icon size={size * 2} />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Accepting New Patients · 5 Clinics Across Mumbai
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
              {doctorInfo.name}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-primary-300 text-lg font-medium mb-3">
              {doctorInfo.title} · {doctorInfo.experience}+ Years Experience
            </motion.p>

            <motion.p variants={fadeUp} className="text-2xl sm:text-3xl font-display text-white/90 italic mb-8">
              "{doctorInfo.tagline}"
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-primary-50 transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5">
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a href={`tel:${doctorInfo.phone}`} className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-red-900/30 hover:-translate-y-0.5">
                <Phone className="w-5 h-5" />
                Emergency Call
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
              {[
                { label: '50,000+ Patients', icon: Users },
                { label: '22+ Years', icon: Award },
                { label: '5 Clinics', icon: Stethoscope },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-accent-400" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Doctor Photo / Illustration Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-[400px] h-[500px]">
              {/* Main card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary-700/60 to-primary-900/80 backdrop-blur-sm border border-white/20 overflow-hidden">
                {/* Avatar placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center mb-6 shadow-2xl">
                    <span className="font-display text-6xl font-bold text-white">RS</span>
                  </div>
                  <p className="font-display text-2xl font-bold text-white">{doctorInfo.name}</p>
                  <p className="text-primary-300 text-sm mt-1">{doctorInfo.specialization}</p>
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/60 text-xs mt-1">4.9 / 5 (2,400+ Reviews)</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-12 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 dark:text-white">Verified Doctor</p>
                  <p className="text-xs text-gray-500">MCI Registered</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -right-8 bottom-20 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800 dark:text-white">Available Today</p>
                  <p className="text-xs text-gray-500">6 PM – 9 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80V40C360 0 720 80 1440 20V80H0Z" className="fill-white dark:fill-gray-950" />
          </svg>
        </div>
      </section>

      {/* ───── STATS ───── */}
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
              { icon: Award, value: '22+', label: 'Years of Experience', color: 'bg-white/20 text-white' },
              { icon: Users, value: '50K+', label: 'Patients Treated', color: 'bg-white/20 text-white' },
              { icon: Stethoscope, value: '5', label: 'Clinics Available', color: 'bg-white/20 text-white' },
              { icon: Star, value: '4.9', label: 'Average Rating', color: 'bg-white/20 text-white' },
            ].map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── SERVICES PREVIEW ───── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="section-tag"><Stethoscope className="w-4 h-4" /> Our Services</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Medical Care</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">From routine checkups to specialized treatment, we provide holistic healthcare for your entire family.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((s, i) => (
              <motion.div
                key={s.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="card p-6 hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{s.description}</p>
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

      {/* ───── ABOUT PREVIEW ───── */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-tag"><Award className="w-4 h-4" /> About the Doctor</span>
              <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-6">
                22 Years of Healing, <span className="gradient-text">One Patient at a Time</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{doctorInfo.bio}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {doctorInfo.qualifications.map((q) => (
                  <div key={q.degree} className="flex items-start gap-3 p-3 bg-primary-50 dark:bg-primary-950/30 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">{q.degree}</p>
                      <p className="text-xs text-gray-500">{q.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                Full Profile <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950 dark:to-accent-950 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <span className="font-display text-4xl font-bold text-white">RS</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">{doctorInfo.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm">{doctorInfo.title}</p>
                </div>
                <div className="space-y-3">
                  {doctorInfo.specialties.map((spec) => (
                    <div key={spec} className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 rounded-xl px-4 py-2.5">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS PREVIEW ───── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="section-tag"><Star className="w-4 h-4" /> Patient Reviews</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">Trusted by Thousands</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Real stories from real patients who found better health with Dr. Sharma.</p>
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
                className="card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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

      {/* ───── CTA BANNER ───── */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-primary-200 mb-8 max-w-xl mx-auto">
              Book your appointment today and experience compassionate, expert healthcare at any of our 5 convenient locations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all shadow-xl hover:-translate-y-0.5">
                <Calendar className="w-5 h-5" />
                Book Appointment Now
              </Link>
              <a href={`tel:${doctorInfo.phone}`} className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-0.5">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
