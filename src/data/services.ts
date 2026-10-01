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
  aboutHeading: string;
  listIntro: string;
  ctaTitle: string;
  ctaBody: string;
  metaDescription: string;
  image: string;
};

/** Parent category pages — slugs are explicit to avoid clashing with service ids */
export const serviceGroupMeta: ServiceGroupMeta[] = [
  {
    name: "Cleaning & hygiene",
    slug: "cleaning-hygiene",
    short: "We clean homes, offices, common areas and vacating properties, on a schedule or for a single handover.",
    lead: "Cleaning is grouped here because the standard of finish changes with the reason for the visit. A fortnightly home clean, an after-hours office, and a bond clean the day the keys go back are organised differently, even when they happen in the same suburb.",
    aboutHeading: "How we organise a clean",
    listIntro: "Each service below has its own scope. Open the one that matches the property, or tick several on the request form if the visit has to cover more than one.",
    ctaTitle: "Tell us which clean you need",
    ctaBody: "Name the property type and whether the visit is regular, a one-off, or tied to a key handover.",
    metaDescription: "Home, office, common-area, vacate, deep and builders cleans arranged by Atlantis Property Services for Melbourne properties.",
    image: "/images/services/residential-cleaning.jpg",
  },
  {
    name: "Property & exterior care",
    slug: "property-exterior-care",
    short: "We look after glass, gardens, paint, fences, smaller repairs and pest treatments around the building.",
    lead: "Exterior and grounds work depends on weather, water runoff and the rules of the building. This category covers the jobs that happen outside the front door, or on the shared parts of a complex, as well as the smaller repairs that keep a property presentable.",
    aboutHeading: "Work on the building and the grounds",
    listIntro: "Choose the trade that matches the fault or the finish you want. A garden visit and a window clean can still be requested together when they share a date.",
    ctaTitle: "Describe the outside of the property",
    ctaBody: "Tell us what you can see from the street or the courtyard, and whether the building restricts balcony or water use.",
    metaDescription: "Window cleaning, pressure washing, gardens, painting, fences, handyman work and pest control for Melbourne properties.",
    image: "/images/services/window-cleaning.jpg",
  },
  {
    name: "Waste & removal",
    slug: "waste-removal",
    short: "We remove household rubbish, furniture, hard waste and the contents of a property that needs clearing.",
    lead: "Removal is priced from what is actually on site and how it leaves the building. A few bags in a garage, a sofa that will not fit the lift, and a house that has been left full are different loads, so they are listed separately here.",
    aboutHeading: "What we take off the property",
    listIntro: "Open the service that matches the load. If the property needs both a clear-out and a clean afterwards, you can name both when you enquire.",
    ctaTitle: "Show us the load",
    ctaBody: "A short list of items, plus photographs of the stairs or the lift, is what we use to price a removal.",
    metaDescription: "Rubbish removal, furniture removal, property clean-outs and hard waste collection arranged across Melbourne.",
    image: "/images/services/hard-waste.jpg",
  },
  {
    name: "Move-in / move-out",
    slug: "move-in-move-out",
    short: "We prepare a property for the day keys change hands, including the clean and the tasks around it.",
    lead: "Move-in and move-out work is planned backwards from a handover. This category is for the visit that has to be finished before an agent, a photographer or a new occupant arrives, rather than for a clean with no fixed day.",
    aboutHeading: "Work timed to a handover",
    listIntro: "Read the service that matches your deadline. Presentation for a sale sits in its own category if the brief is styling rather than a vacate.",
    ctaTitle: "Send the handover date",
    ctaBody: "Tell us when the keys, the inspection or the new occupant arrive, and which tasks have to be finished before then.",
    metaDescription: "Move-in and move-out cleaning and property preparation timed to key handovers across Melbourne.",
    image: "/images/services/move-in-out.jpg",
  },
  {
    name: "Property presentation",
    slug: "presentation",
    short: "We stage, style and prepare properties for photography, leasing and sale.",
    lead: "Presentation is the work that changes how a property reads when someone walks in. It sits apart from a vacate clean because the brief is the campaign: who is coming through, which rooms they will stand in, and whether the furniture stays after the last open.",
    aboutHeading: "Preparing a property to be seen",
    listIntro: "Start with the service that matches the brief, from a light styling visit through to furniture that has to be delivered before a shoot.",
    ctaTitle: "Tell us about the campaign",
    ctaBody: "Say whether the property is being leased or sold, and send the morning the photographs or the first inspection are booked.",
    metaDescription: "Staging, interior styling, furniture supply and property preparation for Melbourne leases and sales.",
    image: "/images/services/property-staging.jpg",
  },
  {
    name: "Building & facilities",
    slug: "building-facilities",
    short: "We support managers and owners corporations with common-property care, turnovers and planned maintenance.",
    lead: "Building work is arranged for the person who looks after more than one tenancy. The services here cover the foyer and the common property, the vacant apartment between leases, and the visits that are meant to happen before a small fault becomes a repair call.",
    aboutHeading: "Care for the whole building",
    listIntro: "Managers can open a single service or send one note that covers the foyer, the garden and a vacant apartment in the same block.",
    ctaTitle: "Write from the building, not the unit",
    ctaBody: "Tell us the type of building, who should receive the update, and whether you want a single visit or a schedule through the year.",
    metaDescription: "Facility management, building support, preventative maintenance, apartment turnovers and strata services in Melbourne.",
    image: "/images/services/facility-management.jpg",
  },
];

