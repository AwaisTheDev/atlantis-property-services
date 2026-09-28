import type { Service } from "./services";

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
      "The rooms you actually want done",
      "Weekly, fortnightly, or just the once",
      "A bond clean off the agency checklist, when that’s the job",
      "Ring us if something’s been missed",
    ],
    expect: [
      "Owners, tenants, landlords, and whoever’s stuck looking after the office. A regular clean and a vacate are different jobs — say which one you’ve got.",
      "Parking, keys, and what time of day someone can actually get in. If the postcode’s a bit outside where we usually go, send it anyway.",
    ],
  },
  "Property & exterior care": {
    includes: [
      "Glass, gardens, paint, fences, the small repairs",
      "A photo if it’s outside and hard to describe",
      "Once, or a visit that comes around",
      "Weather can shove an outdoor day — we’ll say if it has",
    ],
    expect: [
      "Gardens, glass, the front of the building, the shared bits out the back. A photo saves a long email.",
      "If the date can’t move, say so. Otherwise rain, or a body corporate rule about the balcony, will move an outdoor job for you.",
    ],
  },
  "Waste & removal": {
    includes: [
      "What’s being taken, agreed before the day",
      "Stairs, a lift, and where a ute can stop",
      "A rough list is enough to start",
      "Houses, units and shop clean-outs",
    ],
    expect: [
      "Clear-outs, furniture, hard rubbish, or a place someone’s walked out of. List what you can. Stairs and building rules matter as much as how much stuff there is.",
      "We’ll say what’s being taken before the ute turns up. Not on the footpath, arguing about a mattress that wasn’t on the list.",
    ],
  },
  "Move-in / move-out": {
    includes: [
      "The clean, and whatever else has to happen before the keys",
      "Timed to the handover, not “sometime that week”",
      "The agency checklist, if they gave you one",
      "Rubbish or a small repair on the same visit, when it has to be",
    ],
    expect: [
      "Tenants leaving, owners between leases, managers with a few places turning over at once. A tight Friday is much easier if we know on the Monday.",
      "Stick the bond checklist on if you’ve got one. The garden, a door, a load of rubbish — if it has to be done before the keys, put it on the same note.",
    ],
  },
  "Property presentation": {
    includes: [
      "Who’s walking through, and which morning",
      "Staging, styling, or just the rooms people will stand in",
      "Furniture in before the photos, not the week after",
      "The tidy-up around it, if you want that too",
    ],
    expect: [
      "Usually a place going to lease or sale, or a manager getting it ready for the photographer. Empty rooms and furnished rooms are different jobs.",
      "We don’t sell a set package. A one-bedroom in Brunswick and a family house in the east don’t get the same furniture, or the same price.",
    ],
  },
  "Building & facilities": {
    includes: [
      "Foyers, corridors, the jobs that keep coming back",
      "A one-off, or a round through the year",
      "Access rules, and who actually wants the update",
      "A few units turning over in the same week",
    ],
    expect: [
      "Strata, building managers, and anyone who’s sick of a different number for the foyer, the garden and the vacant unit on level two.",
      "What sort of building, how we get in, and how urgent. If you want it on a regular round after the first job, say that — don’t wait for us to suggest it.",
    ],
  },
};

