import { getImageUrl } from "@/lib/image";

type Props = {
  founders: any;
};

export default function Founders({
  founders,
}: Props) {
  // Tránh lỗi nếu founders = null
  if (!founders) return null;

  const imageUrl = getImageUrl(founders?.image?.url);

  return (
    <section className="py-section-padding-v bg-white">
      <div className="px-[5vw] max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter-grid items-center">

        {/* Image */}
        <div className="order-2 md:order-1">
          <div className="relative">
            <div className="aspect-square bg-navy-deep rounded-sm overflow-hidden border-[12px] border-white shadow-xl">
              {imageUrl && (
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src={imageUrl}
                  alt={
                    founders.image?.alternativeText ||
                    founders.heading?.title ||
                    "Founder"
                  }
                />
              )}
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 staff-lines opacity-40"></div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <span className="font-label-md text-label-md uppercase tracking-[0.3em] text-gold-light mb-4 block">
            {founders.heading?.tag}
          </span>

          <h2
            className="font-headline-lg text-headline-lg text-primary mb-6"
            dangerouslySetInnerHTML={{
              __html: founders.heading?.title || "",
            }}
          />

          {founders.heading?.showsub &&
            founders.heading?.sub && (
              <p className="font-body-lg text-body-lg text-text-mid mb-8">
                {founders.heading.sub}
              </p>
            )}

          {founders.heading?.tracking && (
            <div className="flex gap-6 items-center">
              <div className="w-16 h-[1px] bg-gold-light"></div>

              <p className="font-label-md text-label-md uppercase tracking-widest text-navy-deep font-bold">
                {founders.heading.tracking}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}