interface ServiceStructuredData {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}

export function generateServiceStructuredData({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: ServiceStructuredData): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
      image: 'https://www.closewithshuchi.com/images/shuchi-portrait.jpg',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'State',
      name: areaServed,
    },
    serviceType,
  };
}

export function generateProfessionalStructuredData(): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Shuchi Alam',
    image: 'https://www.closewithshuchi.com/images/shuchi-portrait.jpg',
    description: 'Licensed NJ Real Estate Agent, Title Insurance Producer, and Notary Public',
    url: 'https://www.closewithshuchi.com',
    telephone: '+1-XXX-XXX-XXXX', // Replace with actual phone number
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'NJ',
      addressCountry: 'US',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'New Jersey Real Estate License',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'New Jersey Title Insurance Producer License',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'New Jersey Notary Public Commission',
      },
    ],
  };
}