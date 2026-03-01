import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';
import FirebaseAnalytics from '@/components/FirebaseAnalytics';


const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});


const locales = ['en', 'de']; // Define supported locales here


// Define the props for your async layout
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string; }>; // params is now a Promise
}


export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}


export default async function RootLayout({
  children,
  params, // params is typed as Promise here
}: LocaleLayoutProps) {
  // Await params to get the actual object before destructuring
  const { locale } = await params;


  // Validate the locale
  if (!locales.includes(locale as any)) notFound();


  const messages = await getMessages({ locale });


  return (
    <html lang={locale} className={poppins.variable}>
      <body className={`${poppins.className} bg-[#FAF7F2] antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
        <FirebaseAnalytics />  {/* ← add here */}
      </body>
    </html>
  );
}
