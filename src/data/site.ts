export const site = {
  name: "Atlantis Property Services",
  legalName: "Atlantis Property Services",
  tagline: "Melbourne property services. One contact for the whole job.",
  description:
    "Atlantis Property Services coordinates cleaning, gardening, window cleaning, rubbish removal, handyman work and more across Melbourne’s inner suburbs — including Brunswick East and surrounds within about 50 km of the CBD. Tell us what you need; we arrange it.",
  email: "info@atlantisps.com.au",
  phone: "03 7023 9460",
  serviceArea: "Melbourne’s inner suburbs (about 50 km of the CBD), with a focus around Brunswick East and surrounding postcodes",
  copyright:
    "© {year} Atlantis Property Services. Property services coordination across Melbourne’s inner suburbs. All rights reserved.",
  howItWorks: [
    {
      step: "1",
      title: "Tell us what you need",
      body: "Share the job, postcode, timing and a few photos if you have them — residential or commercial.",
    },
    {
      step: "2",
      title: "We arrange it",
      body: "Atlantis reviews the brief, coordinates a suitable approved partner, and comes back with a quote.",
    },
    {
      step: "3",
      title: "We get it done",
      body: "You stay with one company for updates and handover. Partners deliver the work behind the scenes.",
    },
  ],
  why: [
    {
      title: "One point of contact",
      body: "Cleaning, gardens, windows, rubbish, handyman and more — without juggling separate providers.",
    },
    {
      title: "Built for Melbourne jobs",
      body: "Inner-suburb access, strata rules and vacate timelines are part of how we scope every request.",
    },
    {
      title: "Quote-led, no marketplace",
      body: "You don’t compare public providers on this site. Atlantis coordinates the work and stays accountable.",
    },
    {
      title: "Insured, vetted partners",
      body: "Approved partners work behind the scenes. Atlantis remains the name on your quote and booking.",
    },
  ],
  testimonials: [
    {
      quote:
        "I needed an end-of-lease clean and a couple of handyman fixes before handover. One request to Atlantis covered both — clear updates, no chasing tradies myself.",
      name: "Property owner",
      company: "Brunswick East",
    },
    {
      quote:
        "We use Atlantis for vacate cleans and common-area work across a small portfolio. One contact, quote-led pricing, and jobs that actually land on the dates we need.",
      name: "Property manager",
      company: "Inner north portfolio",
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
