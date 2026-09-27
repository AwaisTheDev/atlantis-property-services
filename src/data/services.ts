export type Service = {
  id: string;
  name: string;
  group: string;
  short: string;
  featured: boolean;
  body: string;
  image: string;
};

export const serviceGroups = [
  "Cleaning & hygiene",
  "Property & exterior care",
  "Waste & removal",
  "Move-in / move-out",
  "Property presentation",
  "Building & facilities",
] as const;

export type ServiceGroup = (typeof serviceGroups)[number];

export type ServiceGroupMeta = {
  name: ServiceGroup;
  slug: string;
  short: string;
  lead: string;
  image: string;
};

/** Parent category pages — slugs are explicit to avoid clashing with service ids */
export const serviceGroupMeta: ServiceGroupMeta[] = [
  {
    name: "Cleaning & hygiene",
    slug: "cleaning-hygiene",
    short: "Homes, offices, vacate cleans and the deeper resets in between.",
    lead: "A weekly home clean in Brunswick East, an office after hours, or a vacate before the keys go back. This is the cleaning we look after across Melbourne’s inner suburbs. Tell us the rooms and the date. We’ll price it before anyone is booked.",
    image: "/images/services/residential-cleaning.jpg",
  },
  {
    name: "Property & exterior care",
    slug: "property-exterior-care",
    short: "Glass, gardens, paint, fences, handyman work and pest control.",
    lead: "Windows, gardens, driveways, paint, fences and the small repairs that keep a place presentable. Melbourne weather, parking and strata access all change the job, so we ask about those before we price it. You deal with us for the booking.",
    image: "/images/services/window-cleaning.jpg",
  },
  {
    name: "Waste & removal",
    slug: "waste-removal",
    short: "Rubbish, furniture, hard waste and full clear-outs.",
    lead: "Household junk, furniture, hard waste and the clear-out of a vacant place. Tell us what’s there, and mention stairs, lifts and where a ute can stop. We’ll price the collection and book it.",
    image: "/images/services/hard-waste.jpg",
  },
  {
    name: "Move-in / move-out",
    slug: "move-in-move-out",
    short: "Vacate work timed to the day the keys change hands.",
    lead: "Move-outs run to a date. We put the clean, and anything else that has to happen before handover, on one request, so tenants, landlords and managers are not booking three companies for the same Friday.",
    image: "/images/services/move-in-out.jpg",
  },
  {
    name: "Property presentation",
    slug: "presentation",
    short: "Staging and styling before a lease, a sale or an inspection.",
    lead: "When a Melbourne home or apartment has to look right for photos, a lease or an open, we look after staging, styling and the preparation around it. Tell us the date and who it is for. We’ll quote the work as one job.",
    image: "/images/services/property-staging.jpg",
  },
  {
    name: "Building & facilities",
    slug: "building-facilities",
    short: "Common areas, turnovers and the upkeep of a building.",
    lead: "Committees, building managers and facilities teams use us for common areas, apartment turnovers and planned maintenance. You have one company to call. We book the people who do the work.",
    image: "/images/services/facility-management.jpg",
  },
];

