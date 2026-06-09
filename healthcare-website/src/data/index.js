// Gastro Clinic 27 — Brand & Clinic Data
export const doctorInfo = {
  // Clinic identity (Dr. Vayu is the brand mascot/ambassador, not an individual profile)
  name: "Gastro Clinic 27",
  mascot: "Dr. Vayu",
  title: "MBBS, MS, DNB, FMAS, FIAGES",   // credentials held by clinic-associated doctors
  specialization: "Gastroenterology & Laparoscopic Surgery",
  experience: 7,                            // years of clinic service (est. 2019)
  established: "2019",
  location: "Shahjahanpur, Uttar Pradesh",
  phone: "+91 7007311392",
  email: "admin@gastroclinic27.com",
  whatsapp: "+917007311392",
  photo: "/images/doctor.jpg",
  tagline: "Better Digestion, Better Life",
  taglineHindi: "स्वस्थ पाचन, बेहतर जीवन",

  bio: "Gastro Clinic 27 is a trusted network of specialist gastroenterology clinics serving the people of Shahjahanpur and surrounding districts since 2019. Our team of Medical Council–registered doctors brings advanced qualifications including FMAS, FIAGES, and DNB — delivering expert laparoscopic surgery, endoscopy, and comprehensive digestive health care at rates accessible to everyone, right in their hometown.",

  shortBio: "Trusted gastro care across 5 locations in Shahjahanpur region. Expert, MCI-registered surgeons. Affordable rates. Accessible to all.",

  stats: {
    experience: 7,
    patients: 50000,
    clinics: 5,
    certifications: 12,
  },

  specialties: [
    "Laparoscopic Surgery",
    "GI Endoscopy & Colonoscopy",
    "Gallbladder Stone Treatment",
    "Hernia & Appendix Surgery",
    "Piles, Fissure & Fistula",
    "Liver & Pancreas Disorders",
    "IBS & Colitis Management",
    "Affordable Patient Care",
  ],
};

// Clinic milestones — used on About page timeline
export const clinicMilestones = [
  {
    year: "2019",
    title: "Gastro Clinic 27 Founded",
    institution: "Shahjahanpur, Uttar Pradesh",
    desc: "Established with a mission to bring affordable specialist gastro care to Shahjahanpur and surrounding communities.",
  },
  {
    year: "2022",
    title: "Nigohi & Shahabad Clinics",
    institution: "District Shahjahanpur",
    desc: "Expanded to Nigohi and Shahabad, extending reach to underserved populations in the district.",
  },
  {
    year: "2023",
    title: "10,000 Patients Milestone",
    institution: "Gastro Clinic 27 Network",
    desc: "Crossed 10,000 patients treated — a milestone that affirmed community trust and clinical excellence.",
  },
  {
    year: "2024",
    title: "Tilhar Clinic Launched",
    institution: "Tilhar, Shahjahanpur",
    desc: "Fourth OPD location opened in Tilhar, strengthening our multi-location presence across the region.",
  },
  {
    year: "2025",
    title: "Powayan Clinic & 30,000 Patients",
    institution: "Powayan, Shahjahanpur",
    desc: "Fifth clinic opened in Powayan. Reached 30,000 cumulative patients served across all locations.",
  },
  {
    year: "2026",
    title: "50,000+ Patients Served",
    institution: "Gastro Clinic 27 Network",
    desc: "Crossed the 50,000 patients treated milestone — cementing our position as the region's most trusted gastro network.",
  },
];

// Team credentials — held by clinic-associated doctors (not attributed to a named individual)
export const clinicCredentials = [
  "All associated doctors are registered with the Medical Council of India (MCI)",
  "Our surgeons hold FMAS – Fellowship in Minimal Access Surgery (World Laparoscopy Hospital, Gurugram)",
  "FIAGES – Fellow of the Indian Association of Gastrointestinal Endo Surgeons",
  "DNB (Surgery) – National Board of Examinations, India",
  "MS (General Surgery) – Government Medical College / Dr. RML Hospital, New Delhi",
  "Advanced Laparoscopic & Therapeutic Endoscopy trained specialists",
  "Member – Indian Medical Association (IMA)",
];

