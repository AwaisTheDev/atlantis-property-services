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
    src: "/images/services/window-cleaning.jpg",
    alt: "Window cleaning on a Melbourne apartment facade",
    caption: "Window clean",
    note: "High-rise and street-level glass — arranged through one Atlantis request.",
    serviceType: "Property & exterior care",
  },
  {
    id: "home-clean",
    src: "/images/services/residential-cleaning.jpg",
    alt: "Residential kitchen being mopped after a clean",
    caption: "Home clean",
    note: "Regular or one-off cleans for houses and apartments across the inner suburbs.",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "garden-care",
    src: "/images/services/gardening-landscaping.jpg",
    alt: "Garden tools and outdoor maintenance work",
    caption: "Garden tidy",
    note: "Lawns, beds and outdoor areas kept looking after between visits.",
    serviceType: "Property & exterior care",
  },
  {
    id: "rubbish",
    src: "/images/services/rubbish-removal.jpg",
    alt: "Rubbish and hard waste being loaded for removal",
    caption: "Rubbish removal",
    note: "Junk and bulky items cleared without you chasing separate skip companies.",
    serviceType: "Waste & removal",
  },
  {
    id: "hard-waste",
    src: "/images/services/hard-waste.jpg",
    alt: "Skip bin on a residential driveway for hard waste",
    caption: "Hard waste",
    note: "Skip and hard-waste jobs scoped from photos and access notes you send.",
    serviceType: "Waste & removal",
  },
  {
    id: "move-out",
    src: "/images/services/move-in-out.jpg",
    alt: "Couple packing and preparing a home for move-out",
    caption: "Move-out handover",
    note: "Vacate cleans and related jobs timed around key handover.",
    serviceType: "Move-in / move-out",
  },
  {
    id: "staging",
    src: "/images/services/property-staging.jpg",
    alt: "Staged living room ready for inspection",
    caption: "Property staging",
    note: "Presentation work for lease, sale or inspection — quote-led.",
    serviceType: "Property presentation",
  },
  {
    id: "strata",
    src: "/images/gallery/apartment-facade.jpg",
    alt: "Melbourne apartment building with balconies",
    caption: "Apartment & strata",
    note: "Common areas and building support coordinated for managers and committees.",
    serviceType: "Building & facilities",
  },
  {
    id: "pressure",
    src: "/images/services/pressure-washing.jpg",
    alt: "Pressure washing an exterior surface",
    caption: "Exterior wash",
    note: "Driveways, façades and outdoor hard surfaces freshened up.",
    serviceType: "Property & exterior care",
  },
  {
    id: "office",
    src: "/images/services/commercial-cleaning.jpg",
    alt: "Commercial office cleaning in progress",
    caption: "Office clean",
    note: "Scheduled commercial cleans with one accountable contact.",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "handyman",
    src: "/images/services/handyman.jpg",
    alt: "Handyman completing a repair on site",
    caption: "Handyman jobs",
    note: "Small repairs and maintenance without juggling separate trades.",
    serviceType: "Property & exterior care",
  },
  {
    id: "builders-clean",
    src: "/images/services/builders-clean.jpg",
    alt: "Post-renovation builders clean with dust vacuum",
    caption: "Builders clean",
    note: "Post-reno cleans so a space is ready to hand over or move into.",
    serviceType: "Cleaning & hygiene",
  },
];

/** Service types that currently have gallery items, in site order */
export const galleryServiceTypes = serviceGroups.filter((group) =>
  galleryItems.some((item) => item.serviceType === group),
);
