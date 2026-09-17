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
    short: "Home, office and end-of-lease cleans across Melbourne’s inner suburbs.",
    lead: "Need a regular home clean in Brunswick East, an office schedule near the CBD fringe, or an end-of-lease clean before handover? Atlantis coordinates residential, commercial, deep and builders cleans across Melbourne’s inner suburbs. One request, quote-led pricing, and one point of contact — not a public cleaner directory.",
    image: "/images/services/residential-cleaning.jpg",
  },
  {
    name: "Property & exterior care",
    slug: "property-exterior-care",
    short: "Windows, gardens, pressure washing, painting, fences, handyman and pest control.",
    lead: "Window cleaning, gardening, pressure washing, exterior cleans, painting, fence repairs, handyman jobs and pest control — scoped for Melbourne access, parking and weather. Atlantis takes the brief, manages the quote and coordinates an approved partner so owners and managers deal with one company.",
    image: "/images/services/window-cleaning.jpg",
  },
  {
    name: "Waste & removal",
    slug: "waste-removal",
    short: "Rubbish, furniture, hard waste and property clean-outs.",
    lead: "Rubbish removal, furniture removal, hard waste and full property clean-outs for homes, apartments and vacant sites. Tell us what’s going, note stairs, lifts and building rules, and Atlantis will coordinate collection through an approved partner — one conversation from quote to pickup.",
    image: "/images/services/hard-waste.jpg",
  },
  {
    name: "Move-in / move-out",
    slug: "move-in-move-out",
    short: "Vacate cleans and handover support timed to key dates.",
    lead: "Move-in and move-out work is deadline-driven. Atlantis coordinates vacate cleans and related make-ready jobs under one request so tenants, landlords and managers aren’t chasing separate providers before keys change hands across Melbourne’s inner suburbs.",
    image: "/images/services/move-in-out.jpg",
  },
  {
    name: "Property presentation",
    slug: "presentation",
    short: "Staging, styling and make-ready presentation for lease or sale.",
    lead: "Presenting a Melbourne home or apartment for lease, sale or inspection? Atlantis coordinates staging, styling, design support and property preparation — quote-led, with one accountable contact for the full presentation brief.",
    image: "/images/services/property-staging.jpg",
  },
  {
    name: "Building & facilities",
    slug: "building-facilities",
    short: "Strata, common areas, turnovers and ongoing building support.",
    lead: "Strata committees, building managers and facilities teams use Atlantis for common-area work, apartment turnovers, preventative maintenance and building support. Approved partners deliver behind the scenes; Atlantis stays the customer-facing company across Melbourne’s inner suburbs.",
    image: "/images/services/facility-management.jpg",
  },
];