export const services: Service[] = [
  {
    id: "residential-cleaning",
    name: "Residential cleaning",
    group: "Cleaning & hygiene",
    short: "We clean houses and apartments on a regular morning, or in a single visit when the home needs attention.",
    featured: true,
    image: "/images/services/residential-cleaning.jpg",
    body: "Houses and apartments. A set morning each fortnight, or a single visit when the home needs a proper clean. Parking and key access are the details that usually determine whether the first visit runs smoothly.",
  },
  {
    id: "commercial-cleaning",
    name: "Commercial cleaning",
    group: "Cleaning & hygiene",
    short: "We clean offices, shops and small tenancies after staff have left, or on a day the premises are closed.",
    featured: true,
    image: "/images/services/commercial-cleaning.jpg",
    body: "Offices, retail shops and small tenancies, after staff have left or on a morning the premises are closed. If a scheduled clean needs to move, tell us before we attend a locked door.",
  },
  {
    id: "apartment-common-area",
    name: "Apartment & common area cleaning",
    group: "Cleaning & hygiene",
    short: "We clean the lobbies, corridors, lifts and other rooms that residents share.",
    featured: false,
    image: "/images/services/apartment-common-area.jpg",
    body: "Lobbies, lifts, mail rooms and bin rooms, cleaned on a set visit so the common areas are maintained to a consistent standard.",
  },
  {
    id: "end-of-lease",
    name: "End-of-lease cleaning",
    group: "Cleaning & hygiene",
    short: "We clean a property to the agency checklist so it is ready for inspection when the keys are returned.",
    featured: true,
    image: "/images/services/end-of-lease.jpg",
    body: "The day the keys are due back sets the schedule. Ovens, skirting boards, and the bathroom a standard clean has missed. If the agency has supplied a checklist, that checklist is the scope.",
  },
  {
    id: "deep-cleaning",
    name: "Deep cleaning",
    group: "Cleaning & hygiene",
    short: "We take on kitchens, bathrooms and vacant rooms that a standard clean will not shift.",
    featured: true,
    image: "/images/services/deep-cleaning.jpg",
    body: "A kitchen with heavy build-up, a bathroom that needs more than a wipe-over, or a property that has been vacant. A room count without photographs is only a starting point.",
  },
  {
    id: "builders-clean",
    name: "Builders site clean",
    group: "Cleaning & hygiene",
    short: "We remove plaster dust, paint specks and building debris once the trades have left the site.",
    featured: false,
    image: "/images/services/builders-clean.jpg",
    body: "Plaster dust, paint specks, and offcuts left in wet areas. The clean should wait until the trades have left the site. A clean while work is still underway will need to be repeated.",
  },
  {
    id: "window-cleaning",
    name: "Window cleaning",
    group: "Property & exterior care",
    short: "We clean internal and external glass on homes and commercial buildings.",
    featured: true,
    image: "/images/services/window-cleaning.jpg",
    body: "Ground floor or several storeys up, inside, outside, or both. Balcony access, and what the owners corporation allows, changes the method. Rain will delay an external clean.",
  },
  {
    id: "pressure-washing",
    name: "Pressure washing",
    group: "Property & exterior care",
    short: "We pressure-wash driveways, paths and the hard surfaces around a building.",
    featured: true,
    image: "/images/services/pressure-washing.jpg",
    body: "A photograph of the staining is useful, as is a note on the water supply and any building rules about runoff.",
  },
  {
    id: "exterior-cleaning",
    name: "Exterior cleaning",
    group: "Property & exterior care",
    short: "We clean façades, courtyards and the other outside faces of a building.",
    featured: false,
    image: "/images/services/exterior-cleaning.jpg",
    body: "The street frontage, and the courtyard that has been left through winter. Algae, cobwebs and bin areas. If the work must be finished before an open inspection, tell us which morning.",
  },
  {
    id: "gardening-landscaping",
    name: "Gardening / landscaping",
    group: "Property & exterior care",
    short: "We cut lawns, tidy beds and trim hedges, either once or on a returning visit.",
    featured: true,
    image: "/images/services/gardening-landscaping.jpg",
    body: "A cut before an inspection, or a regular visit so the garden stays in order. Beds, lawn and the hedge on the laneway. Some driveways cannot take a trailer, which changes how green waste is removed.",
  },
  {
    id: "painting",
    name: "Painting",
    group: "Property & exterior care",
    short: "We paint interiors and exteriors when a property needs a refresh or a handover finish.",
    featured: false,
    image: "/images/services/painting.jpg",
    body: "A few rooms before a new lease, or weatherboards and the front fence. A flexible month and a requirement to be dry before Saturday’s open inspection are different jobs. Tell us which applies.",
  },
  {
    id: "fence-repairs",
    name: "Fence repairs",
    group: "Property & exterior care",
    short: "We repair timber and boundary fences, and we can quote many jobs from a clear photograph.",
    featured: false,
    image: "/images/services/fence-repairs.jpg",
    body: "A damaged panel, a leaning post, or palings that need replacing. A photograph is usually enough to quote. If the fence is shared, tell us which side we are dealing with.",
  },
  {
    id: "handyman",
    name: "Handyman services",
    group: "Property & exterior care",
    short: "We handle the smaller repairs that belong on one list rather than with a separate trade each.",
    featured: true,
    image: "/images/services/handyman.jpg",
    body: "The list that does not justify several call-outs. A hinge, a silicone joint, a tap washer, a hallway light. One visit, where the tasks fit in the same morning.",
  },
  {
    id: "pest-control",
    name: "Pest control",
    group: "Property & exterior care",
    short: "We treat pests according to what you have seen and which part of the property is affected.",
    featured: false,
    image: "/images/services/pest-control.jpg",
    body: "Ants in the kitchen, cockroaches behind the fridge, or wasps under the eaves. Tell us what you have seen and which rooms are affected. We confirm what the treatment covers before anyone attends.",
  },
  {
    id: "common-area-maintenance",
    name: "Common area maintenance",
    group: "Property & exterior care",
    short: "We maintain the shared gardens, paths and gates in an apartment complex.",
    featured: false,
    image: "/images/services/common-area-maintenance.jpg",
    body: "The shared garden, the paths, and the gate that sticks. Suitable for a manager who wants one contractor for the smaller recurring items.",
  },
  {
    id: "property-maintenance",
    name: "Property maintenance",
    group: "Property & exterior care",
    short: "We carry out a single repair, or we visit on a schedule so smaller faults are dealt with early.",
    featured: true,
    image: "/images/services/property-maintenance.jpg",
    body: "A leaking tap this week, or a visit every couple of months so smaller items are dealt with before a tenant reports them. A lockbox, or a resident home after 5 pm: tell us which applies.",
  },
  {
    id: "rubbish-removal",
    name: "Rubbish removal",
    group: "Waste & removal",
    short: "We remove household junk and general waste, and we price the job from the load on site.",
    featured: true,
    image: "/images/services/rubbish-removal.jpg",
    body: "What is on site, plus stairs, lift access, and where a ute can stop. The quote follows the load, based on the property itself.",
  },
  {
    id: "furniture-removal",
    name: "Furniture removal",
    group: "Waste & removal",
    short: "We remove a single piece of furniture or the contents of a whole room.",
    featured: false,
    image: "/images/services/furniture-removal.jpg",
    body: "A sofa that will not fit in the lift, or a bedroom of flat-pack furniture that is no longer needed. Photographs of the stairs keep the quote accurate for the day.",
  },
  {
    id: "property-clean-outs",
    name: "Property clean-outs",
    group: "Waste & removal",
    short: "We clear houses and apartments that have been left full, including garages and sheds.",
    featured: false,
    image: "/images/services/property-clean-outs.jpg",
    body: "A house that has been left full, including garages, sheds and rooms that need to be emptied. Cleared so the following clean is not working around the remaining items.",
  },
  {
    id: "hard-waste",
    name: "Hard waste removal",
    group: "Waste & removal",
    short: "We collect mattresses, timber and whitegoods when a council hard-rubbish booking will not do.",
    featured: false,
    image: "/images/services/hard-waste.jpg",
    body: "Mattresses, timber and an old hot-water unit: items a council hard-rubbish collection will not accept, or cannot collect before your deadline. Moving them from the unit to the street is a large part of the job.",
  },
  {
    id: "move-in-out",
    name: "Move-in / move-out services",
    group: "Move-in / move-out",
    short: "We coordinate the clean and the other tasks that have to be finished before moving day.",
    featured: false,
    image: "/images/services/move-in-out.jpg",
    body: "Keys on Friday, a photographer on Thursday, a new tenant on Saturday. The clean, the rubbish, a door and the garden can be scheduled for the same day.",
  },
  {
    id: "property-presentation",
    name: "Property presentation",
    group: "Move-in / move-out",
    short: "We prepare the rooms a buyer or tenant will see before photographs, a lease or a sale.",
    featured: false,
    image: "/images/services/property-presentation.jpg",
    body: "Making the property presentable before someone walks through. The clean, the smaller repairs, and the rooms a buyer or tenant will actually see.",
  },
  {
    id: "property-staging",
    name: "Property staging",
    group: "Property presentation",
    short: "We stage a property so it is ready for the inspection and the photography morning.",
    featured: false,
    image: "/images/services/property-staging.jpg",
    body: "Staging is booked against the open-inspection calendar. The rooms guests will enter, and whether those rooms should photograph as empty or furnished, are what the quote is built from.",
  },
  {
    id: "interior-styling",
    name: "Interior styling",
    group: "Property presentation",
    short: "We style the rooms that appear in photographs, with a lighter hand than a full stage.",
    featured: false,
    image: "/images/services/interior-styling.jpg",
    body: "Cushions, a table, and the way a living room reads when someone comes in from the street. Lighter than a full stage, and more considered than leaving the rooms bare.",
  },
  {
    id: "interior-design",
    name: "Interior design",
    group: "Property presentation",
    short: "We advise on the layout and finish of a home you will live in, or a rental you are refreshing.",
    featured: false,
    image: "/images/services/interior-design.jpg",
    body: "When you want the property to function well, as well as look ready for inspection. A rental being refreshed, or a home you will live in. Tell us which.",
  },
  {
    id: "furniture-supply",
    name: "Furniture supply & placement",
    group: "Property presentation",
    short: "We supply furniture and place it for a staging campaign, then collect it if it is only hired.",
    featured: false,
    image: "/images/services/furniture-supply.jpg",
    body: "Sofas, beds and the pieces that make an empty apartment look lived in. Delivered before the photography, and collected after the campaign when that is the arrangement.",
  },
  {
    id: "property-preparation",
    name: "Property preparation",
    group: "Property presentation",
    short: "We bring cleaning, minor repairs and the garden together before the next lease or a listing.",
    featured: false,
    image: "/images/services/property-preparation.jpg",
    body: "The period between one tenant and the next, or before a property goes to market. Cleaning, a section of paint, the garden: whatever must be finished by the same morning.",
  },
  {
    id: "facility-management",
    name: "Facility management",
    group: "Building & facilities",
    short: "We take the year’s cleaning, grounds and small repairs for a building through one manager.",
    featured: false,
    image: "/images/services/facility-management.jpg",
    body: "Cleaning, the garden, and the items that fail in the foyer. A manager deals with one company through the year, rather than keeping a separate contact for every trade.",
  },
  {
    id: "building-support",
    name: "Building support services",
    group: "Building & facilities",
    short: "We respond when a manager or committee needs someone at the building this week.",
    featured: false,
    image: "/images/services/building-support.jpg",
    body: "When something in the building needs attention today or this week. A door that will not close, a mess in the car park, or a resident complaint that needs a prompt response.",
  },
  {
    id: "preventative-maintenance",
    name: "Preventative maintenance",
    group: "Building & facilities",
    short: "We walk the building on a set schedule and record small faults before they spread.",
    featured: false,
    image: "/images/services/preventative-maintenance.jpg",
    body: "A scheduled walk-through, before a dripping tap becomes a damaged ceiling. For buildings that need attention on a plan, rather than only after something has already failed.",
  },
  {
    id: "apartment-turnover",
    name: "Apartment turnover services",
    group: "Building & facilities",
    short: "We turn a vacant apartment around between tenancies, including the clean and the agreed repairs.",
    featured: false,
    image: "/images/services/apartment-turnover.jpg",
    body: "One vacant apartment, or several in the same building over a fortnight. Cleaned, with the agreed repairs completed, and ready for the next inspection. The date the keys must be returned is the deadline that matters.",
  },
  {
    id: "strata-common",
    name: "Strata & common property services",
    group: "Building & facilities",
    short: "We carry out common-property work for strata schemes and owners corporations.",
    featured: false,
    image: "/images/services/strata-common.jpg",
    body: "The foyer, the common garden, and the paths. We work to the building’s access rules, and we report to one nominated contact.",
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
