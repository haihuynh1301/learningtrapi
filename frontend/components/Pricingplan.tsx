type PricingPlanProps = {
  pricing: {
    hero: {
      tag: string;
      title: string;
      sub?: string;
      showsub?: boolean;
    };
    item: Array<{
      id: number;
      popular: boolean;
      lablepopular?: string;
      headingcard: {
        tag: string;
        title: string;
        sub?: string;
      };
      featureitems: Array<{
        id: number;
        instrumentTag: string;
      }>;
      button: {
        href: string;
        text: string;
        external: boolean;
      };
    }>;
  };
};

export default function Pricingplan({
  pricing,
}: PricingPlanProps) {
  const { hero, item } = pricing;

  return (
    <>
      {/* Hero Section */}
      <section className="hero-pricing relative px-[5vw] mb-section-padding-v overflow-hidden">
        <div className="absolute inset-0 staff-lines opacity-10 -z-10"></div>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gold-light font-label-md uppercase tracking-[0.2em]">
              {hero?.tag}
            </span>

            <div className="h-[1px] w-12 bg-gold-light/40"></div>
          </div>

        <h1 className="font-display-hero text-display-hero mb-8 whitespace-pre-line">
          {hero?.title?.replace(/<\/?br\s*\/?>/gi, "\n")}
        </h1>

          {hero?.showsub && hero?.sub && (
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {hero.sub}
            </p>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-[5vw] mb-section-padding-v pricing-section2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-card max-w-7xl mx-auto">
          {item?.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={
                  isPopular
                    ? "group relative bg-navy-deep p-10 rounded-lg flex flex-col shadow-2xl scale-105 z-10 most-popular"
                    : "group relative bg-white border border-cream-dark p-10 rounded-lg flex flex-col transition-all duration-500 hover:shadow-xl hover:shadow-navy-deep/5"
                }
              >
                {isPopular ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-light text-navy-deep px-4 py-1 rounded-full font-label-md uppercase tracking-wider text-[10px] font-bold">
                    {plan.lablepopular}
                  </div>
                ) : (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                )}

                <h3
                  className={`font-headline-md text-headline-md mb-2 ${
                    isPopular ? "text-white" : ""
                  }`}
                >
                  {plan.headingcard?.tag}
                </h3>

                <div className="mb-6">
                  <span
                    className={`font-stat-display text-stat-display ${
                      isPopular ? "text-gold-light" : ""
                    }`}
                  >
                    {plan.headingcard?.title
                      ?.replace("/month", "")
                      ?.trim()}
                  </span>

                  <span
                    className={`font-body-sm ${
                      isPopular
                        ? "text-surface-dim"
                        : "text-text-muted"
                    }`}
                  >
                    {plan.headingcard?.title?.includes(
                      "/month"
                    )
                      ? " /month"
                      : ""}
                  </span>
                </div>

                {plan.headingcard?.sub && (
                  <p
                    className={`font-body-sm mb-8 ${
                      isPopular
                        ? "text-surface-dim"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {plan.headingcard.sub}
                  </p>
                )}

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.featureitems?.map((feature) => (
                    <li
                      key={feature.id}
                      className="flex items-center gap-3"
                    >
                      <span className="material-symbols-outlined text-gold-light text-[18px]">
                        check_circle
                      </span>

                      <span
                        className={`font-body-sm ${
                          isPopular ? "text-white" : ""
                        }`}
                      >
                        {feature.instrumentTag}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.button?.href ? (
                  <a
                    href={plan.button.href}
                    target={
                      plan.button.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      plan.button.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={
                      isPopular
                        ? "w-full bg-gold-light text-navy-deep py-3 font-label-md uppercase tracking-widest hover:bg-white hover:text-navy-deep transition-colors shadow-[0_4px_12px_rgba(232,184,75,0.3)] text-center block"
                        : "w-full border border-navy-deep py-3 font-label-md uppercase tracking-widest hover:bg-navy-deep hover:text-white transition-colors text-center block"
                    }
                  >
                    {plan.button.text}
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}