// Clinic-level recognition
export const clinicAchievements = [
  { title: "Best Gastro Clinic – Shahjahanpur Region", year: "2023", org: "UP Medical Council" },
  { title: "Excellence in Rural Healthcare Delivery", year: "2022", org: "Healthcare Excellence India" },
  { title: "Affordable Healthcare Initiative Award", year: "2019", org: "Shahjahanpur Medical Association" },
  { title: "Community Health Service Award", year: "2022", org: "Rotary International – UP Chapter" },
];

// Clinics Data – Gastro Clinic 27 (5 Locations)
export const clinics = [
  {
    id: 1,
    name: "Gastro Clinic 27 – Shahjahanpur",
    address: "Main Market Area, Shahjahanpur, Uttar Pradesh",
    area: "Shahjahanpur",
    phone: "+91 7007311392",
    timing: "Mon–Sat: 2:00 PM – 6:00 PM (Closed Sundays)",
    emergency: "Appointment Based – Call",
    mapUrl: "https://maps.google.com/?q=Shahjahanpur+UP",
    mapEmbed: "",
    color: "from-blue-500 to-primary-600",
    facilities: ["Endoscopy", "Laparoscopy", "OPD", "Consultation"],
  },
  {
    id: 2,
    name: "Gastro Clinic 27 – Nigohi",
    address: "Nigohi, District Shahjahanpur, Uttar Pradesh",
    area: "Nigohi",
    phone: "+91 7007311392",
    timing: "Every Friday: 10:00 AM – 1:00 PM",
    emergency: "Appointment Based – Call",
    mapUrl: "https://maps.google.com/?q=Nigohi+Shahjahanpur+UP",
    mapEmbed: "",
    color: "from-accent-500 to-teal-600",
    facilities: ["OPD", "Consultation", "Pharmacy", "Pathology"],
  },
  {
    id: 3,
    name: "Gastro Clinic 27 – Shahabad",
    address: "Shahabad, District Shahjahanpur, Uttar Pradesh",
    area: "Shahabad",
    phone: "+91 7007311392",
    timing: "Every Tuesday: 10:00 AM – 1:00 PM",
    emergency: "Appointment Based – Call",
    mapUrl: "https://maps.google.com/?q=Shahabad+Shahjahanpur+UP",
    mapEmbed: "",
    color: "from-violet-500 to-purple-600",
    facilities: ["OPD", "Consultation", "Referral"],
  },
  {
    id: 4,
    name: "Gastro Clinic 27 – Tilhar",
    address: "Tilhar, Tehsil Tilhar, Shahjahanpur, Uttar Pradesh",
    area: "Tilhar",
    phone: "+91 7007311392",
    timing: "Every Thursday: 10:00 AM – 1:00 PM",
    emergency: "Appointment Based – Call",
    mapUrl: "https://maps.google.com/?q=Tilhar+Shahjahanpur+UP",
    mapEmbed: "",
    color: "from-orange-500 to-amber-600",
    facilities: ["OPD", "Consultation", "Pharmacy", "Pathology"],
  },
  {
    id: 5,
    name: "Gastro Clinic 27 – Powayan",
    address: "Powayan, District Shahjahanpur, Uttar Pradesh",
    area: "Powayan",
    phone: "+91 7007311392",
    timing: "Every Sunday: 2:00 PM – 6:00 PM",
    emergency: "Appointment Based – Call",
    mapUrl: "https://maps.google.com/?q=Powayan+Shahjahanpur+UP",
    mapEmbed: "",
    color: "from-rose-500 to-pink-600",
    facilities: ["OPD", "Consultation", "Pathology"],
  },
];

