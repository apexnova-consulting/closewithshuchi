import { NextResponse } from 'next/server';
import { getLeadMagnetById } from '@/utils/leadMagnets';
import path from 'path';
import fs from 'fs/promises';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { leadMagnetId } = body;

    const leadMagnet = getLeadMagnetById(leadMagnetId);
    if (!leadMagnet) {
      return NextResponse.json(
        { error: 'Lead magnet not found' },
        { status: 404 }
      );
    }

    // In a real application, you would:
    // 1. Validate the user's email subscription
    // 2. Generate a signed URL for the download
    // 3. Send the download link via email
    // 4. Track the download in analytics

    // For now, we'll just return the file path
    const filePath = path.join(process.cwd(), 'public', 'guides', leadMagnet.filename);

    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      downloadUrl: `/guides/${leadMagnet.filename}`,
    });
  } catch (error) {
    console.error('Lead magnet download error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}