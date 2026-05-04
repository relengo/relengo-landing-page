'use client';

import { useState, useEffect } from 'react';
import { type Listing } from '../_data/dummy';

const REJECTION_REASONS = [
  "Misleading item description — Description doesn't match photos or specs",
  "Fake or stock photos — Images appear to be lifted from the web, not the actual item",
  "Suspected duplicate listing — Same item listed multiple times to game search visibility",
  "Item not insurable — Category excluded from Relengo's embedded insurance coverage",
  "Unsafe or damaged item — Photos or description indicate poor condition",
  "Hazardous item — Item poses a transport, fire, or chemical hazard",
  "Incomplete description — Missing key specs (weight, dimensions, capacity, condition)",
  "Inappropriate pricing — Price is implausibly low (likely a scam) or far above market value",
  "Prohibited item — Item is banned under German law (e.g., certain weapons, modified vehicles)",
  "GDPR concern — Listing photos inadvertently expose third-party personal data (license plates, faces)",
  "Not a rentable item — e.g., a service, digital product, or consumable listed as equipment",
  "Suspected fraud — Listing pattern matches known scam templates",
  "Policy violation — General breach of Relengo's Terms of Service",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapDoc(id: string, data: Record<string, any>): Listing {
  const createdAt =
    typeof data.createdAt?.toDate === 'function'
      ? data.createdAt.toDate().toISOString().slice(0, 10)
      : (data.createdAt ?? '');
  return {
    id,
    title: data.title ?? { en: '', de: '', original: '', detectedSourceLang: 'en' },
    description: data.description ?? { en: '', de: '', original: '', detectedSourceLang: 'en' },
    imageUrls: (data.imageUrls ?? []) as Listing['imageUrls'],
    city: data.city ?? '',
    address: data.address ?? '',
    rentalPricePerDay: data.rentalPricePerDay ?? 0,
    monthlyDiscountPercentage: data.monthlyDiscountPercentage ?? 0,
    itemValue: data.itemValue ?? 0,
    subcategory: data.subcategory ?? '',
    cancellationPolicy: data.cancellationPolicy ?? 'FLEXIBLE',
    isCoveredByInsurance: data.isCoveredByInsurance ?? false,
    ownerName: data.ownerName ?? '',
    createdAt,
  };
}

export default function ListingsTab() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showRejectPanel, setShowRejectPanel] = useState(false);
  const [rejectionReasons, setRejectionReasons] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const { collection, query, where, getDocs } = await import('firebase/firestore');
        const { getDb } = await import('@/lib/firebase');
        const db = getDb();
        const snap = await getDocs(
          query(collection(db, 'listings'), where('listingStatus', '==', 'PENDING_APPROVAL')),
        );
        if (!cancelled) {
          setListings(snap.docs.map((d) => mapDoc(d.id, d.data())));
        }
      } catch {
        if (!cancelled) setError('Failed to load listings.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const selected = listings.find((l) => l.id === selectedId) ?? null;

  async function handleApprove(id: string) {
    const res = await fetch('/api/admin/approve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) { alert('Failed to approve listing. Please try again.'); return; }
    setListings((prev) => prev.filter((l) => l.id !== id));
    setSelectedId(null);
  }

  async function handleReject(id: string) {
    const res = await fetch('/api/admin/reject', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, reasons: rejectionReasons }),
    });
    if (!res.ok) { alert('Failed to reject listing. Please try again.'); return; }
    setListings((prev) => prev.filter((l) => l.id !== id));
    setSelectedId(null);
    setShowRejectPanel(false);
    setRejectionReasons([]);
  }

  function handleBack() {
    setSelectedId(null);
    setShowRejectPanel(false);
    setRejectionReasons([]);
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-400">
        <p className="text-sm">Loading listings…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-red-400">
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (selected) {
    return (
      <ListingDetail
        listing={selected}
        onBack={handleBack}
        onApprove={() => handleApprove(selected.id)}
        onReject={() => handleReject(selected.id)}
        showRejectPanel={showRejectPanel}
        setShowRejectPanel={setShowRejectPanel}
        rejectionReasons={rejectionReasons}
        setRejectionReasons={setRejectionReasons}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-semibold text-[#1A1A1A]">Pending Listings</h2>
        <span className="text-sm text-gray-400">{listings.length} to review</span>
      </div>

      {listings.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <p className="text-2xl mb-2">✓</p>
          <p className="font-medium">All caught up!</p>
          <p className="text-sm mt-1">No pending listings to review.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onClick={() => setSelectedId(listing.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ListingCard({ listing, onClick }: { listing: Listing; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex gap-3 text-left hover:shadow-md hover:border-gray-200 transition-all"
    >
      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100">
        {listing.imageUrls[0] ? (
          <img
            src={listing.imageUrls[0].thumbnail}
            alt={listing.title.en}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      <div className="flex-1 min-w-0 py-0.5">
        <span className="inline-block text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full mb-1.5 capitalize">
          {listing.subcategory.replace(/-/g, ' ')}
        </span>
        <p className="font-semibold text-[#1A1A1A] text-sm sm:text-base leading-tight truncate">
          {listing.title.en}
        </p>
        <p className="text-xs text-gray-400 mt-1">{listing.city}</p>
      </div>

      <div className="flex-shrink-0 text-right py-0.5">
        <p className="font-semibold text-sm text-[#1A1A1A]">€{listing.rentalPricePerDay}/day</p>
        <p className="text-xs text-gray-400 mt-1">{listing.createdAt}</p>
      </div>
    </button>
  );
}

function ListingDetail({
  listing,
  onBack,
  onApprove,
  onReject,
  showRejectPanel,
  setShowRejectPanel,
  rejectionReasons,
  setRejectionReasons,
}: {
  listing: Listing;
  onBack: () => void;
  onApprove: () => void;
  onReject: () => void;
  showRejectPanel: boolean;
  setShowRejectPanel: (v: boolean) => void;
  rejectionReasons: string[];
  setRejectionReasons: (v: string[]) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const [selectedImg, setSelectedImg] = useState(0);

  const sourceLang = listing.title.detectedSourceLang ?? 'en';

  function toggleReason(reason: string) {
    setRejectionReasons(
      rejectionReasons.includes(reason)
        ? rejectionReasons.filter((r) => r !== reason)
        : [...rejectionReasons, reason],
    );
  }

  return (
    <div className="space-y-4">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1A1A1A] transition-colors"
      >
        <span>←</span> Back to listings
      </button>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {listing.imageUrls.length > 0 && (
          <div>
            <div className="w-full h-52 sm:h-72 bg-gray-100">
              <img
                src={listing.imageUrls[selectedImg].medium}
                alt={listing.title[lang]}
                className="w-full h-full object-contain"
              />
            </div>
            {listing.imageUrls.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto scrollbar-hide">
                {listing.imageUrls.map((img, i) => (
                  <button
                    key={i}
                    aria-label={`View image ${i + 1}`}
                    onClick={() => setSelectedImg(i)}
                    className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImg === i ? 'border-[#1A1A1A]' : 'border-transparent'
                    }`}
                  >
                    <img src={img.thumbnail} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="p-4 sm:p-6 space-y-5">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full capitalize">
                  {listing.subcategory.replace(/-/g, ' ')}
                </span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                  {listing.cancellationPolicy.charAt(0) + listing.cancellationPolicy.slice(1).toLowerCase()} cancellation
                </span>
                {listing.isCoveredByInsurance && (
                  <span className="text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
                    Insured
                  </span>
                )}
                <span className="text-xs bg-blue-50 text-blue-500 px-2.5 py-1 rounded-full">
                  Originally in {sourceLang.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-0.5 bg-gray-100 rounded-lg p-0.5 flex-shrink-0">
                {(['en', 'de'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setExpanded(false); }}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      lang === l ? 'bg-white text-[#1A1A1A] shadow-sm' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <h1 className="text-xl font-semibold text-[#1A1A1A]">{listing.title[lang]}</h1>
            <p className="text-sm text-gray-400 mt-1">{listing.address}</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <InfoCell label="Price / day" value={`€${listing.rentalPricePerDay}`} />
            <InfoCell label="Monthly discount" value={`${listing.monthlyDiscountPercentage}%`} />
            <InfoCell label="Item value" value={`€${listing.itemValue}`} />
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1.5">Owner</p>
            <p className="text-sm text-[#1A1A1A]">{listing.ownerName || 'Anonymous'}</p>
          </div>

          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1.5">Description</p>
            <p className={`text-sm text-gray-600 whitespace-pre-line ${expanded ? '' : 'line-clamp-4'}`}>
              {listing.description[lang]}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-gray-400 underline mt-1 hover:text-gray-600"
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>
          </div>

          <p className="text-xs text-gray-300">{listing.imageUrls.length} image(s) uploaded · Listed {listing.createdAt}</p>
        </div>
      </div>

      {showRejectPanel ? (
        <div className="bg-white rounded-2xl border border-red-200 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#1A1A1A]">Select rejection reasons</p>
            {rejectionReasons.length > 0 && (
              <span className="text-xs bg-red-100 text-red-600 font-medium px-2 py-0.5 rounded-full">
                {rejectionReasons.length} selected
              </span>
            )}
          </div>

          <div role="group" aria-label="Rejection reasons" className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden max-h-72 overflow-y-auto">
            {REJECTION_REASONS.map((reason) => {
              const checked = rejectionReasons.includes(reason);
              const [label, detail] = reason.split(' — ');
              return (
                <button
                  key={reason}
                  role="checkbox"
                  aria-checked={checked}
                  onClick={() => toggleReason(reason)}
                  className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors ${
                    checked ? 'bg-red-50' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                    checked ? 'bg-red-600 border-red-600' : 'border-gray-300'
                  }`}>
                    {checked && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                        <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#1A1A1A] leading-snug">{label}</p>
                    {detail && <p className="text-xs text-gray-400 mt-0.5 leading-snug">{detail}</p>}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex gap-2 pt-1">
            <button
              onClick={onReject}
              disabled={rejectionReasons.length === 0}
              className="flex-1 bg-red-600 text-white text-sm font-medium py-3 rounded-xl disabled:opacity-40 hover:bg-red-700 transition-colors"
            >
              Confirm Rejection
            </button>
            <button
              onClick={() => { setShowRejectPanel(false); setRejectionReasons([]); }}
              className="px-5 text-sm text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => setShowRejectPanel(true)}
            className="flex-1 bg-red-600 text-white font-medium py-3.5 rounded-2xl text-sm hover:bg-red-700 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={onApprove}
            className="flex-1 bg-[#1A1A1A] text-white font-medium py-3.5 rounded-2xl text-sm hover:bg-gray-800 transition-colors"
          >
            Approve
          </button>
        </div>
      )}
    </div>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#FAF7F2] rounded-xl p-3">
      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-[#1A1A1A]">{value}</p>
    </div>
  );
}