// Time slots per clinic — keyed by clinic ID (string), aligned to OPD hours
export const clinicTimeSlots = {
  '1': ['2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'],   // Shahjahanpur  Mon–Sat 2–6 PM
  '2': ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],                     // Nigohi        Fri 10 AM–1 PM
  '3': ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],                     // Shahabad      Tue 10 AM–1 PM
  '4': ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],                     // Tilhar        Thu 10 AM–1 PM
  '5': ['2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'],   // Powayan       Sun 2–6 PM
};

// Services Data – Cancer Screening removed per brand guidelines
export const services = [
  {
    id: 1,
    title: "GI Endoscopy",
    description: "Advanced diagnostic upper GI endoscopy and colonoscopy for accurate diagnosis of digestive disorders, ulcers, and polyps.",
    icon: "Activity",
    color: "bg-blue-50 dark:bg-blue-950/30 text-blue-600",
    features: ["Upper GI Endoscopy", "Colonoscopy", "Biopsy", "Polypectomy"],
  },
  {
    id: 2,
    title: "Laparoscopic Surgery",
    description: "Minimally invasive laparoscopic procedures for faster recovery, less pain, smaller scars, and shorter hospital stay.",
    icon: "Stethoscope",
    color: "bg-green-50 dark:bg-green-950/30 text-green-600",
    features: ["Cholecystectomy", "Appendectomy", "Hernia Repair", "Minimal Scarring"],
  },
  {
    id: 3,
    title: "Gallbladder Stone",
    description: "Expert diagnosis and safe laparoscopic removal of gallbladder stones with minimal downtime and quick recovery.",
    icon: "Shield",
    color: "bg-yellow-50 dark:bg-yellow-950/30 text-yellow-600",
    features: ["USG Diagnosis", "Laparoscopic Removal", "Diet Counseling", "Follow-up Care"],
  },
  {
    id: 4,
    title: "Piles & Fissure",
    description: "Modern, effective treatment for piles, anal fissure, and fistula including minimally invasive and surgical options.",
    icon: "Heart",
    color: "bg-red-50 dark:bg-red-950/30 text-red-600",
    features: ["Rubber Band Ligation", "Surgical Treatment", "Diet Advice", "Post-op Care"],
  },
  {
    id: 5,
    title: "IBS & Colitis",
    description: "Comprehensive management of Irritable Bowel Syndrome, Crohn's disease, and ulcerative colitis with diet guidance.",
    icon: "MessageCircle",
    color: "bg-teal-50 dark:bg-teal-950/30 text-teal-600",
    features: ["Diagnosis & Testing", "Diet Planning", "Medication", "Lifestyle Guidance"],
  },
  {
    id: 6,
    title: "Liver & Pancreas",
    description: "Expert evaluation and management of fatty liver, jaundice, hepatitis, pancreatitis, and other digestive organ disorders.",
    icon: "Users",
    color: "bg-orange-50 dark:bg-orange-950/30 text-orange-600",
    features: ["LFT Analysis", "Liver USG", "Pancreatitis Care", "Jaundice Treatment"],
  },
  {
    id: 7,
    title: "Hernia Surgery",
    description: "Laparoscopic and open hernia repair with mesh for inguinal, umbilical, and incisional hernias with low recurrence.",
    icon: "Syringe",
    color: "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600",
    features: ["Laparoscopic Repair", "Mesh Hernioplasty", "Day Surgery Option", "Low Recurrence"],
  },
];

