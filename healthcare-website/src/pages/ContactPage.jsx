import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, ChevronDown, Send, CheckCircle } from 'lucide-react';
import { doctorInfo, clinics, faqs } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

function FAQItem({ faq, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      custom={idx}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold text-gray-800 dark:text-white text-sm pr-4">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-gray-50 dark:bg-gray-800/50"
          >
            <p className="px-5 pb-5 pt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const waMsg = encodeURIComponent("Hello Dr. Sharma, I'd like to enquire about your services.");

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <MessageSquare className="w-4 h-4" /> Get in Touch
            </span>
            <h1 className="font-display text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-primary-200 text-xl max-w-xl mx-auto">
              We're here to help. Reach out via phone, email, WhatsApp, or visit any of our 5 clinics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                icon: Phone, title: 'Call Us', value: doctorInfo.phone,
                sub: 'Mon–Sat, 9 AM – 9 PM', href: `tel:${doctorInfo.phone}`,
                color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400',
              },
              {
                icon: Mail, title: 'Email Us', value: 'dr.rajesh@healthcare.com',
                sub: 'We reply within 24 hours', href: `mailto:${doctorInfo.email}`,
                color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400',
              },
              {
                icon: () => (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                ),
                title: 'WhatsApp', value: '+91 98765 43210',
                sub: 'Quick replies on WhatsApp', href: `https://wa.me/${doctorInfo.whatsapp}?text=${waMsg}`,
                color: 'bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400',
              },
              {
                icon: MapPin, title: 'Visit Us', value: '5 Locations',
                sub: 'Across Mumbai & Thane', href: '/clinics',
                color: 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400',
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="card p-6 text-center hover:shadow-md transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{card.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form + Map */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              {sent && (
                <div className="flex items-center gap-3 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 rounded-xl p-4 mb-5">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Message sent! We'll get back to you within 24 hours.</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Your Name</label>
                    <input className="input-field" placeholder="Full name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Phone</label>
                    <input className="input-field" placeholder="Mobile number" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Email</label>
                  <input className="input-field" placeholder="your@email.com" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Message</label>
                  <textarea className="input-field resize-none" rows={5} placeholder="How can we help you?" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-800 p-4">
                <h3 className="font-display font-semibold text-gray-800 dark:text-white">Primary Clinic – Andheri West</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{clinics[0].address}</p>
              </div>
              <iframe
                title="Primary Clinic Map"
                src={clinics[0].mapEmbed}
                className="w-full h-96 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 dark:text-gray-400">Everything you need to know before your visit.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} idx={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
