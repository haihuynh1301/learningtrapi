interface PricingBannerProps {
  banner: any;
}

export default function PricingBanner({
  banner,
}: PricingBannerProps) {
  if (!banner) return null;

  const cta = banner.cta?.[0];

  return (
    <section className="pricing-banner px-[5vw] mb-section-padding-v">
      <div className="relative w-full rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center text-center p-12">

        <img
          className="absolute inset-0 w-full h-full object-cover -z-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJsif_UVpfXKVubIWW6k16BpMnos391lv-bEu8_1bdFqs0lf_o6NRHhIkPsDz6os6-kE5hK3l26CTB2CKSE8T4dvRyLhwbrVmfG3TEruV_eizfW7KpVljiuJG1IvispvFGkk-Muzg5IzKoOKZG5nk5qSHAQrxujA3YMDlzqMYEYh3YDjbLRNwAR-9-2243M2Z1_aKjAZwhLmlK-3Rt69fnEc3bH8H9Hom4ct_kxxuisoHajoDyMp-EpzTEmR0kA0VvScgwBv6KTz0"
          alt={banner.heading?.title}
        />

        <div className="absolute inset-0 bg-navy-deep/80 -z-10"></div>

        <div className="max-w-2xl text-white">
          <h2 className="font-headline-lg text-headline-lg mb-6 text-gold-light">
            {banner.heading?.title}
          </h2>

          {banner.heading?.showsub && (
            <p className="font-body-lg text-body-lg mb-10 text-surface-dim">
              {banner.heading?.sub}
            </p>
          )}

          {cta && (
            <a
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className="inline-block bg-gold-light text-navy-deep px-10 py-4 font-label-md uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-lg shadow-gold-light/20"
            >
              {cta.text}
            </a>
          )}
        </div>

      </div>
    </section>
  );
}