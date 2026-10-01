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
    note: "This balcony clean is the sort of upper-floor glass we plan around building access.",
    serviceType: "Property & exterior care",
  },
  {
    id: "home-clean",
    src: "/images/gallery/home-clean.jpg",
    alt: "Residential kitchen mopped after a clean in a Melbourne terrace home",
    caption: "Home clean",
    note: "The kitchen is the room most households ask to see finished first.",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "garden-care",
    src: "/images/gallery/garden-care.jpg",
    alt: "Australian suburban backyard garden tidy with native shrubs",
    caption: "Garden tidy",
    note: "A suburban garden after the lawn and the shrubs have been brought back into line.",
    serviceType: "Property & exterior care",
  },
  {
    id: "rubbish",
    src: "/images/gallery/rubbish.jpg",
    alt: "Ute loaded with household junk for rubbish removal at a Melbourne home",
    caption: "Rubbish removal",
    note: "Household junk loaded for removal once the stairs and the stopping place were known.",
    serviceType: "Waste & removal",
  },
  {
    id: "hard-waste",
    src: "/images/gallery/hard-waste.jpg",
    alt: "Hard waste skip bin on a Melbourne residential driveway",
    caption: "Hard waste",
    note: "Bulky waste waiting on a driveway, which is simpler to collect than the same load from an upper floor.",
    serviceType: "Waste & removal",
  },
  {
    id: "move-out",
    src: "/images/gallery/move-out.jpg",
    alt: "Empty Melbourne apartment prepared for move-out handover",
    caption: "Move-out handover",
    note: "An apartment emptied and cleaned so it can be handed back.",
    serviceType: "Move-in / move-out",
  },
  {
    id: "staging",
    src: "/images/gallery/staging.jpg",
    alt: "Staged living room in a Melbourne terrace ready for inspection",
    caption: "Property staging",
    note: "A living room dressed so it reads clearly in inspection photographs.",
    serviceType: "Property presentation",
  },
  {
    id: "strata",
    src: "/images/gallery/strata.jpg",
    alt: "Modern Melbourne apartment building with balconies and street trees",
    caption: "Apartment & strata",
    note: "A residential building whose common areas are looked after for the manager.",
    serviceType: "Building & facilities",
  },
  {
    id: "pressure",
    src: "/images/gallery/pressure.jpg",
    alt: "Pressure washing a driveway at an Australian Melbourne suburban house",
    caption: "Exterior wash",
    note: "A driveway mid-wash, where the staining shows why a photograph helps the quote.",
    serviceType: "Property & exterior care",
  },
  {
    id: "office",
    src: "/images/gallery/office.jpg",
    alt: "Commercial office cleaning underway in a Melbourne workplace",
    caption: "Office clean",
    note: "An office cleaned once the floor has emptied for the day.",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "handyman",
    src: "/images/gallery/handyman.jpg",
    alt: "Handyman repairing a timber fence gate in a Melbourne backyard",
    caption: "Handyman jobs",
    note: "A timber gate repair, the kind of small job that shares a morning with other items on a list.",
    serviceType: "Property & exterior care",
  },
  {
    id: "builders-clean",
    src: "/images/gallery/builders-clean.jpg",
    alt: "Builders clean after renovation in a Melbourne apartment",
    caption: "Builders clean",
    note: "A renovated apartment after the dust has been taken off the floors and the glass.",
    serviceType: "Cleaning & hygiene",
  },
];

/** Service types that currently have gallery items, in site order */
export const galleryServiceTypes = serviceGroups.filter((group) =>
  galleryItems.some((item) => item.serviceType === group),
);
