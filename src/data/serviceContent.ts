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
      "Rooms and frequency agreed in the quote",
      "A price before the first visit",
      "Weekly, fortnightly or monthly visits where that suits",
      "Follow-up with Atlantis if something is missed",
    ],
    expect: [
      "Owners, tenants, landlords and people looking after offices all use this. Nothing is booked until you have seen the price and what it covers.",
      "Mention parking, keys and the time of day that works. If the postcode sits a little outside our usual area, we still read the request.",
    ],
  },
  "Property & exterior care": {
    includes: [
      "Surfaces and access noted before we price",
      "A quote before any booking",
      "One-off work or a regular visit",
      "Updates from Atlantis, not from a different company each time",
    ],
    expect: [
      "Gardens, glass, façades and shared outdoor areas. A photo saves a lot of back and forth. Weather and access can move the day, so tell us if a date is fixed.",
      "A one-off tidy and a regular visit can both start from the same request, across Melbourne’s inner suburbs.",
    ],
  },
  "Waste & removal": {
    includes: [
      "The load priced from your notes or photos",
      "Stairs, lifts and parking taken into the quote",
      "Collection booked once you accept",
      "One company to call if the day changes",
    ],
    expect: [
      "People book this for a clear-out, furniture, hard waste, or a place that has been left full. List what you can. Building rules matter as much as the volume.",
      "How it is disposed of depends on the load. We’ll say what we’re collecting before the day.",
    ],
  },
  "Move-in / move-out": {
    includes: [
      "Cleaning and related tasks on one request",
      "Timing set around the handover date",
      "A quote based on condition and deadline",
      "Updates kept with Atlantis until the keys move",
    ],
    expect: [
      "Tenants leaving, owners between leases, and managers with several turnovers. Send access details and the date early. A tight Friday is easier to plan if we know on Monday.",
      "A bond checklist can be attached. Rubbish or a small repair can sit on the same request if they have to be done before handover.",
    ],
  },
  "Property presentation": {
    includes: [
      "The audience and the date agreed up front",
      "A quote for the presentation work",
      "Staging, styling or preparation as the property needs",
      "One company across the job",
    ],
    expect: [
      "Usually a place going to lease or sale, or a manager getting it ready for photographs. Tell us who will see it, and when.",
      "Photos of the rooms help. Furniture and styling vary a lot, so the quote follows your brief rather than a package.",
    ],
  },
  "Building & facilities": {
    includes: [
      "The building and the issue described in one request",
      "A quote before work is booked",
      "A single visit, or ongoing care",
      "A named contact at Atlantis for managers and committees",
    ],
    expect: [
      "Strata, building managers and facilities teams. Also commercial sites that would rather call one company than keep a list of trades.",
      "Say what the building is, how we get in, and how urgent it is. A regular arrangement can follow the first quote if that is what you want.",
    ],
  },
};

const fallbackCopy: GroupCopy = {
  includes: [
    "Your request read by Atlantis",
    "A quote before anyone is booked",
    "The work carried out by an approved partner",
    "Follow-up with us, not with a directory of providers",
  ],
  expect: [
    "This is for homes, managers and commercial sites across Melbourne’s inner suburbs. You deal with Atlantis.",
    "We price the job from what you send. The more specific you are about access and timing, the closer the quote will be to the day itself.",
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
      "Some households want a set day each fortnight. Others call when the place has got away from them. Both are fine.",
      "Say which rooms matter, how often you’d like someone in, and where to park. We’ll price it from that.",
    ],
    includes: [
      "Kitchen, bathrooms and living areas, as agreed",
      "Extra rooms noted on the request",
      "A regular visit or a single clean",
      "Changes handled with Atlantis",
    ],
  },
  "commercial-cleaning": {
    overview: [
      "An office, a shop, a small tenancy. Tell us which zones, and whether the clean has to happen after the team has left.",
      "You don’t manage a roster of cleaners. If the schedule needs to change, you tell us.",
    ],
    includes: [
      "The zones you nominate",
      "After-hours visits where the site needs them",
      "A quote before the first clean",
      "One number for your team",
    ],
  },
  "end-of-lease": {
    overview: [
      "Vacate cleans are usually about a date, not a preference. Send the checklist, photos and the day the keys have to be back.",
      "Tenants, landlords and managers use the same form. If the bond inspection is close, say so in the first line.",
    ],
    includes: [
      "A clean built around your checklist",
      "Requests from tenants, owners or managers",
      "Photos reviewed when you send them",
      "The booking confirmed with Atlantis",
    ],
    expect: [
      "Attach the agency checklist if you have one, and say when someone can get in. The price follows the size of the place and the condition it’s in.",
      "Rubbish or a small repair can go on the same request if they also have to be done before handover.",
    ],
  },
  "deep-cleaning": {
    overview: [
      "This is for a kitchen or bathroom that a normal visit will not shift, or a place that has been empty for a while.",
      "Describe the condition, and send photos if you can. The quote says what is included before anyone arrives.",
    ],
  },
  "window-cleaning": {
    overview: [
      "Inside, outside, or both. Homes and commercial glass across Melbourne’s inner suburbs.",
      "Storeys, balconies and restricted access change the job. Weather can move an exterior clean. A regular visit is possible if the glass needs it.",
    ],
  },
  "pressure-washing": {
    overview: [
      "Driveways, paths and façades that have gone grey or green. Tell us the surfaces.",
      "A photo of the worst of it is useful. We quote the wash, book it, and you deal with us if the day needs to move.",
    ],
  },
  "gardening-landscaping": {
    overview: [
      "A garden that needs a proper tidy, or one that should simply stay looked after.",
      "Say whether this is once or ongoing, and which beds or lawns matter. Access for a trailer is worth mentioning.",
    ],
    includes: [
      "Lawn, beds and hedges, as agreed",
      "A one-off tidy or a regular visit",
      "A quote before the first day",
      "Changes arranged with Atlantis",
    ],
  },
  "handyman": {
    overview: [
      "The jobs that are too small to brief a specialist for, and too many to ignore. Put them on one list.",
      "Photos help when the fault is easier to show than describe. We’ll price the list and book it as one visit where we can.",
    ],
  },
  "rubbish-removal": {
    overview: [
      "Tell us the load. We’ll price the collection rather than leaving you to ring around.",
      "A rough list, plus stairs, lifts and parking, is what keeps the quote honest.",
    ],
  },
  "property-maintenance": {
    overview: [
      "A single repair, or a visit that comes around so small things don’t wait until they fail.",
      "Say what needs doing and how urgent it is. You stay with Atlantis for the quote and anything that follows.",
    ],
  },
  "builders-clean": {
    overview: [
      "These cleans have to fit around the last of the trades. Tell us the stage of the site and when it will actually be clear.",
      "The price reflects dust, debris and the access window. We book the clean for when the site is ready, not for a date that only looks good on paper.",
    ],
  },
  "strata-common": {
    overview: [
      "Common property for a committee or a manager: cleaning, care, and the jobs that keep coming back.",
      "Describe the areas, the building, and any access rules. We’ll quote it and report to the person you name.",
    ],
    includes: [
      "Common areas described before we price",
      "A quote from Atlantis",
      "Cleaning, care and related building tasks",
      "Updates back to your contact",
    ],
  },
};

function defaultOverview(service: Service): string[] {
  return [
    service.body,
    `${service.name} is arranged by Atlantis across ${site.serviceArea}. Send the details once. We’ll quote it, and you’ll hear from us about the booking.`,
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
