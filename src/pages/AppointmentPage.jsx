import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, User, Phone, Clock, MapPin } from 'lucide-react';
import { clinics, clinicTimeSlots } from '../data';
import { WEB3FORMS_KEY } from '../lib/config';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};


const CLINIC_DAYS = {
  '1': { days: [1,2,3,4,5,6], label: 'Monday to Saturday' },
  '2': { days: [5],           label: 'Fridays only' },
  '3': { days: [2],           label: 'Tuesdays only' },
  '4': { days: [4],           label: 'Thursdays only' },
  '5': { days: [0],           label: 'Sundays only' },
};

const initForm = {
  name: '', mobile: '', age: '', gender: '', clinic: '', date: '', time: '', symptoms: '', type: 'In-Person',
};

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    ...initForm,
    clinic: searchParams.get('clinic') ?? '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile number';
    if (!form.age || form.age < 1 || form.age > 120) e.age = 'Enter valid age';
    if (!form.gender) e.gender = 'Select gender';
    if (!form.clinic) e.clinic = 'Select a clinic';
    if (!form.date) e.date = 'Select preferred date';
    if (!form.time) e.time = 'Select preferred time';
    if (form.date && form.clinic && !e.date) {
      const rule = CLINIC_DAYS[form.clinic];
      if (rule) {
        const day = new Date(form.date + 'T00:00:00').getDay();
        if (!rule.days.includes(day)) e.date = `This clinic is open on ${rule.label}`;
      }
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setSubmitError('');
    const clinicName = clinics.find(c => String(c.id) === form.clinic)?.name || form.clinic;
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Appointment Request from ${form.name} – Gastro Clinic 27`,
          from_name: form.name,
          'Consultation Type': form.type,
          'Patient Name': form.name,
          'Mobile': form.mobile,
          'Age': form.age,
          'Gender': form.gender,
          'Clinic': clinicName,
          'Preferred Date': form.date,
          'Preferred Time': form.time,
          'Symptoms / Reason': form.symptoms || 'Not provided',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value, ...(field === 'clinic' ? { time: '' } : {}) }));
    setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  const availableSlots = clinicTimeSlots[form.clinic] ?? [];

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[rgba(104,183,164,0.12)] dark:bg-primary-950 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="card max-w-md w-full p-10 text-center"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-3">Appointment Booked!</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Thank you, <strong>{form.name}</strong>! Your appointment request has been received. We'll confirm your slot via SMS on <strong>{form.mobile}</strong> within 30 minutes.
          </p>
          <div className="bg-primary-50 dark:bg-primary-950/40 rounded-2xl p-5 text-left space-y-3 mb-8">
            {[
              { icon: User, label: 'Patient', value: form.name },
              { icon: MapPin, label: 'Clinic', value: clinics.find(c => String(c.id) === form.clinic)?.name || '' },
              { icon: Calendar, label: 'Date', value: form.date },
              { icon: Clock, label: 'Time', value: form.time },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-primary-600 shrink-0" />
                <span className="text-sm text-gray-500">{label}:</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-white">{value}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm(initForm); }}
            className="btn-primary w-full"
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[rgb(104,183,164)] py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <Calendar className="w-4 h-4" /> Online Booking
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Book an Appointment</h1>
            <p className="text-white/85 text-base sm:text-xl max-w-xl mx-auto">
              Fill out the form below and we'll confirm your slot within 30 minutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section id="appointment-form" className="py-20 bg-[rgba(104,183,164,0.12)] dark:bg-primary-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="card p-4 sm:p-8 lg:p-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8">Patient Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Consultation Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Consultation Type</label>
                <div className="flex gap-3">
                  {['In-Person', 'Online Consultation'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleChange('type', type)}
                      className={`flex-1 py-3 rounded-xl text-sm font-medium border-2 transition-all ${form.type === type ? 'border-primary-600 bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary-300'}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name + Mobile */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Patient Name *</label>
                  <input className="input-field" placeholder="Full name" value={form.name} onChange={e => handleChange('name', e.target.value)} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Mobile Number *</label>
                  <input className="input-field" placeholder="10-digit mobile" type="tel" maxLength={10} value={form.mobile} onChange={e => handleChange('mobile', e.target.value.replace(/\D/g, ''))} />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
              </div>

              {/* Age + Gender */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Age *</label>
                  <input className="input-field" placeholder="Age in years" type="number" min={1} max={120} value={form.age} onChange={e => handleChange('age', e.target.value)} />
                  {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Gender *</label>
                  <select className="input-field" value={form.gender} onChange={e => handleChange('gender', e.target.value)}>
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                </div>
              </div>

              {/* Clinic */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Select Clinic *</label>
                <select className="input-field" value={form.clinic} onChange={e => handleChange('clinic', e.target.value)}>
                  <option value="">Choose a clinic location</option>
                  {clinics.map(c => <option key={c.id} value={c.id}>{c.name} – {c.area}</option>)}
                </select>
                {errors.clinic && <p className="text-red-500 text-xs mt-1">{errors.clinic}</p>}
              </div>

              {/* Date + Time */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Preferred Date *</label>
                  <input className="input-field" type="date" min={today} max={maxDate} value={form.date} onChange={e => handleChange('date', e.target.value)} />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Preferred Time *</label>
                  <select
                    className="input-field"
                    value={form.time}
                    onChange={e => handleChange('time', e.target.value)}
                    disabled={!form.clinic}
                  >
                    <option value="">
                      {form.clinic ? 'Select time slot' : 'Select a clinic first'}
                    </option>
                    {availableSlots.map(t => <option key={t}>{t}</option>)}
                  </select>
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* Symptoms */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Symptoms / Reason for Visit</label>
                <textarea
                  className="input-field resize-none"
                  rows={4}
                  placeholder="Briefly describe your symptoms or reason for visit..."
                  value={form.symptoms}
                  onChange={e => handleChange('symptoms', e.target.value)}
                />
              </div>

              {submitError && (
                <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl p-4 text-sm">
                  {submitError}
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                <Calendar className="w-5 h-5" />
                {loading ? 'Submitting…' : 'Confirm Appointment'}
              </button>

              <p className="text-center text-xs text-gray-400">
                By booking, you agree to our privacy policy. Confirmation will be sent via SMS within 30 minutes.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
