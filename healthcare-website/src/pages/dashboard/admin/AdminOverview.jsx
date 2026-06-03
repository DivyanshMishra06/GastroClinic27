import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Stethoscope, Building2, TrendingUp, ArrowRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 18 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }) };

const stats = [
  { label: "Today's Appointments", value: '34', icon: Calendar, color: 'bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400', change: '+8%' },
  { label: 'Total Patients', value: '2,847', icon: Users, color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400', change: '+12%' },
  { label: 'Active Doctors', value: '5', icon: Stethoscope, color: 'bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400', change: '' },
  { label: 'Clinic Locations', value: '5', icon: Building2, color: 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400', change: '' },
];

const recentAppointments = [
  { patient: 'Priya Mehta', clinic: 'Andheri West', time: '10:00 AM', status: 'Completed' },
  { patient: 'Ramesh Gupta', clinic: 'Bandra West', time: '10:30 AM', status: 'In Progress' },
  { patient: 'Anita Desai', clinic: 'Powai', time: '11:00 AM', status: 'Waiting' },
  { patient: 'Vikram Nair', clinic: 'Thane West', time: '11:30 AM', status: 'Upcoming' },
  { patient: 'Sunita Kapoor', clinic: 'Navi Mumbai', time: '12:00 PM', status: 'Upcoming' },
];

const statusStyle = {
  Completed: 'bg-gray-100 dark:bg-gray-800 text-gray-500',
  'In Progress': 'bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400',
  Waiting: 'bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400',
  Upcoming: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400',
};

const clinicStats = [
  { name: 'Andheri West', today: 12, capacity: 18, pct: 67 },
  { name: 'Bandra West', today: 8, capacity: 14, pct: 57 },
  { name: 'Powai', today: 6, capacity: 13, pct: 46 },
  { name: 'Thane West', today: 5, capacity: 14, pct: 36 },
  { name: 'Navi Mumbai', today: 3, capacity: 16, pct: 19 },
];

export default function AdminOverview() {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="space-y-6">
      <motion.div variants={fade}>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Admin Overview</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Tuesday, June 3, 2026 · All Clinics</p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={fade} custom={1} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color, change }) => (
          <div key={label} className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex items-end gap-2">
              <p className="font-display text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
              {change && (
                <span className="text-xs text-green-600 font-medium mb-0.5 flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> {change}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <motion.div variants={fade} custom={2} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm">Today's Appointments</h3>
            <Link to="/dashboard/admin/appointments" className="text-xs text-violet-600 dark:text-violet-400 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50 dark:divide-gray-800">
            {recentAppointments.map((apt, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {apt.patient.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 dark:text-white truncate">{apt.patient}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> {apt.time} · {apt.clinic}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${statusStyle[apt.status]}`}>{apt.status}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clinic Load */}
        <motion.div variants={fade} custom={3} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
            <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm">Clinic Capacity Today</h3>
            <Link to="/dashboard/admin/clinics" className="text-xs text-violet-600 dark:text-violet-400 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Manage <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="p-5 space-y-4">
            {clinicStats.map(c => (
              <div key={c.name}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{c.name}</span>
                  <span className="text-gray-400">{c.today}/{c.capacity}</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${c.pct > 80 ? 'bg-red-500' : c.pct > 60 ? 'bg-orange-500' : 'bg-violet-500'}`}
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
