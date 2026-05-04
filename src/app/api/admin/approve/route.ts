import { NextRequest, NextResponse } from 'next/server';
import { patchListing } from '@/lib/firestore-admin';
import { isAuthorized } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = (await req.json()) as { id: string };
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  await patchListing(id, {
    listingStatus: { stringValue: 'ACTIVE' },
  });

  return NextResponse.json({ ok: true });
}
