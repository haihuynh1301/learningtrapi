type Props = {
  pricing: any;
};

export default function Pricing({ pricing }: Props) {
  return (
    <section id="pricing">
      <div className="pricing-header fade-in">
        <div className="section-tag">
          {pricing.heading.tag}
        </div>

        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: pricing.heading.title,
          }}
        />

        {pricing.heading.showsub &&
          pricing.heading.sub && (
            <p className="section-sub">
              {pricing.heading.sub}
            </p>
          )}
      </div>

      <div className="pricing-grid">
        {pricing.cards.map((card: any) => {
          const isFeatured = card.popular;

          return (
            <div
              key={card.id}
              className={`pricing-card fade-in ${
                isFeatured
                  ? "pricing-card--featured"
                  : "pricing-card--default"
              }`}
            >
              {isFeatured &&
                card.lablepopular && (
                  <div className="popular-badge">
                    {card.lablepopular}
                  </div>
                )}

              <div
                className={`pricing-plan ${
                  isFeatured
                    ? "pricing-plan--featured"
                    : ""
                }`}
              >
                {card.headingcard.tag}
              </div>

              <div
                className={`pricing-price ${
                  isFeatured
                    ? "pricing-price--featured"
                    : ""
                }`}
              >
                {card.headingcard.title}
              </div>

              {card.headingcard.showsub &&
                card.headingcard.sub && (
                  <div
                    className={`pricing-period ${
                      isFeatured
                        ? "pricing-period--featured"
                        : ""
                    }`}
                  >
                    {card.headingcard.sub}
                  </div>
                )}

              <ul
                className={`pricing-features ${
                  isFeatured
                    ? "pricing-features--featured"
                    : ""
                }`}
              >
                {card.featureitems.map(
                  (feature: any) => (
                    <li
                      key={feature.id}
                      className={`pricing-feature ${
                        isFeatured
                          ? "pricing-feature--featured"
                          : ""
                      }`}
                    >
                      {feature.instrumentTag}
                    </li>
                  )
                )}
              </ul>

              <a
                href={card.button.href}
                className={`btn-plan ${
                  isFeatured
                    ? "btn-plan--featured"
                    : "btn-plan--default"
                }`}
                target={
                  card.button.external
                    ? "_blank"
                    : undefined
                }
                rel={
                  card.button.external
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {card.button.text}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}