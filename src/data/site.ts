export const site = {
  name: "Atlantis Property Services",
  legalName: "Atlantis Property Services",
  tagline: "Cleaning, gardens and the rest of the jobs a Melbourne property needs.",
  description:
    "Atlantis Property Services handles cleaning, gardens, windows, rubbish and repairs for homes and buildings around Brunswick East and Melbourne’s inner suburbs.",
  email: "info@atlantisps.com.au",
  phone: "03 7023 9460",
  serviceArea: "Melbourne’s inner suburbs (about 50 km of the CBD), with a focus around Brunswick East and surrounding postcodes",
  copyright:
    "© {year} Atlantis Property Services. Melbourne property services. All rights reserved.",
  howItWorks: [
    {
      step: "1",
      title: "Tell us what you need",
      body: "What’s the place, what needs doing, and is there a date? That’s enough to start.",
    },
    {
      step: "2",
      title: "We arrange it",
      body: "We’ll have a look, send a price, and book it if you’re happy.",
    },
    {
      step: "3",
      title: "We get it done",
      body: "It gets done as quoted. If you’ve got a question, you call us.",
    },
  ],
  why: [
    {
      title: "One conversation",
      body: "Cleaning, gardens, glass, waste and repairs can sit on a single request.",
    },
    {
      title: "Written for Melbourne properties",
      body: "Access, parking, strata rules and vacate dates are part of how we price the work.",
    },
    {
      title: "A quote before anyone arrives",
      body: "You see the price and the scope first. There is nothing to compare on this site.",
    },
    {
      title: "Insured people on site",
      body: "The work is done by approved partners. The name on the booking is Atlantis.",
    },
  ],
  testimonials: [
    {
      quote:
        "End of lease was the Friday and we still had a bathroom that needed a proper clean and a door that wouldn’t latch. They just took both. I didn’t have to line up three different people.",
      name: "Property manager",
      company: "Residential portfolio",
    },
    {
      quote:
        "Used them on a unit in Brunswick East before the new tenant moved in. The clean was good, and they actually replied when I asked about the time. That doesn’t always happen.",
      name: "Property owner",
      company: "Brunswick East",
    },
  ],
  social: {
    // Add live profile URLs when accounts are ready — footer links appear automatically.
    linkedin: "",
    facebook: "",
    instagram: "",
  },
} as const;

export const customerTypes = [
  "Owner",
  "Tenant",
  "Landlord / Investor",
  "Property Manager",
  "Business Representative",
] as const;

export const frequencies = ["Weekly", "Fortnightly", "Monthly"] as const;
