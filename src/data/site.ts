export const site = {
  name: "Atlantis Property Services",
  legalName: "Atlantis Property Services",
  tagline: "Property services for Melbourne homes and buildings.",
  description:
    "Atlantis Property Services looks after cleaning, gardens, windows, waste and maintenance across Melbourne’s inner suburbs, including Brunswick East. Request a quote.",
  email: "info@atlantisps.com.au",
  phone: "03 7023 9460",
  serviceArea: "Melbourne’s inner suburbs (about 50 km of the CBD), with a focus around Brunswick East and surrounding postcodes",
  copyright:
    "© {year} Atlantis Property Services. Melbourne property services. All rights reserved.",
  howItWorks: [
    {
      step: "1",
      title: "Tell us what you need",
      body: "A short note on the property, the work, and when it needs to happen is enough to start.",
    },
    {
      step: "2",
      title: "We arrange it",
      body: "We look at the job, price it, and book the right people. You hear back from us.",
    },
    {
      step: "3",
      title: "We get it done",
      body: "The work is carried out to the quote you accepted. Questions stay with Atlantis.",
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
        "We had an end-of-lease clean and two small repairs due the same week. Atlantis took both and kept us posted. We didn’t have to chase anyone.",
      name: "Property manager",
      company: "Residential portfolio",
    },
    {
      quote:
        "The place needed a proper clean and a couple of handyman jobs before handover. One call covered it. The updates were clear, which is all I wanted.",
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
