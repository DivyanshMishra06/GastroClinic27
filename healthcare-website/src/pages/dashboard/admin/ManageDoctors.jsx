import { motion } from 'framer-motion';
import { Stethoscope, Star, Calendar, Users, Phone, Award } from 'lucide-react';

const doctors = [
  {
    id: 1, name: 'Dr. Rajesh Sharma', title: 'MBBS, MD (General Medicine)', specialization: 'Senior General Physician',
    experience: 22, rating: 4.9, reviews: 2400, patients: 342, todayAppts: 8,
    clinics: ['Andheri West', 'Bandra West', 'Powai', 'Thane West', 'Navi Mumbai'],
    phone: '+91 98765 43210', status: 'Active',
  },
  {
    id: 2, name: 'Dr. Meena Pillai', title: 'MBBS, DGO', specialization: 'Gynecologist',
    experience: 15, rating: 4.8, reviews: 980, patients: 210, todayAppts: 6,
    clinics: ['Bandra West', 'Andheri West'],
    phone: '+91 98765 43215', status: 'Active',
  },
  {
    id: 3, name: 'Dr. Suresh Kulkarni', title: 'MBBS, DCH', specialization: 'Pediatrician',
    experience: 12, rating: 4.7, reviews: 750, patients: 180, todayAppts: 5,
    clinics: ['Thane West', 'Powai'],
    phone: '+91 98765 43216', status: 'Active',
  },
  {
    id: 4, name: 'Dr. Priya Agarwal', title: 'MBBS, MD (Dermatology)', specialization: 'Dermatologist',
    experience: 9, rating: 4.6, reviews: 520, patients: 145, todayAppts: 7,
    clinics: ['Navi Mumbai', 'Andheri West'],
    phone: '+91 98765 43217', status: 'Active',
  },
  {
    id: 5, name: 'Dr. Amit Verma', title: 'MBBS, MS (Ortho)', specialization: 'Orthopedic Surgeon',
    experience: 18, rating: 4.9, reviews: 1100, patients: 290, todayAppts: 4,
    clinics: ['Andheri West', 'Navi Mumbai'],
    phone: '+91 98765 43218', status: 'Active',
  },
];

export default function ManageDoctors() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Doctors</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{doctors.length} active doctors across all clinics</p>
        </div>
        <button className="self-start px-5 py-2.5 rounded-xl text-sm font-medium bg-violet-600 text-white hover:bg-violet-700 transition-all shadow-sm flex items-center gap-2">
          <Stethoscope className="w-4 h-4" /> Add Doctor
        </button>
      </div>

      <div className="space-y-4">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-700 flex items-center justify-center text-white font-bold text-xl shrink-0">
                {doc.name.split(' ')[1]?.charAt(0) || doc.name.charAt(3)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <div>
                    <p className="font-display font-bold text-gray-900 dark:text-white">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.title}</p>
                  </div>
                  <span className="text-xs bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 font-medium px-2.5 py-1 rounded-full">{doc.status}</span>
                </div>
                <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mb-3">{doc.specialization} · {doc.experience} yrs exp</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  {[
                    { icon: Star, label: `${doc.rating} (${doc.reviews})`, color: 'text-yellow-500' },
                    { icon: Users, label: `${doc.patients} patients`, color: 'text-blue-500' },
                    { icon: Calendar, label: `${doc.todayAppts} today`, color: 'text-teal-500' },
                    { icon: Phone, label: doc.phone, color: 'text-gray-400' },
                  ].map(({ icon: Icon, label, color }, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Icon className={`w-3.5 h-3.5 ${color}`} /> {label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {doc.clinics.map(c => (
                    <span key={c} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 sm:flex-col sm:items-end shrink-0">
                <button className="text-xs px-3 py-1.5 rounded-lg border border-violet-200 dark:border-violet-800 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all">Edit</button>
                <button className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">Schedule</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
