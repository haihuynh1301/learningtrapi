interface PianoHeroProps {
  hero: any;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://127.0.0.1:1337";

export default function PianoHero({
  hero,
}: PianoHeroProps) {
  if (!hero) return null;

  const imageUrl = hero.image?.url
    ? `${API_URL}${hero.image.url}`
    : "";

  return (
    <section className="hero-program relative min-h-[819px] flex items-center pt-24 overflow-hidden bg-navy-deep">
      {/* Background Accents */}
      <div className="absolute inset-0 staff-lines opacity-20 pointer-events-none"></div>

      <div className="absolute -right-20 top-1/4 opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[400px] text-gold-light">
          music_note
        </span>
      </div>

      <div className="container mx-auto px-[5vw] grid lg:grid-cols-12 gap-gutter-grid items-center relative z-10">

        {/* Left Content */}
        <div className="lg:col-span-7">

          <div className="flex items-center gap-4 mb-6">
            <span className="font-label-md text-gold-light uppercase tracking-widest">
              {hero.heading?.tag}
            </span>

            <div className="h-[1px] w-12 bg-gold-light"></div>
          </div>

          <h1 className="font-display-hero text-display-hero text-white mb-6">
            {hero.heading?.title}
          </h1>

          {hero.heading?.showsub && (
            <p className="font-body-lg text-white/80 max-w-xl mb-10">
              {hero.heading?.sub}
            </p>
          )}

          <div className="flex flex-wrap gap-8 items-center">

            {hero.items?.map(
              (item: any, index: number) => (
                <div
                  key={item.id}
                  className="flex items-center"
                >
                  {index > 0 && (
                    <div className="h-10 w-[1px] bg-white/10 hidden sm:block mr-8"></div>
                  )}

                  <div className="flex flex-col">
                    <span className="font-label-md text-gold-pale/60 uppercase">
                      {item.text}
                    </span>

                    <span className="font-stat-display text-gold-light">
                      {item.description}
                    </span>
                  </div>
                </div>
              )
            )}

          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 relative">

          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={hero.heading?.title}
            />
          </div>

          {/* Quote Card */}
          <div className="absolute -bottom-10 -left-10 hidden md:block p-8 bg-navy-mid/90 backdrop-blur-xl border border-gold-light/20 rounded-xl shadow-2xl max-w-xs">

            <span className="material-symbols-outlined text-gold-light mb-4">
              {hero.icon}
            </span>

            <p className="font-body-sm text-white/90 italic whitespace-pre-line">
              {hero.badge}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}