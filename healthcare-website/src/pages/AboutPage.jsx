import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, BookOpen, CheckCircle, Star, GraduationCap, Calendar, Trophy, Shield } from 'lucide-react';
import { doctorInfo } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-4 border-white" />
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border-2 border-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <Award className="w-4 h-4" /> Gastro Surgeon & Endoscopist · Gastro Clinic 27
            </span>
            <h1 className="font-display text-5xl font-bold text-white mb-4">{doctorInfo.name}</h1>
            <p className="text-primary-200 text-xl mb-2">{doctorInfo.title}</p>
            <p className="text-accent-300 text-sm mb-8">Associated — Dr. Ram Manohar Lohia Hospital, New Delhi</p>
            <Link to="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all shadow-xl hover:-translate-y-0.5">
              <Calendar className="w-5 h-5" /> Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-1">
              <div className="card overflow-hidden">
                <div className="bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950 dark:to-accent-950 p-10 text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center mx-auto mb-4 shadow-2xl overflow-hidden">
                    <img
                      src="/images/doctor.jpg"
                      alt="Dr. Vayu – Gastro Surgeon"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white">{doctorInfo.name}</h2>
                  <p className="text-primary-600 dark:text-primary-400 text-sm mt-1">{doctorInfo.specialization}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">RML Hospital, New Delhi</p>
                  <div className="flex justify-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { label: 'Experience', value: `${doctorInfo.experience}+ Years` },
                    { label: 'Patients', value: '1000+' },
                    { label: 'Clinics', value: '5 Locations' },
                    { label: 'Specialization', value: 'Gastroenterology' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
              <span className="section-tag"><BookOpen className="w-4 h-4" /> Biography</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-6">Bringing Expert Gastro Care to Every Doorstep</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{doctorInfo.bio}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Dr. Vayu's patient-first approach and belief in making quality healthcare affordable have earned him the trust of thousands across Shahjahanpur and surrounding districts. Whether it's a routine endoscopy, laparoscopic surgery, or managing a chronic digestive condition, he brings the same level of dedication and expertise to every patient.
              </p>

              {/* Specialties */}
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

      {/* Qualifications */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <span className="section-tag"><GraduationCap className="w-4 h-4" /> Education</span>
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white">Academic Qualifications</h2>
          </motion.div>

          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-200 dark:bg-primary-800 hidden md:block" />
            <div className="space-y-10">
              {doctorInfo.qualifications.map((q, i) => (
                <motion.div
                  key={q.degree}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 card p-6 hover:shadow-md transition-shadow">
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-wide mb-1">{q.year}</p>
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1">{q.degree}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{q.institution}</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                    {q.year.slice(2)}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-tag"><Shield className="w-4 h-4" /> Credentials</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8">Certifications & Memberships</h2>
              <div className="space-y-4">
                {doctorInfo.certifications.map((cert, i) => (
                  <motion.div key={cert} custom={i} variants={fadeUp} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-tag"><Trophy className="w-4 h-4" /> Recognition</span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8">Awards & Achievements</h2>
              <div className="space-y-4">
                {doctorInfo.awards.map((award, i) => (
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
    </div>
  );
}
