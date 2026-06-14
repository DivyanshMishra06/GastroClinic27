import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import { clinics } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function ClinicsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[rgb(104,183,164)] py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border-4 border-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <MapPin className="w-4 h-4" /> Our Locations
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">5 Clinics in Shahjahanpur Region</h1>
            <p className="text-white/85 text-base sm:text-xl max-w-xl mx-auto">
              Expert gastro care close to where you live — Shahjahanpur, Nigohi, Shahabad, Tilhar & Powayan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinics Grid */}
      <section className="py-20 bg-[rgba(104,183,164,0.12)] dark:bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {clinics.map((clinic, i) => (
              <motion.div
                key={clinic.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${clinic.color} p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-medium bg-white/20 rounded-full px-3 py-1">Clinic {clinic.id}</span>
                      <h3 className="font-display text-xl font-bold mt-3 mb-1">{clinic.name}</h3>
                      <p className="text-white/80 text-sm">{clinic.area}</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Clinic Poster — full image, no cropping */}
                <div className="relative overflow-hidden bg-white aspect-[3/4]">
                  <img
                    src={`/images/clinic${clinic.id}.jpg`}
                    alt={clinic.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 flex items-center gap-1 shadow hover:shadow-md transition-shadow"
                  >
                    <ExternalLink className="w-3 h-3" /> Open Maps
                  </a>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{clinic.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                    <a href={`tel:${clinic.phone}`} className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">{clinic.phone}</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{clinic.timing}</p>
                  </div>

                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {clinic.facilities.map((f) => (
                      <span key={f} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-lg font-medium">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Emergency Badge */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      {clinic.emergency}
                    </span>
                    <Link
                      to={`/appointment?clinic=${clinic.id}#appointment-form`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-2 transition-all"
                    >
                      Book Here <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-primary-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Book Your Appointment Today
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Call your nearest clinic directly or walk in during OPD hours. Phone numbers are listed on each clinic card above.
            </p>
            <Link to="/appointment#appointment-form" className="btn-primary inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Book Online Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
