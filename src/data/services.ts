export type Service = {
  id: string;
  name: string;
  group: string;
  short: string;
  featured: boolean;
};

export const serviceGroups = [
  "Cleaning & hygiene",
  "Property & exterior care",
  "Waste & removal",
  "Move-in / move-out",
  "Property presentation",
  "Building & facilities",
] as const;

export const services: Service[] = [
  { id: "residential-cleaning", name: "Residential cleaning", group: "Cleaning & hygiene", short: "Regular or one-off home cleaning.", featured: true },
  { id: "commercial-cleaning", name: "Commercial cleaning", group: "Cleaning & hygiene", short: "Offices, shops, and business premises.", featured: true },
  { id: "apartment-common-area", name: "Apartment & common area cleaning", group: "Cleaning & hygiene", short: "Shared spaces in apartments and complexes.", featured: false },
  { id: "end-of-lease", name: "End-of-lease cleaning", group: "Cleaning & hygiene", short: "Vacate cleans for tenants, landlords, and managers.", featured: true },
  { id: "deep-cleaning", name: "Deep cleaning", group: "Cleaning & hygiene", short: "Thorough cleans beyond a standard visit.", featured: true },
  { id: "builders-clean", name: "Builders site clean", group: "Cleaning & hygiene", short: "Post-construction and renovation cleans.", featured: false },
  { id: "window-cleaning", name: "Window cleaning", group: "Property & exterior care", short: "Interior and exterior glass.", featured: true },
  { id: "pressure-washing", name: "Pressure washing", group: "Property & exterior care", short: "Driveways, facades, and hard surfaces.", featured: true },
  { id: "exterior-cleaning", name: "Exterior cleaning", group: "Property & exterior care", short: "Building exteriors and outdoor areas.", featured: false },
  { id: "gardening-landscaping", name: "Gardening / landscaping", group: "Property & exterior care", short: "Gardens, lawns, and outdoor presentation.", featured: true },
  { id: "painting", name: "Painting", group: "Property & exterior care", short: "Interior and exterior painting.", featured: false },
  { id: "fence-repairs", name: "Fence repairs", group: "Property & exterior care", short: "Repair and restoration of fencing.", featured: false },
  { id: "handyman", name: "Handyman services", group: "Property & exterior care", short: "General property repairs and odd jobs.", featured: true },
  { id: "pest-control", name: "Pest control", group: "Property & exterior care", short: "Property pest treatment by arrangement.", featured: false },
  { id: "common-area-maintenance", name: "Common area maintenance", group: "Property & exterior care", short: "Shared-area upkeep for complexes.", featured: false },
  { id: "property-maintenance", name: "Property maintenance", group: "Property & exterior care", short: "Ongoing care for homes and commercial sites.", featured: true },
  { id: "rubbish-removal", name: "Rubbish removal", group: "Waste & removal", short: "General waste and junk removal.", featured: true },
  { id: "furniture-removal", name: "Furniture removal", group: "Waste & removal", short: "Single items through to full loads.", featured: false },
  { id: "property-clean-outs", name: "Property clean-outs", group: "Waste & removal", short: "Clearing vacant or cluttered properties.", featured: false },
  { id: "hard-waste", name: "Hard waste removal", group: "Waste & removal", short: "Bulk and hard rubbish collection.", featured: false },
  { id: "move-in-out", name: "Move-in / move-out services", group: "Move-in / move-out", short: "Coordinated help around a move.", featured: false },
  { id: "property-presentation", name: "Property presentation", group: "Move-in / move-out", short: "Make-ready work before photos, lease, or sale.", featured: false },
  { id: "property-staging", name: "Property staging", group: "Property presentation", short: "Quote-led staging for presentation.", featured: false },
  { id: "interior-styling", name: "Interior styling", group: "Property presentation", short: "Styling support for property presentation.", featured: false },
  { id: "interior-design", name: "Interior design", group: "Property presentation", short: "Design support arranged through Atlantis.", featured: false },
  { id: "furniture-supply", name: "Furniture supply & placement", group: "Property presentation", short: "Supply and placement as part of a coordinated job.", featured: false },
  { id: "property-preparation", name: "Property preparation", group: "Property presentation", short: "Getting a property ready for the next chapter.", featured: false },
  { id: "facility-management", name: "Facility management", group: "Building & facilities", short: "Coordinated facilities support for buildings.", featured: false },
  { id: "building-support", name: "Building support services", group: "Building & facilities", short: "Day-to-day building support.", featured: false },
  { id: "preventative-maintenance", name: "Preventative maintenance", group: "Building & facilities", short: "Planned upkeep before problems grow.", featured: false },
  { id: "apartment-turnover", name: "Apartment turnover services", group: "Building & facilities", short: "Turnovers between tenancies.", featured: false },
  { id: "strata-common", name: "Strata & common property services", group: "Building & facilities", short: "Work for strata and common property.", featured: false },
];

export function servicesByGroup() {
  return serviceGroups.map((group) => ({
    group,
    items: services.filter((s) => s.group === group),
  }));
}
