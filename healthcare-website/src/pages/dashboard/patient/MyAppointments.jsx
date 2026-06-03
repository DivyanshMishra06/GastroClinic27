import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Video, X, CheckCircle, AlertCircle, Link } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const allAppointments = [
  { id: 1, date: 'June 5, 2026', time: '10:00 AM', clinic: 'Andheri West Clinic', doctor: 'Dr. Rajesh Sharma', type: 'In-Person', status: 'Confirmed', reason: 'Routine Checkup' },
  { id: 2, date: 'June 12, 2026', time: '7:00 PM', clinic: 'Online', doctor: 'Dr. Rajesh Sharma', type: 'Online', status: 'Pending', reason: 'Follow-up: Diabetes' },
  { id: 3, date: 'May 20, 2026', time: '9:30 AM', clinic: 'Bandra West Clinic', doctor: 'Dr. Rajesh Sharma', type: 'In-Person', status: 'Completed', reason: 'Blood Pressure Check' },
  { id: 4, date: 'May 5, 2026', time: '6:30 PM', clinic: 'Powai Clinic', doctor: 'Dr. Rajesh Sharma', type: 'In-Person', status: 'Completed', reason: 'Fever & Cold' },
  { id: 5, date: 'April 18, 2026', time: '11:00 AM', clinic: 'Thane West Clinic', doctor: 'Dr. Rajesh Sharma', type: 'In-Person', status: 'Cancelled', reason: 'General Consultation' },
  { id: 6, date: 'March 30, 2026', time: '7:30 PM', clinic: 'Online', doctor: 'Dr. Rajesh Sharma', type: 'Online', status: 'Completed', reason: 'Prescription Renewal' },
];

const statusConfig = {
  Confirmed: { icon: CheckCircle, color: 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400' },
  Pending: { icon: AlertCircle, color: 'bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400' },
  Completed: { icon: CheckCircle, color: 'bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400' },
  Cancelled: { icon: X, color: 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400' },
};

const filters = ['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'];

export default function MyAppointments() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allAppointments : allAppointments.filter(a => a.status === active);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">My Appointments</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{allAppointments.length} total appointments</p>
        </div>
        <RouterLink to="/appointment" className="btn-primary text-sm py-2.5 inline-flex items-center gap-2 self-start">
          <Calendar className="w-4 h-4" /> Book New
        </RouterLink>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${active === f ? 'bg-primary-600 text-white shadow-sm' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
        {filtered.map((apt, i) => {
          const sc = statusConfig[apt.status];
          const StatusIcon = sc.icon;
          return (
            <motion.div
              key={apt.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/30 flex items-center justify-center shrink-0">
                {apt.type === 'Online' ? <Video className="w-6 h-6 text-primary-600" /> : <Calendar className="w-6 h-6 text-primary-600" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{apt.reason}</p>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${sc.color}`}>
                    <StatusIcon className="w-3 h-3" /> {apt.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {apt.date} · {apt.time}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {apt.clinic}</span>
                </div>
              </div>
              {(apt.status === 'Confirmed' || apt.status === 'Pending') && (
                <button className="text-xs font-medium text-red-500 hover:text-red-600 px-3 py-1.5 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all shrink-0">
                  Cancel
                </button>
              )}
            </motion.div>
          );
        })}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No appointments found</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
