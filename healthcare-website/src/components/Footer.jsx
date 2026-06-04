import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Stethoscope, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { doctorInfo } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center overflow-hidden">
                <span className="text-white text-xs font-bold select-none">G27</span>
                <img
                  src="/images/logo.svg"
                  alt="Gastro Clinic 27"
                  className="absolute inset-0 w-full h-full object-contain p-1"
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div>
                <p className="font-display font-bold text-white text-base leading-tight">Gastro Clinic 27</p>
                <p className="text-xs text-primary-400 font-medium">Dr. Vayu · Gastro Surgeon</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Bringing specialized gastroenterology care to Shahjahanpur and surrounding regions. Better Digestion, Better Life.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Doctor', path: '/about' },
                { name: 'Our Clinics', path: '/clinics' },
                { name: 'Medical Services', path: '/services' },
                { name: 'Book Appointment', path: '/appointment' },
                { name: 'Patient Testimonials', path: '/testimonials' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                'GI Endoscopy',
                'Laparoscopic Surgery',
                'Gallbladder Stone',
                'Piles & Fissure',
                'IBS & Colitis',
                'Liver & Pancreas',
                'Hernia Surgery',
                'Cancer Screening',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Emergency Helpline</p>
                  <a href={`tel:${doctorInfo.phone}`} className="text-sm text-gray-300 hover:text-primary-400 transition-colors font-medium">
                    {doctorInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email Us</p>
                  <a href={`mailto:${doctorInfo.email}`} className="text-sm text-gray-300 hover:text-primary-400 transition-colors">
                    {doctorInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Primary Location</p>
                  <p className="text-sm text-gray-300">{doctorInfo.location}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">OPD Schedule</p>
                  <p className="text-sm text-gray-300">Shahjahanpur: Every Tuesday</p>
                  <p className="text-sm text-gray-300">10:00 AM – 1:00 PM</p>
                  <p className="text-sm text-gray-300 mt-1">Other locations: Call for schedule</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {year} Gastro Clinic 27 · Dr. Vayu (MBBS, MS, DNB, FMAS, FIAGES). All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
