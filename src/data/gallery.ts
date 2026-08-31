import { serviceGroups } from "./services";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  /** Matches a value from serviceGroups */
  serviceType: (typeof serviceGroups)[number];
};

export const galleryItems: GalleryItem[] = [
  {
    id: "modern-home",
    src: "/images/gallery/modern-home.jpg",
    alt: "Melbourne inner-suburban houses on a residential street at dusk",
    caption: "Residential streetscape",
    serviceType: "Property & exterior care",
  },
  {
    id: "living-room",
    src: "/images/gallery/living-room.jpg",
    alt: "Australian indoor-outdoor living space with timber and courtyard",
    caption: "Indoor–outdoor living",
    serviceType: "Property presentation",
  },
  {
    id: "kitchen",
    src: "/images/gallery/kitchen.jpg",
    alt: "Sunlit Australian interior table with native billy-button flowers",
    caption: "Interior presentation",
    serviceType: "Cleaning & hygiene",
  },
  {
    id: "garden-path",
    src: "/images/gallery/garden-path.jpg",
    alt: "Australian backyard timber fence and garden planting",
    caption: "Garden care",
    serviceType: "Property & exterior care",
  },
  {
    id: "apartment-facade",
    src: "/images/gallery/apartment-facade.jpg",
    alt: "Melbourne apartment building balcony facade",
    caption: "Apartment & strata",
    serviceType: "Building & facilities",
  },
  {
    id: "office-space",
    src: "/images/gallery/office-space.jpg",
    alt: "Modern office building in Melbourne CBD",
    caption: "Commercial premises",
    serviceType: "Cleaning & hygiene",
  },
];

/** Service types that currently have gallery items, in site order */
export const galleryServiceTypes = serviceGroups.filter((group) =>
  galleryItems.some((item) => item.serviceType === group),
);
