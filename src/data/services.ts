export type ProcessStep = {
  number: string;
  title: string;
  desc: string;
};

export type ServiceItem = {
  title: string;
  desc: string;
  /** Short label for homepage mini cards */
  shortTitle?: string;
  shortDesc?: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Συνάντηση",
    desc: "Γνωριζόμαστε τον χώρο και τις ανάγκες σου.",
  },
  {
    number: "02",
    title: "3D σχέδιο",
    desc: "Βλέπεις τον χώρο πριν ξεκινήσει η κατασκευή.",
  },
  {
    number: "03",
    title: "Επιλογή υλικών",
    desc: "Διαλέγουμε μαζί ξύλα, επιφάνειες και φωτισμό.",
  },
  {
    number: "04",
    title: "Κατασκευή",
    desc: "Υλοποίηση με τακτική ενημέρωση προόδου.",
  },
  {
    number: "05",
    title: "Παράδοση",
    desc: "Ο χώρος σου, έτοιμος να τον ζήσεις.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Εσωτερικός Σχεδιασμός",
    shortTitle: "Interior Design",
    desc: "Από τη σύλληψη της ιδέας έως την τρισδιάστατη απεικόνιση. Σχεδιάζουμε λειτουργικούς και αισθητικά άρτιους χώρους που σε εμπνέουν καθημερινά.",
    shortDesc:
      "Concept, υλικά, φωτισμός και κάθε επιλογή που δίνει χαρακτήρα στον χώρο.",
  },
  {
    title: "Custom Έπιπλα",
    shortTitle: "Custom Furniture",
    desc: "Χειροποίητες κατασκευές υψηλής ποιότητας, φτιαγμένες ειδικά για τις διαστάσεις και το στυλ του δικού σας χώρου.",
    shortDesc:
      "Έπιπλα σχεδιασμένα για τον χώρο σου, με καθαρές γραμμές και άψογη εφαρμογή.",
  },
  {
    title: "Ολική Ανακαίνιση",
    desc: "Turnkey λύσεις. Αναλαμβάνουμε την πλήρη ανακαίνιση του χώρου σας, από τα αρχικά σχέδια μέχρι την τελική παράδοση του έργου.",
  },
];

/** Homepage mini strip — first two services */
export const miniServices = services.slice(0, 2).map((s) => ({
  title: s.shortTitle ?? s.title,
  desc: s.shortDesc ?? s.desc,
}));
