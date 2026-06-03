import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-accent-800 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6">
              <Star className="w-4 h-4 fill-white/80" /> Patient Stories
            </span>
            <h1 className="font-display text-5xl font-bold text-white mb-4">What Patients Say</h1>
            <p className="text-primary-200 text-xl max-w-xl mx-auto">
              Thousands of families trust Dr. Sharma for their health. Here are some of their stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-white dark:bg-gray-950 py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          {[
            { value: '4.9 / 5', label: 'Average Rating', sub: 'Based on 2,400+ reviews' },
            { value: '98%', label: 'Recommend Doctor', sub: 'Would refer to family & friends' },
            { value: '50,000+', label: 'Happy Patients', sub: 'Treated over 22 years' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400">{s.value}</p>
              <p className="font-semibold text-gray-800 dark:text-white mt-1">{s.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="card p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center mb-5">
                  <Quote className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">
                  "{t.review}"
                </p>

                {/* Service Tag */}
                <span className="inline-block text-xs bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full font-medium mb-5">
                  {t.service}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-sm">{t.name}, {t.age}</p>
                    <p className="text-xs text-gray-400">{t.location} · {t.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Share Your Experience
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Your feedback helps other patients find the right care. We'd love to hear about your experience with Dr. Sharma.
            </p>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Star className="w-4 h-4" /> Write a Review on Google
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
