import { motion } from 'framer-motion';
import { Calendar, Users, Pill, Clock, ArrowRight, CheckCircle, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const fade = { hidden: { opacity: 0, y: 18 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }) };

const stats = [
  { label: "Today's Appointments", value: '8', icon: Calendar, color: 'bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400' },
  { label: 'Total Patients', value: '342', icon: Users, color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400' },
  { label: 'This Month', value: '127', icon: CheckCircle, color: 'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400' },
  { label: 'Online Consults', value: '14', icon: Video, color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400' },
];

const todayAppointments = [
  { time: '9:00 AM', name: 'Priya Mehta', age: 45, type: 'In-Person', reason: 'Diabetes Follow-up', status: 'Done' },
  { time: '9:30 AM', name: 'Ramesh Gupta', age: 62, type: 'In-Person', reason: 'BP Checkup', status: 'Done' },
  { time: '10:00 AM', name: 'Anita Desai', age: 34, type: 'In-Person', reason: 'Thyroid Review', status: 'In Progress' },
  { time: '10:30 AM', name: 'Vikram Nair', age: 28, type: 'In-Person', reason: 'Fever', status: 'Waiting' },
  { time: '6:00 PM', name: 'Sunita Kapoor', age: 55, type: 'Online', reason: 'Prescription Renewal', status: 'Upcoming' },
  { time: '7:00 PM', name: 'Arun Sharma', age: 41, type: 'Online', reason: 'General Consultation', status: 'Upcoming' },
];

const statusStyle = {
  Done: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400',
  'In Progress': 'bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400',
  Waiting: 'bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400',
  Upcoming: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400',
};

export default function DoctorOverview() {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="space-y-6">
      <motion.div variants={fade}>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Good Morning, Dr. Sharma 👨‍⚕️</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Tuesday, June 3, 2026 · Andheri Clinic</p>
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

      {/* Today's Schedule */}
      <motion.div variants={fade} custom={2} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
          <h3 className="font-display font-semibold text-gray-900 dark:text-white">Today's Schedule</h3>
          <Link to="/dashboard/doctor/appointments" className="text-xs text-teal-600 dark:text-teal-400 font-medium flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {todayAppointments.map((apt, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5">
              <div className="w-16 text-center shrink-0">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-200">{apt.time}</p>
                <p className="text-xs text-gray-400">{apt.type === 'Online' ? '🌐 Online' : '🏥 Clinic'}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 dark:text-white">{apt.name}</p>
                <p className="text-xs text-gray-500">{apt.reason} · Age {apt.age}</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${statusStyle[apt.status]}`}>{apt.status}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
