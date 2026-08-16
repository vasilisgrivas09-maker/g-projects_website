export type GalleryCategory =
  | "Διαχωριστικά"
  | "Δωμάτιο"
  | "Έπιπλα"
  | "Κουζίνα"
  | "Ντουλάπα"
  | "Πέργκολα"
  | "Πόρτα";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryProject = {
  id: string;
  title: string;
  category: GalleryCategory;
  cover: string;
  images: GalleryImage[];
};

export const galleryCategories: GalleryCategory[] = [
  "Διαχωριστικά",
  "Δωμάτιο",
  "Έπιπλα",
  "Κουζίνα",
  "Ντουλάπα",
  "Πέργκολα",
  "Πόρτα",
];

export const galleryProjects: GalleryProject[] = [
  {
    id: "diadromosmalaka",
    title: "Διάδρομος",
    category: "Δωμάτιο",
    cover: "/gallery/diadromosmalaka1.webp",
    images: [
      { src: "/gallery/diadromosmalaka1.webp", alt: "Διάδρομος — 1" },
      { src: "/gallery/diadromosmalaka2.webp", alt: "Διάδρομος — 2" },
    ],
  },
  {
    id: "diaxoristika",
    title: "Διαχωριστικά",
    category: "Διαχωριστικά",
    cover: "/gallery/diaxoristika1.webp",
    images: [
      { src: "/gallery/diaxoristika1.webp", alt: "Διαχωριστικά — 1" },
      { src: "/gallery/diaxoristika2.webp", alt: "Διαχωριστικά — 2" },
      { src: "/gallery/diaxoristika3.webp", alt: "Διαχωριστικά — 3" },
    ],
  },
  {
    id: "diaxoristikompaniou",
    title: "Διαχωριστικά Κομπανίου",
    category: "Διαχωριστικά",
    cover: "/gallery/diaxoristikompaniou1.webp",
    images: [
      { src: "/gallery/diaxoristikompaniou1.webp", alt: "Διαχωριστικά Κομπανίου — 1" },
      { src: "/gallery/diaxoristikompaniou2.webp", alt: "Διαχωριστικά Κομπανίου — 2" },
    ],
  },
  {
    id: "domatio",
    title: "Δωμάτιο",
    category: "Δωμάτιο",
    cover: "/gallery/domatio1.webp",
    images: [
      { src: "/gallery/domatio1.webp", alt: "Δωμάτιο — 1" },
      { src: "/gallery/domatio2.webp", alt: "Δωμάτιο — 2" },
      { src: "/gallery/domatio3.webp", alt: "Δωμάτιο — 3" },
    ],
  },
  {
    id: "domatiomalaka",
    title: "Δωμάτιο — Custom",
    category: "Δωμάτιο",
    cover: "/gallery/domatiomalaka1.webp",
    images: [
      { src: "/gallery/domatiomalaka1.webp", alt: "Δωμάτιο — Custom — 1" },
      { src: "/gallery/domatiomalaka2.webp", alt: "Δωμάτιο — Custom — 2" },
    ],
  },
  {
    id: "epiploniptira",
    title: "Έπιπλο Νιπτήρα",
    category: "Έπιπλα",
    cover: "/gallery/epiploniptira.webp",
    images: [
      { src: "/gallery/epiploniptira.webp", alt: "Έπιπλο Νιπτήρα — 1" },
      { src: "/gallery/epiploniptira1.webp", alt: "Έπιπλο Νιπτήρα — 2" },
      { src: "/gallery/epiploniptira2.webp", alt: "Έπιπλο Νιπτήρα — 3" },
    ],
  },
  {
    id: "epiplonisi",
    title: "Έπιπλο Νησί",
    category: "Έπιπλα",
    cover: "/gallery/epiplonisi1.webp",
    images: [
      { src: "/gallery/epiplonisi1.webp", alt: "Έπιπλο Νησί — 1" },
      { src: "/gallery/epiplonisi2.webp", alt: "Έπιπλο Νησί — 2" },
    ],
  },
  {
    id: "epiplotileorasis",
    title: "Έπιπλο Τηλεόρασης",
    category: "Έπιπλα",
    cover: "/gallery/epiplotileorasis.webp",
    images: [
      { src: "/gallery/epiplotileorasis.webp", alt: "Έπιπλο Τηλεόρασης — 1" },
    ],
  },
  {
    id: "gynaikeiodomatio",
    title: "Γυναικείο Δωμάτιο",
    category: "Δωμάτιο",
    cover: "/gallery/gynaikeiodomatio.webp",
    images: [
      { src: "/gallery/gynaikeiodomatio.webp", alt: "Γυναικείο Δωμάτιο — 1" },
    ],
  },
  {
    id: "kafemegalintoulapa",
    title: "Καφέ Ντουλάπα",
    category: "Ντουλάπα",
    cover: "/gallery/kafemegalintoulapa1.webp",
    images: [
      { src: "/gallery/kafemegalintoulapa1.webp", alt: "Καφέ Ντουλάπα — 1" },
      { src: "/gallery/kafemegalintoulapa2.webp", alt: "Καφέ Ντουλάπα — 2" },
    ],
  },
  {
    id: "kafenisi",
    title: "Καφέ — Νησί",
    category: "Ντουλάπα",
    cover: "/gallery/kafentoulapanisi.webp",
    images: [
      { src: "/gallery/kafentoulapanisi.webp", alt: "Καφέ — Νησί — 1" },
      { src: "/gallery/kafeportanisi.webp", alt: "Καφέ — Νησί — 2" },
    ],
  },
  {
    id: "kathreftisntoulapa",
    title: "Ντουλάπα με Καθρέφτη",
    category: "Ντουλάπα",
    cover: "/gallery/kathreftisntoulapa1.webp",
    images: [
      { src: "/gallery/kathreftisntoulapa1.webp", alt: "Ντουλάπα με Καθρέφτη — 1" },
      { src: "/gallery/kathreftisntoulapa2.webp", alt: "Ντουλάπα με Καθρέφτη — 2" },
      { src: "/gallery/kathreftisntoulapa3.webp", alt: "Ντουλάπα με Καθρέφτη — 3" },
      { src: "/gallery/kathreftisntoulapa4.webp", alt: "Ντουλάπα με Καθρέφτη — 4" },
    ],
  },
  {
    id: "koukietatrypidi",
    title: "Κουκέτες",
    category: "Δωμάτιο",
    cover: "/gallery/koukietatrypidi1.webp",
    images: [
      { src: "/gallery/koukietatrypidi1.webp", alt: "Κουκέτες — 1" },
      { src: "/gallery/koukietatrypidi2.webp", alt: "Κουκέτες — 2" },
      { src: "/gallery/koukietatrypidi3.webp", alt: "Κουκέτες — 3" },
      { src: "/gallery/koukietatrypidi4.webp", alt: "Κουκέτες — 4" },
      { src: "/gallery/koukietatrypidi5.webp", alt: "Κουκέτες — 5" },
    ],
  },
  {
    id: "kouzina",
    title: "Κουζίνα",
    category: "Κουζίνα",
    cover: "/gallery/kouzina.webp",
    images: [
      { src: "/gallery/kouzina.webp", alt: "Κουζίνα — 1" },
      { src: "/gallery/kouzina1.webp", alt: "Κουζίνα — 2" },
      { src: "/gallery/kouzina2.webp", alt: "Κουζίνα — 3" },
    ],
  },
  {
    id: "kouzina2airbnb",
    title: "Κουζίνα Airbnb II",
    category: "Κουζίνα",
    cover: "/gallery/kouzina2airbnb1.webp",
    images: [
      { src: "/gallery/kouzina2airbnb1.webp", alt: "Κουζίνα Airbnb II — 1" },
      { src: "/gallery/kouzina2airbnb2.webp", alt: "Κουζίνα Airbnb II — 2" },
    ],
  },
  {
    id: "kouzinaairbnb",
    title: "Κουζίνα Airbnb",
    category: "Κουζίνα",
    cover: "/gallery/kouzinaairbnb1.webp",
    images: [
      { src: "/gallery/kouzinaairbnb1.webp", alt: "Κουζίνα Airbnb — 1" },
      { src: "/gallery/kouzinaairbnb2.webp", alt: "Κουζίνα Airbnb — 2" },
      { src: "/gallery/kouzinaairbnb3.webp", alt: "Κουζίνα Airbnb — 3" },
      { src: "/gallery/kouzinaairbnb4.webp", alt: "Κουζίνα Airbnb — 4" },
    ],
  },
  {
    id: "kouzinaalimos",
    title: "Κουζίνα Αλίμος",
    category: "Κουζίνα",
    cover: "/gallery/kouzinaalimos1.webp",
    images: [
      { src: "/gallery/kouzinaalimos1.webp", alt: "Κουζίνα Αλίμος — 1" },
      { src: "/gallery/kouzinaalimos2.webp", alt: "Κουζίνα Αλίμος — 2" },
      { src: "/gallery/kouzinaalimos3.webp", alt: "Κουζίνα Αλίμος — 3" },
      { src: "/gallery/kouzinaalimos4.webp", alt: "Κουζίνα Αλίμος — 4" },
    ],
  },
  {
    id: "kouzinaaspri",
    title: "Λευκή Κουζίνα",
    category: "Κουζίνα",
    cover: "/gallery/kouzinaaspri.webp",
    images: [
      { src: "/gallery/kouzinaaspri.webp", alt: "Λευκή Κουζίνα — 1" },
      { src: "/gallery/kouzinaaspri1.webp", alt: "Λευκή Κουζίνα — 2" },
      { src: "/gallery/kouzinaaspri2.webp", alt: "Λευκή Κουζίνα — 3" },
      { src: "/gallery/kouzinaaspri3.webp", alt: "Λευκή Κουζίνα — 4" },
      { src: "/gallery/kouzinaaspri4.webp", alt: "Λευκή Κουζίνα — 5" },
      { src: "/gallery/kouzinaaspri5.webp", alt: "Λευκή Κουζίνα — 6" },
    ],
  },
  {
    id: "kouzinadrys",
    title: "Κουζίνα Δρυς",
    category: "Κουζίνα",
    cover: "/gallery/kouzinadrys1.webp",
    images: [
      { src: "/gallery/kouzinadrys1.webp", alt: "Κουζίνα Δρυς — 1" },
      { src: "/gallery/kouzinadrys2.webp", alt: "Κουζίνα Δρυς — 2" },
      { src: "/gallery/kouzinadrys3.webp", alt: "Κουζίνα Δρυς — 3" },
    ],
  },
  {
    id: "kouzinagkri",
    title: "Γκρι Κουζίνα",
    category: "Κουζίνα",
    cover: "/gallery/kouzinagkri1.webp",
    images: [
      { src: "/gallery/kouzinagkri1.webp", alt: "Γκρι Κουζίνα — 1" },
      { src: "/gallery/kouzinagkri2.webp", alt: "Γκρι Κουζίνα — 2" },
      { src: "/gallery/kouzinagkri3.webp", alt: "Γκρι Κουζίνα — 3" },
      { src: "/gallery/kouzinagkri4.webp", alt: "Γκρι Κουζίνα — 4" },
    ],
  },
  {
    id: "kouzinalaka",
    title: "Κουζίνα Λάκα",
    category: "Κουζίνα",
    cover: "/gallery/kouzinalaka1.webp",
    images: [
      { src: "/gallery/kouzinalaka1.webp", alt: "Κουζίνα Λάκα — 1" },
      { src: "/gallery/kouzinalaka2.webp", alt: "Κουζίνα Λάκα — 2" },
      { src: "/gallery/kouzinalaka3.webp", alt: "Κουζίνα Λάκα — 3" },
      { src: "/gallery/kouzinalaka4.webp", alt: "Κουζίνα Λάκα — 4" },
    ],
  },
  {
    id: "kouzinamalaka",
    title: "Κουζίνα — Custom",
    category: "Κουζίνα",
    cover: "/gallery/kouzinamalaka1.webp",
    images: [
      { src: "/gallery/kouzinamalaka1.webp", alt: "Κουζίνα — Custom — 1" },
      { src: "/gallery/kouzinamalaka2.webp", alt: "Κουζίνα — Custom — 2" },
      { src: "/gallery/kouzinamalaka3.webp", alt: "Κουζίνα — Custom — 3" },
      { src: "/gallery/kouzinamalaka4.webp", alt: "Κουζίνα — Custom — 4" },
    ],
  },
  {
    id: "kouzinanisi",
    title: "Κουζίνα Νησί",
    category: "Κουζίνα",
    cover: "/gallery/kouzinanisi1.webp",
    images: [
      { src: "/gallery/kouzinanisi1.webp", alt: "Κουζίνα Νησί — 1" },
      { src: "/gallery/kouzinanisi2.webp", alt: "Κουζίνα Νησί — 2" },
      { src: "/gallery/kouzinanisi3.webp", alt: "Κουζίνα Νησί — 3" },
      { src: "/gallery/kouzinanisi4.webp", alt: "Κουζίνα Νησί — 4" },
    ],
  },
  {
    id: "kouzinaypogeioalimos",
    title: "Κουζίνα Υπόγειο Αλίμος",
    category: "Κουζίνα",
    cover: "/gallery/kouzinaypogeioalimos1.webp",
    images: [
      { src: "/gallery/kouzinaypogeioalimos1.webp", alt: "Κουζίνα Υπόγειο Αλίμος — 1" },
      { src: "/gallery/kouzinaypogeioalimos2.webp", alt: "Κουζίνα Υπόγειο Αλίμος — 2" },
      { src: "/gallery/kouzinaypogeioalimos3.webp", alt: "Κουζίνα Υπόγειο Αλίμος — 3" },
    ],
  },
  {
    id: "ntoulapaairbnb",
    title: "Ντουλάπα Airbnb",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapaairbnb1.webp",
    images: [
      { src: "/gallery/ntoulapaairbnb1.webp", alt: "Ντουλάπα Airbnb — 1" },
      { src: "/gallery/ntoulapaairbnb2.webp", alt: "Ντουλάπα Airbnb — 2" },
    ],
  },
  {
    id: "ntoulapaairbnbalimos",
    title: "Ντουλάπα Airbnb Αλίμος",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapaairbnbalimos1.webp",
    images: [
      { src: "/gallery/ntoulapaairbnbalimos1.webp", alt: "Ντουλάπα Airbnb Αλίμος — 1" },
      { src: "/gallery/ntoulapaairbnbalimos2.webp", alt: "Ντουλάπα Airbnb Αλίμος — 2" },
    ],
  },
  {
    id: "ntoulapagwniaairbnb",
    title: "Ντουλάπα Γωνία Airbnb",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapagwniaairbnb.webp",
    images: [
      { src: "/gallery/ntoulapagwniaairbnb.webp", alt: "Ντουλάπα Γωνία Airbnb — 1" },
    ],
  },
  {
    id: "ntoulapanisi",
    title: "Ντουλάπα Νησί",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapanisi1.webp",
    images: [
      { src: "/gallery/ntoulapanisi1.webp", alt: "Ντουλάπα Νησί — 1" },
      { src: "/gallery/ntoulapanisi2.webp", alt: "Ντουλάπα Νησί — 2" },
    ],
  },
  {
    id: "ntoulapaperamalaka",
    title: "Ντουλάπα Πέρα",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapaperamalaka1.webp",
    images: [
      { src: "/gallery/ntoulapaperamalaka1.webp", alt: "Ντουλάπα Πέρα — 1" },
      { src: "/gallery/ntoulapaperamalaka2.webp", alt: "Ντουλάπα Πέρα — 2" },
      { src: "/gallery/ntoulapaperamalaka3.webp", alt: "Ντουλάπα Πέρα — 3" },
      { src: "/gallery/ntoulapaperamalaka4.webp", alt: "Ντουλάπα Πέρα — 4" },
      { src: "/gallery/ntoulapaperamalaka5.webp", alt: "Ντουλάπα Πέρα — 5" },
    ],
  },
  {
    id: "ntoulapaskala",
    title: "Ντουλάπα Σκάλα",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapaskala1.webp",
    images: [
      { src: "/gallery/ntoulapaskala1.webp", alt: "Ντουλάπα Σκάλα — 1" },
      { src: "/gallery/ntoulapaskala2.webp", alt: "Ντουλάπα Σκάλα — 2" },
      { src: "/gallery/ntoulapaskala3.webp", alt: "Ντουλάπα Σκάλα — 3" },
    ],
  },
  {
    id: "ntoulapasyromeni",
    title: "Συρόμενη Ντουλάπα",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapasyromeni2.webp",
    images: [
      { src: "/gallery/ntoulapasyromeni2.webp", alt: "Συρόμενη Ντουλάπα — 1" },
      { src: "/gallery/ntoulapasyromenimalaka1.webp", alt: "Συρόμενη Ντουλάπα — 2" },
    ],
  },
  {
    id: "ntoulapaypogeioalimos",
    title: "Ντουλάπα Υπόγειο Αλίμος",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapaypogeioalimos1.webp",
    images: [
      { src: "/gallery/ntoulapaypogeioalimos1.webp", alt: "Ντουλάπα Υπόγειο Αλίμος — 1" },
      { src: "/gallery/ntoulapaypogeioalimos2.webp", alt: "Ντουλάπα Υπόγειο Αλίμος — 2" },
    ],
  },
  {
    id: "ntoulapaypogeiogwnia",
    title: "Ντουλάπα Υπόγειο Γωνία",
    category: "Ντουλάπα",
    cover: "/gallery/ntoulapaypogeiogwnia1.webp",
    images: [
      { src: "/gallery/ntoulapaypogeiogwnia1.webp", alt: "Ντουλάπα Υπόγειο Γωνία — 1" },
      { src: "/gallery/ntoulapaypogeiogwnia2.webp", alt: "Ντουλάπα Υπόγειο Γωνία — 2" },
    ],
  },
  {
    id: "pergkolamegali",
    title: "Μεγάλη Πέργκολα",
    category: "Πέργκολα",
    cover: "/gallery/pergkolamegali1.webp",
    images: [
      { src: "/gallery/pergkolamegali1.webp", alt: "Μεγάλη Πέργκολα — 1" },
      { src: "/gallery/pergkolamegali2.webp", alt: "Μεγάλη Πέργκολα — 2" },
      { src: "/gallery/pergkolamegali3.webp", alt: "Μεγάλη Πέργκολα — 3" },
      { src: "/gallery/pergkolamegali4.webp", alt: "Μεγάλη Πέργκολα — 4" },
      { src: "/gallery/pergkolamegali5.webp", alt: "Μεγάλη Πέργκολα — 5" },
    ],
  },
  {
    id: "pergkoles",
    title: "Πέργκολες",
    category: "Πέργκολα",
    cover: "/gallery/pergkoles1.webp",
    images: [
      { src: "/gallery/pergkoles1.webp", alt: "Πέργκολες — 1" },
      { src: "/gallery/pergkoles2.webp", alt: "Πέργκολες — 2" },
      { src: "/gallery/pergkoles3.webp", alt: "Πέργκολες — 3" },
      { src: "/gallery/pergkoles4.webp", alt: "Πέργκολες — 4" },
      { src: "/gallery/pergkoles5.webp", alt: "Πέργκολες — 5" },
      { src: "/gallery/pergkoles6.webp", alt: "Πέργκολες — 6" },
      { src: "/gallery/pergkoles7.webp", alt: "Πέργκολες — 7" },
      { src: "/gallery/pergkoles8.webp", alt: "Πέργκολες — 8" },
      { src: "/gallery/pergkoles9.webp", alt: "Πέργκολες — 9" },
      { src: "/gallery/pergkoles10.webp", alt: "Πέργκολες — 10" },
      { src: "/gallery/pergkoles11.webp", alt: "Πέργκολες — 11" },
      { src: "/gallery/pergkoles12.webp", alt: "Πέργκολες — 12" },
      { src: "/gallery/pergkoles13.webp", alt: "Πέργκολες — 13" },
      { src: "/gallery/pergkoles14.webp", alt: "Πέργκολες — 14" },
      { src: "/gallery/pergkoles15.webp", alt: "Πέργκολες — 15" },
      { src: "/gallery/pergkoles16.webp", alt: "Πέργκολες — 16" },
      { src: "/gallery/pergkoles17.webp", alt: "Πέργκολες — 17" },
    ],
  },
  {
    id: "portaalimos",
    title: "Πόρτα Αλίμος",
    category: "Πόρτα",
    cover: "/gallery/portaalimos1.webp",
    images: [
      { src: "/gallery/portaalimos1.webp", alt: "Πόρτα Αλίμος — 1" },
      { src: "/gallery/portaalimos2.webp", alt: "Πόρτα Αλίμος — 2" },
      { src: "/gallery/portaalimos3.webp", alt: "Πόρτα Αλίμος — 3" },
    ],
  },
  {
    id: "portadrys",
    title: "Πόρτα Δρυς",
    category: "Πόρτα",
    cover: "/gallery/portadrysathina1.webp",
    images: [
      { src: "/gallery/portadrysathina1.webp", alt: "Πόρτα Δρυς — 1" },
      { src: "/gallery/portadrysmeskotia.webp", alt: "Πόρτα Δρυς — 2" },
    ],
  },
  {
    id: "portanisiou",
    title: "Πόρτα Νησιού",
    category: "Πόρτα",
    cover: "/gallery/portanisiou1.webp",
    images: [
      { src: "/gallery/portanisiou1.webp", alt: "Πόρτα Νησιού — 1" },
      { src: "/gallery/portanisiou2.webp", alt: "Πόρτα Νησιού — 2" },
    ],
  },
  {
    id: "skala",
    title: "Σκάλα",
    category: "Έπιπλα",
    cover: "/gallery/skala.jpeg",
    images: [
      { src: "/gallery/skala.jpeg", alt: "Σκάλα — 1" },
    ],
  },
  {
    id: "synthesi",
    title: "Σύνθεση",
    category: "Έπιπλα",
    cover: "/gallery/synthesi1.webp",
    images: [
      { src: "/gallery/synthesi1.webp", alt: "Σύνθεση — 1" },
    ],
  },
  {
    id: "syromenintoulapaairbnb",
    title: "Συρόμενη Ντουλάπα Airbnb",
    category: "Ντουλάπα",
    cover: "/gallery/syromenintoulapaairbnb1.webp",
    images: [
      { src: "/gallery/syromenintoulapaairbnb1.webp", alt: "Συρόμενη Ντουλάπα Airbnb — 1" },
      { src: "/gallery/syromenintoulapaairbnb2.webp", alt: "Συρόμενη Ντουλάπα Airbnb — 2" },
    ],
  },
  {
    id: "syrtariera",
    title: "Συρταριέρα",
    category: "Έπιπλα",
    cover: "/gallery/syrtariera1.webp",
    images: [
      { src: "/gallery/syrtariera1.webp", alt: "Συρταριέρα — 1" },
      { src: "/gallery/syrtariera2.webp", alt: "Συρταριέρα — 2" },
    ],
  },
  {
    id: "tavani",
    title: "Ταβάνι",
    category: "Έπιπλα",
    cover: "/gallery/tavani1.webp",
    images: [
      { src: "/gallery/tavani1.webp", alt: "Ταβάνι — 1" },
      { src: "/gallery/tavani2.webp", alt: "Ταβάνι — 2" },
    ],
  },
  {
    id: "toixosdomatiou",
    title: "Τοίχος Δωματίου",
    category: "Δωμάτιο",
    cover: "/gallery/toixosdomatiou1.webp",
    images: [
      { src: "/gallery/toixosdomatiou1.webp", alt: "Τοίχος Δωματίου — 1" },
      { src: "/gallery/toixosdomatiou2.webp", alt: "Τοίχος Δωματίου — 2" },
    ],
  },
  {
    id: "walkincloset",
    title: "Walk-in Closet",
    category: "Ντουλάπα",
    cover: "/gallery/waalkincloset2.webp",
    images: [
      { src: "/gallery/waalkincloset2.webp", alt: "Walk-in Closet — 1" },
      { src: "/gallery/walkincloset1.webp", alt: "Walk-in Closet — 2" },
    ],
  },
];

export const galleryImageCount = galleryProjects.reduce(
  (sum, p) => sum + p.images.length,
  0
);
