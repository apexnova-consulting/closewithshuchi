export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  serviceType: 'real-estate' | 'title-insurance' | 'notary' | 'general';
  location?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  // Real Estate Testimonials
  {
    id: 're-1',
    text: "Shuchi's expertise in the NJ real estate market is unmatched. She helped us navigate multiple offers and secured our dream home below asking price. Her negotiation skills are exceptional!",
    author: "James & Sarah Chen",
    role: "First-time Homebuyers",
    serviceType: "real-estate",
    location: "Montclair, NJ",
    date: "March 2024"
  },
  {
    id: 're-2',
    text: "As an investor, I need a realtor who understands market dynamics and can spot good opportunities. Shuchi has helped me acquire three investment properties, all of which have exceeded my ROI expectations.",
    author: "Michael Rodriguez",
    role: "Property Investor",
    serviceType: "real-estate",
    location: "Jersey City, NJ",
    date: "January 2024"
  },
  {
    id: 're-3',
    text: "Selling our family home of 25 years was emotional, but Shuchi made the process smooth and respectful. Her marketing strategy attracted multiple offers, and we sold above asking price within a week!",
    author: "Patricia & Robert Thompson",
    role: "Home Sellers",
    serviceType: "real-estate",
    location: "Summit, NJ",
    date: "February 2024"
  },

  // Title Insurance Testimonials
  {
    id: 'ti-1',
    text: "Shuchi's thorough title search uncovered a potential issue that could have caused problems later. She resolved it efficiently before closing, saving us from future headaches. Her attention to detail is remarkable.",
    author: "David Martinez",
    role: "Property Developer",
    serviceType: "title-insurance",
    location: "Hoboken, NJ",
    date: "March 2024"
  },
  {
    id: 'ti-2',
    text: "The way Shuchi explained the title insurance process made it easy to understand. She secured great coverage for our new home and handled all the paperwork seamlessly.",
    author: "Emily & John Parker",
    role: "Homeowners",
    serviceType: "title-insurance",
    location: "Princeton, NJ",
    date: "February 2024"
  },
  {
    id: 'ti-3',
    text: "Working with Shuchi for title insurance was a game-changer. Her expertise in handling complex commercial property titles is invaluable. She's now our go-to title insurance producer for all our projects.",
    author: "Lisa Wong",
    role: "Commercial Real Estate Developer",
    serviceType: "title-insurance",
    location: "Newark, NJ",
    date: "January 2024"
  },

  // Notary Testimonials
  {
    id: 'not-1',
    text: "Shuchi provided mobile notary services for our entire office. She was punctual, professional, and processed all our documents efficiently. Having a notary who comes to you is incredibly convenient!",
    author: "Jennifer Lewis",
    role: "Business Owner",
    serviceType: "notary",
    location: "Morristown, NJ",
    date: "March 2024"
  },
  {
    id: 'not-2',
    text: "We needed urgent notarization for international documents on a weekend. Shuchi accommodated our schedule and ensured everything was properly executed. Her service was truly above and beyond.",
    author: "Raj & Priya Patel",
    role: "Clients",
    serviceType: "notary",
    location: "Edison, NJ",
    date: "February 2024"
  },
  {
    id: 'not-3',
    text: "As an elder law attorney, I often need reliable notary services for my clients. Shuchi is always professional, patient with elderly clients, and thoroughly knowledgeable about notary requirements.",
    author: "Mark Anderson",
    role: "Attorney",
    serviceType: "notary",
    location: "Red Bank, NJ",
    date: "January 2024"
  },

  // General Testimonials
  {
    id: 'gen-1',
    text: "Shuchi is a one-stop solution for all real estate needs. She handled our home purchase, title insurance, and even notarized additional documents - all with exceptional professionalism and expertise.",
    author: "Thomas & Maria Garcia",
    role: "Homeowners",
    serviceType: "general",
    location: "Cherry Hill, NJ",
    date: "March 2024"
  },
  {
    id: 'gen-2',
    text: "Having someone who understands all aspects of real estate transactions is invaluable. Shuchi's comprehensive knowledge saved us time and money throughout our property purchase process.",
    author: "Kevin & Amanda Foster",
    role: "Property Buyers",
    serviceType: "general",
    location: "Westfield, NJ",
    date: "February 2024"
  }
];

export function getTestimonialsByService(serviceType: 'real-estate' | 'title-insurance' | 'notary' | 'general'): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.serviceType === serviceType);
}