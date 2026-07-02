type Props = {
  card: any;
};

export default function CardSection({
  card,
}: Props) {
  const cards = card.cards || [];

  return (
    <section>
      <div className="px-[5vw] max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[auto] md:h-[600px]">

          {/* Card 1 */}
          {cards[0] && (
            <div className="md:col-span-2 md:row-span-2 bg-navy-deep p-12 flex flex-col justify-end relative overflow-hidden group">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb_I21qEfPVzeKzRDN0o-dKOXPdcAcIANAGtkqtCS-QSG_NFCHBD2JD2EZiymLSQfTyX4H6-5xOQF6qKas8vT82k-ra9klgm11wn7gMc7W-gZuERk2wPn7UO9UuDv31WCqhtHX8g1m27-3DznopyfuXB9fqDiUt_fLaUu8Yu1WCBQ20rkRabjmS_4nQE38MFTB7qTE5E8wf6I4Y6UjdiA6MlT69_GnI28LB2bHcIjezkAibIOkNYxEXJ95POunbZQv6S1IrIEkQvw"
                alt=""
              />

              <div className="relative z-10">
                <h4 className="font-stat-display text-display-hero text-gold-light mb-2">
                  {cards[0].text}
                </h4>

                <p className="font-headline-md text-headline-md text-white">
                  {cards[0].description}
                </p>
              </div>
            </div>
          )}

          {/* Card 2 */}
          {cards[1] && (
            <div className="bg-gold-light p-8 flex flex-col justify-center text-navy-deep">
              <h4 className="font-stat-display text-headline-lg mb-1">
                {cards[1].text}
              </h4>

              <p className="font-label-md text-label-md uppercase tracking-wider font-bold">
                {cards[1].description}
              </p>
            </div>
          )}

          {/* Card 3 */}
          {cards[2] && (
            <div className="bg-cream-dark p-8 flex flex-col justify-center text-navy-deep">
              <h4 className="font-stat-display text-headline-lg mb-1">
                {cards[2].text}
              </h4>

              <p className="font-label-md text-label-md uppercase tracking-wider font-bold">
                {cards[2].description}
              </p>
            </div>
          )}

          {/* Card 4 */}
          {cards[3] && (
            <div className="md:col-span-2 bg-surface-container p-8 flex items-center justify-between border border-cream-dark">
              <div>
                <h4 className="font-headline-md text-headline-md text-navy-deep mb-2">
                  {cards[3].text}
                </h4>

                <p className="font-body-sm text-body-sm text-text-mid">
                  {cards[3].description}
                </p>
              </div>

              <span className="material-symbols-outlined text-gold-light text-5xl">
                public
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}