type Props = {
  contact: any;
};

export default function Contact({
  contact,
}: Props) {
  return (
    <section id="contact">
      <div className="fade-in">
        <div className="section-tag">
          {contact.heading.tag}
        </div>

        <h2
          className="section-title"
          dangerouslySetInnerHTML={{
            __html: contact.heading.title,
          }}
        />

        {contact.heading.showsub &&
          contact.heading.sub && (
            <p className="section-sub">
              {contact.heading.sub}
            </p>
          )}

        <div
          style={{
            marginTop: "3rem",
          }}
        >
          {contact.item.map(
            (item: any) => (
              <div
                key={item.id}
                className="contact-detail"
              >
                <div className="contact-icon">
                  {item.icon}
                </div>

                <div>
                  <h4>{item.title}</h4>

                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        item.subtext,
                    }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="fade-in">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>
                First name
              </label>

              <input
                type="text"
                placeholder="Emma"
              />
            </div>

            <div className="form-group">
              <label>
                Last name
              </label>

              <input
                type="text"
                placeholder="Johnson"
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              Email address
            </label>

            <input
              type="email"
              placeholder="emma@example.com"
            />
          </div>

          <div className="form-group">
            <label>
              Phone (optional)
            </label>

            <input
              type="tel"
              placeholder="+61 400 000 000"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                Instrument of
                interest
              </label>

              <select>
                <option value="">
                  Select...
                </option>

                <option>
                  Piano
                </option>

                <option>
                  Guitar
                </option>

                <option>
                  Vocals
                </option>

                <option>
                  Violin
                </option>

                <option>
                  Music Theory
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Student age
              </label>

              <select>
                <option value="">
                  Select...
                </option>

                <option>
                  5–8 years
                </option>

                <option>
                  9–12 years
                </option>

                <option>
                  13–17 years
                </option>

                <option>
                  18–25 years
                </option>

                <option>
                  26+ years
                </option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>
              Tell us about
              your goals
              (optional)
            </label>

            <textarea placeholder="e.g. My daughter wants to learn piano for fun. No prior experience." />
          </div>

          <button
            type="submit"
            className="btn-primary contact-submit"
          >
            Book My Free Trial
            Lesson →
          </button>

          <p className="contact-note">
            We'll respond
            within 24 hours.
            No commitment
            required.
          </p>
        </form>
      </div>
    </section>
  );
}