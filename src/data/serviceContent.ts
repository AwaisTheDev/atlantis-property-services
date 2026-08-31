import type { Service } from "./services";
import { site } from "./site";

export type ServicePageContent = {
  /** Longer intro paragraphs for the overview section */
  overview: string[];
  /** Longer paragraphs covering scope, who it’s for, and practical notes */
  expect: string[];
  /** Short checklist shown inside the expect section */
  includes: string[];
};

type GroupCopy = {
  includes: string[];
  expect: string[];
};

const groupCopy: Record<string, GroupCopy> = {
  "Cleaning & hygiene": {
    includes: [
      "Scope review from your description and any photos you share",
      "Quote coordinated through Atlantis — no public provider comparison",
      "Suitable approved partner arranged for the work",
      "One point of contact from enquiry through to completion",
    ],
    expect: [
      "This work is typically requested by home owners and tenants, landlords and property managers, and teams looking after offices or commercial premises. Exact rooms, cadence and access are confirmed in your quote — nothing is locked in until you are happy with the scope.",
      "Share access notes, parking and preferred timing when you request. Recurring schedules can be weekly, fortnightly or monthly where that suits the property. Pricing is quote-only unless otherwise agreed, and every postcode is reviewed manually so out-of-area requests are never auto-rejected.",
    ],
  },
  "Property & exterior care": {
    includes: [
      "Clear brief capture for areas, surfaces and access",
      "Quote managed by Atlantis before any work is booked",
      "Approved partner coordinated for delivery",
      "Updates through one accountable company",
    ],
    expect: [
      "Exterior and outdoor care is commonly requested for residential gardens and façades, strata and common property, and commercial hard surfaces. Photos help us scope outdoor work quickly; weather and access can affect timing, so tell us any constraints up front.",
      "One-off resets and recurring care can both sit in a single Atlantis request. You deal with Atlantis — partners stay behind the scenes — with quote-led pricing across Melbourne’s inner suburbs and surrounding service area.",
    ],
  },
  "Waste & removal": {
    includes: [
      "Load and access assessment from your notes or photos",
      "Quote for removal coordinated by Atlantis",
      "Suitable partner arranged for collection",
      "Single customer contact throughout",
    ],
    expect: [
      "Removal jobs are often booked for decluttering and clean-outs, furniture and hard waste, or vacant property clearances. List items where you can, and note stairs, lifts, parking and any building rules so the quote reflects the real job.",
      "Disposal method depends on the load and local requirements. Atlantis stays your one contact from the first message through collection — you are not left comparing public provider listings to get rubbish cleared.",
    ],
  },
  "Move-in / move-out": {
    includes: [
      "Coordinated brief across cleaning and related tasks",
      "Quote and timing managed by Atlantis",
      "Approved partners arranged under one request",
      "Handover-friendly communication for vacate or make-ready dates",
    ],
    expect: [
      "Move-in and move-out work is built for tenants preparing to vacate, landlords and investors between leases, and managers running multiple turnovers. Share keys or access details and the target handover date early so timing stays realistic.",
      "Bond or make-ready checklists can be attached to your request, and multiple related services can sit in one Atlantis conversation. Pricing is quote-only and scoped to the property, condition and deadline you provide.",
    ],
  },
  "Property presentation": {
    includes: [
      "Briefing on presentation goals, audience and timing",
      "Quote-led coordination through Atlantis",
      "Suitable partners arranged for staging, styling or preparation",
      "One relationship for the full presentation job",
    ],
    expect: [
      "Presentation work is usually requested for properties headed to lease or sale, investors refreshing a vacant asset, or managers preparing for photography and inspections. Tell us the audience and deadline so the brief stays sharp.",
      "Furniture and styling scopes vary — photos help a great deal. Presentation jobs are quote-only and scoped to your brief; Atlantis remains the company you deal with while approved partners deliver the work.",
    ],
  },
  "Building & facilities": {
    includes: [
      "Site needs captured in a single request",
      "Quote and partner coordination by Atlantis",
      "Support for one-off or ongoing building care",
      "Accountable customer-facing relationship for managers and committees",
    ],
    expect: [
      "Building and facilities requests commonly come from strata and owners corporations, building managers and facilities teams, and commercial sites that need coordinated support without juggling separate providers.",
      "Describe the building type, access and urgency in your request. Partners stay behind the scenes; Atlantis remains your contact. Recurring facilities work can be planned after the first quote if an ongoing arrangement makes sense.",
    ],
  },
};

const fallbackCopy: GroupCopy = {
  includes: [
    "Request reviewed by Atlantis",
    "Quote coordinated for your brief",
    "Suitable approved partner arranged",
    "One point of contact throughout",
  ],
  expect: [
    "Atlantis coordinates this service for residential customers, property managers and commercial sites across Melbourne’s inner suburbs and surrounding area. You deal with one company — not a public provider marketplace.",
    "Pricing is quote-only. We review every postcode manually. Share as much detail as you can in your request so the quote and timing reflect the real job.",
  ],
};

type Override = {
  overview?: string[];
  expect?: string[];
  includes?: string[];
};

