import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is always a string
  const validLocale = locale || 'de'; // Default to 'de' if undefined

  const [common, impressum, privacy, terms] = await Promise.all([
    import(`../messages/${validLocale}/common.json`),
    import(`../messages/${validLocale}/impressum.json`),
    import(`../messages/${validLocale}/privacy.json`),
    import(`../messages/${validLocale}/terms.json`),
  ]);

  return {
    locale: validLocale,
    messages: {
      ...common.default,
      Impressum: impressum.default,
      Privacy: privacy.default,
      Terms: terms.default,
    }
  };
});
