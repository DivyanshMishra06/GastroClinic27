import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { X, Send } from 'lucide-react';

const DOCTOR_IMG = '/images/doctor-cartoon.png';

const SYSTEM_PROMPT = `You are Dr. Vayu, a friendly AI health assistant for Gastro Clinic 27 in Shahjahanpur, U.P., India.

Clinic locations and timings:
- Shahjahanpur: Mon–Sat, 2:00–6:00 PM | Phone: +91 9795438953
- Tilhar: Every Thursday, 10:00 AM–1:00 PM | Phone: +91 8004927277
- Nigohi: Every Friday, 10:00 AM–1:00 PM | Phone: +91 7460838114
- Shahabad: Every Tuesday, 10:00 AM–1:00 PM | Phone: +91 9214603865
- Powayan: Every Sunday, 2:00–6:00 PM | Phone: +91 8853810978

Services offered:
- Laparoscopic Surgery (gallbladder, hernia, appendix)
- Piles, Fissure & Fistula treatment
- IBS & Colitis management
- Liver & Pancreas disorders
- Digestive Issues & Gastrointestinal Ailments
- Weight Management
- Bariatric Procedures (coming soon)
- GI Endoscopy & Colonoscopy (coming soon)
- Robotic Surgery (coming soon)

Rules:
- When asked "who are you" or to introduce yourself → say you are an AI chatbot assistant for Gastro Clinic 27, here to help with healthcare queries, clinic information, and appointment guidance — never claim to be a real doctor
- ONLY answer questions about: clinic timings, phone numbers, services offered, or very basic digestive health awareness (not diagnosis)
- Keep every reply to maximum 2 sentences — never volunteer extra information
- ALWAYS respond in English by default; only switch to Hindi if the patient writes in Hindi (Devanagari script)
- For ANY symptom, pain, or medical question → respond: "Please consult our doctor directly for this. Call [relevant clinic number]."
- Never explain procedures, medicines, treatments, or dosages
- Never give a second opinion or compare treatments
- Never give addresses — only mention the city name and timings
- If the question is outside clinic topics (general life, politics, other medical fields) → say: "I can only help with Gastro Clinic 27 related queries."
- Always end medical/symptom replies with a doctor consultation suggestion
- Do not mention any doctor name, qualifications, or credentials
- When responding in Hindi, use simple natural conversational Hindi. Do not translate English sentences word-by-word. Use short, everyday Hindi that a patient in U.P. would understand
- When someone asks about booking an appointment, first ask: "Which city are you from?" Then based on their answer, reply with the nearest clinic timing, its phone number, and this booking link: https://healthcareorg.netlify.app/appointment#appointment-form
  - Shahjahanpur → Mon–Sat 2–6 PM | +91 9795438953
  - Tilhar → Every Thursday 10 AM–1 PM | +91 8004927277
  - Nigohi → Every Friday 10 AM–1 PM | +91 7460838114
  - Shahabad → Every Tuesday 10 AM–1 PM | +91 9214603865
  - Powayan → Every Sunday 2–6 PM | +91 8853810978
  - If city doesn't match any clinic → give Shahjahanpur as the main clinic and the booking link`;


function renderContent(text) {
  const urlRegex = /https?:\/\/[^\s]+/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = urlRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a key={match.index} href={match[0]} target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center gap-1 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-lg mt-1 hover:bg-primary-600 transition-colors">
        Book Appointment →
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length ? parts : text;
}

const WELCOME_MSG = {
  role: 'model',
  content: 'Namaste! I am Dr. Vayu 🌿 You can ask me about our services, clinic timings, or any digestive health questions.',
};

