import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Video, FileText, Pill, Clock, ArrowRight, Activity, Heart } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 18 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }) };

const stats = [
  { label: 'Total Appointments', value: '12', icon: Calendar, color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400' },
  { label: 'Consultations', value: '4', icon: Video, color: 'bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400' },
  { label: 'Medical Records', value: '8', icon: FileText, color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400' },
  { label: 'Active Prescriptions', value: '2', icon: Pill, color: 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400' },
];

const upcoming = [
  { date: 'June 5, 2026', time: '10:00 AM', clinic: 'Andheri West Clinic', type: 'In-Person', status: 'Confirmed' },
  { date: 'June 12, 2026', time: '7:00 PM', clinic: 'Online Consultation', type: 'Online', status: 'Pending' },
];

const recentActivity = [
  { icon: Heart, text: 'Blood pressure check — Normal', date: 'May 28, 2026', color: 'text-red-500 bg-red-50 dark:bg-red-950/30' },
  { icon: Activity, text: 'Blood sugar test — 98 mg/dL', date: 'May 20, 2026', color: 'text-green-500 bg-green-50 dark:bg-green-950/30' },
  { icon: Pill, text: 'Metformin prescription renewed', date: 'May 15, 2026', color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/30' },
];

export default function PatientOverview() {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="space-y-6">
      <motion.div variants={fade}>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Welcome back, Priya 👋</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Here's your health summary for today.</p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={fade} custom={1} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
              <Icon className="w-5 h-5" />
            </div>
            <p className="font-display text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <motion.div variants={fade} custom={2} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm">Upcoming Appointments</h3>
            <Link to="/dashboard/patient/appointments" className="text-xs text-primary-600 dark:text-primary-400 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50 dark:divide-gray-800">
            {upcoming.map((apt, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/30 flex items-center justify-center shrink-0">
                  {apt.type === 'Online' ? <Video className="w-5 h-5 text-primary-600" /> : <Calendar className="w-5 h-5 text-primary-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{apt.clinic}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> {apt.date} · {apt.time}
                  </p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${apt.status === 'Confirmed' ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400' : 'bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400'}`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={fade} custom={3} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-50 dark:divide-gray-800">
            {recentActivity.map(({ icon: Icon, text, date, color }, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div variants={fade} custom={4} className="grid sm:grid-cols-3 gap-4">
        {[
          { icon: Calendar, label: 'Book Appointment', to: '/appointment', style: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20' },
          { icon: FileText, label: 'View Medical Records', to: '/dashboard/patient/records', style: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary-300 dark:hover:border-primary-700' },
          { icon: Video, label: 'Online Consultation', to: '/dashboard/patient/consultations', style: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary-300 dark:hover:border-primary-700' },
        ].map(({ icon: Icon, label, to, style }) => (
          <Link key={label} to={to} className={`flex items-center gap-3 px-5 py-4 rounded-2xl font-medium text-sm transition-all ${style}`}>
            <Icon className="w-5 h-5 shrink-0" /> {label}
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
