import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClinicsPage from './pages/ClinicsPage';
import ServicesPage from './pages/ServicesPage';
import AppointmentPage from './pages/AppointmentPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

import DashboardLayout from './pages/dashboard/DashboardLayout';
import PatientOverview from './pages/dashboard/patient/PatientOverview';
import MyAppointments from './pages/dashboard/patient/MyAppointments';
import Consultations from './pages/dashboard/patient/Consultations';
import MedicalRecords from './pages/dashboard/patient/MedicalRecords';
import Prescriptions from './pages/dashboard/patient/Prescriptions';
import DoctorOverview from './pages/dashboard/doctor/DoctorOverview';
import DoctorAppointments from './pages/dashboard/doctor/DoctorAppointments';
import MyPatients from './pages/dashboard/doctor/MyPatients';
import Schedule from './pages/dashboard/doctor/Schedule';
import DoctorPrescriptions from './pages/dashboard/doctor/DoctorPrescriptions';
import AdminOverview from './pages/dashboard/admin/AdminOverview';
import AllAppointments from './pages/dashboard/admin/AllAppointments';
import ManageDoctors from './pages/dashboard/admin/ManageDoctors';
import ManagePatients from './pages/dashboard/admin/ManagePatients';
import ManageClinics from './pages/dashboard/admin/ManageClinics';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center flex-col gap-4">
              <h1 className="font-display text-6xl font-bold text-primary-600">404</h1>
              <p className="text-gray-500">Page not found.</p>
              <a href="/" className="btn-primary">Go Home</a>
            </div>
          } />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function D({ role, children }) {
  return <DashboardLayout role={role}>{children}</DashboardLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Dashboard ── */}
        <Route path="/dashboard" element={<Navigate to="/dashboard/patient" replace />} />

        {/* Patient */}
        <Route path="/dashboard/patient" element={<D role="patient"><PatientOverview /></D>} />
        <Route path="/dashboard/patient/appointments" element={<D role="patient"><MyAppointments /></D>} />
        <Route path="/dashboard/patient/consultations" element={<D role="patient"><Consultations /></D>} />
        <Route path="/dashboard/patient/records" element={<D role="patient"><MedicalRecords /></D>} />
        <Route path="/dashboard/patient/prescriptions" element={<D role="patient"><Prescriptions /></D>} />

        {/* Doctor */}
        <Route path="/dashboard/doctor" element={<D role="doctor"><DoctorOverview /></D>} />
        <Route path="/dashboard/doctor/appointments" element={<D role="doctor"><DoctorAppointments /></D>} />
        <Route path="/dashboard/doctor/patients" element={<D role="doctor"><MyPatients /></D>} />
        <Route path="/dashboard/doctor/schedule" element={<D role="doctor"><Schedule /></D>} />
        <Route path="/dashboard/doctor/prescriptions" element={<D role="doctor"><DoctorPrescriptions /></D>} />

        {/* Admin */}
        <Route path="/dashboard/admin" element={<D role="admin"><AdminOverview /></D>} />
        <Route path="/dashboard/admin/appointments" element={<D role="admin"><AllAppointments /></D>} />
        <Route path="/dashboard/admin/doctors" element={<D role="admin"><ManageDoctors /></D>} />
        <Route path="/dashboard/admin/patients" element={<D role="admin"><ManagePatients /></D>} />
        <Route path="/dashboard/admin/clinics" element={<D role="admin"><ManageClinics /></D>} />

        {/* ── Public website ── */}
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1"><AnimatedRoutes /></main>
            <Footer />
            <WhatsAppButton />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
