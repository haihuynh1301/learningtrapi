type Props = {
  banner: any;
};

export default function Banner({ banner }: Props) {
  return (
    <section id="cta">
      <div className="section-tag">
        {banner.heading.tag}
      </div>

      <h2
        className="section-title"
        dangerouslySetInnerHTML={{
          __html: banner.heading.title,
        }}
      />

      {banner.heading.showsub &&
        banner.heading.sub && (
          <p className="section-sub">
            {banner.heading.sub}
          </p>
        )}

      <div className="cta-btns">
        {banner.cta?.map(
          (button: any, index: number) => (
            <a
              key={button.id}
              href={button.href}
              className={
                index === 0
                  ? "btn-primary"
                  : "btn-secondary"
              }
              target={
                button.external
                  ? "_blank"
                  : undefined
              }
              rel={
                button.external
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {button.text}
            </a>
          )
        )}
      </div>
    </section>
  );
}