export const services: Service[] = [
  {
    id: "residential-cleaning",
    name: "Residential cleaning",
    group: "Cleaning & hygiene",
    short: "A regular home clean, or a one-off when the place needs it.",
    featured: true,
    image: "/images/services/residential-cleaning.jpg",
    body: "Houses and apartments across the inner suburbs. Tell us the rooms, how often, and anything awkward about parking or keys. We’ll send a price before the first visit.",
  },
  {
    id: "commercial-cleaning",
    name: "Commercial cleaning",
    group: "Cleaning & hygiene",
    short: "Offices, shops and other premises, on a schedule or once.",
    featured: true,
    image: "/images/services/commercial-cleaning.jpg",
    body: "Tell us the areas, the hours the site is empty, and whether this is weekly or a one-off. Your team deals with us for the quote and any changes after that.",
  },
  {
    id: "apartment-common-area",
    name: "Apartment & common area cleaning",
    group: "Cleaning & hygiene",
    short: "Lobbies, corridors, lifts and the spaces residents share.",
    featured: false,
    image: "/images/services/apartment-common-area.jpg",
    body: "For building managers and owners corporations who want the common areas kept properly, on a set visit, rather than whoever is free that week.",
  },
  {
    id: "end-of-lease",
    name: "End-of-lease cleaning",
    group: "Cleaning & hygiene",
    short: "A vacate clean timed to the inspection and the keys.",
    featured: true,
    image: "/images/services/end-of-lease.jpg",
    body: "Send the checklist, a few photos and the handover date. We’ll price the clean around that day, whether you’re the tenant, the owner or the manager.",
  },
  {
    id: "deep-cleaning",
    name: "Deep cleaning",
    group: "Cleaning & hygiene",
    short: "A thorough clean when a standard visit will not do it.",
    featured: true,
    image: "/images/services/deep-cleaning.jpg",
    body: "Kitchens, bathrooms and the rooms that have been left. Say which ones, and how bad they are. The quote is based on that, not on a flat “whole house” guess.",
  },
  {
    id: "builders-clean",
    name: "Builders site clean",
    group: "Cleaning & hygiene",
    short: "Dust and debris after a renovation, before anyone moves in.",
    featured: false,
    image: "/images/services/builders-clean.jpg",
    body: "Tell us what stage the site is at, how dusty it is, and when the trades will be out. We’ll book the clean around that, so handover is not waiting on a last-minute call.",
  },
  {
    id: "window-cleaning",
    name: "Window cleaning",
    group: "Property & exterior care",
    short: "Inside and outside glass, for homes and commercial sites.",
    featured: true,
    image: "/images/services/window-cleaning.jpg",
    body: "How many storeys, whether we can use the balcony, and any building rules. Those details change the price. Recurring glass care can sit on the same arrangement.",
  },
  {
    id: "pressure-washing",
    name: "Pressure washing",
    group: "Property & exterior care",
    short: "Driveways, paths and the hard surfaces around a building.",
    featured: true,
    image: "/images/services/pressure-washing.jpg",
    body: "A photo of the staining helps. So does a note on where the water comes from, and whether the building has rules about runoff.",
  },
  {
    id: "exterior-cleaning",
    name: "Exterior cleaning",
    group: "Property & exterior care",
    short: "Façades, courtyards and the outside of the building.",
    featured: false,
    image: "/images/services/exterior-cleaning.jpg",
    body: "The face of the building and the outdoor areas people actually see. Tell us what you want brought back, and whether it has to be done before a particular date.",
  },
  {
    id: "gardening-landscaping",
    name: "Gardening / landscaping",
    group: "Property & exterior care",
    short: "Lawns, beds and hedges, once or on a regular visit.",
    featured: true,
    image: "/images/services/gardening-landscaping.jpg",
    body: "A one-off tidy before an inspection, or a visit that keeps the garden in shape. Say what you want left, and how we get a trailer in.",
  },
  {
    id: "painting",
    name: "Painting",
    group: "Property & exterior care",
    short: "Interior and exterior paint, for a refresh or a handover.",
    featured: false,
    image: "/images/services/painting.jpg",
    body: "Rooms, surfaces and the date it has to be dry. Often booked before a lease or sale, or after repairs have left the walls looking unfinished.",
  },
  {
    id: "fence-repairs",
    name: "Fence repairs",
    group: "Property & exterior care",
    short: "Timber and boundary fences, quoted from photos where we can.",
    featured: false,
    image: "/images/services/fence-repairs.jpg",
    body: "A photo of the damaged panels or posts is usually enough to price a repair. Tell us if a neighbour’s side is involved.",
  },
  {
    id: "handyman",
    name: "Handyman services",
    group: "Property & exterior care",
    short: "The small repairs that are not worth a separate trade each.",
    featured: true,
    image: "/images/services/handyman.jpg",
    body: "List the jobs. A loose hinge, a few patches, a fitting that has failed. We’ll price them together rather than sending you to three different people.",
  },
  {
    id: "pest-control",
    name: "Pest control",
    group: "Property & exterior care",
    short: "Treatment based on what you’re seeing, and where.",
    featured: false,
    image: "/images/services/pest-control.jpg",
    body: "Tell us the pest and the rooms or areas. We’ll book a treatment and confirm what is included before anyone comes out.",
  },
  {
    id: "common-area-maintenance",
    name: "Common area maintenance",
    group: "Property & exterior care",
    short: "Upkeep of the shared outdoor areas in a complex.",
    featured: false,
    image: "/images/services/common-area-maintenance.jpg",
    body: "Gardens, paths and the small repairs in spaces residents share. Useful when a manager does not want a different contractor for each item.",
  },
  {
    id: "property-maintenance",
    name: "Property maintenance",
    group: "Property & exterior care",
    short: "A one-off repair, or a plan that keeps on top of the place.",
    featured: true,
    image: "/images/services/property-maintenance.jpg",
    body: "Describe what’s failing and how we get in. We can price a single visit or a regular round, and you stay with us if something needs following up.",
  },
  {
    id: "rubbish-removal",
    name: "Rubbish removal",
    group: "Waste & removal",
    short: "Household junk and general waste, priced from the load.",
    featured: true,
    image: "/images/services/rubbish-removal.jpg",
    body: "Describe what’s there, plus stairs, lifts and where we can park. The quote follows the load, not a guess from the street.",
  },
  {
    id: "furniture-removal",
    name: "Furniture removal",
    group: "Waste & removal",
    short: "One piece, or a room of furniture.",
    featured: false,
    image: "/images/services/furniture-removal.jpg",
    body: "A sofa or a full room. Photos and a note on stairs or a lift are what make the price accurate.",
  },
  {
    id: "property-clean-outs",
    name: "Property clean-outs",
    group: "Waste & removal",
    short: "Clearing a vacant or heavily cluttered property.",
    featured: false,
    image: "/images/services/property-clean-outs.jpg",
    body: "Tell us the condition and how full it is. We’ll price a clear-out that leaves the place ready for the next step, not half done.",
  },
  {
    id: "hard-waste",
    name: "Hard waste removal",
    group: "Waste & removal",
    short: "Bulk items a council collection will not take.",
    featured: false,
    image: "/images/services/hard-waste.jpg",
    body: "List the items and how we get them out. We’ll arrange collection for houses, apartments and commercial sites.",
  },
  {
    id: "move-in-out",
    name: "Move-in / move-out services",
    group: "Move-in / move-out",
    short: "Cleaning and the other jobs that have to land on moving day.",
    featured: false,
    image: "/images/services/move-in-out.jpg",
    body: "Share the dates and what has to be finished before the keys change. Cleaning and related tasks can be booked together.",
  },
  {
    id: "property-presentation",
    name: "Property presentation",
    group: "Move-in / move-out",
    short: "Getting a place ready before photos, a lease or a sale.",
    featured: false,
    image: "/images/services/property-presentation.jpg",
    body: "The clean, the small repairs and the presentation, timed to the day the photographer or the new tenant arrives.",
  },
  {
    id: "property-staging",
    name: "Property staging",
    group: "Property presentation",
    short: "Staging timed to inspections and photography.",
    featured: false,
    image: "/images/services/property-staging.jpg",
    body: "Tell us who the property is for, which rooms matter, and the inspection dates. We’ll quote the staging to that calendar.",
  },
  {
    id: "interior-styling",
    name: "Interior styling",
    group: "Property presentation",
    short: "Styling that lifts a property before people walk through.",
    featured: false,
    image: "/images/services/interior-styling.jpg",
    body: "Share the rooms and the impression you want. We’ll quote the styling and keep the timing with your campaign.",
  },
  {
    id: "interior-design",
    name: "Interior design",
    group: "Property presentation",
    short: "Design help for a home or an investment property.",
    featured: false,
    image: "/images/services/interior-design.jpg",
    body: "Outline what you want the place to do, and by when. We’ll quote the design work and keep it with the rest of the preparation if you need both.",
  },
  {
    id: "furniture-supply",
    name: "Furniture supply & placement",
    group: "Property presentation",
    short: "Furniture supplied and placed for staging.",
    featured: false,
    image: "/images/services/furniture-supply.jpg",
    body: "We line the delivery up with your inspection or photoshoot, so the furniture is in the rooms when it needs to be, not the week after.",
  },
  {
    id: "property-preparation",
    name: "Property preparation",
    group: "Property presentation",
    short: "Clean, repair and present, before the next lease or sale.",
    featured: false,
    image: "/images/services/property-preparation.jpg",
    body: "Owners and managers use this when several jobs have to land before a tenant returns or a campaign starts. Put them on one request.",
  },
  {
    id: "facility-management",
    name: "Facility management",
    group: "Building & facilities",
    short: "Ongoing care for a building, through one company.",
    featured: false,
    image: "/images/services/facility-management.jpg",
    body: "Cleaning, maintenance and the related work a building needs through the year. You call us. We book the visits.",
  },
  {
    id: "building-support",
    name: "Building support services",
    group: "Building & facilities",
    short: "Day-to-day help for managers and committees.",
    featured: false,
    image: "/images/services/building-support.jpg",
    body: "Describe the issue and how urgent it is. We’ll book someone and stay the name you call if it needs another look.",
  },
  {
    id: "preventative-maintenance",
    name: "Preventative maintenance",
    group: "Building & facilities",
    short: "Planned visits, before small faults become larger ones.",
    featured: false,
    image: "/images/services/preventative-maintenance.jpg",
    body: "We can price a first round of upkeep and, if it suits, put it on a schedule so you are not calling only when something fails.",
  },
  {
    id: "apartment-turnover",
    name: "Apartment turnover services",
    group: "Building & facilities",
    short: "Turning a vacant apartment over between tenancies.",
    featured: false,
    image: "/images/services/apartment-turnover.jpg",
    body: "Clean, present and the related tasks, on a date a manager can rely on when several apartments are turning over at once.",
  },
  {
    id: "strata-common",
    name: "Strata & common property services",
    group: "Building & facilities",
    short: "Common property work for strata and owners corporations.",
    featured: false,
    image: "/images/services/strata-common.jpg",
    body: "Tell us the common areas and the building’s access rules. We’ll quote the work and report back to the person you nominate.",
  },
];

export function servicesByGroup() {
  return serviceGroupMeta.map((meta) => ({
    group: meta.name,
    slug: meta.slug,
    meta,
    items: services.filter((s) => s.group === meta.name),
  }));
}

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}

export function getServiceGroupBySlug(slug: string) {
  return serviceGroupMeta.find((g) => g.slug === slug);
}

export function getServiceGroupByName(name: string) {
  return serviceGroupMeta.find((g) => g.name === name);
}

export function servicesInGroup(group: ServiceGroup | string) {
  return services.filter((s) => s.group === group);
}

export function relatedServices(service: Service, limit = 4) {
  return services.filter((s) => s.group === service.group && s.id !== service.id).slice(0, limit);
}

export function groupPath(group: ServiceGroup | string) {
  const meta = getServiceGroupByName(group);
  return meta ? `/services/${meta.slug}` : "/services";
}
