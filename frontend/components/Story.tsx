type StoryProps = {
  story: any;
};

export default function Story({ story }: StoryProps) {
  return (
    <section id="story">
      <div className="about-visual fade-in visible">
        <div className="about-img-frame">
          <div className="music-illustration">
            <span className="big-clef">
              {story.bigClef}
            </span>
          </div>
        </div>

        <div
          className="about-badge"
          dangerouslySetInnerHTML={{
            __html: story.badge,
          }}
        />
      </div>

      <div className="about-content fade-in visible">
        <div className="section-tag">
          {story.heading.tag}
        </div>

        <div
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: story.heading.title,
          }}
        />

        <div className="section-sub">
          {story.heading.sub}
        </div>

        <div className="about-values">
          {story.values?.map((item: any) => (
            <div key={item.id} className="value-item">
              <div className="value-icon ">{item.icon}</div>
              <div className="value-text">
                  <strong>{item.title}</strong>
                  <span>{item.subtext}</span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}