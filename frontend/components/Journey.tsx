type Props = {
  journey: any;
};

export default function Journey({
  journey,
}: Props) {
  return (
    <section
      id="journey"
      className="journey-section"
    >
      <div className="journey-container">
        <div className="journey-header fade-in">
          <span className="journey-tag">
            {journey.heading.tag}
          </span>

          <h2 className="journey-title">
            {journey.heading.title}
          </h2>

          {journey.heading.showsub &&
            journey.heading.sub && (
              <p className="journey-sub">
                {journey.heading.sub}
              </p>
            )}
        </div>

        <div className="journey-grid">
          {journey.item.map(
            (item: any) => (
              <div
                key={item.id}
                className="journey-card fade-in"
              >
                <span className="journey-number">
                  {item.icon}
                </span>

                <h3 className="journey-card-title">
                  {item.title}
                </h3>

                <p className="journey-card-text">
                  {item.subtext}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}