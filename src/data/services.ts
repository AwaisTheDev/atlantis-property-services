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
  ctaLabel: string;
  metaDescription: string;
  image: string;
};

/** Parent category pages — slugs are explicit to avoid clashing with service ids */
export const serviceGroupMeta: ServiceGroupMeta[] = [
  {
    name: "Cleaning & hygiene",
    slug: "cleaning-hygiene",
    short:
      "Reliable cleaning for homes, businesses, apartments and shared spaces, from regular cleaning to deep cleans, end-of-lease and builders cleans.",
    lead: "The finish changes with the reason for the visit. A regular home clean, an office after staff have left, and a thorough clean before keys are handed back are organised differently, even when they are in the same suburb. Tell us which one the property needs, or include more than one in the same request.",
    aboutHeading: "Cleaning for homes, businesses and shared spaces",
    listIntro:
      "Each service below has its own scope. Open the one that matches the property, or include several on the same request if the visit has to cover more than one.",
    ctaTitle: "Request a cleaning quote",
    ctaBody: "Tell us the property, whether the visit is regular or a one-off, and when it needs to be finished.",
    ctaLabel: "Request a Cleaning Quote",
    metaDescription:
      "Residential, commercial, common-area, end-of-lease, deep and builders cleans arranged by Atlantis Property Services across Melbourne.",
    image: "/images/services/residential-cleaning.jpg",
  },
  {
    name: "Property & exterior care",
    slug: "property-exterior-care",
    short:
      "Gardens, glass, pressure washing, painting, fences, handyman work, pest control and the smaller repairs that keep a property in good condition.",
    lead: "This is the work on the building and the grounds: outdoor care, and the maintenance and repairs that sit alongside it. Weather, water runoff and the rules of the building all change how a job is priced. A garden tidy and a window clean can still go on the same request.",
    aboutHeading: "Gardens, exteriors and property repairs",
    listIntro:
      "Choose the service that matches the job. If the property needs more than one, send the whole list and we will help organise it.",
    ctaTitle: "Request a property care quote",
    ctaBody: "Describe what you can see, and mention any building rule that limits balcony access, water use or the hours we can attend.",
    ctaLabel: "Request a Property Care Quote",
    metaDescription:
      "Window cleaning, pressure washing, gardening, painting, fence repairs, handyman work and pest control for Melbourne properties.",
    image: "/images/services/window-cleaning.jpg",
  },
  {
    name: "Waste & removal",
    slug: "waste-removal",
    short: "From unwanted furniture and hard waste to a complete clean-out of a house, apartment or garage.",
    lead: "Removal is priced from what is actually on site and how it leaves the building. A few bags in a garage, a sofa that will not fit the lift, and a property that has been left full are different loads, so they are listed separately. Photographs of the stairs or the lift help us quote the job properly.",
    aboutHeading: "Rubbish, furniture and property clean-outs",
    listIntro:
      "Open the service that matches the load. If the property also needs a clean once it is clear, include that in the same request.",
    ctaTitle: "Request a removal quote",
    ctaBody: "List what has to go, and add photographs of the access if the items have to come down stairs or through a lift.",
    ctaLabel: "Request a Removal Quote",
    metaDescription:
      "Rubbish removal, furniture removal, property clean-outs and hard waste collection arranged across Melbourne.",
    image: "/images/services/hard-waste.jpg",
  },
  {
    name: "Move-in / move-out",
    slug: "move-in-move-out",
    short: "Cleaning, repairs, presentation and other work coordinated around moving, leasing or selling a property.",
    lead: "Moving property often needs more than the clean. From rubbish removal and gardening to minor repairs, send the complete list and we will help coordinate the work before keys change hands. The date that cannot slip is what the schedule is built around.",
    aboutHeading: "Moving property? We can coordinate more than the clean.",
    listIntro:
      "Read the service that matches your deadline. If the brief is styling for a sale rather than a handover, that work sits under property presentation.",
    ctaTitle: "Request a quote",
    ctaBody: "Tell us when the keys, the inspection or the new occupant arrive, and which tasks have to be finished before then.",
    ctaLabel: "Request a Quote",
    metaDescription:
      "Move-in and move-out services and property preparation timed to key handovers across Melbourne.",
    image: "/images/services/move-in-out.jpg",
  },
  {
    name: "Property presentation",
    slug: "presentation",
    short: "Staging, styling and preparation so a property is ready for photography, inspections, leasing or sale.",
    lead: "Presentation changes how a property reads when someone walks in. It can be staging for photography, a lighter styling visit, advice on the interior, or furniture placed for a campaign. It can also bring the clean, the garden and the minor repairs together before a property is leased or sold.",
    aboutHeading: "Prepare a property to be seen",
    listIntro:
      "Start with the service that matches the brief, from a light styling visit through to furniture that has to be in place before a shoot.",
    ctaTitle: "Discuss your property",
    ctaBody: "Say whether the property is being leased or sold, and send the date the photographs or the first inspection are booked.",
    ctaLabel: "Discuss Your Property",
    metaDescription:
      "Property staging, interior styling, furniture supply and property preparation for Melbourne leases and sales.",
    image: "/images/services/property-staging.jpg",
  },
  {
    name: "Building & facilities",
    slug: "building-facilities",
    short:
      "Ongoing cleaning, maintenance and property support for apartment buildings, owners corporations and commercial properties.",
    lead: "Atlantis helps property managers, owners corporations and commercial property owners coordinate routine and responsive property services. That can be the year’s cleaning and grounds care, a response when something needs attention this week, or the work that turns a vacant apartment around between tenancies.",
    aboutHeading: "Ongoing support for buildings and property portfolios",
    listIntro:
      "Open a single service, or send one note that covers the foyer, the grounds and a vacant apartment in the same building.",
    ctaTitle: "Talk to Atlantis",
    ctaBody: "Tell us the type of building, who should receive the update, and whether you want a single visit or a schedule through the year.",
    ctaLabel: "Talk to Atlantis",
    metaDescription:
      "Facility management, building support, preventative maintenance, apartment turnovers and strata services in Melbourne.",
    image: "/images/services/facility-management.jpg",
  },
];