const overrides: Partial<Record<string, Override>> = {
  "residential-cleaning": {
    overview: [
      "From weekly resets to a one-off spring clean, residential cleaning through Atlantis is built around your rooms, access and routine — without you needing to compare providers online.",
      "Tell us which areas matter most, how often you want the work done, and any access or parking notes. Atlantis reviews the brief, coordinates a suitable approved partner, and stays your single point of contact from quote through to completion.",
    ],
    includes: [
      "Kitchen, bathrooms and living areas as scoped in your brief",
      "Optional focus rooms or add-ons noted when you request",
      "Regular or one-off cadence to suit the household",
      "Quote and partner coordination handled by Atlantis",
    ],
  },
  "commercial-cleaning": {
    overview: [
      "Commercial cleaning arranged so your workplace stays presentable without managing multiple cleaners yourself. Share hours, zones and after-hours needs — Atlantis coordinates the rest.",
      "Whether you look after an office, retail space or small commercial premises, one request gives you a clear quote path and a single company to follow up with. Partners deliver the work; Atlantis remains accountable to you.",
    ],
    includes: [
      "Office, retail or premises zones as scoped",
      "Schedule options including after-hours where needed",
      "Quote managed through Atlantis",
      "Single point of contact for your team",
    ],
  },
  "end-of-lease": {
    overview: [
      "End-of-lease cleaning is time-sensitive. Send the checklist, photos and vacate date — Atlantis arranges a suitable partner and keeps the handover conversation in one place.",
      "Tenants, landlords and property managers all use the same simple request path. You are not left hunting for a last-minute provider or comparing public listings when the bond or re-let deadline is close.",
    ],
    includes: [
      "Vacate-focused clean scoped to your brief and checklist",
      "Support for tenant, landlord or manager requests",
      "Photo review where provided",
      "Quote and booking coordination by Atlantis",
    ],
    expect: [
      "Attach the bond or agency checklist if you have one, and include access timing and key handover details so the job can be planned around vacate day. Pricing is quote-only based on property size and condition.",
      "Related tasks — such as rubbish removal or a quick maintenance fix — can sit in the same Atlantis conversation if you need more than the clean alone before handover.",
    ],
  },
  "deep-cleaning": {
    overview: [
      "Deep cleaning goes beyond a standard visit — ideal after renovations, long vacancies or when kitchens and bathrooms need a thorough reset.",
      "Describe the condition and share photos if you can. Atlantis scopes the work, coordinates an approved partner, and keeps pricing quote-led so you know what is included before anyone arrives on site.",
    ],
  },
  "window-cleaning": {
    overview: [
      "Clear glass makes a property feel looked after. Request interior, exterior or both — Atlantis coordinates a suitable partner for homes and commercial sites across Melbourne’s inner suburbs.",
      "Note storeys, balconies and any restricted access in your request. Weather can affect exterior timing; commercial sites can also ask for recurring glass care under one Atlantis relationship.",
    ],
  },
  "pressure-washing": {
    overview: [
      "Pressure washing brings driveways, paths and façades back to life. Describe the surfaces and we’ll arrange a quote through Atlantis.",
      "Photos of stained or weathered areas help us scope the job accurately. You deal with Atlantis for the quote, timing and follow-up — an approved partner delivers the wash.",
    ],
  },
  "gardening-landscaping": {
    overview: [
      "Gardens and lawns presented properly — one-off tidies or recurring care. Atlantis coordinates outdoor work so owners and managers stay with a single accountable contact.",
      "Share the areas that matter most and whether you need a one-off reset or an ongoing schedule. Atlantis arranges a suitable partner and keeps the conversation in one place.",
    ],
    includes: [
      "Lawn, garden and outdoor presentation as scoped",
      "One-off or recurring options",
      "Quote managed by Atlantis",
      "Approved partner arranged for delivery",
    ],
  },
  "handyman": {
    overview: [
      "Odd jobs and small repairs add up. List what needs doing in one request — Atlantis coordinates a suitable partner instead of you chasing separate trades.",
      "Photos help when the job is hard to describe in words. You get a quote-led path and one company to update, while the work is delivered by an approved partner behind the scenes.",
    ],
  },
  "rubbish-removal": {
    overview: [
      "Junk and general rubbish cleared without the hassle of finding a separate removalist. Tell us the load — Atlantis arranges collection through an approved partner.",
      "A rough list of items, plus notes on stairs, lifts and parking, keeps the quote realistic. Atlantis stays your contact from the first message through to collection day.",
    ],
  },
  "property-maintenance": {
    overview: [
      "Keep homes and commercial sites maintained without juggling providers. Request a one-off fix or an ongoing plan — Atlantis stays the company you deal with.",
      "Describe the tasks and urgency in your request. We coordinate a suitable approved partner, manage the quote, and keep updates in one conversation.",
    ],
  },
  "builders-clean": {
    overview: [
      "Post-build and renovation cleans need timing around trades. Share the site stage and access — Atlantis coordinates a suitable clean so handover stays on track.",
      "Quote-led pricing reflects site condition and access windows. You deal with Atlantis; an approved partner delivers the clean when the site is ready.",
    ],
  },
  "strata-common": {
    overview: [
      "Strata and common property work under one Atlantis request — so committees and managers are not comparing public provider listings to get the job done.",
      "Describe the common areas, building type and any access rules. Atlantis coordinates a suitable partner and reports back to your nominated contact.",
    ],
    includes: [
      "Common property scope captured clearly",
      "Quote and partner arrangement by Atlantis",
      "Support for cleaning, care and related building tasks",
      "Accountable reporting back to your contact",
    ],
  },
};

function defaultOverview(service: Service): string[] {
  return [
    service.body,
    `Atlantis coordinates ${service.name.toLowerCase()} across ${site.serviceArea}. You request the work once, receive a quote-led path, and deal with one company — approved partners deliver behind the scenes, and there is no marketplace-style provider comparison on this site.`,
  ];
}

export function getServicePageContent(service: Service): ServicePageContent {
  const group = groupCopy[service.group] ?? fallbackCopy;
  const extra = overrides[service.id] ?? {};

  return {
    overview: extra.overview ?? defaultOverview(service),
    expect: extra.expect ?? group.expect,
    includes: extra.includes ?? group.includes,
  };
}
