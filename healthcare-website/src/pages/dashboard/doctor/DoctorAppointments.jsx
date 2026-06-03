import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Video, MapPin, Search } from 'lucide-react';

const appointments = [
  { id: 1, patient: 'Priya Mehta', age: 45, date: 'June 3, 2026', time: '10:00 AM', type: 'In-Person', clinic: 'Andheri West', reason: 'Diabetes Follow-up', status: 'Completed' },
  { id: 2, patient: 'Ramesh Gupta', age: 62, date: 'June 3, 2026', time: '10:30 AM', type: 'In-Person', clinic: 'Andheri West', reason: 'BP Checkup', status: 'Completed' },
  { id: 3, patient: 'Anita Desai', age: 34, date: 'June 3, 2026', time: '6:00 PM', type: 'Online', clinic: 'Online', reason: 'Thyroid Review', status: 'Upcoming' },
  { id: 4, patient: 'Vikram Nair', age: 28, date: 'June 4, 2026', time: '9:00 AM', type: 'In-Person', clinic: 'Powai', reason: 'Fever', status: 'Upcoming' },
  { id: 5, patient: 'Sunita Kapoor', age: 55, date: 'June 4, 2026', time: '7:00 PM', type: 'Online', clinic: 'Online', reason: 'Geriatric Care', status: 'Upcoming' },
  { id: 6, patient: 'Arun Sharma', age: 41, date: 'June 5, 2026', time: '10:00 AM', type: 'In-Person', clinic: 'Bandra West', reason: 'Preventive Checkup', status: 'Upcoming' },
  { id: 7, patient: 'Neha Joshi', age: 29, date: 'May 30, 2026', time: '9:30 AM', type: 'In-Person', clinic: 'Thane West', reason: 'General Consultation', status: 'Completed' },
  { id: 8, patient: 'Kiran Patel', age: 50, date: 'May 28, 2026', time: '11:00 AM', type: 'In-Person', clinic: 'Navi Mumbai', reason: 'Diabetes + BP', status: 'Completed' },
];

const statusStyle = {
  Upcoming: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400',
  Completed: 'bg-gray-100 dark:bg-gray-800 text-gray-500',
  Cancelled: 'bg-red-50 dark:bg-red-950/30 text-red-600',
};

const filters = ['All', 'Upcoming', 'Completed'];

export default function DoctorAppointments() {
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = appointments.filter(a =>
    (active === 'All' || a.status === active) &&
    a.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Appointments</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{appointments.length} total appointments</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search patient..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input-field pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${active === f ? 'bg-teal-600 text-white shadow-sm' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-teal-300'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.map((apt, i) => (
          <motion.div
            key={apt.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/30 flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
              {apt.type === 'Online' ? <Video className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{apt.patient}</p>
                <span className="text-xs text-gray-400">Age {apt.age}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyle[apt.status]}`}>{apt.status}</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">{apt.reason}</p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {apt.date} · {apt.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {apt.clinic}</span>
              </div>
            </div>
            {apt.status === 'Upcoming' && (
              <div className="flex gap-2 shrink-0">
                <button className="text-xs font-medium bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400 px-3 py-1.5 rounded-lg hover:bg-teal-100 dark:hover:bg-teal-950/50 transition-all">
                  Start
                </button>
                <button className="text-xs font-medium text-gray-400 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                  Reschedule
                </button>
              </div>
            )}
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
