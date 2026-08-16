"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("gProjectsSubmitted");
    if (hasSubmitted === "true") {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpparprw", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        localStorage.setItem("gProjectsSubmitted", "true");
        form.reset();
      } else {
        console.error("Το Formspree απέρριψε το αίτημα.");
        alert("Προσοχή! Δεν έχει ρυθμιστεί σωστά η φόρμα αποστολής (Formspree ID).");
      }
    } catch (error) {
      console.error("Σφάλμα δικτύου ή σύνδεσης:", error);
    }
  };

  const handleResetForm = () => {
    localStorage.removeItem("gProjectsSubmitted");
    setSubmitted(false);
  };

  const faqData = [
    {
      q: "Πόσο γρήγορα θα λάβω απάντηση;",
      a: "Συνήθως απαντάμε σε όλα τα μηνύματα εντός 24 ωρών τις εργάσιμες ημέρες. Αν η ερώτησή σας είναι επείγουσα, μη διστάσετε να μας καλέσετε τηλεφωνικά.",
    },
    {
      q: "Χρειάζεται να κλείσω ραντεβού για να μιλήσουμε;",
      a: "Όχι. Μπορείτε να μας στείλετε το μήνυμά σας εδώ ή να μας καλέσετε απευθείας. Αν χρειαστεί να συζητήσουμε λεπτομέρειες για το έργο σας, θα κανονίσουμε μια κλήση ή συνάντηση.",
    },
    {
      q: "Πώς μπορώ να σας στείλω φωτογραφίες του χώρου μου;",
      a: "Μπορείτε να χρησιμοποιήσετε τη φόρμα για να μας στείλετε τις φωτογραφίες σας. Για μεγαλύτερα αρχεία, μπορούμε να συνεννοηθούμε μέσω email ή να σας δώσουμε ένα link μεταφόρτωσης.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* === 1. ΕΙΣΑΓΩΓΙΚΟ HEADER === */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 max-w-2xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 tracking-tight">Ας μιλήσουμε</h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Μη διστάσετε να επικοινωνήσετε. Οποιαδήποτε ιδέα, ερώτηση ή 
          ραντεβού, είμαστε εδώ.
        </p>
      </motion.div>

      {/* === 2. SOCIAL PROOF === */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 px-4"
      >
        {[ 
          { 
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            ), 
            title: "Απόλυτη Εμπειρία", 
            desc: "5+ χρόνια στον κορυφαίο σχεδιασμό και την κατασκευή ποιοτικών χώρων." 
          },
          { 
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 9l-1.5 1.5V15H6.5v-4.5L5 9" />
                <path d="M8 15V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9" />
                <path d="M15 19a2 2 0 0 1-2-2v-3H11v3a2 2 0 0 1-2 2H5" />
                <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
              </svg>
            ), 
            title: "Απόλυτη Ποιότητα", 
            desc: "Δίνουμε έμφαση στην άριστη ποιότητα κατασκευής και στο μοναδικό design που ξεχωρίζει." 
          },
          { 
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ), 
            title: "Εμπιστοσύνη & Διαφάνεια", 
            desc: "Αναλαμβάνουμε την πλήρη επίβλεψη με διαφάνεια, τηρώντας τα χρονοδιαγράμματα και παραδίδοντας ένα άψογο αποτέλεσμα." 
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              transition: { duration: 0.15, type: "spring", stiffness: 300 }
            }}
            whileTap={{ 
              scale: 0.92, 
              y: -4,
              transition: { duration: 0.08 }
            }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 text-center flex flex-col items-center gap-4 cursor-pointer touch-manipulation outline-none focus:outline-none focus:ring-0 ring-0"
          >
            <span className="w-14 h-14 text-[#c7a86b]">
              {item.icon}
            </span>
            <p className="text-xl md:text-2xl font-semibold text-gray-900">{item.title}</p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* === 3. ΤΟ ΚΟΥΤΙ ΤΗΣ ΦΟΡΜΑΣ === */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* 3α. ΚΕΦΑΛΙΔΑ / INFO (Αριστερά) */}
          <div className="lg:col-span-4 p-8 lg:p-10 flex flex-col justify-between gap-8 bg-[#faf8f6] lg:bg-[#faf8f6] text-left">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 text-[#c7a86b] shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"></path>
                  </svg>
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Επικοινωνία</h2>
              </div>
              <div className="w-12 h-[3px] bg-black"></div> 
              <p className="text-[15px] text-gray-600 leading-relaxed">
                Στείλτε μας μήνυμα και θα σας απαντήσουμε το συντομότερο δυνατό.
              </p>
            </div>

            <div className="flex flex-col gap-4 border-t border-gray-300 pt-6">
              <span className="font-semibold text-gray-900 text-base md:text-lg">
                Ή επικοινωνήστε απευθείας:
              </span>
              
              <div className="flex flex-col gap-3">
                <a href="tel:+306944085473" className="flex items-center gap-3 hover:text-[#c7a86b] transition-colors py-1 group">
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">📞</span>
                  <span className="text-base md:text-lg">+30 694 408 5473</span>
                </a>

                <a href="viber://chat?number=%2B306944085473&draft=Γεια%20σας%2C%20θα%20ήθελα%20να%20κλείσουμε%20ένα%20ραντεβού%20για%20τον%20χώρο%20μου." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#c7a86b] transition-colors py-1 group">
                  <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="#3b82f6" className="w-full h-full">
                      <path d="M17.472,14.37c-0.26-0.13-1.54-0.75-1.78-0.84c-0.24-0.09-0.42-0.13-0.6,0.26c-0.18,0.39-0.69,0.84-0.85,1.02 c-0.16,0.18-0.31,0.2-0.57,0.07c-0.26-0.13-1.1-0.4-2.09-1.29c-0.77-0.69-1.29-1.55-1.44-1.81c-0.15-0.26-0.02-0.4,0.11-0.53 c0.12-0.12,0.26-0.32,0.39-0.48c0.13-0.16,0.17-0.27,0.26-0.45c0.09-0.18,0.05-0.34-0.02-0.47c-0.08-0.13-0.6-1.45-0.82-1.98 c-0.22-0.53-0.44-0.44-0.6-0.45c-0.16-0.01-0.33-0.01-0.51-0.01c-0.18,0-0.47,0.07-0.71,0.32c-0.24,0.25-0.92,0.9-0.92,2.2 c0,1.3,0.95,2.56,1.08,2.74c0.13,0.18,1.86,2.84,4.51,3.98c0.63,0.27,1.12,0.43,1.5,0.55c0.63,0.2,1.2,0.17,1.65,0.1 c0.5-0.08,1.55-0.63,1.77-1.24c0.22-0.61,0.22-1.13,0.15-1.24C17.91,14.57,17.73,14.5,17.472,14.37z M12,2.02c-5.52,0-10,4.48-10,10 c0,1.78,0.47,3.45,1.29,4.9L2.06,21.93l5.08-1.33c1.42,0.77,3.04,1.2,4.75,1.2c5.53,0,10-4.48,10-10S17.53,2.02,12,2.02z M12,19.71 c-1.49,0-2.87-0.4-4.07-1.1l-0.29-0.17l-3.01,0.79l0.8-2.93l-0.19-0.3c-0.75-1.26-1.18-2.74-1.18-4.34c0-4.38,3.56-7.94,7.94-7.94 c4.38,0,7.94,3.56,7.94,7.94C19.94,16.15,16.38,19.71,12,19.71z"/>
                    </svg>
                  </span>
                  <span className="text-base md:text-lg">Viber</span>
                </a>

                <a href="https://wa.me/306944085473?text=Γεια%20σας%2C%20θα%20ήθελα%20να%20κλείσουμε%20ένα%20ραντεβού%20για%20τον%20χώρο%20μου." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#c7a86b] transition-colors py-1 group">
                  <span className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="#25D366" className="w-full h-full">
                      <path d="M17.472,14.37c-0.26-0.13-1.54-0.75-1.78-0.84c-0.24-0.09-0.42-0.13-0.6,0.26c-0.18,0.39-0.69,0.84-0.85,1.02 c-0.16,0.18-0.31,0.2-0.57,0.07c-0.26-0.13-1.1-0.4-2.09-1.29c-0.77-0.69-1.29-1.55-1.44-1.81c-0.15-0.26-0.02-0.4,0.11-0.53 c0.12-0.12,0.26-0.32,0.39-0.48c0.13-0.16,0.17-0.27,0.26-0.45c0.09-0.18,0.05-0.34-0.02-0.47c-0.08-0.13-0.6-1.45-0.82-1.98 c-0.22-0.53-0.44-0.44-0.6-0.45c-0.16-0.01-0.33-0.01-0.51-0.01c-0.18,0-0.47,0.07-0.71,0.32c-0.24,0.25-0.92,0.9-0.92,2.2 c0,1.3,0.95,2.56,1.08,2.74c0.13,0.18,1.86,2.84,4.51,3.98c0.63,0.27,1.12,0.43,1.5,0.55c0.63,0.2,1.2,0.17,1.65,0.1 c0.5-0.08,1.55-0.63,1.77-1.24c0.22-0.61,0.22-1.13,0.15-1.24C17.91,14.57,17.73,14.5,17.472,14.37z M12,2.02c-5.52,0-10,4.48-10,10 c0,1.78,0.47,3.45,1.29,4.9L2.06,21.93l5.08-1.33c1.42,0.77,3.04,1.2,4.75,1.2c5.53,0,10-4.48,10-10S17.53,2.02,12,2.02z M12,19.71 c-1.49,0-2.87-0.4-4.07-1.1l-0.29-0.17l-3.01,0.79l0.8-2.93l-0.19-0.3c-0.75-1.26-1.18-2.74-1.18-4.34c0-4.38,3.56-7.94,7.94-7.94 c4.38,0,7.94,3.56,7.94,7.94C19.94,16.15,16.38,19.71,12,19.71z"/>
                    </svg>
                  </span>
                  <span className="text-base md:text-lg">WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-auto">
              <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* 3β. Η ΦΟΡΜΑ (Δεξιά) */}
          <div className="lg:col-span-8 p-8 lg:p-10 bg-white">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center h-full bg-[#fafaf9] rounded-xl border border-green-100">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-green-500/20">✓</div>
                <h3 className="text-gray-900 text-xl font-semibold mb-2">Το μήνυμα στάλθηκε!</h3>
                <p className="text-gray-500 text-sm mb-8">Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.</p>
                <button 
                  onClick={handleResetForm}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-6 rounded-full transition-colors text-sm"
                >
                  Αποστολή νέου μηνύματος
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Όνομα</label>
                    <input 
                      id="name" type="text" name="name" required placeholder="Το όνομά σας" 
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c7a86b]/50 focus:border-[#c7a86b] bg-[#fcfcfc] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <input 
                      id="email" type="email" name="email" required placeholder="Το email σας" 
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c7a86b]/50 focus:border-[#c7a86b] bg-[#fcfcfc] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Τηλέφωνο</label>
                  <input 
                    id="phone" type="tel" name="phone" placeholder="Το τηλέφωνό σας" 
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c7a86b]/50 focus:border-[#c7a86b] bg-[#fcfcfc] transition-colors placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Μήνυμα</label>
                  <textarea 
                    id="message" name="message" rows={4} placeholder="Πείτε μας για το έργο σας..." 
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c7a86b]/50 focus:border-[#c7a86b] bg-[#fcfcfc] transition-colors placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input 
                    type="checkbox" id="consent" required 
                    className="mt-1.5 w-4 h-4 border-gray-300 rounded text-[#c7a86b] focus:ring-[#c7a86b] cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-500 leading-tight cursor-pointer">
                    Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου για την απάντηση στο μήνυμά μου.
                  </label>
                </div>

                <div className="flex justify-end mt-2 lg:mt-4">
                  <button 
                    type="submit" 
                    className="bg-[#9d5d3a] hover:bg-[#8a5132] text-white font-semibold py-3.5 px-8 rounded-xl shadow-md shadow-[#9d5d3a]/30 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    ΑΠΟΣΤΟΛΗ
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </motion.div>

      {/* === 4. FAQ (Συχνές Ερωτήσεις) === */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-5xl mx-auto mt-12 px-4"
      >
        <h2 className="text-2xl font-serif text-gray-900 mb-6">Συχνές Ερωτήσεις</h2>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="p-5 md:p-6">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">{item.q}</span>
                <span className={`text-[#c7a86b] transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}