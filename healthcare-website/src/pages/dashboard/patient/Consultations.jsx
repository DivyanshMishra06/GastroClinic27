import { motion } from 'framer-motion';
import { Video, Clock, CheckCircle, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const consultations = [
  { id: 1, date: 'June 12, 2026', time: '7:00 PM', duration: '15 min', doctor: 'Dr. Rajesh Sharma', topic: 'Diabetes Follow-up', status: 'Upcoming', notes: '' },
  { id: 2, date: 'May 10, 2026', time: '6:30 PM', duration: '20 min', doctor: 'Dr. Rajesh Sharma', topic: 'Prescription Renewal', status: 'Completed', notes: 'Metformin 500mg continued. Next follow-up in 1 month.' },
  { id: 3, date: 'March 22, 2026', time: '8:00 PM', duration: '18 min', doctor: 'Dr. Rajesh Sharma', topic: 'Blood Pressure Review', status: 'Completed', notes: 'BP stable at 120/80. Lifestyle changes recommended.' },
  { id: 4, date: 'Feb 5, 2026', time: '7:30 PM', duration: '12 min', doctor: 'Dr. Rajesh Sharma', topic: 'General Query', status: 'Completed', notes: 'Vitamin D deficiency discussed. Supplement prescribed.' },
];

const fade = { hidden: { opacity: 0, y: 16 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.35 } }) };

export default function Consultations() {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="space-y-6">
      <motion.div variants={fade} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Consultations</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Your online video consultations with Dr. Sharma</p>
        </div>
        <Link to="/appointment" className="btn-primary text-sm py-2.5 inline-flex items-center gap-2 self-start">
          <Video className="w-4 h-4" /> Book Online Consultation
        </Link>
      </motion.div>

      {/* Upcoming highlight */}
      {consultations.filter(c => c.status === 'Upcoming').map((c, i) => (
        <motion.div key={c.id} variants={fade} custom={i + 1} className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <Video className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <p className="text-white/70 text-xs font-medium uppercase tracking-wide mb-1">Next Consultation</p>
              <p className="font-display font-bold text-lg">{c.topic}</p>
              <p className="text-white/80 text-sm flex items-center gap-2 mt-1">
                <Clock className="w-4 h-4" /> {c.date} · {c.time} · {c.duration}
              </p>
            </div>
            <button className="bg-white text-primary-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-all flex items-center gap-2 self-start sm:self-auto">
              <ExternalLink className="w-4 h-4" /> Join Now
            </button>
          </div>
        </motion.div>
      ))}

      {/* Past consultations */}
      <motion.div variants={fade} custom={2}>
        <h3 className="font-display font-semibold text-gray-700 dark:text-gray-300 text-sm mb-3">Past Consultations</h3>
        <div className="space-y-3">
          {consultations.filter(c => c.status === 'Completed').map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{c.topic}</p>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {c.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                    <Calendar className="w-3 h-3" /> {c.date} · {c.time}
                  </p>
                  {c.notes && (
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">Doctor's Notes</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{c.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
