import type { MetadataRoute } from 'next';

const BASE_URL = 'https://relengo.app';
const locales = ['en', 'de'];

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }));

  const subRoutes = ['impressum', 'datenschutz', 'agb', 'cookie-settings'];
  const subPages = locales.flatMap((locale) =>
    subRoutes.map((route) => ({
      url: `${BASE_URL}/${locale}/${route}`,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    }))
  );

  return [...homePages, ...subPages];
}
