import { motion } from 'framer-motion';
import { Clock, MapPin, Video, Calendar } from 'lucide-react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const todayIndex = 1; // Tuesday

const weekSchedule = {
  Mon: [
    { time: '9:00 – 1:00 PM', clinic: 'Andheri West', type: 'clinic', slots: 12 },
    { time: '6:00 – 9:00 PM', clinic: 'Andheri West', type: 'clinic', slots: 6 },
  ],
  Tue: [
    { time: '9:00 – 1:00 PM', clinic: 'Andheri West', type: 'clinic', slots: 12 },
    { time: '6:00 – 9:00 PM', clinic: 'Online', type: 'online', slots: 4 },
  ],
  Wed: [
    { time: '10:00 – 2:00 PM', clinic: 'Powai', type: 'clinic', slots: 8 },
    { time: '6:30 – 9:00 PM', clinic: 'Powai', type: 'clinic', slots: 5 },
  ],
  Thu: [
    { time: '8:00 – 12:00 PM', clinic: 'Bandra West', type: 'clinic', slots: 10 },
    { time: '5:00 – 8:30 PM', clinic: 'Bandra West', type: 'clinic', slots: 7 },
  ],
  Fri: [
    { time: '9:30 – 1:30 PM', clinic: 'Thane West', type: 'clinic', slots: 8 },
    { time: '5:30 – 8:30 PM', clinic: 'Thane West', type: 'clinic', slots: 6 },
  ],
  Sat: [
    { time: '8:30 – 12:30 PM', clinic: 'Navi Mumbai', type: 'clinic', slots: 10 },
    { time: '6:00 – 9:00 PM', clinic: 'Navi Mumbai', type: 'clinic', slots: 6 },
  ],
};

const clinicColors = {
  'Andheri West': 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900',
  'Bandra West': 'bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400 border-teal-100 dark:border-teal-900',
  'Powai': 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400 border-violet-100 dark:border-violet-900',
  'Thane West': 'bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 border-orange-100 dark:border-orange-900',
  'Navi Mumbai': 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-100 dark:border-rose-900',
  'Online': 'bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border-purple-100 dark:border-purple-900',
};

export default function Schedule() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Weekly Schedule</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Week of June 1 – 6, 2026</p>
      </div>

      {/* Week grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {days.map((day, i) => {
          const isToday = i === todayIndex;
          const sessions = weekSchedule[day] || [];
          return (
            <div
              key={day}
              className={`rounded-2xl border p-4 ${isToday ? 'border-teal-300 dark:border-teal-700 bg-teal-50 dark:bg-teal-950/20' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <p className={`font-bold text-sm ${isToday ? 'text-teal-700 dark:text-teal-400' : 'text-gray-700 dark:text-gray-300'}`}>{day}</p>
                {isToday && <span className="text-xs bg-teal-600 text-white px-1.5 py-0.5 rounded-md font-medium">Today</span>}
              </div>
              <div className="space-y-2">
                {sessions.map((s, j) => (
                  <div key={j} className={`rounded-xl border px-2.5 py-2 text-xs ${clinicColors[s.clinic] || 'bg-gray-50 text-gray-600 border-gray-100'}`}>
                    <div className="flex items-center gap-1 font-medium mb-0.5">
                      {s.type === 'online' ? <Video className="w-3 h-3 shrink-0" /> : <MapPin className="w-3 h-3 shrink-0" />}
                      <span className="truncate">{s.clinic}</span>
                    </div>
                    <p className="text-xs opacity-75">{s.time}</p>
                    <p className="text-xs opacity-60 mt-0.5">{s.slots} slots</p>
                  </div>
                ))}
                {sessions.length === 0 && (
                  <div className="text-center py-4 text-xs text-gray-300 dark:text-gray-600">Off</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Clinic Timings</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { clinic: 'Andheri West', timing: 'Mon–Sat: 9 AM–1 PM & 6–9 PM', emergency: '24/7' },
            { clinic: 'Bandra West', timing: 'Mon–Sat: 8 AM–12 PM & 5–8:30 PM', emergency: 'Available' },
            { clinic: 'Powai', timing: 'Mon–Fri: 10 AM–2 PM & 6:30–9 PM', emergency: 'Referral' },
            { clinic: 'Thane West', timing: 'Mon–Sat: 9:30 AM–1:30 PM & 5:30–8:30 PM', emergency: 'On-Call' },
            { clinic: 'Navi Mumbai', timing: 'Mon–Sat: 8:30 AM–12:30 PM & 6–9 PM', emergency: '24/7' },
          ].map(c => (
            <div key={c.clinic} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
              <MapPin className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-gray-800 dark:text-white">{c.clinic}</p>
                <p className="text-xs text-gray-500">{c.timing}</p>
                <p className="text-xs text-teal-600 dark:text-teal-400 mt-0.5">Emergency: {c.emergency}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
