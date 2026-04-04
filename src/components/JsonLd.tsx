const BASE_URL = 'https://relengo.app';

const faqEn = [
  {
    question: 'What is Relengo?',
    answer:
      'Relengo is a peer-to-peer rental marketplace that connects people nearby to lend and rent items like outdoor gear, cameras, power tools, sports equipment, and more. Instead of buying something you only need once, you can rent it locally from a neighbour.',
  },
  {
    question: 'How does Relengo work?',
    answer:
      'Lenders list their idle items in minutes with a title, description, and photos. Renters browse available items nearby, send a booking request, arrange pickup with the owner, use the item, and return it when done.',
  },
  {
    question: 'What can I rent on Relengo?',
    answer:
      'Relengo covers nine categories: DIY & renovation tools, event setup equipment, sports gear, entertainment items, music production equipment, outdoor activity gear, photography cameras and lenses, construction tools, and travel accessories.',
  },
  {
    question: 'Is Relengo free to join?',
    answer:
      'Yes. Joining Relengo and creating an account is completely free. There are no subscription fees.',
  },
  {
    question: 'How do I earn money on Relengo?',
    answer:
      'List items you already own — power tools, cameras, camping gear, or any other equipment that sits idle — set your own daily rate, accept rental requests, and get paid after each handover. Lenders on Relengo can save up to 90% of an item\'s purchase price through rental income.',
  },
  {
    question: 'Is Relengo safe and secure?',
    answer:
      'Relengo verifies user identities and provides insured rentals so both lenders and renters are protected. Every transaction is covered!',
  },
  {
    question: 'Where is Relengo available?',
    answer:
      'Relengo is currently in development and launching soon on iOS and Android. You can join the waitlist at relengo.app to be among the first to get access.',
  },
];

const faqDe = [
  {
    question: 'Was ist Relengo?',
    answer:
      'Relengo ist ein Peer-to-Peer-Verleihmarktplatz, der Menschen in der Nähe verbindet, um Gegenstände wie Outdoor-Ausrüstung, Kameras, Elektrowerkzeuge, Sportgeräte und mehr zu verleihen und zu mieten.',
  },
  {
    question: 'Wie funktioniert Relengo?',
    answer:
      'Verleiher stellen ihre ungenutzten Gegenstände in wenigen Minuten ein. Mieter stöbern durch verfügbare Artikel in ihrer Nähe, senden eine Buchungsanfrage, holen den Artikel ab, nutzen ihn und geben ihn zurück.',
  },
  {
    question: 'Was kann ich auf Relengo mieten?',
    answer:
      'Relengo umfasst neun Kategorien: Heimwerken & Renovation, Eventausstattung, Sportausrüstung, Unterhaltungselektronik, Musikproduktion, Outdoor-Aktivitäten, Fotografie, Bauwerkzeuge und Reisezubehör.',
  },
  {
    question: 'Ist Relengo kostenlos?',
    answer:
      'Ja. Die Anmeldung und die Kontoerstellung sind vollständig kostenlos.',
  },
  {
    question: 'Wie verdiene ich Geld mit Relengo?',
    answer:
      'Stelle Gegenstände ein, die du bereits besitzt – Werkzeuge, Kameras, Campingausrüstung – lege deinen eigenen Tagespreis fest und werde nach jeder Übergabe bezahlt.',
  },
  {
    question: 'Ist Relengo sicher?',
    answer:
      'Relengo verifiziert die Identität der Nutzer und bietet versicherte Vermietungen, sodass sowohl Verleiher als auch Mieter geschützt sind.',
  },
];

interface JsonLdProps {
  locale: string;
}

export default function JsonLd({ locale }: JsonLdProps) {
  const isDE = locale === 'de';
  const pageUrl = `${BASE_URL}/${locale}`;
  const faq = isDE ? faqDe : faqEn;

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Relengo',
    url: BASE_URL,
    description: isDE
      ? 'Peer-to-Peer Verleih-App für Outdoor-Ausrüstung, Kameras, DIY Werkzeuge und mehr.'
      : 'Peer-to-peer rental app for outdoor gear, cameras, DIY tools, and more.',
    inLanguage: isDE ? 'de' : 'en',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Relengo',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.svg`,
    sameAs: [
      'https://www.instagram.com/relengo.app',
      'https://x.com/Relengoapp',
      'https://www.tiktok.com/@relengo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@relengo.app',
      contactType: 'customer support',
    },
    description: isDE
      ? 'Relengo ist eine Peer-to-Peer Verleih-App, die Menschen verbindet, um Gegenstände in der Nähe zu leihen und zu vermieten.'
      : 'Relengo is a peer-to-peer rental app connecting people nearby to lend and rent items locally.',
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Relengo',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description: isDE
      ? 'Verleihe und miete Gegenstände in deiner Nähe – Outdoor-Ausrüstung, Kameras, DIY Werkzeuge und mehr.'
      : 'Lend and rent items nearby — outdoor gear, cameras, DIY tools, and more.',
    url: pageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Relengo',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const schemas = [websiteSchema, organizationSchema, appSchema, faqSchema];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}