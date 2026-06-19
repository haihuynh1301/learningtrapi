type Props = {
  process: any;
};

export default function Process({ process }: Props) {
  return (
    <section id="process">
      <div
        className="fade-in"
        style={{
          textAlign: "center",
        }}
      >
        <div
          className="section-tag"
          style={{
            justifyContent: "center",
          }}
        >
          {process.heading.tag}
        </div>

        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: process.heading.title,
          }}
        />

        <p
          className="section-sub"
          style={{
            margin: "0.5rem auto 0",
          }}
        >
          {process.heading.sub}
        </p>
      </div>

      <div className="process-steps">
        {process.steps.map((step: any) => (
          <div
            key={step.id}
            className="process-step fade-in"
          >
            <div className="step-num">
              {step.icon}
            </div>

            <div className="step-title">
              {step.title}
            </div>

            <p className="step-desc">
              {step.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}