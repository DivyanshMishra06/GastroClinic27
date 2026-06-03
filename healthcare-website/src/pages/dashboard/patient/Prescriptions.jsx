import { motion } from 'framer-motion';
import { Pill, Calendar, Clock, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const prescriptions = [
  {
    id: 1,
    name: 'Metformin 500mg',
    dosage: '1 tablet twice daily',
    duration: '3 months',
    prescribed: 'May 15, 2026',
    expires: 'Aug 15, 2026',
    status: 'Active',
    instructions: 'Take after meals. Avoid alcohol.',
    color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600',
  },
  {
    id: 2,
    name: 'Amlodipine 5mg',
    dosage: '1 tablet once daily (morning)',
    duration: 'Ongoing',
    prescribed: 'April 10, 2026',
    expires: 'July 10, 2026',
    status: 'Active',
    instructions: 'Take at the same time each day. Monitor BP regularly.',
    color: 'bg-red-50 dark:bg-red-950/30 text-red-600',
  },
  {
    id: 3,
    name: 'Vitamin D3 60,000 IU',
    dosage: '1 capsule weekly',
    duration: '8 weeks',
    prescribed: 'Feb 5, 2026',
    expires: 'April 5, 2026',
    status: 'Expired',
    instructions: 'Take with a fatty meal for better absorption.',
    color: 'bg-yellow-50 dark:bg-yellow-950/30 text-yellow-600',
  },
  {
    id: 4,
    name: 'Pantoprazole 40mg',
    dosage: '1 tablet before breakfast',
    duration: '4 weeks',
    prescribed: 'Dec 10, 2025',
    expires: 'Jan 10, 2026',
    status: 'Expired',
    instructions: 'Take 30 minutes before breakfast.',
    color: 'bg-green-50 dark:bg-green-950/30 text-green-600',
  },
];

const fade = { hidden: { opacity: 0, y: 14 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.35 } }) };

export default function Prescriptions() {
  const active = prescriptions.filter(p => p.status === 'Active');
  const expired = prescriptions.filter(p => p.status === 'Expired');

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="space-y-6">
      <motion.div variants={fade}>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Prescriptions</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{active.length} active · {expired.length} expired</p>
      </motion.div>

      {/* Active */}
      <motion.div variants={fade} custom={1}>
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-500" /> Active Prescriptions
        </h3>
        <div className="space-y-3">
          {active.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center shrink-0`}>
                  <Pill className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <p className="font-display font-bold text-gray-900 dark:text-white">{p.name}</p>
                    <span className="text-xs bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{p.dosage}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Prescribed: {p.prescribed}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Expires: {p.expires}</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-500 dark:text-gray-400">
                    ⚠️ {p.instructions}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="text-xs font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1.5 hover:gap-2 transition-all">
                  <RefreshCw className="w-3.5 h-3.5" /> Request Renewal
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Expired */}
      <motion.div variants={fade} custom={2}>
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-3 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-gray-400" /> Past Prescriptions
        </h3>
        <div className="space-y-3">
          {expired.map((p, i) => (
            <div key={p.id} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 flex items-center gap-4 opacity-60">
              <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                <Pill className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm">{p.name}</p>
                <p className="text-xs text-gray-400">{p.dosage} · Expired {p.expires}</p>
              </div>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-400 font-medium px-2.5 py-1 rounded-full shrink-0">Expired</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
