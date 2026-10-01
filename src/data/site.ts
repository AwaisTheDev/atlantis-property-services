export const site = {
  name: "Atlantis Property Services",
  legalName: "Atlantis Property Services",
  tagline: "Cleaning, gardens, windows, waste and repairs for homes and buildings across Melbourne.",
  description:
    "Request a quote for cleaning, gardening, windows, waste removal and repairs for homes and buildings across Melbourne’s inner suburbs, including Brunswick East.",
  email: "info@atlantisps.com.au",
  phone: "03 7023 9460",
  serviceArea:
    "Melbourne’s inner suburbs, within about 50 km of the CBD, with a focus on Brunswick East and nearby postcodes",
  copyright:
    "© {year} Atlantis Property Services. Melbourne property services. All rights reserved.",
  howItWorks: [
    {
      step: "1",
      title: "Tell us what you need",
      body: "Share the property, the work required, and any date that cannot move. That is enough for us to start.",
    },
    {
      step: "2",
      title: "We arrange it",
      body: "We review the request, send a written quote, and book the work once you approve the price.",
    },
    {
      step: "3",
      title: "We get it done",
      body: "The work is completed as quoted. If you have a question afterwards, you contact Atlantis.",
    },
  ],
  why: [
    {
      title: "One conversation",
      body: "Cleaning, gardens, glass, waste and repairs can be included on a single request.",
    },
    {
      title: "Written for Melbourne properties",
      body: "Access, parking, strata rules and vacate dates are part of how we price the work.",
    },
    {
      title: "A quote before anyone arrives",
      body: "You see the price and the scope before work is booked. There is no provider list to compare on this site.",
    },
    {
      title: "Insured people on site",
      body: "Approved partners carry out the work. The booking remains in the name of Atlantis Property Services.",
    },
  ],
  testimonials: [
    {
      quote:
        "Our end-of-lease inspection was on the Friday, and we still needed a proper bathroom clean and a door that would not latch. Atlantis took both on the one request. I did not have to arrange three separate trades.",
      name: "Property manager",
      company: "Residential portfolio",
    },
    {
      quote:
        "We used Atlantis on a unit in Brunswick East before the new tenant moved in. The clean was thorough, and they replied promptly when I asked about the arrival time.",
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