// Testimonials — clinic-centric, Dr. Vayu not named as individual
export const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    age: 52,
    location: "Shahjahanpur",
    rating: 5,
    review: "The team at Gastro Clinic 27 operated on my gallbladder stones laparoscopically. I was back home the same day and fully recovered within a week. Excellent care with very affordable charges. Highly recommended!",
    service: "Gallbladder Surgery",
    date: "November 2024",
  },
  {
    id: 2,
    name: "Sunita Devi",
    age: 45,
    location: "Tilhar",
    rating: 5,
    review: "I had been suffering from piles for years. Gastro Clinic 27 treated me with a minimally invasive procedure and I had no pain after just two days. This clinic is a true blessing for our area.",
    service: "Piles Treatment",
    date: "October 2024",
  },
  {
    id: 3,
    name: "Arun Mishra",
    age: 38,
    location: "Shahabad",
    rating: 5,
    review: "I visited for persistent stomach pain and acidity. After a proper endoscopy at Gastro Clinic 27, my stomach ulcer was accurately diagnosed — something other doctors had missed for months. Treatment was very effective!",
    service: "GI Endoscopy",
    date: "December 2024",
  },
  {
    id: 4,
    name: "Pushpa Verma",
    age: 60,
    location: "Nigohi",
    rating: 5,
    review: "My husband was diagnosed with fatty liver and we were very worried. The doctor at Gastro Clinic 27 explained everything clearly and prescribed the right treatment. Very patient-friendly and costs are very reasonable.",
    service: "Liver Disorder",
    date: "September 2024",
  },
  {
    id: 5,
    name: "Vikash Singh",
    age: 29,
    location: "Powayan",
    rating: 5,
    review: "I suffered from IBS for 3 years. Gastro Clinic 27 gave me proper diet guidance and medication. Within 2 months I was feeling completely normal. The IBS diet chart they provided is incredibly helpful!",
    service: "IBS Management",
    date: "January 2025",
  },
  {
    id: 6,
    name: "Meera Gupta",
    age: 34,
    location: "Shahjahanpur",
    rating: 5,
    review: "Got my hernia operated laparoscopically at Gastro Clinic 27. The surgery was smooth and recovery was fast. Very professional and clean setup. I would recommend Gastro Clinic 27 to everyone in the region.",
    service: "Hernia Surgery",
    date: "December 2024",
  },
];

// FAQ — clinic-centric language
export const faqs = [
  {
    q: "How do I book an appointment at Gastro Clinic 27?",
    a: "You can call or WhatsApp us at +917007311392  to book an appointment. Walk-in patients are also welcome during OPD hours. Check individual clinic timings for your nearest location.",
  },
  {
    q: "What are the consultation charges at Gastro Clinic 27?",
    a: "Consultation starts at very affordable rates. We believe in making quality gastro care accessible to all. Call us at 7007311392 for current fee details.",
  },
  {
    q: "What are the OPD timings at Shahjahanpur?",
    a: "Our Shahjahanpur clinic is open Monday to Saturday from 2:00 PM to 6:00 PM. Other locations: Shahabad (Tuesday 10 AM–1 PM), Tilhar (Thursday 10 AM–1 PM), Nigohi (Friday 10 AM–1 PM), Powayan (Sunday 2–6 PM).",
  },
  {
    q: "Is laparoscopic surgery available at Gastro Clinic 27?",
    a: "Yes, our team of FMAS and FIAGES certified laparoscopic surgeons perform surgeries for gallbladder stones, hernia, appendix, and other conditions at our primary facility.",
  },
  {
    q: "Can I get an endoscopy done at your clinic?",
    a: "Yes, upper GI endoscopy and colonoscopy are available. Please call beforehand to schedule as endoscopy requires prior preparation and fasting.",
  },
  {
    q: "Does Gastro Clinic 27 treat liver diseases?",
    a: "Yes, we treat fatty liver, hepatitis, jaundice, cirrhosis, and other liver and pancreatic disorders. Appropriate tests and specialist referrals are arranged when needed.",
  },
  {
    q: "What should I do in a gastro emergency?",
    a: "For severe abdominal pain, vomiting blood, or other emergencies, please call +91 7007311392 immediately. Our team will guide you and arrange emergency care or specialist referral as needed.",
  },
  {
    q: "Does Gastro Clinic 27 provide diet guidance for gut problems?",
    a: "Yes! Diet is central to gastro health. Our specialists provide personalized diet advice for IBS, colitis, fatty liver, post-surgery recovery, and other digestive conditions.",
  },
];
