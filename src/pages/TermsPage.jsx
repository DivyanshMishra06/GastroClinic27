import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const LAST_UPDATED = 'June 2026';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <FileText className="w-4 h-4" /> Legal
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-primary-200 max-w-xl mx-auto">Last updated: {LAST_UPDATED}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-primary-950">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <Section title="1. Acceptance of Terms">
            <p>By accessing and using the Gastro Clinic 27 website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
          </Section>

          <Section title="2. Appointment Booking">
            <p>Online appointment requests submitted through this website are requests only and are not confirmed bookings. Appointments are confirmed by Gastro Clinic 27 via SMS or WhatsApp within 30 minutes during working hours (Mon–Sat, 10 AM – 6 PM).</p>
            <p>Gastro Clinic 27 reserves the right to reschedule or decline appointments based on clinic availability and clinical need.</p>
          </Section>

          <Section title="3. Not a Medical Emergency Service">
            <p>This website and its appointment booking system are not intended for medical emergencies. In case of a medical emergency, please call emergency services or proceed to the nearest hospital immediately. For urgent gastro queries, call us directly at{' '}
              <a href="tel:+917007311392" className="text-primary-600 dark:text-primary-400 hover:underline">+91 7007311392</a>.
            </p>
          </Section>

          <Section title="4. Information Accuracy">
            <p>We make every effort to ensure the information on this website is accurate and up to date. However, clinic timings, services, and pricing may change. Always verify current information by calling the clinic directly.</p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>All content on this website including text, images, graphics, and branding belongs to Gastro Clinic 27. Reproduction or commercial use without written permission is prohibited.</p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>Gastro Clinic 27 is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use this website or its appointment booking system.</p>
          </Section>

          <Section title="7. Governing Law">
            <p>These terms are governed by the laws of the Republic of India. Any disputes shall be subject to the jurisdiction of courts in Shahjahanpur, Uttar Pradesh.</p>
          </Section>

          <Section title="8. Contact">
            <p>For any questions about these terms, contact us at{' '}
              <a href="mailto:admingastroclinic27@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">admingastroclinic27@gmail.com</a>.
            </p>
          </Section>
        </motion.div>
      </section>
    </div>
  );
}
