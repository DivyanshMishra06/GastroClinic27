import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Tag, Search } from 'lucide-react';
import { useState } from 'react';

const records = [
  { id: 1, title: 'Complete Blood Count (CBC)', date: 'May 28, 2026', category: 'Lab Report', size: '1.2 MB', color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600' },
  { id: 2, title: 'Blood Sugar (Fasting & PP)', date: 'May 20, 2026', category: 'Lab Report', size: '0.8 MB', color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600' },
  { id: 3, title: 'ECG Report', date: 'April 10, 2026', category: 'Diagnostics', size: '2.1 MB', color: 'bg-red-50 dark:bg-red-950/30 text-red-600' },
  { id: 4, title: 'Chest X-Ray', date: 'March 5, 2026', category: 'Radiology', size: '4.5 MB', color: 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400' },
  { id: 5, title: 'HbA1c Test', date: 'Feb 18, 2026', category: 'Lab Report', size: '0.6 MB', color: 'bg-teal-50 dark:bg-teal-950/30 text-teal-600' },
  { id: 6, title: 'Thyroid Profile (TSH, T3, T4)', date: 'Jan 30, 2026', category: 'Lab Report', size: '1.0 MB', color: 'bg-yellow-50 dark:bg-yellow-950/30 text-yellow-600' },
  { id: 7, title: 'Kidney Function Test', date: 'Jan 12, 2026', category: 'Lab Report', size: '0.9 MB', color: 'bg-orange-50 dark:bg-orange-950/30 text-orange-600' },
  { id: 8, title: 'Vitamin D & B12 Test', date: 'Dec 20, 2025', category: 'Lab Report', size: '0.7 MB', color: 'bg-green-50 dark:bg-green-950/30 text-green-600' },
];

const categories = ['All', 'Lab Report', 'Diagnostics', 'Radiology'];

const fade = { hidden: { opacity: 0, y: 14 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.35 } }) };

export default function MedicalRecords() {
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = records.filter(r =>
    (cat === 'All' || r.category === cat) &&
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.06 } } }} className="space-y-6">
      <motion.div variants={fade}>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Medical Records</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{records.length} records stored securely</p>
      </motion.div>

      {/* Search + Filter */}
      <motion.div variants={fade} custom={1} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search records..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input-field pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${cat === c ? 'bg-primary-600 text-white shadow-sm' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Records Grid */}
      <motion.div variants={fade} custom={2} className="grid sm:grid-cols-2 gap-4">
        {filtered.map((rec, i) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 flex items-start gap-4 group hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl ${rec.color} flex items-center justify-center shrink-0`}>
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white text-sm leading-snug truncate">{rec.title}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3 h-3" /> {rec.date}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Tag className="w-3 h-3" /> {rec.category}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{rec.size}</p>
            </div>
            <button className="shrink-0 p-2 rounded-lg text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-all opacity-0 group-hover:opacity-100">
              <Download className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-2 text-center py-16 text-gray-400">
            <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No records found</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
