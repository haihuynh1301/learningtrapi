type Props = {
  testimonials: any;
};

export default function Testimonials({
  testimonials,
}: Props) {
  return (
    <section id="testimonials">
      <div
        className="testimonials-header fade-in"
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
          {testimonials.heading.tag}
        </div>

        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: testimonials.heading.title,
          }}
        />

        {testimonials.heading.showsub &&
          testimonials.heading.sub && (
            <p className="section-sub">
              {testimonials.heading.sub}
            </p>
          )}
      </div>

      <div className="testimonials-grid">
        {testimonials.quotes.map((quote: any) => (
          <div
            key={quote.id}
            className="testimonial-card fade-in"
          >
            <div className="testimonial-stars">
              {quote.icon}
            </div>

            {quote.showmark && (
              <div className="testimonial-mark">
                {quote.mark}
              </div>
            )}

            <p className="testimonial-text">
              {quote.text}
            </p>

            {quote.showauthor && quote.author && (
              <div className="testimonial-author">
                <div className="author-avatar">
                  {quote.author.icon}
                </div>

                <div className="author-infor">
                  <div className="author-name">
                    {quote.author.title}
                  </div>

                  <div className="author-role">
                    {quote.author.subtext}
                  </div>
                </div>
              </div>
            )}
            

          </div>
        ))}
      </div>
    </section>
  );
}