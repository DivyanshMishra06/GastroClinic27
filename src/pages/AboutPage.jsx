import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award, BookOpen, CheckCircle, Star, Calendar, Trophy,
  Shield, Heart, MapPin, Users, Target, Clock
} from 'lucide-react';
import { doctorInfo, clinicMilestones, clinicCredentials, clinicAchievements } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const whyUs = [
  {
    icon: Heart,
    title: 'Affordable for Everyone',
    desc: 'We believe quality gastro care should not be a luxury. Our consultation and surgical fees are priced to be accessible to every patient, regardless of economic background.',
    color: 'bg-red-100 dark:bg-red-950/40 text-red-600',
  },
  {
    icon: Shield,
    title: 'Expert, Certified Surgeons',
    desc: 'Our associated doctors hold advanced qualifications — FMAS, FIAGES, DNB — and are registered with the National Medical Commission (NMC) for your complete assurance.',
    color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Multi-Location Presence',
    desc: 'With 5 OPD locations across Shahjahanpur, Shahabad, Tilhar, Nigohi, and Powayan, expert gastro care is never far from your door.',
    color: 'bg-orange-100 dark:bg-orange-950/40 text-orange-600',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'Founded with a mission to serve the region, Gastro Clinic 27 has treated over 50,000 patients — bringing specialist care that was once only available in big cities.',
    color: 'bg-purple-100 dark:bg-purple-950/40 text-purple-600',
  },
  {
    icon: Target,
    title: 'Accurate Diagnosis',
    desc: 'We use advanced imaging and diagnostics to ensure your condition is accurately diagnosed before any treatment is recommended. GI Endoscopy & Colonoscopy coming soon.',
    color: 'bg-teal-100 dark:bg-teal-950/40 text-teal-600',
  },
  {
    icon: Clock,
    title: 'Convenient Timings',
    desc: 'OPD available every day except Sunday at Shahjahanpur (2–6 PM), and on specific days at all other clinic locations for maximum patient convenience.',
    color: 'bg-green-100 dark:bg-green-950/40 text-green-600',
  },
];

export default function AboutPage() {
  return (
    <div>

      {/* ───── HERO ───── */}
      <section className="relative bg-[rgb(104,183,164)] py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-4 border-white" />
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border-2 border-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <Award className="w-4 h-4" /> Serving Shahjahanpur Region Since 2019
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">About Gastro Clinic 27</h1>
            <p className="text-white/85 text-base sm:text-xl max-w-2xl mx-auto mb-2">
              Trusted Specialist Gastroenterology Care for Every Family in Shahjahanpur and Surrounding Districts
            </p>
            <p className="text-primary-950/70 text-sm mb-8 font-medium">
              7+ Years · 50,000+ Patients · 5 Clinic Locations · NMC Registered Doctors
            </p>
            <Link to="/appointment#appointment-form" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-primary-500/30 hover:-translate-y-0.5">
              <Calendar className="w-5 h-5" /> Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───── CLINIC STORY ───── */}
      <section className="py-20 bg-white dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Clinic Stats Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-1">
              <div className="card overflow-hidden lg:sticky lg:top-24">
                <div className="bg-gradient-to-br from-[rgb(104,183,164)] to-primary-500 p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-4">
  <img src="/images/logo.png" alt="Gastro Clinic 27" className="w-full h-full object-contain" loading="lazy" />
</div>

                  <h2 className="font-display text-xl font-bold text-white">Gastro Clinic 27</h2>
                  <p className="text-primary-300 text-sm mt-1">Shahjahanpur Region</p>
                  <div className="flex justify-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { label: 'Established', value: '2019' },
                    { label: 'Patients Served', value: '50,000+' },
                    { label: 'Clinic Locations', value: '5 Across Region' },
                    { label: 'Specialization', value: 'Gastroenterology' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-white text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Story Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
              <span className="section-tag"><BookOpen className="w-4 h-4" /> Our Story</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-6">Bringing Expert Gastro Care to Every Doorstep</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">{doctorInfo.bio}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                What started as a single clinic in Shahjahanpur has grown into a five-location network, touching the lives of over 50,000 patients across Shahabad, Tilhar, Nigohi, and Powayan. Our patient-first approach means that no one is turned away due to cost — we have always believed that quality healthcare is a right, not a privilege.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Our doctors bring the same level of expertise you would expect from a major Delhi hospital — right here in Shahjahanpur. Whether it's laparoscopic surgery, managing a chronic digestive condition, or any other gastro concern, every patient receives the same dedication, precision, and care.
              </p>

              {/* Areas of Expertise */}
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {doctorInfo.specialties.map((s) => (
                  <span key={s} className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 text-sm font-medium px-4 py-2 rounded-xl">
                    <CheckCircle className="w-3.5 h-3.5" /> {s}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ───── WHY TRUST US ───── */}
      <section className="py-20 bg-[rgba(104,183,164,0.12)] dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="section-tag"><Star className="w-4 h-4" /> Why Choose Us</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why 50,000+ Patients Trust Gastro Clinic 27
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Six core commitments that define how we care for every patient who walks through our doors.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="card p-7 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── TEAM CREDENTIALS ───── */}
      <section className="py-20 bg-white dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Credentials */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-tag"><Shield className="w-4 h-4" /> Our Doctors' Credentials</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Qualified & Registered Specialists
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                Every doctor associated with Gastro Clinic 27 is registered with the National Medical Commission (NMC) and holds nationally and internationally recognised qualifications.
              </p>
              <div className="space-y-4">
                {clinicCredentials.map((cert, i) => (
                  <motion.div key={cert} custom={i} variants={fadeUp} className="flex items-center gap-4 p-4 bg-[rgba(104,183,164,0.12)] dark:bg-primary-950 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recognition */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-tag"><Trophy className="w-4 h-4" /> Recognition</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Clinic Achievements
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                Recognised by medical associations and community organisations for our commitment to affordable, accessible, and quality healthcare.
              </p>
              <div className="space-y-4">
                {clinicAchievements.map((award, i) => (
                  <motion.div key={award.title} custom={i} variants={fadeUp} className="card p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0 shadow-lg">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">{award.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{award.org}</p>
                      <span className="text-xs bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full font-medium mt-2 inline-block">{award.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ───── MILESTONES TIMELINE ───── */}
      <section className="py-20 bg-[rgba(104,183,164,0.12)] dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="section-tag"><Award className="w-4 h-4" /> Our Journey</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Clinic Milestones</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
              From a single clinic to a five-location network — the story of Gastro Clinic 27's growth in service of the community.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline centre line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-200 dark:bg-primary-800 hidden md:block" />
            <div className="space-y-10">
              {clinicMilestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 card p-6 hover:shadow-md transition-shadow">
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-wide mb-1">{m.year}</p>
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{m.institution}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold shadow-lg shrink-0 text-sm">
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="py-16 bg-gradient-to-r from-[rgb(104,183,164)] to-primary-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Get Expert Gastro Care?</h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto">
              Book an appointment at Gastro Clinic 27 — 5 locations, affordable rates, expert NMC-registered doctors.
            </p>
            <Link to="/appointment#appointment-form" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-xl shadow-primary-500/30 hover:-translate-y-0.5">
              <Calendar className="w-5 h-5" /> Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
