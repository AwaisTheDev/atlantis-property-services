export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
};

export const galleryCategories = [
  "Residential",
  "Commercial",
  "Gardens",
  "Cleaning",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "modern-home",
    src: "/images/gallery/modern-home.jpg",
    alt: "Melbourne inner-suburban houses on a residential street at dusk",
    caption: "Residential streetscape",
    category: "Residential",
  },
  {
    id: "living-room",
    src: "/images/gallery/living-room.jpg",
    alt: "Australian indoor-outdoor living space with timber and courtyard",
    caption: "Indoor–outdoor living",
    category: "Residential",
  },
  {
    id: "kitchen",
    src: "/images/gallery/kitchen.jpg",
    alt: "Sunlit Australian interior table with native billy-button flowers",
    caption: "Interior presentation",
    category: "Cleaning",
  },
  {
    id: "garden-path",
    src: "/images/gallery/garden-path.jpg",
    alt: "Australian backyard timber fence and garden planting",
    caption: "Garden care",
    category: "Gardens",
  },
  {
    id: "apartment-facade",
    src: "/images/gallery/apartment-facade.jpg",
    alt: "Melbourne apartment building balcony facade",
    caption: "Apartment & strata",
    category: "Commercial",
  },
  {
    id: "office-space",
    src: "/images/gallery/office-space.jpg",
    alt: "Modern office building in Melbourne CBD",
    caption: "Commercial premises",
    category: "Commercial",
  },
];
