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
    note: "Street-level glass and higher floors, including balcony access.",
    serviceType: "Property & exterior care",
  },
  {
    id: "home-clean",
    src: "/images/gallery/home-clean.jpg",
    alt: "Residential kitchen mopped after a clean in a Melbourne terrace home",
    caption: "Home clean",
    note: "A home clean, once or on a regular day.",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "garden-care",
    src: "/images/gallery/garden-care.jpg",
    alt: "Australian suburban backyard garden tidy with native shrubs",
    caption: "Garden tidy",
    note: "Lawns and beds, brought back or kept in shape.",
    serviceType: "Property & exterior care",
  },
  {
    id: "rubbish",
    src: "/images/gallery/rubbish.jpg",
    alt: "Ute loaded with household junk for rubbish removal at a Melbourne home",
    caption: "Rubbish removal",
    note: "A ute load of household junk, taken from the property.",
    serviceType: "Waste & removal",
  },
  {
    id: "hard-waste",
    src: "/images/gallery/hard-waste.jpg",
    alt: "Hard waste skip bin on a Melbourne residential driveway",
    caption: "Hard waste",
    note: "Hard waste priced from photos and how we get it out.",
    serviceType: "Waste & removal",
  },
  {
    id: "move-out",
    src: "/images/gallery/move-out.jpg",
    alt: "Empty Melbourne apartment prepared for move-out handover",
    caption: "Move-out handover",
    note: "An apartment cleared and cleaned for handover.",
    serviceType: "Move-in / move-out",
  },
  {
    id: "staging",
    src: "/images/gallery/staging.jpg",
    alt: "Staged living room in a Melbourne terrace ready for inspection",
    caption: "Property staging",
    note: "A living room dressed for inspection or photography.",
    serviceType: "Property presentation",
  },
  {
    id: "strata",
    src: "/images/gallery/strata.jpg",
    alt: "Modern Melbourne apartment building with balconies and street trees",
    caption: "Apartment & strata",
    note: "Apartment buildings, for managers and committees.",
    serviceType: "Building & facilities",
  },
  {
    id: "pressure",
    src: "/images/gallery/pressure.jpg",
    alt: "Pressure washing a driveway at an Australian Melbourne suburban house",
    caption: "Exterior wash",
    note: "A driveway and the hard surfaces around the house.",
    serviceType: "Property & exterior care",
  },
  {
    id: "office",
    src: "/images/gallery/office.jpg",
    alt: "Commercial office cleaning underway in a Melbourne workplace",
    caption: "Office clean",
    note: "An office clean, after the floor has emptied.",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "handyman",
    src: "/images/gallery/handyman.jpg",
    alt: "Handyman repairing a timber fence gate in a Melbourne backyard",
    caption: "Handyman jobs",
    note: "A gate, a fitting, the jobs that sit between bigger trades.",
    serviceType: "Property & exterior care",
  },
  {
    id: "builders-clean",
    src: "/images/gallery/builders-clean.jpg",
    alt: "Builders clean after renovation in a Melbourne apartment",
    caption: "Builders clean",
    note: "Dust and debris after a renovation, before move-in.",
    serviceType: "Cleaning & hygiene",
  },
];

/** Service types that currently have gallery items, in site order */
export const galleryServiceTypes = serviceGroups.filter((group) =>
  galleryItems.some((item) => item.serviceType === group),
);
