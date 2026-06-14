import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

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

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <Shield className="w-4 h-4" /> Legal
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-primary-200 max-w-xl mx-auto">Last updated: June 2026</p>
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
          <Section title="1. Information We Collect">
            <p>When you use the appointment booking form or contact form on this website, we collect information you voluntarily provide, including your name, mobile number, age, gender, and health-related details such as symptoms or medical conditions.</p>
            <p>We do not collect financial or payment information on this website.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>The information you provide is used solely to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Confirm and manage your appointment at Gastro Clinic 27</li>
              <li>Contact you via phone, WhatsApp, or SMS regarding your appointment</li>
              <li>Respond to your queries or messages</li>
            </ul>
            <p>We do not sell, trade, or rent your personal information to third parties.</p>
          </Section>

          <Section title="3. Data Storage and Security">
            <p>Appointment and contact form submissions are processed by Web3Forms, a secure third-party form submission service. Your data is transmitted over HTTPS. We take reasonable steps to protect your personal information, though no method of electronic transmission is 100% secure.</p>
          </Section>

          <Section title="4. Health Information">
            <p>Any health-related information you share (symptoms, conditions, etc.) is used only to prepare for your appointment and is treated with strict confidentiality in accordance with standard medical ethics.</p>
          </Section>

          <Section title="5. Cookies">
            <p>This website uses browser localStorage to remember your dark/light mode preference. No tracking cookies or third-party advertising cookies are used.</p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>This website may contain links to Google Maps and social media profiles (Facebook, Instagram, Threads). We are not responsible for the privacy practices of those external sites.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>You may request access to, correction of, or deletion of personal information we hold about you by contacting us at{' '}
              <a href="mailto:admingastroclinic27@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">admingastroclinic27@gmail.com</a>{' '}
              or calling{' '}
              <a href="tel:+917007311392" className="text-primary-600 dark:text-primary-400 hover:underline">+91 7007311392</a>.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this privacy policy from time to time. Continued use of this website after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="9. Contact">
            <p>For any privacy-related concerns, please contact Gastro Clinic 27 at{' '}
              <a href="mailto:admingastroclinic27@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">admingastroclinic27@gmail.com</a>.
            </p>
          </Section>
        </motion.div>
      </section>
    </div>
  );
}
