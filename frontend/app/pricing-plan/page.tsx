import { getPricingPage } from "@/lib/api";
import Pricingplan from "@/components/Pricingplan";
import PricingFeatures from "@/components/PricingFeatures";
import PricingBanner from "@/components/PricingBanner";
import PricingQuestion from "@/components/PricingQuestion";


export default async function PricingPage() {
  const pricing = await getPricingPage();

  console.log("🔥 PRICING IN PAGE:", pricing);

  if (!pricing) {
    return <div>NO PRICING DATA</div>;
  }

  return (
    <main>
      <Pricingplan pricing={pricing} />
      <PricingFeatures features={pricing.features} />
    <PricingBanner banner={pricing.banner}/>
    <PricingQuestion question={pricing.question}/>
    </main>
  );
}