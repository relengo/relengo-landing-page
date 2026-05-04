type ServiceAccount = {
  client_email: string;
  private_key: string;
  project_id: string;
};

function getServiceAccount(): ServiceAccount {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT_JSON is not set');
  return JSON.parse(raw);
}

async function getAccessToken(): Promise<string> {
  const sa = getServiceAccount();
  const now = Math.floor(Date.now() / 1000);

  const b64url = (obj: object) =>
    btoa(JSON.stringify(obj)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const header = b64url({ alg: 'RS256', typ: 'JWT' });
  const claim = b64url({
    iss: sa.client_email,
    sub: sa.client_email,
    scope: 'https://www.googleapis.com/auth/datastore',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  });

  const unsigned = `${header}.${claim}`;

  const pkcs8 = Uint8Array.from(
    atob(sa.private_key.replace(/-----[^-]+-----|\n/g, '')),
    (c) => c.charCodeAt(0),
  );

  const key = await crypto.subtle.importKey(
    'pkcs8',
    pkcs8,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const sig = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(unsigned),
  );

  const jwt = `${unsigned}.${btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!res.ok) throw new Error(`Token exchange failed: ${await res.text()}`);
  const { access_token } = (await res.json()) as { access_token: string };
  return access_token;
}

type FirestoreValue =
  | { stringValue: string }
  | { arrayValue: { values: { stringValue: string }[] } };

export async function patchListing(id: string, fields: Record<string, FirestoreValue>) {
  const { project_id } = getServiceAccount();
  const token = await getAccessToken();
  const mask = Object.keys(fields)
    .map((f) => `updateMask.fieldPaths=${encodeURIComponent(f)}`)
    .join('&');
  const url = `https://firestore.googleapis.com/v1/projects/${project_id}/databases/(default)/documents/listings/${id}?${mask}`;

  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) throw new Error(`Firestore patch failed: ${await res.text()}`);
}
