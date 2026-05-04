import { NextRequest, NextResponse } from 'next/server';
import { patchListing } from '@/lib/firestore-admin';
import { isAuthorized } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id, reasons } = (await req.json()) as { id: string; reasons: unknown };

  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  if (!Array.isArray(reasons) || reasons.some((r) => typeof r !== 'string')) {
    return NextResponse.json({ error: 'reasons must be an array of strings' }, { status: 400 });
  }

  await patchListing(id, {
    listingStatus: { stringValue: 'REJECTED' },
    rejectionReasons: {
      arrayValue: { values: reasons.map((r) => ({ stringValue: r })) },
    },
  });

  return NextResponse.json({ ok: true });
}
