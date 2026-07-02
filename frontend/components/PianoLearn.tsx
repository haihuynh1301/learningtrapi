type Props = {
  learn: any;
};

export default function Learn({ learn }: Props) {
  return (
    <section className=" program-learn py-section-padding-v bg-navy-deep text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="staff-lines h-full w-full"></div>
      </div>

      <div className="container mx-auto px-[5vw] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-label-md text-gold-light uppercase tracking-widest block mb-4">
            {learn.heading.tag}
          </span>

          <h2 className="font-display-hero-mobile md:font-headline-lg text-white">
            {learn.heading.title}
          </h2>

          {learn.heading.showsub && learn.heading.sub && (
            <p className="font-body-md text-white/70 mt-6">
              {learn.heading.sub}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-gutter-card">
          {learn.items.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-gold-light/40 flex items-center justify-center text-gold-light font-stat-display">
                {item.icon}
              </div>

              <h4 className="font-headline-md text-headline-md">
                {item.title}
              </h4>

              <p className="font-body-sm text-white/70">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}