export const services: Service[] = [
  {
    id: "residential-cleaning",
    name: "Residential cleaning",
    group: "Cleaning & hygiene",
    short: "Weekly, fortnightly or one-off home cleans in Melbourne’s inner suburbs.",
    featured: true,
    image: "/images/services/residential-cleaning.jpg",
    body: "Regular or one-off residential cleaning for Melbourne houses and apartments. Tell us rooms, frequency, parking and access — Atlantis returns a quote, arranges an approved partner, and stays your contact from booking to completion.",
  },
  {
    id: "commercial-cleaning",
    name: "Commercial cleaning",
    group: "Cleaning & hygiene",
    short: "Offices, shops and business premises — scheduled or one-off.",
    featured: true,
    image: "/images/services/commercial-cleaning.jpg",
    body: "Commercial cleaning for offices, retail and business premises across Melbourne’s inner suburbs. Share after-hours needs, areas and cadence. Atlantis manages the quote and partner so your team deals with one company.",
  },
  {
    id: "apartment-common-area",
    name: "Apartment & common area cleaning",
    group: "Cleaning & hygiene",
    short: "Lobbies, corridors and shared spaces in apartment buildings.",
    featured: false,
    image: "/images/services/apartment-common-area.jpg",
    body: "Common-area cleaning for lobbies, corridors, lifts and shared spaces in Melbourne apartment buildings. Built for managers and owners corporations who want one accountable contact — not a rotating roster of ad-hoc cleaners.",
  },
  {
    id: "end-of-lease",
    name: "End-of-lease cleaning",
    group: "Cleaning & hygiene",
    short: "Vacate cleans timed to bond inspections and key handover.",
    featured: true,
    image: "/images/services/end-of-lease.jpg",
    body: "End-of-lease cleaning for Melbourne tenants, landlords and property managers. Send photos, your bond checklist and handover date. Atlantis scopes the vacate clean, quotes it, and keeps updates in one place until keys are returned.",
  },
  {
    id: "deep-cleaning",
    name: "Deep cleaning",
    group: "Cleaning & hygiene",
    short: "Room-by-room deep cleans when a standard visit isn’t enough.",
    featured: true,
    image: "/images/services/deep-cleaning.jpg",
    body: "Deep cleaning for kitchens, bathrooms and high-touch areas when a standard visit won’t cut it. Outline problem rooms and timing — Atlantis quotes the job and arranges an approved partner for Melbourne homes and apartments.",
  },
  {
    id: "builders-clean",
    name: "Builders site clean",
    group: "Cleaning & hygiene",
    short: "Post-reno dust and debris cleans before handover or move-in.",
    featured: false,
    image: "/images/services/builders-clean.jpg",
    body: "Builders cleans after renovation or construction on Melbourne sites. Tell us the stage, dust load and access. Atlantis coordinates a partner around your programme so the space is ready for inspection, handover or move-in.",
  },
  {
    id: "window-cleaning",
    name: "Window cleaning",
    group: "Property & exterior care",
    short: "Interior and exterior glass for homes and commercial sites.",
    featured: true,
    image: "/images/services/window-cleaning.jpg",
    body: "Window cleaning for Melbourne homes, apartments and commercial glass. Share storeys, balcony access and preferred timing. Atlantis quotes the job and arranges an approved partner — including strata-friendly access notes where needed.",
  },
  {
    id: "pressure-washing",
    name: "Pressure washing",
    group: "Property & exterior care",
    short: "Driveways, paths, façades and outdoor hard surfaces.",
    featured: true,
    image: "/images/services/pressure-washing.jpg",
    body: "Pressure washing for driveways, paths, façades and hard surfaces around Melbourne properties. Describe the areas, water access and any strata rules — Atlantis manages the quote and delivery.",
  },
  {
    id: "exterior-cleaning",
    name: "Exterior cleaning",
    group: "Property & exterior care",
    short: "Façades, outdoor living areas and building exteriors.",
    featured: false,
    image: "/images/services/exterior-cleaning.jpg",
    body: "Exterior cleaning for façades and outdoor living areas on Melbourne homes and commercial sites. One Atlantis request covers scope, quote and partner coordination so outdoor presentation stays on one timeline.",
  },
  {
    id: "gardening-landscaping",
    name: "Gardening / landscaping",
    group: "Property & exterior care",
    short: "Lawns, garden beds and outdoor presentation — one-off or recurring.",
    featured: true,
    image: "/images/services/gardening-landscaping.jpg",
    body: "Gardening and landscaping for Melbourne yards and common gardens — one-off tidies or recurring care. Tell us lawns, hedges, beds and access. Atlantis quotes and arranges an approved partner while you keep one contact.",
  },
  {
    id: "painting",
    name: "Painting",
    group: "Property & exterior care",
    short: "Interior and exterior painting for refresh or handover.",
    featured: false,
    image: "/images/services/painting.jpg",
    body: "Interior and exterior painting for Melbourne homes and commercial spaces. Share rooms, surfaces and deadlines — ideal before lease, sale or after repairs. Atlantis coordinates a suitable partner and quote.",
  },
  {
    id: "fence-repairs",
    name: "Fence repairs",
    group: "Property & exterior care",
    short: "Timber and boundary fence repairs with photo-based quoting.",
    featured: false,
    image: "/images/services/fence-repairs.jpg",
    body: "Fence repairs for Melbourne residential and commercial boundaries. Photos of damaged panels or posts help us quote quickly. Atlantis arranges an approved partner and stays your contact through the job.",
  },
  {
    id: "handyman",
    name: "Handyman services",
    group: "Property & exterior care",
    short: "Small repairs and odd jobs without juggling multiple trades.",
    featured: true,
    image: "/images/services/handyman.jpg",
    body: "Handyman services for Melbourne properties — fixtures, minor repairs and the odd jobs that pile up between bigger works. List the tasks; Atlantis reviews, quotes and arranges an approved partner under one request.",
  },
  {
    id: "pest-control",
    name: "Pest control",
    group: "Property & exterior care",
    short: "Property pest treatment arranged from your description and photos.",
    featured: false,
    image: "/images/services/pest-control.jpg",
    body: "Pest control for Melbourne homes and commercial sites. Tell us what you’re seeing and where. Atlantis coordinates an approved treatment partner and remains your single point of contact for the booking.",
  },
  {
    id: "common-area-maintenance",
    name: "Common area maintenance",
    group: "Property & exterior care",
    short: "Shared-area upkeep for apartments and complexes.",
    featured: false,
    image: "/images/services/common-area-maintenance.jpg",
    body: "Common area maintenance for Melbourne apartment complexes — outdoor shared spaces, light repairs and upkeep managers don’t want to chase separately. Atlantis coordinates partners under one accountable relationship.",
  },
  {
    id: "property-maintenance",
    name: "Property maintenance",
    group: "Property & exterior care",
    short: "One-off repairs or recurring maintenance plans.",
    featured: true,
    image: "/images/services/property-maintenance.jpg",
    body: "Property maintenance for Melbourne homes and commercial sites — one-off repairs or a recurring plan. Describe the issues and access; Atlantis quotes, arranges partners and stays responsible for the customer experience.",
  },
  {
    id: "rubbish-removal",
    name: "Rubbish removal",
    group: "Waste & removal",
    short: "Junk and general waste removal with clear load scoping.",
    featured: true,
    image: "/images/services/rubbish-removal.jpg",
    body: "Rubbish removal across Melbourne’s inner suburbs. Describe the load, stairs, lifts and parking. Atlantis quotes collection through an approved partner so you’re not comparing public junk-removal listings yourself.",
  },
  {
    id: "furniture-removal",
    name: "Furniture removal",
    group: "Waste & removal",
    short: "Single items through to full furniture loads.",
    featured: false,
    image: "/images/services/furniture-removal.jpg",
    body: "Furniture removal from a single sofa to a full load. Photos and access notes (stairs, lifts, parking) help Atlantis quote accurately and arrange pickup for Melbourne homes and apartments.",
  },
  {
    id: "property-clean-outs",
    name: "Property clean-outs",
    group: "Waste & removal",
    short: "Clearing vacant, cluttered or deceased-estate style loads.",
    featured: false,
    image: "/images/services/property-clean-outs.jpg",
    body: "Property clean-outs for vacant or cluttered Melbourne sites. Tell us the condition, volume and timing. Atlantis coordinates an approved partner for a clean handback — one conversation from quote to clearance.",
  },
  {
    id: "hard-waste",
    name: "Hard waste removal",
    group: "Waste & removal",
    short: "Bulk hard rubbish and skip-style collection jobs.",
    featured: false,
    image: "/images/services/hard-waste.jpg",
    body: "Hard waste removal for bulk items councils won’t take on the nature strip. List items and site access; Atlantis arranges suitable collection for Melbourne residential and commercial properties.",
  },
  {
    id: "move-in-out",
    name: "Move-in / move-out services",
    group: "Move-in / move-out",
    short: "Cleaning and related jobs timed to your move dates.",
    featured: false,
    image: "/images/services/move-in-out.jpg",
    body: "Move-in and move-out support for Melbourne rentals and sales — cleaning, removal and make-ready tasks under one Atlantis request. Share dates and what must be done before keys change hands.",
  },
  {
    id: "property-presentation",
    name: "Property presentation",
    group: "Move-in / move-out",
    short: "Make-ready work before photos, lease or sale.",
    featured: false,
    image: "/images/services/property-presentation.jpg",
    body: "Property presentation before photography, lease or sale. Atlantis coordinates make-ready tasks so Melbourne homes and apartments present cleanly on deadline — with one company accountable for the brief.",
  },
  {
    id: "property-staging",
    name: "Property staging",
    group: "Property presentation",
    short: "Staging for lease or sale — quote-led and deadline-aware.",
    featured: false,
    image: "/images/services/property-staging.jpg",
    body: "Property staging for Melbourne lease or sale campaigns. Tell us the audience, rooms and inspection dates. Atlantis quotes and coordinates staging partners so presentation matches your marketing timeline.",
  },
  {
    id: "interior-styling",
    name: "Interior styling",
    group: "Property presentation",
    short: "Styling support to lift presentation before inspections.",
    featured: false,
    image: "/images/services/interior-styling.jpg",
    body: "Interior styling for Melbourne properties headed to market or inspection. Share the brief and spaces; Atlantis coordinates styling support while you keep one customer-facing contact.",
  },
  {
    id: "interior-design",
    name: "Interior design",
    group: "Property presentation",
    short: "Design support arranged under one Atlantis brief.",
    featured: false,
    image: "/images/services/interior-design.jpg",
    body: "Interior design support arranged through Atlantis for Melbourne residential and investment properties. Outline outcomes and timing — we coordinate a suitable partner and keep the quote in one place.",
  },
  {
    id: "furniture-supply",
    name: "Furniture supply & placement",
    group: "Property presentation",
    short: "Furniture supply and placement as part of staging.",
    featured: false,
    image: "/images/services/furniture-supply.jpg",
    body: "Furniture supply and placement for Melbourne staging and make-ready jobs. Atlantis reviews the presentation brief, coordinates supply partners, and keeps delivery aligned with your inspection or photoshoot date.",
  },
  {
    id: "property-preparation",
    name: "Property preparation",
    group: "Property presentation",
    short: "Clean, repair and present before the next chapter.",
    featured: false,
    image: "/images/services/property-preparation.jpg",
    body: "Property preparation that combines clean, repair and presentation tasks before lease, sale or tenant return. One Atlantis request covers the scope for Melbourne owners and managers who don’t want fragmented bookings.",
  },
  {
    id: "facility-management",
    name: "Facility management",
    group: "Building & facilities",
    short: "Coordinated facilities support for Melbourne buildings.",
    featured: false,
    image: "/images/services/facility-management.jpg",
    body: "Facility management support for Melbourne buildings that need ongoing coordinated care. Request cleaning, maintenance and related work through Atlantis — approved partners deliver; you keep one accountable relationship.",
  },
  {
    id: "building-support",
    name: "Building support services",
    group: "Building & facilities",
    short: "Day-to-day building support for managers and committees.",
    featured: false,
    image: "/images/services/building-support.jpg",
    body: "Building support services for day-to-day site needs across Melbourne apartments and commercial buildings. Describe the issue and urgency; Atlantis coordinates a suitable partner and stays your named contact.",
  },
  {
    id: "preventative-maintenance",
    name: "Preventative maintenance",
    group: "Building & facilities",
    short: "Planned upkeep schedules before issues escalate.",
    featured: false,
    image: "/images/services/preventative-maintenance.jpg",
    body: "Preventative maintenance programmes for Melbourne buildings and portfolios. Atlantis helps you plan recurring upkeep, quotes the first cycle, and coordinates partners so schedules don’t rely on ad-hoc chasing.",
  },
  {
    id: "apartment-turnover",
    name: "Apartment turnover services",
    group: "Building & facilities",
    short: "Vacancy turnovers — clean and make-ready between tenancies.",
    featured: false,
    image: "/images/services/apartment-turnover.jpg",
    body: "Apartment turnover services for Melbourne vacancies — cleaning, presentation and related tasks in one request. Built for managers running multiple handovers who need reliable dates, not fragmented provider lists.",
  },
  {
    id: "strata-common",
    name: "Strata & common property services",
    group: "Building & facilities",
    short: "Common property work for strata and owners corporations.",
    featured: false,
    image: "/images/services/strata-common.jpg",
    body: "Strata and common property services for Melbourne owners corporations and building managers. Share scheme needs and access rules; Atlantis coordinates approved partners and remains the customer-facing company.",
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
