type ProgramProps = {
  program: any;
};

export default function Program({ program }: ProgramProps) {
  return (
    <section id="programs">
      <div className="programs-header">

        <div>
          <div className="section-tag">
            {program.heading.tag}
          </div>

          <h2
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: program.heading.title,
            }}
          />
        </div>

        <p className="section-sub">
          {program.heading.sub}
        </p>
      </div>

      <div className="programs-grid">
        {program.cards?.map((card: any) => (
          <div
            key={card.id}
            className="program-card"
          >
            <span className="program-icon">
              {card.icon}
            </span>

            <div className="program-name">
              {card.title}
            </div>

            <p className="program-desc">
              {card.description}
            </p>

            <span className="program-ages">
              {card.ages}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}