const fallbackCopy: GroupCopy = {
  includes: [
    "What you described, not a generic package",
    "Access and timing, because they change the day",
    "Homes, units and commercial sites",
    "A call back to us if it isn’t right",
  ],
  expect: [
    "Homes, managers and commercial sites through Melbourne’s inner suburbs.",
    "The more specific you are about access and the date, the less we have to guess.",
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
      "Some households want a set morning each fortnight. Others ring when the place has got away from them. Both are fine.",
      "Kitchen, bathrooms, floors, and whichever other rooms you care about. Pets, a fob for the car park, a key under the mat — mention it. That’s what makes the first visit messy or not.",
    ],
    includes: [
      "Fortnightly, or when you ring because it’s got away",
      "Kitchen, bathrooms, floors, and the rooms you add",
      "Keys, parking, pets, if any of that’s awkward",
      "The same arrangement if you want it to keep going",
    ],
  },
  "commercial-cleaning": {
    overview: [
      "An office after the staff have gone. A shop on a morning it’s shut. A small tenancy that just needs the floors and the kitchen, not a hospital-grade clean.",
      "If next week has to move, say so. We’d rather know than turn up to a locked door and an alarm.",
    ],
    includes: [
      "After hours, or whenever the place is actually empty",
      "The zones you care about, not a generic whole office",
      "Weekly, or a one-off before an event or a fit-out",
      "Alarm codes and loading docks, if they’re fussy",
    ],
  },
  "end-of-lease": {
    overview: [
      "Vacate cleans are a date. The keys, the inspection, sometimes both on the same Friday.",
      "Ovens, skirts, the bathroom the last clean skipped. If the agency sent a checklist, that’s what we work off — not a guess at what “bond clean” means to them.",
    ],
    includes: [
      "Off the agency checklist, when you’ve got one",
      "Ovens, bathrooms, skirts, inside cupboards",
      "The day the keys have to be back",
      "Photos if it’s worse than a normal vacate",
    ],
    expect: [
      "Tenant, landlord or manager — same form. Say when someone can get in, and whether the power and water are still on.",
      "Rubbish or a small repair can go on the same job if they also have to be done before handover. A separate booking for a door latch is how Fridays fall apart.",
    ],
  },
  "deep-cleaning": {
    overview: [
      "A kitchen a normal visit won’t shift. A bathroom that’s gone past a wipe. A place that’s been empty and smells like it.",
      "Photos matter here more than a room count. Two bathrooms in the same postcode can be completely different jobs.",
    ],
  },
  "window-cleaning": {
    overview: [
      "Inside, outside, or both. A terrace on the ground, or glass three floors up with a balcony you’re not sure we’re allowed on.",
      "Body corporate rules and the weather are the two things that move this. A regular visit makes sense if the front windows face a main road and go grey every month.",
    ],
    expect: [
      "Count the storeys, and say whether we can stand on the balcony. If the building has a rule about it, that rule is the job.",
    ],
    includes: [
      "Inside, outside, or both",
      "Homes and shopfronts",
      "Balcony access, if we’re allowed",
      "A regular visit if the glass faces a main road",
    ],
  },
  "pressure-washing": {
    overview: [
      "Driveways that have gone green, paths, the side of the building nobody’s touched since last winter.",
      "A photo of the worst of it is more useful than a measurement. And say if the water has to stay off the neighbour’s side, or out of a basement vent.",
    ],
    expect: [
      "A photo of the staining, and where the water is allowed to go. Runoff into a basement or across a neighbour’s path is the bit that gets expensive.",
    ],
    includes: [
      "Driveways, paths, the façade",
      "The green and the grey, not a repaint",
      "Water kept off the neighbour, if that matters",
      "A dry day — rain makes a mess of the result",
    ],
  },
  "gardening-landscaping": {
    overview: [
      "A garden that’s got away, or one that should simply stay looked after so you’re not embarrassed at an open.",
      "Beds, lawn, the hedge on the lane. Say whether a trailer can get down the drive. Some of the inner-north terraces can’t take one, and that changes how the green waste leaves.",
    ],
    includes: [
      "Lawn, edges, and the beds you want touched",
      "A cut before an open, or a regular visit",
      "Green waste taken, if that’s part of it",
      "Where a trailer can actually get in",
    ],
    expect: [
      "Say what you want left, not just what you want cut. Some people want it neat. Some want the agapanthus gone. Those are different afternoons.",
    ],
  },
  "handyman": {
    overview: [
      "The list that isn’t worth three call-outs. A hinge, a silicone edge, a tap washer, the hall light that’s been out since March.",
      "Photos help when it’s easier to show than describe. If they’ll fit in the same morning, they go on the one visit.",
    ],
    expect: [
      "Put the whole list in the one note. If something needs a plumber or an electrician rather than a handyman, we’ll say so instead of pretending.",
    ],
    includes: [
      "The small jobs on one list",
      "Hinges, washers, silicone, lights",
      "Photos where it’s easier to show",
      "One morning, if they’ll fit",
    ],
  },
  "rubbish-removal": {
    overview: [
      "What’s actually there — not “a bit of junk”. A garage, a room, the stuff left after a tenant. A rough list and a couple of photos.",
      "Stairs, a lift that fits a sofa or doesn’t, and where a ute can stop without blocking the tram. That’s the price. Not a guess from the footpath.",
    ],
  },
  "property-maintenance": {
    overview: [
      "A leaking tap this week. Or a round every couple of months so the small stuff doesn’t sit until a tenant complains.",
      "How we get in matters as much as what’s broken. A lockbox, a resident who’s home after five, a manager who wants a photo when it’s done.",
    ],
    expect: [
      "One thing this week is fine. So is a round every couple of months. Say which, because the price isn’t the same.",
    ],
    includes: [
      "The thing that’s actually broken",
      "Or a round so it doesn’t get that far",
      "How we get in",
      "A photo back to you, if you want one",
    ],
  },
  "builders-clean": {
    overview: [
      "Plaster dust, paint speck, the offcuts the tradies left in the bath. This has to wait until they’re actually out.",
      "A clean booked while the tiler is still on site just gets ruined. The real day the place is clear matters more than the date on the program.",
    ],
    expect: [
      "Dust in the tracks, paint on the glass, grit in the bath. If the sparkie’s still coming back tomorrow, wait.",
    ],
    includes: [
      "After the tradies are out",
      "Dust, paint speck, offcuts",
      "Floors, glass, wet areas",
      "The handover day, if there’s one",
    ],
  },
  "strata-common": {
    overview: [
      "Common property: the foyer, the garden the committee argues about, the paths, the bin room.",
      "Access rules, whether residents are particular about after-hours, and which one person wants the update. A group email to the whole committee is how these jobs stall.",
    ],
    includes: [
      "Foyer, garden, paths, the bin area",
      "Whatever the committee has actually asked for",
      "Access and after-hours rules",
      "An update to one person, not the whole committee",
    ],
  },
  "apartment-common-area": {
    expect: [
      "Lobbies and bin rooms pick up a different kind of dirt to a home. Weekly is the usual, unless the building is small enough that fortnightly still looks alright.",
    ],
    includes: [
      "Foyer and lifts",
      "Bin rooms and the mail area",
      "A set day",
      "After hours, if residents want the foyer quiet",
    ],
  },
  "exterior-cleaning": {
    expect: [
      "The street front and the courtyard are often two different states of neglect. A photo of each, or we’ll price the tidy one and turn up to the other.",
    ],
    includes: [
      "The façade and the courtyard",
      "Cobwebs, algae, the bins",
      "Before an open, if there’s a morning",
      "Where the water is allowed to run",
    ],
  },
  painting: {
    expect: [
      "Say if anyone’s living there while it’s happening, and when it has to be dry. Wet paint the morning of an open is the way this goes wrong.",
    ],
    includes: [
      "Rooms, or the outside",
      "The colour, if you’ve already chosen it",
      "When it has to be dry",
      "Furniture shifted, or the rooms emptied",
    ],
  },
  "fence-repairs": {
    expect: [
      "A shared fence means a neighbour. If they’re already across it, say so. If they aren’t, that’s a conversation we can’t have for you.",
    ],
    includes: [
      "Panels, posts, palings",
      "A photo of the damaged bit",
      "Whose side of the boundary",
      "Timber, unless you’ve said otherwise",
    ],
  },
  "pest-control": {
    expect: [
      "Ants in the kitchen and wasps under the eave are not the same visit. What you’re seeing matters more than a product name.",
    ],
    includes: [
      "The pest, if you know it",
      "Which rooms, or the outside",
      "Pets and kids in the house",
      "Someone there to let us in",
    ],
  },
  "common-area-maintenance": {
    expect: [
      "The shared garden and the small things residents complain about. Not a full building contract.",
    ],
    includes: [
      "Shared garden and paths",
      "Gates, lights, the small repairs",
      "A manager as the contact",
      "Once, or through the season",
    ],
  },
  "furniture-removal": {
    expect: [
      "Measure the lift if you know it. A sofa that looked fine in the photo regularly doesn’t fit.",
    ],
    includes: [
      "The pieces, not “some furniture”",
      "Stairs or a lift",
      "Out of the place, not into another room",
      "A photo if it’s wedged",
    ],
  },
  "property-clean-outs": {
    expect: [
      "Slower than a few bags of rubbish. If the house is full to the door, say that.",
    ],
    includes: [
      "The rooms that are full",
      "Garage and shed, if they’re in it",
      "Anything you want kept, left where we can see it",
      "Cleared properly, not half done",
    ],
  },
  "hard-waste": {
    expect: [
      "Council hard rubbish has a queue, and a list of things it won’t take. If the keys are due before that, this is the other way.",
    ],
    includes: [
      "Mattresses, timber, whitegoods",
      "A unit, a house or a shop",
      "How it gets to the street",
      "A date, if the council slot is too late",
    ],
  },
  "move-in-out": {
    expect: [
      "Write the dates in order. Photographer, keys, new tenant. The one that can’t slip is the one we work backwards from.",
    ],
    includes: [
      "The clean",
      "Rubbish, a door, the garden — if they’re on the list",
      "The handover morning",
      "Access the day before, if it’s already empty",
    ],
  },
  "property-presentation": {
    expect: [
      "The practical version. Clean, the obvious fixes, the rooms someone will actually stand in. Not a furniture package unless you ask.",
    ],
    includes: [
      "The rooms a buyer or tenant sees",
      "Small repairs that show in photos",
      "Timed to the photographer or the inspection",
      "Not a full restyle unless you want one",
    ],
  },
  "property-staging": {
    expect: [
      "The open and the photo morning drive this. Furniture that arrives the day after the shoot is just storage.",
    ],
    includes: [
      "Lease or sale",
      "Which rooms people stand in",
      "The morning the photos are booked",
      "Empty or furnished — say which",
    ],
  },
  "interior-styling": {
    expect: [
      "Styling sits on top of a clean. It doesn’t replace one. If the place is still grubby, say so.",
    ],
    includes: [
      "The rooms that end up in the photos",
      "Less furniture than a full stage",
      "The morning of the open or the shoot",
      "What you want left behind, if anything",
    ],
  },
  "interior-design": {
    expect: [
      "Someone living here, a rental that has to lease, or a weekend of inspections. Those are three different briefs.",
    ],
    includes: [
      "A home, or a rental being refreshed",
      "What has to change",
      "A date, if it’s tied to a campaign",
      "The rest of the prep, if you want it together",
    ],
  },
  "furniture-supply": {
    expect: [
      "Delivery has to beat the photographer. If the furniture isn’t staying, pickup needs a day after the last open — not whenever.",
    ],
    includes: [
      "Pieces for an empty unit",
      "In before the shoot",
      "Pickup after the campaign, if it’s hired",
      "The lift or the stairs",
    ],
  },
  "property-preparation": {
    expect: [
      "List everything that has to be finished by the same morning. If the painter and the gardener can’t overlap, the date is already tight.",
    ],
    includes: [
      "Clean, paint, garden — whatever the list is",
      "Between tenants, or before it lists",
      "One morning it all has to be done",
      "Access once the last tenant is out",
    ],
  },
  "facility-management": {
    expect: [
      "For a manager who wants the year handled, not a fresh quote every time a light blows in the foyer.",
    ],
    includes: [
      "Cleans and the garden",
      "The small things that break",
      "One place to ring",
      "A round, not a new brief each time",
    ],
  },
  "building-support": {
    expect: [
      "Not a full facility contract. The jobs that turn up in a week: a door, the car park, a complaint that’s annoying and not quite an emergency.",
    ],
    includes: [
      "The issue, and how urgent",
      "How we get in",
      "A photo if you’ve got one",
      "Who to tell when it’s done",
    ],
  },
  "preventative-maintenance": {
    expect: [
      "The visit is meant to happen before anyone complains. If you only want us when something’s already broken, that’s a different job.",
    ],
    includes: [
      "A walk-through on a schedule",
      "Small faults, before they spread",
      "A building, not a single tap",
      "A short note back to the manager",
    ],
  },
  "apartment-turnover": {
    expect: [
      "If four units are vacant in the same fortnight, send them together. One at a time is how the third one misses its inspection.",
    ],
    includes: [
      "The clean",
      "A few repairs, if they’re on the list",
      "The date the keys have to be back",
      "Several units, if they’re moving at once",
    ],
  },
};

function defaultOverview(service: Service): string[] {
  return [service.body];
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
