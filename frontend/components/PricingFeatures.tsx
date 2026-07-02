interface PricingFeaturesProps {
  features: any;
}

export default function PricingFeatures({
  features,
}: PricingFeaturesProps) {
  if (!features) return null;

  const featureColumn = features.items?.[0];
  const starterColumn = features.items?.[1];
  const growthColumn = features.items?.[2];
  const intensiveColumn = features.items?.[3];

  return (
    <section className="section-featured px-[5vw] mb-section-padding-v bg-gold-pale/30 py-24">
      <div className="max-w-5xl mx-auto overflow-x-auto">
        <div className="mb-12 text-center">
          <h2 className="font-headline-lg text-headline-lg mb-4">
            {features.heading?.title}
          </h2>

          {features.heading?.showsub && (
            <p className="text-on-surface-variant max-w-xl mx-auto">
              {features.heading?.sub}
            </p>
          )}
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-cream-dark/50">
              <th className="py-6 font-headline-md">
                {featureColumn?.title}
              </th>

              <th className="py-6 font-headline-md text-center text-text-muted">
                {starterColumn?.title}
              </th>

              <th className="py-6 font-headline-md text-center text-gold-light">
                {growthColumn?.title}
              </th>

              <th className="py-6 font-headline-md text-center text-text-muted">
                {intensiveColumn?.title}
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-cream-dark/30">
            {featureColumn?.items?.map(
              (feature: any, index: number) => {
                const starter =
                  starterColumn?.items?.[index]
                    ?.instrumentTag;

                const growth =
                  growthColumn?.items?.[index]
                    ?.instrumentTag;

                const intensive =
                  intensiveColumn?.items?.[index]
                    ?.instrumentTag;

                const renderValue = (value: string) => {
                  if (value === "check") {
                    return (
                      <span className="material-symbols-outlined text-gold-light">
                        check
                      </span>
                    );
                  }

                  if (value === "—") {
                    return (
                      <span className="material-symbols-outlined text-text-muted">
                        remove
                      </span>
                    );
                  }

                  return value;
                };

                return (
                  <tr key={feature.id}>
                    <td className="py-5 font-body-sm font-semibold">
                      {feature.instrumentTag}
                    </td>

                    <td className="py-5 text-center text-on-surface-variant">
                      {renderValue(starter)}
                    </td>

                    <td className="py-5 text-center font-bold">
                      {renderValue(growth)}
                    </td>

                    <td className="py-5 text-center text-on-surface-variant">
                      {renderValue(intensive)}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}