export type LocalizedString = {
  en: string;
  de: string;
  original: string;
  detectedSourceLang: string;
};

export type Listing = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  imageUrls: Array<{ thumbnail: string; medium: string; original: string }>;
  city: string;
  address: string;
  rentalPricePerDay: number;
  monthlyDiscountPercentage: number;
  itemValue: number;
  subcategory: string;
  cancellationPolicy: 'FLEXIBLE' | 'MODERATE' | 'STRICT';
  isCoveredByInsurance: boolean;
  ownerName: string;
  createdAt: string;
};

function img(seed: string) {
  return {
    thumbnail: `https://picsum.photos/seed/${seed}/200/200`,
    medium: `https://picsum.photos/seed/${seed}/800/600`,
    original: `https://picsum.photos/seed/${seed}/1200/900`,
  };
}

function localized(en: string, de?: string): LocalizedString {
  return { en, de: de ?? en, original: en, detectedSourceLang: 'en' };
}

export const DUMMY_LISTINGS: Listing[] = [
  {
    id: '0XAXLoLWtxZKfO0qolFv',
    title: localized('Ableton Push 3'),
    description: localized(
      'MPE-compatible instrument for music production, specially tailored to Ableton Live, as well as a controller and audio interface with 10 inputs/12 outputs and 4 CV outputs.\n\nA portable DAW and expressive, versatile instrument for music creation and performance — all without requiring a computer. Mobile, versatile and flexible thanks to integrated battery, audio interface and 256 GB SSD.\n\nIncludes 19 packs with over 40 GB of sound library and more than 4100 presets.',
    ),
    imageUrls: [img('ableton1'), img('ableton2'), img('ableton3')],
    city: 'Berlin',
    address: 'Alexanderpl., 10178 Berlin, Germany',
    rentalPricePerDay: 7,
    monthlyDiscountPercentage: 10,
    itemValue: 1800,
    subcategory: 'keyboards-and-synths',
    cancellationPolicy: 'STRICT',
    isCoveredByInsurance: false,
    ownerName: 'Max M.',
    createdAt: '2026-04-08',
  },
  {
    id: 'listing-002',
    title: localized('Sony A7 IV Mirrorless Camera'),
    description: localized(
      'Full-frame mirrorless camera with 33MP sensor, perfect for professional photo and video shoots. Includes 28-70mm kit lens, two batteries, charger, and a carrying case.\n\nIdeal for events, portraits, street photography, and vlogging. 4K 60fps video, excellent low-light performance.',
    ),
    imageUrls: [img('camera7'), img('camera8')],
    city: 'Munich',
    address: 'Marienplatz 1, 80331 Munich, Germany',
    rentalPricePerDay: 45,
    monthlyDiscountPercentage: 15,
    itemValue: 2500,
    subcategory: 'cameras',
    cancellationPolicy: 'MODERATE',
    isCoveredByInsurance: true,
    ownerName: 'Sarah K.',
    createdAt: '2026-04-12',
  },
  {
    id: 'listing-003',
    title: localized('Bosch Professional Drill Set'),
    description: localized(
      'Bosch GSR 18V-55 cordless drill with full accessory set — 2 batteries, fast charger, 40-piece bit set, and carry case. Perfect for home renovation, furniture assembly, or construction projects.',
    ),
    imageUrls: [img('drill3')],
    city: 'Hamburg',
    address: 'Jungfernstieg 10, 20354 Hamburg, Germany',
    rentalPricePerDay: 12,
    monthlyDiscountPercentage: 5,
    itemValue: 320,
    subcategory: 'power-tools',
    cancellationPolicy: 'FLEXIBLE',
    isCoveredByInsurance: false,
    ownerName: 'Thomas B.',
    createdAt: '2026-04-15',
  },
  {
    id: 'listing-004',
    title: localized('DJI Mavic 3 Pro Drone'),
    description: localized(
      'Professional-grade drone with Hasselblad camera, 46-min flight time, omnidirectional obstacle sensing and 15km video transmission. Includes 3 batteries, ND filter set, carrying bag, and charging hub.',
    ),
    imageUrls: [img('drone4'), img('drone5')],
    city: 'Frankfurt',
    address: 'Zeil 106, 60313 Frankfurt, Germany',
    rentalPricePerDay: 80,
    monthlyDiscountPercentage: 20,
    itemValue: 4200,
    subcategory: 'drones',
    cancellationPolicy: 'STRICT',
    isCoveredByInsurance: true,
    ownerName: 'Lena W.',
    createdAt: '2026-04-20',
  },
  {
    id: 'listing-005',
    title: localized('Camping Tent — 4 Person'),
    description: localized(
      'Spacious 4-person dome tent, waterproof (3000mm HH), easy 10-minute setup. Includes groundsheet, footprint, and carry bag. Great for festivals, hiking trips, and weekend getaways.',
    ),
    imageUrls: [img('tent6')],
    city: 'Cologne',
    address: 'Domplatz 1, 50667 Cologne, Germany',
    rentalPricePerDay: 18,
    monthlyDiscountPercentage: 0,
    itemValue: 250,
    subcategory: 'camping',
    cancellationPolicy: 'FLEXIBLE',
    isCoveredByInsurance: false,
    ownerName: 'Jonas F.',
    createdAt: '2026-04-22',
  },
  {
    id: 'listing-006',
    title: localized('Roland TD-17KVX Electronic Drum Kit'),
    description: localized(
      'Professional electronic drum kit with mesh heads for realistic feel and near-silent play. Includes hi-hat controller, kick pedal, and module with 700+ sounds. Perfect for practice or recording.',
    ),
    imageUrls: [img('drums9'), img('drums10')],
    city: 'Stuttgart',
    address: 'Königstraße 5, 70173 Stuttgart, Germany',
    rentalPricePerDay: 30,
    monthlyDiscountPercentage: 10,
    itemValue: 1500,
    subcategory: 'percussion',
    cancellationPolicy: 'MODERATE',
    isCoveredByInsurance: false,
    ownerName: 'Mia S.',
    createdAt: '2026-04-28',
  },
];
