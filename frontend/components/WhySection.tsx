type Props = {
  technique: any;
};

export default function WhySection({ technique }: Props) {
  return (
    <section id="why">
      <div className="why-grid">
        <div className="fade-in">
          <div className="section-tag">
            {technique.heading.tag}
          </div>

          <h2
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: technique.heading.title,
            }}
          />

          <p className="section-sub">
            {technique.heading.sub}
          </p>

          <a
            href={technique.button.href}
            className="btn-primary"
          >
            {technique.button.text}
          </a>
        </div>

        <div className="why-features fade-in">
          {technique.box.map((item: any) => (
            <div className="why-feature" key={item.id}>
              <span className="why-num">{item.icon}</span>
              <div className="title">{item.title}</div>
              <p className="subtext">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}