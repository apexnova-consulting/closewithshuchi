import { NextResponse } from 'next/server';

// This would be replaced with your actual email service configuration
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER;

const DOWNLOAD_LINKS = {
  'real-estate': '/guides/nj-homebuyer-checklist.pdf',
  'title-insurance': '/guides/title-insurance-guide.pdf',
  'notary': '/guides/notary-checklist.pdf',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, formType, downloadType } = body;

    if (!name || !email || !formType || !downloadType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER) {
      console.warn('Mailchimp configuration missing');
      // For development, we'll just simulate a successful response
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully (development mode)',
      });
    }

    // Add subscriber to Mailchimp
    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name.split(' ')[0],
        LNAME: name.split(' ').slice(1).join(' ') || '',
        FORMTYPE: formType,
        DOWNLOAD: downloadType,
      },
      tags: [formType, 'lead-magnet'],
    };

    const response = await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to add subscriber to Mailchimp');
    }

    // Return success response with download link
    return NextResponse.json({
      success: true,
      downloadUrl: DOWNLOAD_LINKS[formType as keyof typeof DOWNLOAD_LINKS],
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}