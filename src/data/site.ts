export const site = {
  name: "Atlantis Property Services",
  tagline: "One point of contact for your property.",
  description:
    "A locally based Melbourne property services company. Tell us what you need — we arrange it, and we get it done.",
  email: "info@atlantisps.com.au",
  phone: "",
  serviceArea: "Melbourne’s inner suburbs, within about 50 km of the CBD",
  howItWorks: [
    { step: "1", title: "Tell us what you need", body: "Share the job in a few steps — services, timing, and a few photos if you have them." },
    { step: "2", title: "We arrange it", body: "Atlantis coordinates a suitable approved partner and manages the quote or booking." },
    { step: "3", title: "We get it done", body: "You deal with one company. We stay accountable for the experience." },
  ],
  why: [
    { title: "One point of contact", body: "Gardening, cleaning, maintenance, and more — without juggling separate providers." },
    { title: "Simple from the start", body: "A fast request flow. Quote-led pricing. No marketplace, no provider comparison screens." },
    { title: "Local Melbourne focus", body: "Based locally and focused on Melbourne’s inner suburbs and surrounding service area." },
    { title: "Coordinated delivery", body: "Insured and vetted partners work behind the scenes. Atlantis remains the name you deal with." },
  ],
  testimonials: [
    {
      quote:
        "Atlantis made it simple. One request, clear updates, and the work was arranged without me chasing multiple providers.",
      name: "Property owner",
      company: "Melbourne inner north",
    },
    {
      quote:
        "We needed end-of-lease and a few maintenance jobs handled quickly. Atlantis coordinated everything and stayed the point of contact throughout.",
      name: "Property manager",
      company: "Residential portfolio",
    },
  ],
  social: {
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
