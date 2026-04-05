import Home from "@/components/landing/Home";
import { FaqJsonLd } from "@/components/JsonLd";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <FaqJsonLd locale={locale} />
      <div className="bg-[#FAF7F2] min-h-screen">
        <Home />
      </div>
    </>
  );
}
