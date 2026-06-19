import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Program from "@/components/Program";
import WhySection from "@/components/WhySection";
import Instructors from "@/components/Instructors";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faqs from "@/components/Faqs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";

import { getHomepage } from "@/lib/api";

export default async function HomePage() {
  const data = await getHomepage();

  return (
    <main className="main">
      <Hero hero={data.heroSection} />
      <Story story={data.storySection} />

      <Program program={data.programs} />

      <WhySection technique={data.technique} />

      <Instructors instructors={data.instructors} />

      <Process process={data.process} />

      <Testimonials testimonials={data.testimonials} />

      <Pricing pricing={data.pricing} />

      <Faqs faqs={data.faqs} />

      <Banner banner={data.banner} />

      <Contact contact={data.contact} />
    </main>
  );
}