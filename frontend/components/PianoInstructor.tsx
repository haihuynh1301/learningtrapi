import { getImageUrl } from "@/lib/image";

interface PianoInstructorProps {
  instructor: any;
}

export default function PianoInstructor({
  instructor,
}: PianoInstructorProps) {
  if (!instructor) return null;

  const imageUrl = getImageUrl(instructor?.image?.url);

  return (
    <section className="program-instructor py-section-padding-v bg-white">
      <div className="container mx-auto px-[5vw]">
        <div className="bg-navy-deep rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          {/* Image */}
          <div className="md:w-1/2 aspect-square md:aspect-auto">
            {imageUrl && (
              <img
                className="w-full h-full object-cover"
                src={imageUrl}
                alt={instructor.heading?.title || ""}
              />
            )}
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">

            <span className="font-label-md text-gold-light uppercase tracking-widest block mb-4">
              {instructor.heading?.tag}
            </span>

            <h2 className="font-headline-lg text-headline-lg text-white mb-6">
              {instructor.heading?.title}
            </h2>

            {instructor.heading?.showsub && (
              <p className="font-body-lg text-white/70 mb-8 italic whitespace-pre-line">
                {instructor.heading?.sub}
              </p>
            )}

            <ul className="space-y-4 mb-10">
              {instructor.information?.map((item: any) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 text-gold-pale/80 font-body-sm"
                >
                  <span className="material-symbols-outlined text-gold-light text-sm">
                    check_circle
                  </span>

                  {item.instrumentTag}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}