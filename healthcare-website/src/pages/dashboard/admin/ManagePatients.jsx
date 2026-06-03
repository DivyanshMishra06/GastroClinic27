import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Calendar, Phone, Activity } from 'lucide-react';

const patients = [
  { id: 1, name: 'Priya Mehta', age: 45, gender: 'Female', phone: '+91 98765 00001', condition: 'Diabetes, Thyroid', visits: 8, lastVisit: 'May 28, 2026', registered: 'Jan 2020' },
  { id: 2, name: 'Ramesh Gupta', age: 62, gender: 'Male', phone: '+91 98765 00002', condition: 'Hypertension', visits: 12, lastVisit: 'May 20, 2026', registered: 'Mar 2019' },
  { id: 3, name: 'Anita Desai', age: 34, gender: 'Female', phone: '+91 98765 00003', condition: 'Thyroid Disorder', visits: 3, lastVisit: 'June 1, 2026', registered: 'Feb 2026' },
  { id: 4, name: 'Vikram Nair', age: 28, gender: 'Male', phone: '+91 98765 00004', condition: 'Fever (Dengue)', visits: 1, lastVisit: 'May 30, 2026', registered: 'May 2026' },
  { id: 5, name: 'Sunita Kapoor', age: 55, gender: 'Female', phone: '+91 98765 00005', condition: 'Diabetes, BP, Arthritis', visits: 20, lastVisit: 'May 15, 2026', registered: 'June 2018' },
  { id: 6, name: 'Arun Sharma', age: 41, gender: 'Male', phone: '+91 98765 00006', condition: 'Preventive Care', visits: 5, lastVisit: 'April 30, 2026', registered: 'Aug 2022' },
  { id: 7, name: 'Neha Joshi', age: 29, gender: 'Female', phone: '+91 98765 00007', condition: 'General Health', visits: 2, lastVisit: 'May 10, 2026', registered: 'March 2026' },
  { id: 8, name: 'Kiran Patel', age: 50, gender: 'Male', phone: '+91 98765 00008', condition: 'Diabetes, Hypertension', visits: 15, lastVisit: 'May 5, 2026', registered: 'Nov 2020' },
  { id: 9, name: 'Meena Rao', age: 67, gender: 'Female', phone: '+91 98765 00009', condition: 'Geriatric Care, Osteoporosis', visits: 18, lastVisit: 'April 22, 2026', registered: 'Jan 2019' },
  { id: 10, name: 'Suresh Iyer', age: 38, gender: 'Male', phone: '+91 98765 00010', condition: 'Stress, Lifestyle', visits: 4, lastVisit: 'April 15, 2026', registered: 'July 2023' },
];

const avatarColors = ['from-violet-400 to-violet-600', 'from-blue-400 to-blue-600', 'from-teal-400 to-teal-600', 'from-orange-400 to-orange-600', 'from-rose-400 to-rose-600'];

export default function ManagePatients() {
  const [search, setSearch] = useState('');
  const filtered = patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.condition.toLowerCase().includes(search.toLowerCase()));

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Patients</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{patients.length} registered patients</p>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span>Total Visits: <strong className="text-gray-800 dark:text-white">{patients.reduce((s, p) => s + p.visits, 0)}</strong></span>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Search patients or conditions..." value={search} onChange={e => setSearch(e.target.value)} className="input-field pl-9 text-sm" />
      </div>

      {/* Table (responsive card layout) */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="hidden sm:grid grid-cols-[auto,1fr,auto,auto,auto] gap-4 px-5 py-3 border-b border-gray-100 dark:border-gray-800 text-xs font-semibold text-gray-400 uppercase tracking-wide">
          <span>Patient</span><span></span><span>Condition</span><span>Visits</span><span>Last Visit</span>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03, duration: 0.25 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${avatarColors[i % 5]} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                {p.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{p.name}</p>
                <p className="text-xs text-gray-400">{p.age} yrs · {p.gender} · Since {p.registered}</p>
              </div>
              <div className="sm:w-48">
                <p className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-violet-500 shrink-0" /> {p.condition}
                </p>
              </div>
              <div className="text-center shrink-0">
                <p className="font-bold text-gray-800 dark:text-white text-sm">{p.visits}</p>
                <p className="text-xs text-gray-400">visits</p>
              </div>
              <div className="text-xs text-gray-400 flex items-center gap-1 shrink-0">
                <Calendar className="w-3 h-3" /> {p.lastVisit}
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No patients found</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
