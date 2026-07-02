import { getAboutPage } from "@/lib/api";
import HeroAB from "@/components/HeroAB";
import Journey from "@/components/Journey";
import CardSection from "@/components/CardSection";
import Founders from "@/components/Founders";

export default async function AboutPage() {
  const data = await getAboutPage();

  return (
    <main>
      <HeroAB hero={data.hero} />
      <Journey journey={data.journey} />
      <CardSection card={data.card} />
      <Founders founders={data.founders} />
    </main>
  );
}