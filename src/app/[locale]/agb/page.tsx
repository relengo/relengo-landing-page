import { useTranslations } from 'next-intl';
import Navbar from "@/components/landing/Navbar";

export default function AGBPage() {
  const t = useTranslations('Terms');
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF8ED] pt-32 px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. {t('scope.title')}</h2>
              <p>{t('scope.description')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. {t('registration.title')}</h2>
              <p className="mb-2">{t('registration.clause1')}</p>
              <p>{t('registration.clause2')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. {t('services.title')}</h2>
              <p className="mb-2">{t('services.clause1')}</p>
              <p className="mb-2">{t('services.clause2')}</p>
              <p>{t('services.clause3')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. {t('obligations.title')}</h2>
              <p className="mb-2"><strong>{t('obligations.lenders.title')}:</strong></p>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li>{t('obligations.lenders.item1')}</li>
                <li>{t('obligations.lenders.item2')}</li>
                <li>{t('obligations.lenders.item3')}</li>
              </ul>
              
              <p className="mb-2"><strong>{t('obligations.renters.title')}:</strong></p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t('obligations.renters.item1')}</li>
                <li>{t('obligations.renters.item2')}</li>
                <li>{t('obligations.renters.item3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. {t('payment.title')}</h2>
              <p className="mb-2">{t('payment.clause1')}</p>
              <p>{t('payment.clause2')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. {t('insurance.title')}</h2>
              <p>{t('insurance.description')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. {t('liability.title')}</h2>
              <p className="mb-2">{t('liability.clause1')}</p>
              <p>{t('liability.clause2')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. {t('termination.title')}</h2>
              <p>{t('termination.description')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. {t('law.title')}</h2>
              <p>{t('law.description')}</p>
            </section>

            <section>
              <p className="text-sm text-gray-600">
                <strong>{t('lastUpdated')}:</strong> {new Date().toLocaleDateString(t('locale'))}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
