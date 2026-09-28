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
    lead: "Weekly cleans, an office after the staff have gone, a bond clean the day before the keys go back. The rooms, and whether a date is stuck to it, are the two things that matter.",
    image: "/images/services/residential-cleaning.jpg",
  },
  {
    name: "Property & exterior care",
    slug: "property-exterior-care",
    short: "Glass, gardens, paint, fences, handyman work and pest control.",
    lead: "Windows, gardens, driveways, paint, fences, the odd repair. Melbourne weather will move an outdoor job, and a body corporate can be fussy about balconies, so it’s worth saying that at the start.",
    image: "/images/services/window-cleaning.jpg",
  },
  {
    name: "Waste & removal",
    slug: "waste-removal",
    short: "Rubbish, furniture, hard waste and full clear-outs.",
    lead: "Junk, furniture, hard rubbish, or a place that’s been left full. A rough list is fine. Stairs, a lift, and whether a ute can actually stop out the front — that’s what changes the price.",
    image: "/images/services/hard-waste.jpg",
  },
  {
    name: "Move-in / move-out",
    slug: "move-in-move-out",
    short: "Vacate work timed to the day the keys change hands.",
    lead: "Move-outs are always a date. The clean, and whatever else has to happen before the keys go back, can go on the one request. Saves you booking three people for the same Friday.",
    image: "/images/services/move-in-out.jpg",
  },
  {
    name: "Property presentation",
    slug: "presentation",
    short: "Staging and styling before a lease, a sale or an inspection.",
    lead: "Photos, a lease, an open for inspection. If the place has to look right by a certain morning, tell us who it’s for and when. Staging, styling and the tidy-up around it can be one job.",
    image: "/images/services/property-staging.jpg",
  },
  {
    name: "Building & facilities",
    slug: "building-facilities",
    short: "Common areas, turnovers and the upkeep of a building.",
    lead: "Committees and building managers call us for foyers, turnovers between tenants, and the maintenance that should happen before something breaks. One number. We send the people.",
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
    body: "Houses and units. A set morning each fortnight, or a one-off when the place has got away from you. Parking and the keys are what usually hold the first visit up.",
  },
  {
    id: "commercial-cleaning",
    name: "Commercial cleaning",
    group: "Cleaning & hygiene",
    short: "Offices, shops and other premises, on a schedule or once.",
    featured: true,
    image: "/images/services/commercial-cleaning.jpg",
    body: "Offices, shops, small tenancies. After the staff have gone, or a morning the shop is shut. If next week’s clean has to move, say so before we turn up to a locked door.",
  },
  {
    id: "apartment-common-area",
    name: "Apartment & common area cleaning",
    group: "Cleaning & hygiene",
    short: "Lobbies, corridors, lifts and the spaces residents share.",
    featured: false,
    image: "/images/services/apartment-common-area.jpg",
    body: "Lobbies, the lift, the mailroom, the bin room. Booked on a set visit, so the common areas don’t depend on who happened to be rostered.",
  },
  {
    id: "end-of-lease",
    name: "End-of-lease cleaning",
    group: "Cleaning & hygiene",
    short: "A vacate clean timed to the inspection and the keys.",
    featured: true,
    image: "/images/services/end-of-lease.jpg",
    body: "The day the keys go back is the whole job. Ovens, skirts, the bathroom the last clean skipped. If the agency sent a checklist, that’s what we work off.",
  },
  {
    id: "deep-cleaning",
    name: "Deep cleaning",
    group: "Cleaning & hygiene",
    short: "A thorough clean when a standard visit will not do it.",
    featured: true,
    image: "/images/services/deep-cleaning.jpg",
    body: "The kitchen that’s had a year of splatter, a bathroom that’s gone past a wipe, a place that’s been empty. A room count without photos is a guess.",
  },
  {
    id: "builders-clean",
    name: "Builders site clean",
    group: "Cleaning & hygiene",
    short: "Dust and debris after a renovation, before anyone moves in.",
    featured: false,
    image: "/images/services/builders-clean.jpg",
    body: "Plaster dust, paint speck, the offcuts left in the bath. It has to wait until the tradies are actually out — a clean while the tiler’s still there just gets ruined.",
  },
  {
    id: "window-cleaning",
    name: "Window cleaning",
    group: "Property & exterior care",
    short: "Inside and outside glass, for homes and commercial sites.",
    featured: true,
    image: "/images/services/window-cleaning.jpg",
    body: "Street level or a few floors up, inside or out. Balcony access, and whatever the body corporate allows, is what changes it. Rain will shove an outside clean.",
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
    body: "The front people see from the footpath, and the courtyard nobody’s looked at since winter. Algae, cobwebs, the bins. If it has to be done before an open, say which morning.",
  },
  {
    id: "gardening-landscaping",
    name: "Gardening / landscaping",
    group: "Property & exterior care",
    short: "Lawns, beds and hedges, once or on a regular visit.",
    featured: true,
    image: "/images/services/gardening-landscaping.jpg",
    body: "A cut before an inspection, or someone coming every few weeks so it doesn’t get away again. Beds, lawn, the hedge on the lane. Some drives won’t take a trailer.",
  },
  {
    id: "painting",
    name: "Painting",
    group: "Property & exterior care",
    short: "Interior and exterior paint, for a refresh or a handover.",
    featured: false,
    image: "/images/services/painting.jpg",
    body: "A couple of rooms before a new lease, or the weatherboards and the front fence. “Sometime next month” and “dry before Saturday’s open” are different jobs.",
  },
  {
    id: "fence-repairs",
    name: "Fence repairs",
    group: "Property & exterior care",
    short: "Timber and boundary fences, quoted from photos where we can.",
    featured: false,
    image: "/images/services/fence-repairs.jpg",
    body: "A blown panel, a leaning post, the palings a dog has been at. A photo is usually enough. If it’s a shared fence, say whose side we’re dealing with.",
  },
  {
    id: "handyman",
    name: "Handyman services",
    group: "Property & exterior care",
    short: "The small repairs that are not worth a separate trade each.",
    featured: true,
    image: "/images/services/handyman.jpg",
    body: "The list that isn’t worth three call-outs. A hinge, a silicone edge, a tap washer, the hall light. One visit if they’ll fit in the same morning.",
  },
  {
    id: "pest-control",
    name: "Pest control",
    group: "Property & exterior care",
    short: "Treatment based on what you’re seeing, and where.",
    featured: false,
    image: "/images/services/pest-control.jpg",
    body: "Ants in the kitchen, cockroaches behind the fridge, wasps under the eave. What you’re seeing, and which rooms. We’ll say what the treatment covers before anyone comes out.",
  },
  {
    id: "common-area-maintenance",
    name: "Common area maintenance",
    group: "Property & exterior care",
    short: "Upkeep of the shared outdoor areas in a complex.",
    featured: false,
    image: "/images/services/common-area-maintenance.jpg",
    body: "The shared garden, the paths, the gate that sticks. For a manager who doesn’t want a different contractor every time something small comes up.",
  },
  {
    id: "property-maintenance",
    name: "Property maintenance",
    group: "Property & exterior care",
    short: "A one-off repair, or a plan that keeps on top of the place.",
    featured: true,
    image: "/images/services/property-maintenance.jpg",
    body: "A leaking tap this week, or a round every couple of months so the small stuff doesn’t sit until a tenant complains. A lockbox or a resident home after five — say which.",
  },
  {
    id: "rubbish-removal",
    name: "Rubbish removal",
    group: "Waste & removal",
    short: "Household junk and general waste, priced from the load.",
    featured: true,
    image: "/images/services/rubbish-removal.jpg",
    body: "What’s actually there, plus stairs, a lift, and where a ute can stop. The price follows the load. We’re not guessing from the footpath.",
  },
  {
    id: "furniture-removal",
    name: "Furniture removal",
    group: "Waste & removal",
    short: "One piece, or a room of furniture.",
    featured: false,
    image: "/images/services/furniture-removal.jpg",
    body: "A sofa that won’t fit in the lift, or a bedroom of flatpack nobody wants. Photos of the stairs stop the price being a surprise on the day.",
  },
  {
    id: "property-clean-outs",
    name: "Property clean-outs",
    group: "Waste & removal",
    short: "Clearing a vacant or heavily cluttered property.",
    featured: false,
    image: "/images/services/property-clean-outs.jpg",
    body: "A house someone’s left full. Garages, sheds, the rooms you don’t want to walk into. Cleared so the next clean isn’t working around the junk.",
  },
  {
    id: "hard-waste",
    name: "Hard waste removal",
    group: "Waste & removal",
    short: "Bulk items a council collection will not take.",
    featured: false,
    image: "/images/services/hard-waste.jpg",
    body: "Mattresses, timber, an old hot water unit — whatever the council hard rubbish won’t take, or won’t take in time. Getting it from the unit to the street is half the job.",
  },
  {
    id: "move-in-out",
    name: "Move-in / move-out services",
    group: "Move-in / move-out",
    short: "Cleaning and the other jobs that have to land on moving day.",
    featured: false,
    image: "/images/services/move-in-out.jpg",
    body: "Keys Friday, photographer Thursday, new tenant Saturday. The clean, the rubbish, a door, the garden — on the same day, instead of three bookings.",
  },
  {
    id: "property-presentation",
    name: "Property presentation",
    group: "Move-in / move-out",
    short: "Getting a place ready before photos, a lease or a sale.",
    featured: false,
    image: "/images/services/property-presentation.jpg",
    body: "Getting it looking right before someone walks through. Not a full restyle. The clean, the small fixes, the rooms a buyer or a tenant actually sees.",
  },
  {
    id: "property-staging",
    name: "Property staging",
    group: "Property presentation",
    short: "Staging timed to inspections and photography.",
    featured: false,
    image: "/images/services/property-staging.jpg",
    body: "For a lease or a sale, timed to the opens. Which rooms people will stand in, and the morning the photos are booked. Empty and furnished photograph differently — say which you need.",
  },
  {
    id: "interior-styling",
    name: "Interior styling",
    group: "Property presentation",
    short: "Styling that lifts a property before people walk through.",
    featured: false,
    image: "/images/services/interior-styling.jpg",
    body: "Cushions, a table, the way a living room reads when someone comes in off the street. Less furniture than a full stage. More than leaving it bare.",
  },
  {
    id: "interior-design",
    name: "Interior design",
    group: "Property presentation",
    short: "Design help for a home or an investment property.",
    featured: false,
    image: "/images/services/interior-design.jpg",
    body: "When you want the place to work, not just look tidy for a weekend of inspections. A rental being refreshed, or a home you’re actually going to live in. Say which.",
  },
  {
    id: "furniture-supply",
    name: "Furniture supply & placement",
    group: "Property presentation",
    short: "Furniture supplied and placed for staging.",
    featured: false,
    image: "/images/services/furniture-supply.jpg",
    body: "Sofas, beds, the pieces that make an empty unit look lived in. In before the shoot. Picked up after the campaign if that’s the deal — not left there until someone remembers.",
  },
  {
    id: "property-preparation",
    name: "Property preparation",
    group: "Property presentation",
    short: "Clean, repair and present, before the next lease or sale.",
    featured: false,
    image: "/images/services/property-preparation.jpg",
    body: "The stretch between one tenant and the next, or before it goes to market. Clean, a bit of paint, the garden — whatever has to be finished by the same morning.",
  },
  {
    id: "facility-management",
    name: "Facility management",
    group: "Building & facilities",
    short: "The year’s worth of small jobs in a building.",
    featured: false,
    image: "/images/services/facility-management.jpg",
    body: "Cleans, the garden, the things that break in the foyer. A manager rings one place through the year instead of keeping six numbers in a notes app.",
  },
  {
    id: "building-support",
    name: "Building support services",
    group: "Building & facilities",
    short: "Day-to-day help for managers and committees.",
    featured: false,
    image: "/images/services/building-support.jpg",
    body: "The call when something in the building needs a person today or this week. A stuck door, a mess in the car park, a tenant complaint that isn’t quite an emergency.",
  },
  {
    id: "preventative-maintenance",
    name: "Preventative maintenance",
    group: "Building & facilities",
    short: "Planned visits, before small faults become larger ones.",
    featured: false,
    image: "/images/services/preventative-maintenance.jpg",
    body: "A walk-through on a schedule, before the dripping tap becomes a ceiling. For buildings where everyone only rings once it’s already a problem.",
  },
  {
    id: "apartment-turnover",
    name: "Apartment turnover services",
    group: "Building & facilities",
    short: "Turning a vacant apartment over between tenancies.",
    featured: false,
    image: "/images/services/apartment-turnover.jpg",
    body: "One vacant unit, or four in the same block in a fortnight. Clean, a few repairs, ready for the next inspection. The date the keys have to be back is the bit that matters.",
  },
  {
    id: "strata-common",
    name: "Strata & common property services",
    group: "Building & facilities",
    short: "Common property work for strata and owners corporations.",
    featured: false,
    image: "/images/services/strata-common.jpg",
    body: "The foyer, the garden the committee argues about, the paths. Access rules, and one person who wants the update — not a group email to everyone.",
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
