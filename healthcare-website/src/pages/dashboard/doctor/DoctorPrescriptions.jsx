import { useState } from 'react';
import { motion } from 'framer-motion';
import { Pill, Search, Calendar, User, Plus } from 'lucide-react';

const prescriptions = [
  { id: 1, patient: 'Priya Mehta', age: 45, date: 'May 15, 2026', medicines: ['Metformin 500mg – BD', 'Vitamin D3 60K IU – Weekly'], diagnosis: 'Type 2 Diabetes', nextReview: 'Aug 15, 2026' },
  { id: 2, patient: 'Ramesh Gupta', age: 62, date: 'May 20, 2026', medicines: ['Amlodipine 5mg – OD', 'Atorvastatin 10mg – HS'], diagnosis: 'Hypertension + Dyslipidemia', nextReview: 'July 20, 2026' },
  { id: 3, patient: 'Anita Desai', age: 34, date: 'June 1, 2026', medicines: ['Levothyroxine 50mcg – OD', 'Calcium 500mg – BD'], diagnosis: 'Hypothyroidism', nextReview: 'Sept 1, 2026' },
  { id: 4, patient: 'Vikram Nair', age: 28, date: 'May 30, 2026', medicines: ['Paracetamol 650mg – TDS', 'ORS – PRN', 'Papaya Leaf Extract'], diagnosis: 'Dengue Fever', nextReview: 'June 7, 2026' },
  { id: 5, patient: 'Sunita Kapoor', age: 55, date: 'May 15, 2026', medicines: ['Metformin 1000mg – BD', 'Losartan 50mg – OD', 'Pantoprazole 40mg – AC'], diagnosis: 'DM + HTN', nextReview: 'Aug 15, 2026' },
];

export default function DoctorPrescriptions() {
  const [search, setSearch] = useState('');
  const filtered = prescriptions.filter(p => p.patient.toLowerCase().includes(search.toLowerCase()));

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Prescriptions</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{prescriptions.length} recent prescriptions issued</p>
        </div>
        <button className="btn-primary text-sm py-2.5 inline-flex items-center gap-2 self-start" style={{ background: 'linear-gradient(135deg,#0d9488,#0f766e)' }}>
          <Plus className="w-4 h-4" /> New Prescription
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by patient name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="input-field pl-9 text-sm"
        />
      </div>

      {/* Prescription Cards */}
      <div className="space-y-4">
        {filtered.map((rx, i) => (
          <motion.div
            key={rx.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {rx.patient.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{rx.patient}</p>
                  <p className="text-xs text-gray-500">Age {rx.age} · {rx.diagnosis}</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-400 flex flex-col items-end gap-1">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {rx.date}</span>
                <span className="text-teal-600 dark:text-teal-400 font-medium">Next: {rx.nextReview}</span>
              </div>
            </div>
            <div className="space-y-1.5">
              {rx.medicines.map((med, j) => (
                <div key={j} className="flex items-center gap-2 bg-teal-50 dark:bg-teal-950/20 rounded-xl px-3 py-2 text-xs font-medium text-teal-700 dark:text-teal-400">
                  <Pill className="w-3.5 h-3.5 shrink-0" /> {med}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button className="text-xs font-medium text-teal-600 dark:text-teal-400 px-3 py-1.5 rounded-lg border border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-all">
                Edit
              </button>
              <button className="text-xs font-medium text-gray-500 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                Print
              </button>
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Pill className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="font-medium">No prescriptions found</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
