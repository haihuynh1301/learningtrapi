interface PianoOverviewProps {
  overview: any;
}

export default function PianoOverview({
  overview,
}: PianoOverviewProps) {
  if (!overview) return null;

  const button = overview.button?.[0];

  return (
    <section className=" program-overview py-section-padding-v bg-white">
      <div className="container mx-auto px-[5vw]">
        <div className="grid md:grid-cols-12 gap-gutter-grid">
          {/* Left */}
          <div className="md:col-span-5">
            <span className="font-label-md text-gold-light uppercase tracking-widest block mb-4">
              {overview.heading?.tag}
            </span>

            <h2 className="font-headline-lg text-headline-lg text-navy-deep mb-8">
              {overview.heading?.title}
            </h2>

            {overview.heading?.showsub && (
              <p className="font-body-lg text-text-mid mb-6">
                {overview.heading?.sub}
              </p>
            )}

            {button && (
              <a
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={
                  button.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-2 text-navy-deep font-label-md uppercase tracking-bold"
              >
                {button.text.replace("arrow_forward", "")}

                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            )}
          </div>

          {/* Right */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-gutter-card">
            {overview.box?.map((item: any) => (
              <div
                key={item.id}
                className="p-8 bg-gold-pale/30 border border-cream-dark rounded-xl program-card-hover relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-light transform scale-x-0 transition-transform duration-300 border-slide"></div>

                <span className="material-symbols-outlined text-gold-light text-4xl mb-6">
                  {item.icon}
                </span>

                <h3 className="font-headline-md text-headline-md text-navy-deep mb-4">
                  {item.title}
                </h3>

                <p className="font-body-sm text-text-mid">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}