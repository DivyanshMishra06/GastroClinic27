import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  LayoutDashboard, Calendar, FileText, Pill, Users,
  Stethoscope, ClipboardList, LogOut, Menu, Video,
  Building2, User, ChevronRight, X,
} from 'lucide-react';

const configs = {
  patient: {
    title: 'Patient Portal',
    gradient: 'from-primary-600 to-primary-700',
    user: { name: 'Priya Mehta', role: 'Patient' },
    nav: [
      { icon: LayoutDashboard, label: 'Overview', to: '/dashboard/patient' },
      { icon: Calendar, label: 'My Appointments', to: '/dashboard/patient/appointments' },
      { icon: Video, label: 'Consultations', to: '/dashboard/patient/consultations' },
      { icon: FileText, label: 'Medical Records', to: '/dashboard/patient/records' },
      { icon: Pill, label: 'Prescriptions', to: '/dashboard/patient/prescriptions' },
    ],
    switchTo: [
      { label: 'Doctor Panel', to: '/dashboard/doctor' },
      { label: 'Admin Panel', to: '/dashboard/admin' },
    ],
  },
  doctor: {
    title: 'Doctor Panel',
    gradient: 'from-teal-600 to-teal-700',
    user: { name: 'Dr. Rajesh Sharma', role: 'Physician' },
    nav: [
      { icon: LayoutDashboard, label: 'Overview', to: '/dashboard/doctor' },
      { icon: Calendar, label: 'Appointments', to: '/dashboard/doctor/appointments' },
      { icon: Users, label: 'My Patients', to: '/dashboard/doctor/patients' },
      { icon: ClipboardList, label: 'Schedule', to: '/dashboard/doctor/schedule' },
      { icon: Pill, label: 'Prescriptions', to: '/dashboard/doctor/prescriptions' },
    ],
    switchTo: [
      { label: 'Patient Portal', to: '/dashboard/patient' },
      { label: 'Admin Panel', to: '/dashboard/admin' },
    ],
  },
  admin: {
    title: 'Admin Panel',
    gradient: 'from-violet-600 to-violet-700',
    user: { name: 'Admin User', role: 'Administrator' },
    nav: [
      { icon: LayoutDashboard, label: 'Overview', to: '/dashboard/admin' },
      { icon: Calendar, label: 'All Appointments', to: '/dashboard/admin/appointments' },
      { icon: Stethoscope, label: 'Doctors', to: '/dashboard/admin/doctors' },
      { icon: Users, label: 'Patients', to: '/dashboard/admin/patients' },
      { icon: Building2, label: 'Clinics', to: '/dashboard/admin/clinics' },
    ],
    switchTo: [
      { label: 'Patient Portal', to: '/dashboard/patient' },
      { label: 'Doctor Panel', to: '/dashboard/doctor' },
    ],
  },
};

function SidebarContent({ cfg, role, onClose }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className={`bg-gradient-to-br ${cfg.gradient} p-5 shrink-0`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="block" onClick={onClose}>
            <p className="text-white font-display font-bold text-base leading-tight">Dr. Rajesh Sharma</p>
            <p className="text-white/70 text-xs mt-0.5">{cfg.title}</p>
          </Link>
          {onClose && (
            <button onClick={onClose} className="text-white/70 hover:text-white p-1 lg:hidden">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
            {cfg.user.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate">{cfg.user.name}</p>
            <p className="text-white/60 text-xs">{cfg.user.role}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {cfg.nav.map(({ icon: Icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === `/dashboard/${role}`}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`
            }
          >
            <Icon className="w-4.5 h-4.5 w-5 h-5 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-gray-100 dark:border-gray-800 space-y-0.5 shrink-0">
        <p className="px-3 pt-1 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">Switch Role (Demo)</p>
        {cfg.switchTo.map(({ label, to }) => (
          <button
            key={to}
            onClick={() => { navigate(to); onClose?.(); }}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <span className="flex items-center gap-3">
              <User className="w-5 h-5" /> {label}
            </span>
            <ChevronRight className="w-4 h-4 opacity-40" />
          </button>
        ))}
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
        >
          <LogOut className="w-5 h-5" /> Back to Website
        </Link>
      </div>
    </div>
  );
}

export default function DashboardLayout({ role, children }) {
  const [open, setOpen] = useState(false);
  const cfg = configs[role];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-gray-950 border-r border-gray-100 dark:border-gray-800 shrink-0">
        <SidebarContent cfg={cfg} role={role} onClose={null} />
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-950 z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <SidebarContent cfg={cfg} role={role} onClose={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 px-4 h-14 flex items-center gap-3 shrink-0">
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="font-display font-semibold text-gray-900 dark:text-white">{cfg.title}</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
