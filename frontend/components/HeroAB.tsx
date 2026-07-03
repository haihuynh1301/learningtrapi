import Link from "next/link";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:1337";

type HeroABProps = {
  hero: any;
};

export default function HeroAB({
  hero,
}: HeroABProps) {
  if (!hero) return null;

  return (
    <section className="relative py-section-padding-v overflow-hidden staff-lines">
      <div className="px-[5vw] max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-grid items-center">

        {/* Content */}
        <div className="md:col-span-7">

          <div className="flex items-center gap-4 mb-6">
            <span className="font-label-md text-label-md uppercase tracking-[0.3em] text-gold-light">
              {hero.heading?.tag}
            </span>

            <div className="h-[1px] w-24 bg-gold-light/30" />
          </div>

          <h1
            className="font-display-hero text-display-hero-mobile md:text-display-hero mb-8 text-primary"
            dangerouslySetInnerHTML={{
              __html: hero.heading?.title || "",
            }}
          />

          {hero.heading?.showsub && (
            <p className="font-body-lg text-body-lg text-text-mid max-w-2xl mb-10">
              {hero.heading?.sub}
            </p>
          )}

          <div className="flex flex-wrap gap-4">
            {hero.cta?.map(
              (item: any, index: number) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={
                    index === 0
                      ? "px-8 py-4 bg-navy-deep text-white font-label-md text-label-md uppercase tracking-widest rounded-sm hover:translate-y-[-2px] transition-all duration-300"
                      : "px-8 py-4 border border-navy-deep text-navy-deep font-label-md text-label-md uppercase tracking-widest rounded-sm hover:bg-navy-deep hover:text-white transition-all duration-300"
                  }
                >
                  {item.text}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Image */}
        <div className="md:col-span-5 relative">

          <div className="aspect-[4/5] bg-cream-dark rounded-sm overflow-hidden shadow-2xl relative z-10">

            {hero.image && (
              <img
                // src={`${API_URL}${hero.image.url}`}
                src={hero.image.url}
                alt={
                  hero.image.alternativeText ||
                  hero.heading?.title
                }
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-sm text-gold-pale z-20 hidden md:block border border-gold-light/20">

            <span
              className="block font-stat-display text-stat-display mb-1 text-gold-light"
              dangerouslySetInnerHTML={{
                __html:
                  hero.badge?.split("<br>")[0] || "",
              }}
            />

            <span
              className="font-label-md text-label-md uppercase tracking-widest opacity-80"
              dangerouslySetInnerHTML={{
                __html:
                  hero.badge?.split("<br>")[1] || "",
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}