import type { MetadataRoute } from 'next';

const isLaunched = process.env.NEXT_PUBLIC_LAUNCHED === 'true';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(isLaunched ? { allow: '/' } : { disallow: '/' }),
    },
    sitemap: 'https://relengo.app/sitemap.xml',
  };
}
