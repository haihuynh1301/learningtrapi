import Link from "next/link";

export default function Hero({ hero }: any) {
  return (
    <section id="hero">
      {/* <div className="container"> */}

        <div className="hero-content">

          <div className="hero-tag">
            {hero.heroTag}
          </div>

          <h2
            className="hero-title"
            dangerouslySetInnerHTML={{
              __html: hero.heroTitle || ''
            }}
          />

          <p className="hero-sub">
            {hero.heroSub}
          </p>

          <div className="flex gap-4">
            {hero.heroCta.map((btn: any) => (
              <Link
                key={btn.id}
                href={btn.href}
                className="btn-primary"
              >
                {btn.text}
              </Link>
            ))}
          </div>

        </div>

        <div className="hero-visual">
            <div className="hero-card">

              <div className="grid grid-cols-2 gap-4 mb-8">

                {hero.stats.map((stat: any) => (
                  <div
                    key={stat.id}
                    className="stat"
                  >
                    <div className="stat-num">
                      {stat.number}
                    </div>

                    <div className="text-gray-300">
                      {stat.text}
                    </div>
                  </div>
                ))}

              </div>

              <div className="hero-instruments ">

                {hero.instrument.map((item: any) => (
                  <span
                    key={item.id}
                    className="instrument-tag"
                  >
                    {item.instrumentTag}
                  </span>
                ))}

              </div>

              </div>
           </div>
      {/* </div> */}
    </section>
  );
}