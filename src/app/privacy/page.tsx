import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/layout/SiteChrome";
import { PHONE_DISPLAY } from "@/data/site";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description:
    "Πώς η G Projects συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σας δεδομένα.",
};

export default function PrivacyPage() {
  return (
    <SiteChrome
      solidNav
      mainClassName="min-h-screen bg-[#f4f1ea] pt-28 pb-24 px-4 sm:px-8"
    >
      <article className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="font-serif text-4xl text-gray-900 mb-6">
            Πολιτική Απορρήτου
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Η G Projects σέβεται την ιδιωτικότητά σας. Το παρόν έγγραφο
            εξηγεί ποια δεδομένα συλλέγουμε μέσω του ιστότοπου και πώς τα
            χρησιμοποιούμε, σύμφωνα με τον Γενικό Κανονισμό Προστασίας
            Δεδομένων (GDPR).
          </p>

          <h2 className="font-serif text-2xl text-gray-900 mt-10 mb-3">
            1. Υπεύθυνος επεξεργασίας
          </h2>
          <p className="text-gray-600 leading-relaxed">
            G Projects — επικοινωνία:{" "}
            <a href="tel:+306944085473" className="text-[#b79a69] hover:underline">
              {PHONE_DISPLAY}
            </a>
            .
          </p>

          <h2 className="font-serif text-2xl text-gray-900 mt-10 mb-3">
            2. Δεδομένα που συλλέγουμε
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Όταν συμπληρώνετε τη φόρμα επικοινωνίας, συλλέγουμε το όνομα, το
            email, το τηλέφωνο (προαιρετικά) και το μήνυμά σας. Τα δεδομένα
            αποστέλλονται μέσω Formspree αποκλειστικά για να απαντήσουμε στο
            αίτημά σας.
          </p>

          <h2 className="font-serif text-2xl text-gray-900 mt-10 mb-3">
            3. Σκοπός επεξεργασίας
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Τα στοιχεία χρησιμοποιούνται μόνο για επικοινωνία, προσφορά
            υπηρεσιών και παρακολούθηση του ενδιαφέροντός σας για έργα
            εσωτερικής αρχιτεκτονικής ή custom επίπλων.
          </p>

          <h2 className="font-serif text-2xl text-gray-900 mt-10 mb-3">
            4. Νομική βάση
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Η επεξεργασία βασίζεται στη συγκατάθεσή σας (checkbox στη φόρμα)
            και στο έννομο συμφέρον μας να απαντήσουμε σε αιτήματα
            επικοινωνίας.
          </p>

          <h2 className="font-serif text-2xl text-gray-900 mt-10 mb-3">
            5. Διατήρηση &amp; ασφάλεια
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Διατηρούμε τα μηνύματα για όσο χρειάζεται για την εξυπηρέτηση του
            αιτήματος και τη σχέση με τον πελάτη. Λαμβάνουμε λογικά μέτρα
            προστασίας μέσω των παρόχων φιλοξενίας και επεξεργασίας φορμών.
          </p>

          <h2 className="font-serif text-2xl text-gray-900 mt-10 mb-3">
            6. Τα δικαιώματά σας
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Μπορείτε να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των δεδομένων
            σας, καθώς και ανάκληση της συγκατάθεσης, επικοινωνώντας μαζί
            μας στο τηλέφωνο ή μέσω της φόρμας επικοινωνίας.
          </p>

          <h2 className="font-serif text-2xl text-gray-900 mt-10 mb-3">
            7. Cookies &amp; analytics
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Ο ιστότοπος μπορεί να χρησιμοποιεί Vercel Analytics για
            ανωνυμοποιημένα στατιστικά επισκεψιμότητας, χωρίς προσωπική
            ταυτοποίηση.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Τελευταία ενημέρωση: {new Date().getFullYear()}
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-8 text-[#b79a69] hover:underline font-medium"
          >
            ← Επιστροφή στην επικοινωνία
          </Link>
        </article>
    </SiteChrome>
  );
}
