import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Activity, Calendar } from 'lucide-react';

const patients = [
  { id: 1, name: 'Priya Mehta', age: 45, gender: 'Female', condition: 'Diabetes, Thyroid', visits: 8, lastVisit: 'May 28, 2026', status: 'Regular' },
  { id: 2, name: 'Ramesh Gupta', age: 62, gender: 'Male', condition: 'Hypertension', visits: 12, lastVisit: 'May 20, 2026', status: 'Regular' },
  { id: 3, name: 'Anita Desai', age: 34, gender: 'Female', condition: 'Thyroid Disorder', visits: 3, lastVisit: 'June 1, 2026', status: 'New' },
  { id: 4, name: 'Vikram Nair', age: 28, gender: 'Male', condition: 'Fever (Dengue)', visits: 1, lastVisit: 'May 30, 2026', status: 'New' },
  { id: 5, name: 'Sunita Kapoor', age: 55, gender: 'Female', condition: 'Diabetes, BP, Arthritis', visits: 20, lastVisit: 'May 15, 2026', status: 'Regular' },
  { id: 6, name: 'Arun Sharma', age: 41, gender: 'Male', condition: 'Preventive Care', visits: 5, lastVisit: 'April 30, 2026', status: 'Regular' },
  { id: 7, name: 'Neha Joshi', age: 29, gender: 'Female', condition: 'General Health', visits: 2, lastVisit: 'May 10, 2026', status: 'New' },
  { id: 8, name: 'Kiran Patel', age: 50, gender: 'Male', condition: 'Diabetes, Hypertension', visits: 15, lastVisit: 'May 5, 2026', status: 'Regular' },
  { id: 9, name: 'Meena Rao', age: 67, gender: 'Female', condition: 'Geriatric Care, Osteoporosis', visits: 18, lastVisit: 'April 22, 2026', status: 'Regular' },
  { id: 10, name: 'Suresh Iyer', age: 38, gender: 'Male', condition: 'Stress, Lifestyle', visits: 4, lastVisit: 'April 15, 2026', status: 'Regular' },
];

export default function MyPatients() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = patients.filter(p =>
    (filter === 'All' || p.status === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">My Patients</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{patients.length} patients under care</p>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Regular: <strong className="text-gray-800 dark:text-white">{patients.filter(p => p.status === 'Regular').length}</strong></span>
          <span className="text-sm text-gray-500 dark:text-gray-400">New: <strong className="text-gray-800 dark:text-white">{patients.filter(p => p.status === 'New').length}</strong></span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input-field pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Regular', 'New'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === f ? 'bg-teal-600 text-white shadow-sm' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-teal-300'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Patients Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-base shrink-0">
                {p.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{p.name}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${p.status === 'New' ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400' : 'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400'}`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{p.age} yrs · {p.gender}</p>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl px-3 py-2 text-xs text-gray-600 dark:text-gray-300 mb-3">
              <Activity className="w-3.5 h-3.5 inline mr-1 text-teal-500" />{p.condition}
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {p.visits} visits</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Last: {p.lastVisit}</span>
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-2 text-center py-16 text-gray-400">
            <Users className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No patients found</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
