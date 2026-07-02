import { getPianoLesson } from "@/lib/api";
import PianoHero from "@/components/PianoHero";
import PianoOverview from "@/components/PianoOverview";
import Learn from "@/components/PianoLearn";
import PianoInstructor from "@/components/PianoInstructor";
import PianoPlan from "@/components/PianoPlan";


export default async function ProgramPage() {
  const lesson = await getPianoLesson();

  console.log("🔥 lesson IN PAGE:", lesson);

  if (!lesson) {
    return <div>NO Program DATA</div>;
  }

  return (
    <main>
           <PianoHero hero={lesson.hero} />
            <PianoOverview overview={lesson.overview}/>
            <Learn learn={lesson.learn}/>
            <PianoInstructor instructor={lesson.instructor}/>
            <PianoPlan plan={lesson.plan} />
    </main>
  );
}