export const services: Service[] = [
  {
    id: "residential-cleaning",
    name: "Residential cleaning",
    group: "Cleaning & hygiene",
    short: "Regular or one-off cleaning for houses and apartments.",
    featured: true,
    image: "/images/services/residential-cleaning.jpg",
    body: "Houses and apartments. A set morning each fortnight, or a single visit when the home needs a proper clean. Parking and key access are the details that usually determine whether the first visit runs smoothly.",
  },
  {
    id: "commercial-cleaning",
    name: "Commercial cleaning",
    group: "Cleaning & hygiene",
    short: "Reliable cleaning for offices, shops and commercial premises.",
    featured: true,
    image: "/images/services/commercial-cleaning.jpg",
    body: "Offices, retail shops and small tenancies, after staff have left or on a morning the premises are closed. If a scheduled clean needs to move, tell us before we attend a locked door.",
  },
  {
    id: "apartment-common-area",
    name: "Apartment & common area cleaning",
    group: "Cleaning & hygiene",
    short: "Cleaning for foyers, corridors, lifts and other shared residential spaces.",
    featured: false,
    image: "/images/services/apartment-common-area.jpg",
    body: "Lobbies, lifts, mail rooms and bin rooms, cleaned on a set visit so the common areas are maintained to a consistent standard.",
  },
  {
    id: "end-of-lease",
    name: "End-of-lease cleaning",
    group: "Cleaning & hygiene",
    short: "Thorough cleaning to prepare rental properties for final inspection and handover.",
    featured: true,
    image: "/images/services/end-of-lease.jpg",
    body: "The day the keys are due back sets the schedule. Ovens, skirting boards, and the bathroom a standard clean has missed. If the agency has supplied a checklist, that checklist is the scope.",
  },
  {
    id: "deep-cleaning",
    name: "Deep cleaning",
    group: "Cleaning & hygiene",
    short: "Detailed cleaning for properties needing more attention than a standard clean.",
    featured: true,
    image: "/images/services/deep-cleaning.jpg",
    body: "A kitchen with heavy build-up, a bathroom that needs more than a wipe-over, or a property that has been vacant. A room count without photographs is only a starting point.",
  },
  {
    id: "builders-clean",
    name: "Builders site clean",
    group: "Cleaning & hygiene",
    short: "Post-construction and renovation cleaning to remove dust, residue and general building mess.",
    featured: false,
    image: "/images/services/builders-clean.jpg",
    body: "Plaster dust, paint specks, and offcuts left in wet areas. The clean should wait until the trades have left the site. A clean while work is still underway will need to be repeated.",
  },
  {
    id: "window-cleaning",
    name: "Window cleaning",
    group: "Property & exterior care",
    short: "Internal and external window cleaning for residential and commercial properties.",
    featured: true,
    image: "/images/services/window-cleaning.jpg",
    body: "Ground floor or several storeys up, inside, outside, or both. Balcony access, and what the owners corporation allows, changes the method. Rain will delay an external clean.",
  },
  {
    id: "pressure-washing",
    name: "Pressure washing",
    group: "Property & exterior care",
    short: "Cleaning for driveways, paths, courtyards and other hard exterior surfaces.",
    featured: true,
    image: "/images/services/pressure-washing.jpg",
    body: "A photograph of the staining is useful, as is a note on the water supply and any building rules about runoff.",
  },
  {
    id: "exterior-cleaning",
    name: "Exterior cleaning",
    group: "Property & exterior care",
    short: "Cleaning for outdoor areas, building surfaces and property surrounds.",
    featured: false,
    image: "/images/services/exterior-cleaning.jpg",
    body: "The street frontage, and the courtyard that has been left through winter. Algae, cobwebs and bin areas. If the work must be finished before an open inspection, tell us which morning.",
  },
  {
    id: "gardening-landscaping",
    name: "Gardening / landscaping",
    group: "Property & exterior care",
    short: "Lawn care, garden maintenance, trimming, tidy-ups and landscaping services.",
    featured: true,
    image: "/images/services/gardening-landscaping.jpg",
    body: "A cut before an inspection, or a regular visit so the garden stays in order. Beds, lawn and the hedge on the laneway. Some driveways cannot take a trailer, which changes how green waste is removed.",
  },
  {
    id: "painting",
    name: "Painting",
    group: "Property & exterior care",
    short: "Interior and exterior painting for maintenance, refreshes and property preparation.",
    featured: false,
    image: "/images/services/painting.jpg",
    body: "A few rooms before a new lease, or weatherboards and the front fence. A flexible month and a requirement to be dry before Saturday’s open inspection are different jobs. Tell us which applies.",
  },
  {
    id: "fence-repairs",
    name: "Fence repairs",
    group: "Property & exterior care",
    short: "Repairs and maintenance for damaged or ageing fencing.",
    featured: false,
    image: "/images/services/fence-repairs.jpg",
    body: "A damaged panel, a leaning post, or palings that need replacing. A photograph is usually enough to quote. If the fence is shared, tell us which side we are dealing with.",
  },
  {
    id: "handyman",
    name: "Handyman services",
    group: "Property & exterior care",
    short: "Practical help with those smaller property repairs and maintenance jobs.",
    featured: true,
    image: "/images/services/handyman.jpg",
    body: "The list that does not justify several call-outs. A hinge, a silicone joint, a tap washer, a hallway light. One visit, where the tasks fit in the same morning.",
  },
  {
    id: "pest-control",
    name: "Pest control",
    group: "Property & exterior care",
    short: "Professional pest management based on the property and the problem.",
    featured: false,
    image: "/images/services/pest-control.jpg",
    body: "Ants in the kitchen, cockroaches behind the fridge, or wasps under the eaves. Tell us what you have seen and which rooms are affected. We confirm what the treatment covers before anyone attends.",
  },
  {
    id: "common-area-maintenance",
    name: "Common area maintenance",
    group: "Property & exterior care",
    short: "Ongoing maintenance of shared outdoor and common areas.",
    featured: false,
    image: "/images/services/common-area-maintenance.jpg",
    body: "The shared garden, the paths, and the gate that sticks. Suitable for a manager who wants one contractor for the smaller recurring items.",
  },
  {
    id: "property-maintenance",
    name: "Property maintenance",
    group: "Property & exterior care",
    short: "One-off repairs or ongoing maintenance to keep properties in good condition.",
    featured: true,
    image: "/images/services/property-maintenance.jpg",
    body: "A leaking tap this week, or a visit every couple of months so smaller items are dealt with before a tenant reports them. A lockbox, or a resident home after 5 pm: tell us which applies.",
  },
  {
    id: "rubbish-removal",
    name: "Rubbish removal",
    group: "Waste & removal",
    short: "Removal of unwanted household and general property waste.",
    featured: true,
    image: "/images/services/rubbish-removal.jpg",
    body: "What is on site, plus stairs, lift access, and where a ute can stop. The quote follows the load, based on the property itself.",
  },
  {
    id: "furniture-removal",
    name: "Furniture removal",
    group: "Waste & removal",
    short: "Removal of individual furniture items or larger quantities.",
    featured: false,
    image: "/images/services/furniture-removal.jpg",
    body: "A sofa that will not fit in the lift, or a bedroom of flat-pack furniture that is no longer needed. Photographs of the stairs keep the quote accurate for the day.",
  },
  {
    id: "property-clean-outs",
    name: "Property clean-outs",
    group: "Waste & removal",
    short: "Complete clearing of houses, apartments, garages and other areas.",
    featured: false,
    image: "/images/services/property-clean-outs.jpg",
    body: "A house that has been left full, including garages, sheds and rooms that need to be emptied. Cleared so the following clean is not working around the remaining items.",
  },
  {
    id: "hard-waste",
    name: "Hard waste removal",
    group: "Waste & removal",
    short: "Removal of bulky items including furniture, mattresses and other hard waste.",
    featured: false,
    image: "/images/services/hard-waste.jpg",
    body: "Mattresses, timber and an old hot-water unit: items a council hard-rubbish collection will not accept, or cannot collect before your deadline. Moving them from the unit to the street is a large part of the job.",
  },
  {
    id: "move-in-out",
    name: "Move-in / move-out services",
    group: "Move-in / move-out",
    short: "Property services coordinated around moving day.",
    featured: false,
    image: "/images/services/move-in-out.jpg",
    body: "Keys on Friday, a photographer on Thursday, a new tenant on Saturday. The clean, the rubbish, a door and the garden can be scheduled for the same day.",
  },
  {
    id: "property-presentation",
    name: "Property Preparation",
    group: "Move-in / move-out",
    short: "Cleaning, maintenance and presentation services organised before a property is occupied, leased or sold.",
    featured: false,
    image: "/images/services/property-presentation.jpg",
    body: "Making the property presentable before someone walks through. The clean, the smaller repairs, and the rooms a buyer or tenant will actually see.",
  },
  {
    id: "property-staging",
    name: "Property staging",
    group: "Property presentation",
    short: "Prepare a property for photography, inspections and sale.",
    featured: false,
    image: "/images/services/property-staging.jpg",
    body: "Staging is booked against the open-inspection calendar. The rooms guests will enter, and whether those rooms should photograph as empty or furnished, are what the quote is built from.",
  },
  {
    id: "interior-styling",
    name: "Interior styling",
    group: "Property presentation",
    short: "Styling assistance to improve the presentation and feel of a property.",
    featured: false,
    image: "/images/services/interior-styling.jpg",
    body: "Cushions, a table, and the way a living room reads when someone comes in from the street. Lighter than a full stage, and more considered than leaving the rooms bare.",
  },
  {
    id: "interior-design",
    name: "Interior design",
    group: "Property presentation",
    short: "Advice and services for property layouts, finishes and interiors.",
    featured: false,
    image: "/images/services/interior-design.jpg",
    body: "When you want the property to function well, as well as look ready for inspection. A rental being refreshed, or a home you will live in. Tell us which.",
  },
  {
    id: "furniture-supply",
    name: "Furniture supply & placement",
    group: "Property presentation",
    short: "Furniture sourcing, placement and removal for property presentation.",
    featured: false,
    image: "/images/services/furniture-supply.jpg",
    body: "Furniture sourcing, placement and removal for property presentation.",
  },
  {
    id: "property-preparation",
    name: "Property Preparation",
    group: "Property presentation",
    short: "Bring cleaning, gardening, minor repairs and presentation together before leasing or selling.",
    featured: false,
    image: "/images/services/property-preparation.jpg",
    body: "The period between one tenant and the next, or before a property goes to market. Cleaning, a section of paint, the garden: whatever must be finished by the same date.",
  },
  {
    id: "facility-management",
    name: "Facility management",
    group: "Building & facilities",
    short: "Coordinate ongoing cleaning, grounds care and general property maintenance.",
    featured: false,
    image: "/images/services/facility-management.jpg",
    body: "Cleaning, the garden, and the items that fail in the foyer. A manager deals with one company through the year, rather than keeping a separate contact for every trade.",
  },
  {
    id: "building-support",
    name: "Building support services",
    group: "Building & facilities",
    short: "Responsive support when something around the property needs attention.",
    featured: false,
    image: "/images/services/building-support.jpg",
    body: "When something in the building needs attention today or this week. A door that will not close, a mess in the car park, or a resident complaint that needs a prompt response.",
  },
  {
    id: "preventative-maintenance",
    name: "Preventative maintenance",
    group: "Building & facilities",
    short: "Scheduled checks and maintenance designed to identify smaller issues before they become larger ones.",
    featured: false,
    image: "/images/services/preventative-maintenance.jpg",
    body: "A scheduled walk-through, before a dripping tap becomes a damaged ceiling. For buildings that need attention on a plan, rather than only after something has already failed.",
  },
  {
    id: "apartment-turnover",
    name: "Apartment turnover services",
    group: "Building & facilities",
    short: "Coordinate cleaning and agreed maintenance between tenancies.",
    featured: false,
    image: "/images/services/apartment-turnover.jpg",
    body: "One vacant apartment, or several in the same building over a fortnight. Cleaned, with the agreed repairs completed, and ready for the next inspection. The date the keys must be returned is the deadline that matters.",
  },
  {
    id: "strata-common",
    name: "Strata & common property services",
    group: "Building & facilities",
    short: "Cleaning, maintenance and property services for shared spaces and common property.",
    featured: false,
    image: "/images/services/strata-common.jpg",
    body: "The foyer, the common garden, and the paths. We work to the building’s access rules, and we report to one nominated contact.",
  },
];

/**
 * Quote and partner forms list each service name once.
 * Property Preparation already exists under property presentation, so the
 * move-in service of the same name is not added again.
 */
const formServiceAliases: Record<string, string> = {
  "property-presentation": "property-preparation",
};

export function servicesForForms() {
  const hidden = new Set(Object.keys(formServiceAliases));
  return services.filter((service) => !hidden.has(service.id));
}

export function formServiceId(id: string) {
  return formServiceAliases[id] ?? id;
}

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
