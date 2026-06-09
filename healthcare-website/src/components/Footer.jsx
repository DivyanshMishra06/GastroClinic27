import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
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
              <div className="relative w-14 h-14">
  <img
    src="/images/logo.png"
    alt="Gastro Clinic 27"
    className="w-full h-full object-contain"
  />
</div>

              <div>
                <p className="font-display font-bold text-white text-base leading-tight">Gastro Clinic 27</p>
                <p className="text-xs text-primary-400 font-medium">Expert Digestive Care</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Bringing specialist gastroenterology care to Shahjahanpur and surrounding regions since 2019. Better Digestion, Better Life.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/gastroclinic27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/gastroclinic27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.threads.net/@gastroclinic27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 192 192" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.347-10.548h.23c8.248.054 14.474 2.452 18.515 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.372-39.134 15.265-38.105 34.569.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.322-11.319 11.258-24.925 16.132-45.488 16.287-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 6.956 9.99 15.69 12.737 25.895l16.198-4.328c-3.383-12.505-8.71-23.317-15.932-32.24C147.625 10.443 126.007.4 97.07.2h-.113C68.15.4 46.741 10.48 32.73 29.053 20.24 45.608 13.925 68.575 13.71 96v.2c.215 27.426 6.53 50.393 19.02 66.947 14.01 18.573 35.42 28.653 64.227 28.853h.113c25.868-.18 44.137-6.95 59.187-21.938 19.818-19.74 19.217-44.578 12.703-59.811-4.706-10.965-13.65-19.575-27.423-24.263Zm-47.895 44.135c-10.443.574-21.3-4.098-21.82-14.135-.397-7.442 5.296-15.745 22.461-16.735 1.966-.113 3.895-.169 5.79-.169 6.235 0 12.068.606 17.37 1.765-1.978 24.702-13.067 29.274Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Clinic Locations */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5">Clinic Locations</h4>
            <ul className="space-y-3">
              {[
                { name: 'Shahjahanpur', day: 'Mon – Sat', time: '2:00 – 6:00 PM' },
                { name: 'Tilhar',       day: 'Every Thursday', time: '10:00 AM – 1:00 PM' },
                { name: 'Nigohi',       day: 'Every Friday',   time: '10:00 AM – 1:00 PM' },
                { name: 'Shahabad',     day: 'Every Tuesday',  time: '10:00 AM – 1:00 PM' },
                { name: 'Powayan',      day: 'Every Sunday',   time: '2:00 – 6:00 PM' },
              ].map((c) => (
                <li key={c.name} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300 font-medium">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.day} · {c.time}</p>
                  </div>
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
                  <p className="text-xs text-gray-500 mb-0.5">Helpline</p>
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
                  <p className="text-sm text-gray-300">Shahjahanpur: Mon–Sat, 2–6 PM</p>
                  <p className="text-sm text-gray-300">Shahabad: Tue · Tilhar: Thu</p>
                  <p className="text-sm text-gray-300">Nigohi: Fri · Powayan: Sun</p>
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
            © {year} Gastro Clinic 27. All rights reserved. · Est. 2019 · Shahjahanpur, U.P.
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
