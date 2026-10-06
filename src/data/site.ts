export const site = {
  name: "Atlantis Property Services",
  legalName: "Atlantis Property Services",
  tagline: "Property services. Made simple.",
  description:
    "From cleaning and gardening to maintenance, repairs and property preparation, Atlantis brings the services your property needs together through one reliable point of contact across Melbourne.",
  email: "info@atlantisps.com.au",
  phone: "03 7023 9460",
  serviceArea: "Melbourne and surrounding areas",
  copyright: "© {year} Atlantis Property Services. All rights reserved.",
  howItWorks: [
    {
      step: "1",
      title: "Tell us what you need",
      body: "Send the details of the job, the property and your preferred timing. One service is fine. Several jobs at the same address can go on the same request.",
    },
    {
      step: "2",
      title: "Receive your quote",
      body: "We look at the scope, location, timing and access, then send a clear price. Photos help us get that right. Nothing proceeds until you approve it.",
    },
    {
      step: "3",
      title: "We organise the job",
      body: "Once you approve the quote, Atlantis coordinates the service and keeps you informed while the work is underway.",
    },
    {
      step: "4",
      title: "Consider it handled",
      body: "Questions, changes or anything you need afterwards come back to Atlantis. You do not have to start again with someone new.",
    },
  ],
  why: [
    {
      title: "One point of contact",
      body: "One company to call for a wide range of property needs, from a single clean through to several jobs on the same visit.",
    },
    {
      title: "Trusted professionals",
      body: "Work is carried out by vetted service professionals with appropriate insurance and licensing where required.",
    },
    {
      title: "Multiple services",
      body: "Need the garden, the cleaning and a repair finished at the same property? Send the whole list in one request.",
    },
    {
      title: "One-off or ongoing",
      body: "Use Atlantis for a single job, or arrange regular weekly, fortnightly or monthly services.",
    },
    {
      title: "Residential and commercial",
      body: "We support homeowners, landlords, property managers, businesses and owners corporations.",
    },
    {
      title: "Local knowledge",
      body: "Melbourne-based property services, with a strong focus on being responsive and reliable when the timing matters.",
    },
  ],
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
} as const;

export const customerTypes = [
  "Homeowner",
  "Tenant",
  "Landlord",
  "Property Manager",
  "Owners Corporation / Strata",
  "Business",
  "Other",
] as const;

export const frequencies = ["Weekly", "Fortnightly", "Monthly", "Other"] as const;
