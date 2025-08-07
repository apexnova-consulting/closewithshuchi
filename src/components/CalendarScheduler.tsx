"use client";

import { useEffect } from 'react';
import { MotionDiv } from './motion-wrapper';

interface CalendarSchedulerProps {
  serviceType: 'real-estate' | 'title-insurance' | 'notary';
  className?: string;
}

const SERVICE_URLS = {
  'real-estate': 'https://calendly.com/shuchi-alam/consultation-call',
  'title-insurance': 'https://calendly.com/shuchi-alam/consultation-call',
  'notary': 'https://calendly.com/shuchi-alam/notary-services',
};

export default function CalendarScheduler({ serviceType, className = '' }: CalendarSchedulerProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
    >
      <div 
        className="calendly-inline-widget" 
        data-url={SERVICE_URLS[serviceType]}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </MotionDiv>
  );
}