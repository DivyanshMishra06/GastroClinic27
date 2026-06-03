import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, MapPin, Clock, Video, User } from 'lucide-react';

const appointments = [
  { id: 1, patient: 'Priya Mehta', age: 45, date: 'June 3, 2026', time: '10:00 AM', clinic: 'Andheri West', type: 'In-Person', reason: 'Diabetes Follow-up', status: 'Completed' },
  { id: 2, patient: 'Ramesh Gupta', age: 62, date: 'June 3, 2026', time: '10:30 AM', clinic: 'Bandra West', type: 'In-Person', reason: 'BP Checkup', status: 'Completed' },
  { id: 3, patient: 'Anita Desai', age: 34, date: 'June 3, 2026', time: '11:00 AM', clinic: 'Powai', type: 'In-Person', reason: 'Thyroid Review', status: 'In Progress' },
  { id: 4, patient: 'Vikram Nair', age: 28, date: 'June 3, 2026', time: '11:30 AM', clinic: 'Thane West', type: 'In-Person', reason: 'Fever', status: 'Waiting' },
  { id: 5, patient: 'Sunita Kapoor', age: 55, date: 'June 3, 2026', time: '6:00 PM', clinic: 'Online', type: 'Online', reason: 'Geriatric Care', status: 'Upcoming' },
  { id: 6, patient: 'Arun Sharma', age: 41, date: 'June 4, 2026', time: '9:00 AM', clinic: 'Andheri West', type: 'In-Person', reason: 'Preventive Checkup', status: 'Upcoming' },
  { id: 7, patient: 'Neha Joshi', age: 29, date: 'June 4, 2026', time: '7:00 PM', clinic: 'Online', type: 'Online', reason: 'Prescription Renewal', status: 'Upcoming' },
  { id: 8, patient: 'Kiran Patel', age: 50, date: 'June 5, 2026', time: '10:00 AM', clinic: 'Navi Mumbai', type: 'In-Person', reason: 'Diabetes + BP', status: 'Upcoming' },
  { id: 9, patient: 'Meena Rao', age: 67, date: 'June 5, 2026', time: '11:00 AM', clinic: 'Bandra West', type: 'In-Person', reason: 'Geriatric Checkup', status: 'Upcoming' },
  { id: 10, patient: 'Suresh Iyer', age: 38, date: 'June 5, 2026', time: '6:30 PM', clinic: 'Online', type: 'Online', reason: 'Stress Consultation', status: 'Upcoming' },
];

const statusStyle = {
  Completed: 'bg-gray-100 dark:bg-gray-800 text-gray-500',
  'In Progress': 'bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400',
  Waiting: 'bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400',
  Upcoming: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400',
  Cancelled: 'bg-red-50 dark:bg-red-950/30 text-red-600',
};

const statuses = ['All', 'Upcoming', 'In Progress', 'Waiting', 'Completed'];
const clinics = ['All Clinics', 'Andheri West', 'Bandra West', 'Powai', 'Thane West', 'Navi Mumbai', 'Online'];

export default function AllAppointments() {
  const [status, setStatus] = useState('All');
  const [clinic, setClinic] = useState('All Clinics');
  const [search, setSearch] = useState('');

  const filtered = appointments.filter(a =>
    (status === 'All' || a.status === status) &&
    (clinic === 'All Clinics' || a.clinic === clinic) &&
    a.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">All Appointments</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{appointments.length} appointments · June 2026</p>
      </div>

      {/* Filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search patient..." value={search} onChange={e => setSearch(e.target.value)} className="input-field pl-9 text-sm" />
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.map(s => (
            <button key={s} onClick={() => setStatus(s)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${status === s ? 'bg-violet-600 text-white shadow-sm' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-violet-300'}`}>
              {s}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {clinics.map(c => (
            <button key={c} onClick={() => setClinic(c)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${clinic === c ? 'bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 shadow-sm' : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-400'}`}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="space-y-3">
        {filtered.map((apt, i) => (
          <motion.div
            key={apt.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
              {apt.patient.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{apt.patient}</p>
                <span className="text-xs text-gray-400">Age {apt.age}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyle[apt.status]}`}>{apt.status}</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">{apt.reason}</p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {apt.date} · {apt.time}</span>
                <span className="flex items-center gap-1">
                  {apt.type === 'Online' ? <Video className="w-3 h-3" /> : <MapPin className="w-3 h-3" />} {apt.clinic}
                </span>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">View</button>
              {apt.status === 'Upcoming' && (
                <button className="text-xs px-3 py-1.5 rounded-lg border border-red-200 dark:border-red-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all">Cancel</button>
              )}
            </div>
          </motion.div>
        ))}
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
