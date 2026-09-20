import { serviceGroups } from "./services";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  note: string;
  /** Matches a value from serviceGroups */
  serviceType: (typeof serviceGroups)[number];
};

export const galleryItems: GalleryItem[] = [
  {
    id: "window-clean",
    src: "/images/gallery/window-clean.jpg",
    alt: "Window cleaner working on a Melbourne inner-suburb apartment balcony",
    caption: "Window clean",
    note: "High-rise and street-level glass — arranged through one Atlantis request.",
    serviceType: "Property & exterior care",
  },
  {
    id: "home-clean",
    src: "/images/gallery/home-clean.jpg",
    alt: "Residential kitchen mopped after a clean in a Melbourne terrace home",
    caption: "Home clean",
    note: "Regular or one-off cleans for houses and apartments across the inner suburbs.",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "garden-care",
    src: "/images/gallery/garden-care.jpg",
    alt: "Australian suburban backyard garden tidy with native shrubs",
    caption: "Garden tidy",
    note: "Lawns, beds and outdoor areas kept looking after between visits.",
    serviceType: "Property & exterior care",
  },
  {
    id: "rubbish",
    src: "/images/gallery/rubbish.jpg",
    alt: "Ute loaded with household junk for rubbish removal at a Melbourne home",
    caption: "Rubbish removal",
    note: "Junk and bulky items cleared without you chasing separate skip companies.",
    serviceType: "Waste & removal",
  },
  {
    id: "hard-waste",
    src: "/images/gallery/hard-waste.jpg",
    alt: "Hard waste skip bin on a Melbourne residential driveway",
    caption: "Hard waste",
    note: "Skip and hard-waste jobs scoped from photos and access notes you send.",
    serviceType: "Waste & removal",
  },
  {
    id: "move-out",
    src: "/images/gallery/move-out.jpg",
    alt: "Empty Melbourne apartment prepared for move-out handover",
    caption: "Move-out handover",
    note: "Vacate cleans and related jobs timed around key handover.",
    serviceType: "Move-in / move-out",
  },
  {
    id: "staging",
    src: "/images/gallery/staging.jpg",
    alt: "Staged living room in a Melbourne terrace ready for inspection",
    caption: "Property staging",
    note: "Presentation work for lease, sale or inspection — quote-led.",
    serviceType: "Property presentation",
  },
  {
    id: "strata",
    src: "/images/gallery/strata.jpg",
    alt: "Modern Melbourne apartment building with balconies and street trees",
    caption: "Apartment & strata",
    note: "Common areas and building support coordinated for managers and committees.",
    serviceType: "Building & facilities",
  },
  {
    id: "pressure",
    src: "/images/gallery/pressure.jpg",
    alt: "Pressure washing a driveway at an Australian Melbourne suburban house",
    caption: "Exterior wash",
    note: "Driveways, façades and outdoor hard surfaces freshened up.",
    serviceType: "Property & exterior care",
  },
  {
    id: "office",
    src: "/images/gallery/office.jpg",
    alt: "Commercial office cleaning underway in a Melbourne workplace",
    caption: "Office clean",
    note: "Scheduled commercial cleans with one accountable contact.",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "handyman",
    src: "/images/gallery/handyman.jpg",
    alt: "Handyman repairing a timber fence gate in a Melbourne backyard",
    caption: "Handyman jobs",
    note: "Small repairs and maintenance without juggling separate trades.",
    serviceType: "Property & exterior care",
  },
  {
    id: "builders-clean",
    src: "/images/gallery/builders-clean.jpg",
    alt: "Builders clean after renovation in a Melbourne apartment",
    caption: "Builders clean",
    note: "Post-reno cleans so a space is ready to hand over or move into.",
    serviceType: "Cleaning & hygiene",
  },
];

/** Service types that currently have gallery items, in site order */
export const galleryServiceTypes = serviceGroups.filter((group) =>
  galleryItems.some((item) => item.serviceType === group),
);
