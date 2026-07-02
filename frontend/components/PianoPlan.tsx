interface PianoPlanProps {
  plan: any;
}

export default function PianoPlan({
  plan,
}: PianoPlanProps) {
  if (!plan) return null;

  const card = plan.card;
  const button = card?.button;

  return (
    <section className="program-plan py-section-padding-v bg-gold-pale/20 relative">
      <div className="container mx-auto px-[5vw]">

        {/* Heading */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="font-label-md text-gold-light uppercase tracking-widest block mb-4">
            {plan.heading?.tag}
          </span>

          <h2 className="font-headline-lg text-headline-lg text-navy-deep">
            {plan.heading?.title}
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white border-2 border-gold-light rounded-xl p-10 shadow-xl relative overflow-hidden">

            {/* Popular */}
            {card?.popular && (
              <div className="absolute top-0 right-0 bg-gold-light text-navy-deep font-label-md px-6 py-2 rounded-bl-xl uppercase tracking-wider">
                {card.lablepopular}
              </div>
            )}

            {/* Card Heading */}
            <div className="mb-8">
              <h3 className="font-headline-md text-headline-md text-navy-deep mb-2">
                {card.headingcard?.tag}
              </h3>

              {card.headingcard?.showsub && (
                <p className="font-body-sm text-text-muted">
                  {card.headingcard?.sub}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="mb-10">
              <span className="font-stat-display text-navy-deep text-5xl">
                {card.headingcard?.title}
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {card.featureitems?.map((item: any) => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 font-body-sm text-navy-deep"
                >
                  <span className="material-symbols-outlined text-gold-light">
                    task_alt
                  </span>

                  {item.instrumentTag}
                </li>
              ))}
            </ul>

            {/* Button */}
            {button && (
              <a
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={
                  button.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block w-full bg-navy-deep text-white font-label-md py-4 rounded-[3px] hover:bg-navy-mid transition-colors shadow-lg hover:shadow-navy-mid/30 text-center"
              >
                {button.text}
              </a>
            )}

            {/* Bottom Note */}
            {card.shownote && (
              <p
                className="text-center mt-6 font-body-sm text-text-muted"
                dangerouslySetInnerHTML={{
                  __html: card.notebottom,
                }}
              />
            )}

          </div>
        </div>

      </div>
    </section>
  );
}