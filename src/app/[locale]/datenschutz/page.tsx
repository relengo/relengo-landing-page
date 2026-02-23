"use client";
import { useTranslations } from 'next-intl';
import Navbar from "@/components/landing/Navbar";

export default function PrivacyPage() {
  const t = useTranslations('Privacy');
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF8ED] pt-32 px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
          
          <div className="space-y-8 text-gray-700">
            {/* Controller */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. {t('controller.title')}</h2>
              <p className="whitespace-pre-line">{t('controller.info')}</p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. {t('collection.title')}</h2>
              
              <h3 className="text-xl font-semibold mb-2 mt-4">a) {t('collection.website.title')}</h3>
              <p className="mb-2">{t('collection.website.description')}</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t('collection.website.item1')}</li>
                <li>{t('collection.website.item2')}</li>
                <li>{t('collection.website.item3')}</li>
                <li>{t('collection.website.item4')}</li>
                <li>{t('collection.website.item5')}</li>
              </ul>
              <p className="mt-2">
                <strong>{t('collection.legalBasis')}:</strong> {t('collection.website.basis')}
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">b) {t('collection.waitlist.title')}</h3>
              <p className="mb-2">{t('collection.waitlist.description')}</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t('collection.waitlist.item1')}</li>
                <li>{t('collection.waitlist.item2')}</li>
                <li>{t('collection.waitlist.item3')}</li>
              </ul>
              <p className="mt-2">
                <strong>{t('collection.legalBasis')}:</strong> {t('collection.waitlist.basis')}
              </p>
              <p className="mt-2">
                <strong>{t('collection.storageDuration')}:</strong> {t('collection.waitlist.duration')}
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-4">c) {t('collection.cookies.title')}</h3>
              <p className="mb-2">{t('collection.cookies.description')}</p>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>{t('collection.cookies.necessary')}:</strong> {t('collection.cookies.necessaryDesc')}</li>
                <li><strong>{t('collection.cookies.analytics')}:</strong> {t('collection.cookies.analyticsDesc')}</li>
              </ul>
            </section>

            {/* Third Parties */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. {t('thirdParties.title')}</h2>
              
              <h3 className="text-xl font-semibold mb-2">a) {t('thirdParties.hosting.title')}</h3>
              <p className="whitespace-pre-line">{t('thirdParties.hosting.info')}</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">b) {t('thirdParties.email.title')}</h3>
              <p className="whitespace-pre-line">{t('thirdParties.email.info')}</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">c) {t('thirdParties.analytics.title')}</h3>
              <p className="whitespace-pre-line">{t('thirdParties.analytics.info')}</p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. {t('rights.title')}</h2>
              <p className="mb-2">{t('rights.description')}</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>{t('rights.access.title')}:</strong> {t('rights.access.description')}</li>
                <li><strong>{t('rights.rectification.title')}:</strong> {t('rights.rectification.description')}</li>
                <li><strong>{t('rights.erasure.title')}:</strong> {t('rights.erasure.description')}</li>
                <li><strong>{t('rights.portability.title')}:</strong> {t('rights.portability.description')}</li>
                <li><strong>{t('rights.objection.title')}:</strong> {t('rights.objection.description')}</li>
                <li><strong>{t('rights.complaint.title')}:</strong> {t('rights.complaint.description')}</li>
              </ul>
              <p className="mt-4">
                {t('rights.contact')} <a href="mailto:info@relengo.app" className="text-blue-600 hover:underline">info@relengo.app</a>
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. {t('security.title')}</h2>
              <p className="mb-2">{t('security.description')}</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>{t('security.item1')}</li>
                <li>{t('security.item2')}</li>
                <li>{t('security.item3')}</li>
                <li>{t('security.item4')}</li>
              </ul>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. {t('changes.title')}</h2>
              <p className="mb-2">{t('changes.description')}</p>
              <p className="mt-2">
                <strong>{t('changes.lastUpdated')}:</strong> {new Date().toLocaleDateString(t('changes.locale'))}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
