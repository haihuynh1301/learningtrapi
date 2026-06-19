import { getAboutPage } from "@/lib/api";
import HeroAB from "@/components/HeroAB";

export default async function AboutPage() {
  const data = await getAboutPage();

  return (
    <main>
      <HeroAB hero={data.hero} />
    </main>
  );
}