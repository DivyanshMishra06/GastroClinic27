import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

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

export default function DisclaimerPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <AlertTriangle className="w-4 h-4" /> Legal
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Medical Disclaimer</h1>
            <p className="text-primary-200 max-w-xl mx-auto">Please read this disclaimer before using this website.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-950">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6 mb-10">
            <p className="text-yellow-800 dark:text-yellow-200 font-semibold text-sm">
              ⚠️ The information on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment.
            </p>
          </div>

          <Section title="1. Not a Substitute for Medical Advice">
            <p>The content on this website — including descriptions of medical conditions, treatments, and services — is provided for general information only. It is not a substitute for professional medical advice, diagnosis, or treatment from a qualified healthcare provider.</p>
            <p>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          </Section>

          <Section title="2. No Doctor-Patient Relationship">
            <p>Visiting this website, submitting an appointment request, or reading any content on this site does not create a doctor-patient relationship between you and Gastro Clinic 27 or any of its associated doctors.</p>
            <p>A doctor-patient relationship is established only after a formal in-person consultation at one of our clinics.</p>
          </Section>

          <Section title="3. Emergency Situations">
            <p>If you are experiencing a medical emergency — including severe abdominal pain, vomiting blood, loss of consciousness, or other acute symptoms — do not rely on this website. Call emergency services immediately or go to the nearest hospital emergency department.</p>
          </Section>

          <Section title="4. Treatment Outcomes">
            <p>Individual treatment outcomes vary. Information about procedures and their outcomes on this website represents general expectations and does not guarantee specific results for any individual patient.</p>
          </Section>

          <Section title="5. Credentials and Registration">
            <p>All doctors associated with Gastro Clinic 27 are registered with the Medical Council of India. Credentials and qualifications listed on this website are accurate to the best of our knowledge at the time of publication.</p>
          </Section>

          <Section title="6. Contact for Medical Advice">
            <p>For medical queries related to gastroenterology, please book an appointment at Gastro Clinic 27 or call{' '}
              <a href="tel:+917007311392" className="text-primary-600 dark:text-primary-400 hover:underline">+91 7007311392</a>.
              Do not seek medical advice via the contact form on this website.
            </p>
          </Section>
        </motion.div>
      </section>
    </div>
  );
}
