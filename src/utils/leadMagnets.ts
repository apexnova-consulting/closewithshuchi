export interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  filename: string;
  serviceType: 'real-estate' | 'title-insurance' | 'notary';
}

export const LEAD_MAGNETS: Record<string, LeadMagnet> = {
  'nj-homebuyer-checklist': {
    id: 'nj-homebuyer-checklist',
    title: 'Ultimate NJ Homebuyer/Seller Checklist',
    description: 'A comprehensive guide to buying or selling property in New Jersey',
    filename: 'nj-homebuyer-checklist.pdf',
    serviceType: 'real-estate',
  },
  'title-insurance-guide': {
    id: 'title-insurance-guide',
    title: 'Title Insurance in Plain English – NJ Edition',
    description: 'Everything you need to know about title insurance in New Jersey',
    filename: 'title-insurance-guide.pdf',
    serviceType: 'title-insurance',
  },
  'notary-checklist': {
    id: 'notary-checklist',
    title: 'What to Bring: NJ Notary Checklist',
    description: 'Be prepared for your notarization appointment',
    filename: 'notary-checklist.pdf',
    serviceType: 'notary',
  },
};

export function getLeadMagnetByService(serviceType: 'real-estate' | 'title-insurance' | 'notary'): LeadMagnet {
  return Object.values(LEAD_MAGNETS).find(
    (leadMagnet) => leadMagnet.serviceType === serviceType
  )!;
}

export function getLeadMagnetById(id: string): LeadMagnet | undefined {
  return LEAD_MAGNETS[id];
}