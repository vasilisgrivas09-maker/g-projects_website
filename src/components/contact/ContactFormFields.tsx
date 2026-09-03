"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ContactFormFieldsProps = {
  onSuccess: () => void;
};

export default function ContactFormFields({ onSuccess }: ContactFormFieldsProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpparprw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        onSuccess();
        form.reset();
      } else {
        setError(
          "Δεν ήταν δυνατή η αποστολή. Ελέγξτε τα στοιχεία σας ή δοκιμάστε ξανά σε λίγο."
        );
      }
    } catch {
      setError(
        "Σφάλμα σύνδεσης. Ελέγξτε το δίκτυό σας ή καλέστε μας απευθείας."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 lg:gap-6"
      noValidate
      aria-label="Φόρμα επικοινωνίας"
    >
      {error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Όνομα
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Το όνομά σας"
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b79a69]/50 focus:border-[#b79a69] bg-[#ffffff] transition-colors placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Το email σας"
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b79a69]/50 focus:border-[#b79a69] bg-[#ffffff] transition-colors placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Τηλέφωνο
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Το τηλέφωνό σας"
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b79a69]/50 focus:border-[#b79a69] bg-[#ffffff] transition-colors placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="area" className="text-sm font-medium text-gray-700">
            Περιοχή έργου
          </label>
          <input
            id="area"
            type="text"
            name="area"
            autoComplete="address-level2"
            placeholder="π.χ. Θεσσαλονίκη, Πάρος"
            aria-describedby="area-hint"
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b79a69]/50 focus:border-[#b79a69] bg-[#ffffff] transition-colors placeholder:text-gray-400"
          />
          <p id="area-hint" className="text-xs text-gray-400">
            Αναλαμβάνουμε έργα πανελλαδικά.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Μήνυμα
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Πείτε μας για το έργο σας..."
          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b79a69]/50 focus:border-[#b79a69] bg-[#ffffff] transition-colors placeholder:text-gray-400 resize-none"
        />
      </div>

      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="consent"
          required
          className="mt-1.5 w-4 h-4 border-gray-300 rounded text-[#b79a69] focus:ring-[#b79a69] cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="text-sm text-gray-500 leading-tight cursor-pointer"
        >
          Συμφωνώ με την{" "}
          <Link href="/privacy" className="text-[#b79a69] hover:underline">
            πολιτική απορρήτου
          </Link>{" "}
          και τη χρήση των στοιχείων μου για την απάντηση στο μήνυμά μου.
        </label>
      </div>

      <div className="flex justify-stretch sm:justify-end mt-2 lg:mt-4">
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto bg-[#825037] hover:bg-[#6d4230] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-8 rounded-xl shadow-md shadow-[#825037]/30 transition-colors min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79a69] focus-visible:ring-offset-2"
        >
          {submitting ? "ΑΠΟΣΤΟΛΗ…" : "ΑΠΟΣΤΟΛΗ"}
        </motion.button>
      </div>
    </form>
  );
}