export default function DrVayuGuide() {
  const { pathname } = useLocation();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MSG]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  const apiReady = apiKey && apiKey !== 'paste-your-openrouter-key-here';

  useEffect(() => {
    if (pathname === '/') {
      const seen = sessionStorage.getItem('drVayuIntroDone');
      if (!seen) {
        setShowIntro(true);
        setIntroComplete(false);
        setChatOpen(false);
        const t = setTimeout(() => {
          setShowIntro(false);
          setIntroComplete(true);
          sessionStorage.setItem('drVayuIntroDone', '1');
        }, 2000);
        return () => clearTimeout(t);
      } else {
        setShowIntro(false);
        setIntroComplete(true);
      }
    } else {
      setShowIntro(false);
      setIntroComplete(true);
    }
  }, [pathname]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (chatOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [chatOpen]);

  async function sendMessage() {
    if (!input.trim() || loading || !apiReady) return;

    const userText = input.trim();
    const userMsg = { role: 'user', content: userText };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const groqMessages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
          .filter(m => m !== WELCOME_MSG)
          .map(m => ({
            role: m.role === 'model' ? 'assistant' : 'user',
            content: m.content,
          })),
        { role: 'user', content: userText },
      ];

      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://gastroclinic27.com',
          'X-Title': 'Gastro Clinic 27',
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b:free',
          messages: groqMessages,
          max_tokens: 400,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        const errMsg = data.error?.message || `Error ${res.status}`;
        setMessages(prev => [...prev, { role: 'model', content: `⚠️ ${errMsg}` }]);
        return;
      }
      const reply = data.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'model', content: reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: 'model', content: `⚠️ ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Full Doctor Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="doctor-intro"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 350, opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            style={{ position: 'fixed', bottom: 0, left: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 20 }}
              style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '18px', borderBottomLeftRadius: '4px', padding: '10px 16px', maxWidth: '210px', boxShadow: '0 8px 30px rgba(0,0,0,0.14)', marginBottom: '10px', position: 'relative' }}
            >
              <p style={{ fontSize: '10px', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Dr. Vayu</p>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: 0 }}>Welcome! I'm Dr. Vayu — ask me anything about the clinic!</p>
              <div style={{ position: 'absolute', bottom: '-8px', left: '18px', width: '14px', height: '14px', background: '#fff', border: '1.5px solid #e2e8f0', borderTop: 'none', borderLeft: 'none', transform: 'rotate(45deg)' }} />
            </motion.div>
            <motion.div animate={{ y: [0, -14, 0, -8, 0] }} transition={{ delay: 0.2, duration: 1.6, repeat: 0, ease: 'easeInOut' }}>
              <img src={DOCTOR_IMG} alt="Dr. Vayu" style={{ height: '200px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.18))' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating widget */}
      <div style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>

        {/* Chat panel */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
              style={{ width: '300px', display: 'flex', flexDirection: 'column' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 shrink-0">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/30 shrink-0">
                  <img src={DOCTOR_IMG} alt="Dr. Vayu" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transform: 'scale(1.2)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm leading-none">Dr. Vayu</p>
                  <p className="text-primary-200 text-xs mt-0.5">AI Health Assistant</p>
                </div>
                <button onClick={() => setChatOpen(false)} className="text-white/70 hover:text-white transition-colors shrink-0">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="overflow-y-auto p-3 space-y-2.5" style={{ height: '280px' }}>
                {!apiReady && (
                  <div className="text-center text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 rounded-xl px-3 py-2">
                    API key not set. Open <strong>.env</strong> and set <code>VITE_OPENROUTER_API_KEY</code> to your OpenRouter API key, then restart the server.
                  </div>
                )}
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`px-3 py-2 rounded-2xl text-xs leading-relaxed max-w-[88%] ${
                      msg.role === 'user'
                        ? 'bg-primary-500 text-white rounded-br-sm'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-bl-sm'
                    }`}>
                      {msg.role === 'model' ? renderContent(msg.content) : msg.content}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2.5 rounded-2xl rounded-bl-sm">
                      <div className="flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-100 dark:border-gray-700 p-3 flex gap-2 shrink-0">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder={apiReady ? 'Type your question...' : 'Set API key to chat'}
                  disabled={!apiReady}
                  className="flex-1 text-xs px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim() || !apiReady}
                  className="w-8 h-8 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-40 flex items-center justify-center transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Avatar button */}
        <AnimatePresence>
          {introComplete && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16 }}
            >
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>
                <motion.button
                  onClick={() => setChatOpen(prev => !prev)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label="Chat with Dr. Vayu"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, position: 'relative', display: 'block' }}
                >
                  <div style={{ width: '76px', height: '76px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.22)', border: '3px solid #fff' }}>
                    <img src={DOCTOR_IMG} alt="Dr. Vayu" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transform: 'scale(1.05)' }} />
                  </div>
                  {!chatOpen && (
                    <span style={{ position: 'absolute', top: 2, right: 2, width: '13px', height: '13px', borderRadius: '50%', background: '#ef4444', border: '2px solid #fff' }} />
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
