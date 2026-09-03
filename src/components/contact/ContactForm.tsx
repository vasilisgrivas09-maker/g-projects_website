"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactPageHeader from "@/components/contact/ContactPageHeader";
import ContactSocialProof from "@/components/contact/ContactSocialProof";
import ContactSidebar from "@/components/contact/ContactSidebar";
import ContactFormFields from "@/components/contact/ContactFormFields";
import ContactFaq from "@/components/contact/ContactFaq";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <ContactPageHeader />
      <ContactSocialProof />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <ContactSidebar />

          <div className="lg:col-span-8 p-8 lg:p-10 bg-white">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center h-full bg-[#fafaf9] rounded-xl border border-green-100"
                role="status"
                aria-live="polite"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-green-500/20">
                  ✓
                </div>
                <h3 className="text-gray-900 text-xl font-semibold mb-2">
                  Το μήνυμα στάλθηκε!
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-6 rounded-full transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7a86b] focus-visible:ring-offset-2"
                >
                  Αποστολή νέου μηνύματος
                </button>
              </motion.div>
            ) : (
              <ContactFormFields onSuccess={() => setSubmitted(true)} />
            )}
          </div>
        </div>
      </motion.div>

      <ContactFaq />
    </>
  );
}
