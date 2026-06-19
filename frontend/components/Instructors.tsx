type Props = {
  instructors: any;
};

export default function Instructors({ instructors }: Props) {
  return (
    <section id="instructors">
      <div
        className="fade-in"
        style={{
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
      >
        <div
          className="section-tag"
          style={{
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {instructors.heading.tag}
          </span>
        </div>

        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: instructors.heading.title,
          }}
        />

        <p
          className="section-sub"
          style={{
            margin: "0.5rem auto 0",
          }}
        >
          {instructors.heading.sub}
        </p>
      </div>

      <div className="instructors-grid">
        {instructors.cards.map((item: any) => (
          <div
            key={item.id}
            className="instructor-card fade-in"
          >
            <div className="instructor-avatar">
              {item.icon}
            </div>

            <div className="instructor-name">
              {item.title}
            </div>

            {item.showsub && item.sub && (
              <div className="instructor-role">
                {item.sub}
              </div>
            )}

            <p className="instructor-bio">
              {item.description}
            </p>

            <span className="instructor-cred">
              {item.ages}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}