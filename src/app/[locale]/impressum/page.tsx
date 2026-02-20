import { useTranslations } from 'next-intl';
import Navbar from "@/components/landing/Navbar";

export default function ImpressumPage() {
  const t = useTranslations('Impressum');
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF8ED] pt-32 px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
          
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">{t('contact.title')}</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {t('contact.details')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">{t('contactDetails.title')}</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {t('contactDetails.info')}
              </p>
            </div>

            {/* Only show if you have a company registration */}
            {t('register.hasRegistration') === 'true' && (
              <div>
                <h2 className="text-xl font-semibold mb-2">{t('register.title')}</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {t('register.details')}
                </p>
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold mb-2">{t('responsible.title')}</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {t('responsible.info')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">{t('dispute.title')}</h2>
              <p className="text-gray-700 text-sm mb-2">
                {t('dispute.description')}
              </p>
              <p className="text-gray-700 text-sm mb-2">
                {t('dispute.linkLabel')} <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-gray-700 text-sm">
                {t('dispute.notObligated')}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
