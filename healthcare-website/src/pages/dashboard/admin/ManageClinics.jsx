import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Shield, Layers, Users } from 'lucide-react';
import { clinics } from '../../../data';

const clinicExtra = {
  1: { patients: 892, todayAppts: 12, doctors: 3, load: 67 },
  2: { patients: 645, todayAppts: 8, doctors: 2, load: 57 },
  3: { patients: 430, todayAppts: 6, doctors: 2, load: 46 },
  4: { patients: 510, todayAppts: 5, doctors: 2, load: 36 },
  5: { patients: 370, todayAppts: 3, doctors: 2, load: 19 },
};

const gradients = [
  'from-blue-500 to-primary-600',
  'from-accent-500 to-teal-600',
  'from-violet-500 to-purple-600',
  'from-orange-500 to-amber-600',
  'from-rose-500 to-pink-600',
];

export default function ManageClinics() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Clinics</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{clinics.length} clinic locations across Mumbai</p>
        </div>
        <button className="self-start px-5 py-2.5 rounded-xl text-sm font-medium bg-violet-600 text-white hover:bg-violet-700 transition-all shadow-sm flex items-center gap-2">
          <MapPin className="w-4 h-4" /> Add Clinic
        </button>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {clinics.map((clinic, i) => {
          const extra = clinicExtra[clinic.id];
          return (
            <motion.div
              key={clinic.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${gradients[i]} p-5`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-white font-display font-bold text-sm leading-snug">{clinic.name}</p>
                    <p className="text-white/70 text-xs mt-0.5">{clinic.area}</p>
                  </div>
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-lg font-medium shrink-0">{clinic.emergency}</span>
                </div>
                {/* Load bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-white/70 mb-1">
                    <span>Today's Load</span><span>{extra.todayAppts} appts</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white/80 rounded-full" style={{ width: `${extra.load}%` }} />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                  <span>{clinic.address}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{clinic.phone}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <Clock className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                  <span>{clinic.timing}</span>
                </div>

                <div className="pt-2 border-t border-gray-100 dark:border-gray-800 grid grid-cols-3 gap-2 text-center">
                  {[
                    { icon: Users, value: extra.patients, label: 'Patients' },
                    { icon: Shield, value: extra.doctors, label: 'Doctors' },
                    { icon: Layers, value: clinic.facilities.length, label: 'Services' },
                  ].map(({ icon: Icon, value, label }) => (
                    <div key={label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
                      <p className="font-bold text-gray-800 dark:text-white text-sm">{value}</p>
                      <p className="text-xs text-gray-400">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {clinic.facilities.map(f => (
                    <span key={f} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">{f}</span>
                  ))}
                </div>

                <button className="w-full text-xs font-medium text-violet-600 dark:text-violet-400 py-2 rounded-xl border border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all">
                  Manage Clinic
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
