import { NextRequest, NextResponse } from 'next/server';
import { patchListing } from '@/lib/firestore-admin';

function isAuthorized(req: NextRequest): boolean {
  if (process.env.NODE_ENV === 'development') return true;
  const email = req.headers.get('cf-access-authenticated-user-email');
  const allowed = (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);
  return !!email && allowed.includes(email);
}

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
