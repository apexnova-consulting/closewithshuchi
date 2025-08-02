"use client";

import { useState } from 'react';
import { MotionDiv } from './motion-wrapper';
import { getLeadMagnetByService } from '@/utils/leadMagnets';

interface LeadCaptureFormProps {
  formType: 'real-estate' | 'title-insurance' | 'notary';
  downloadType: string;
  className?: string;
}

export default function LeadCaptureForm({ formType, downloadType, className = '' }: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      formType,
      downloadType,
    };

    try {
      // First, submit to lead capture endpoint
      const leadCaptureResponse = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!leadCaptureResponse.ok) {
        throw new Error('Failed to submit form');
      }

      // Then, get the lead magnet download URL
      const leadMagnet = getLeadMagnetByService(formType);
      const leadMagnetResponse = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          leadMagnetId: leadMagnet.id,
        }),
      });

      if (!leadMagnetResponse.ok) {
        throw new Error('Failed to get download link');
      }

      const { downloadUrl } = await leadMagnetResponse.json();

      // Trigger the download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = leadMagnet.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
                  className={`bg-white p-4 md:p-6 rounded-lg shadow-lg text-center ${className}`}
      >
        <h3 className="text-xl font-heading font-bold mb-4 text-secondary">Thank You!</h3>
        <p className="text-lg mb-4">Check your email for your download link.</p>
        <p className="text-sm text-gray-600">
          Can't find the email? Check your spam folder or contact us for support.
        </p>
      </MotionDiv>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-3 md:px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-dark text-base md:text-lg"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-3 md:px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-dark text-base md:text-lg"
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isSubmitting ? 'Sending...' : 'Get Your Free Guide'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to receive emails from us. You can unsubscribe at any time.
      </p>
    </form>
  );
}