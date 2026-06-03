import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Stethoscope, Thermometer, Activity, Heart,
  MessageCircle, Shield, Syringe, Users, CheckCircle, ArrowRight
} from 'lucide-react';
import { services } from '../data';

const iconMap = { Stethoscope, Thermometer, Activity, Heart, MessageCircle, Shield, Syringe, Users };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-800 to-accent-800 py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <Stethoscope className="w-4 h-4" /> Medical Services
            </span>
            <h1 className="font-display text-5xl font-bold text-white mb-4">Our Medical Services</h1>
            <p className="text-primary-200 text-xl max-w-xl mx-auto">
              Comprehensive, evidence-based healthcare services delivered with compassion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Stethoscope;
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="card p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/appointment" className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Dr. Sharma?</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">We go beyond treating symptoms to provide holistic, personalized care.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Evidence-Based Treatment', desc: 'Every diagnosis and treatment is backed by the latest medical research and guidelines.', icon: Shield, color: 'bg-blue-100 dark:bg-blue-950 text-blue-600' },
              { title: 'Personalized Care', desc: 'We understand each patient is unique. Treatment plans are customized for your specific needs.', icon: Heart, color: 'bg-red-100 dark:bg-red-950 text-red-600' },
              { title: 'Advanced Diagnostics', desc: 'State-of-the-art diagnostic equipment for accurate and timely results at all clinics.', icon: Activity, color: 'bg-purple-100 dark:bg-purple-950 text-purple-600' },
              { title: 'Preventive Focus', desc: 'We believe in preventing diseases before they occur through proactive health management.', icon: CheckCircle, color: 'bg-green-100 dark:bg-green-950 text-green-600' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="text-center p-6">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Start Your Health Journey Today</h2>
            <p className="text-primary-200 mb-8">Book a consultation and let Dr. Sharma guide you to better health.</p>
            <Link to="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all shadow-xl hover:-translate-y-0.5">
              Book Appointment <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
