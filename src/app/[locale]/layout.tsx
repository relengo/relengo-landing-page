import "../globals.css";
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';
import FirebaseAnalytics from '@/components/FirebaseAnalytics';
import JsonLd from '@/components/JsonLd';


const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});


const locales = ['en', 'de']; // Define supported locales here
const BASE_URL = 'https://relengo.app';

// Define the props for your async layout
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string; }>; // params is now a Promise
}


export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const isDE = locale === 'de';

  const title = isDE
    ? 'Relengo – Leihen & Vermieten in deiner Nähe'
    : 'Relengo – Peer-to-Peer Rental App | Lend & Rent Locally';

  const description = isDE
    ? 'Relengo verbindet dich mit Menschen in deiner Nähe zum Leihen und Vermieten von Outdoor-Ausrüstung, Kameras, Werkzeugen und mehr. Tritt der Warteliste bei – kostenlos.'
    : 'Relengo connects you with neighbors to lend and rent outdoor gear, cameras, tools, and more. Earn from idle items or access anything without buying it. Join the waitlist.';

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'en': `${BASE_URL}/en`,
        'de': `${BASE_URL}/de`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      siteName: 'Relengo',
      type: 'website',
      locale: isDE ? 'de_DE' : 'en_US',
      images: [
        {
          url: `${BASE_URL}/Relengo_OG.png`,
          width: 1200,
          height: 630,
          alt: 'Relengo – Lend what you have. Access what you need.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@Relengoapp',
      images: [`${BASE_URL}/Relengo_OG.png`],
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}


export default async function RootLayout({
  children,
  params, // params is typed as Promise here
}: LocaleLayoutProps) {
  // Await params to get the actual object before destructuring
  const { locale } = await params;
  const bannerMessage = locale === 'de'
    ? 'Diese Seite befindet sich im Testmodus und ist noch nicht öffentlich verfügbar.'
    : 'This site is currently in testing mode and not available for public use yet.';


  // Validate the locale
  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages({ locale });


  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        <JsonLd locale={locale} />
      </head>
      <body className={`${poppins.className} bg-[#FAF7F2] antialiased`}>
        <div className="flex flex-col">
          <div className="sticky top-0 z-50 w-full bg-[#FFC843]/80 text-[#1A1A1A] text-sm font-medium text-center py-2 px-4">
            {bannerMessage} 
          </div>
        
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
        </div>
        <FirebaseAnalytics />  {/* ← add here */}
      </body>
    </html>
  );
}
