"use client";

import { useState } from "react";

interface PricingQuestionProps {
  question: any;
}

export default function PricingQuestion({
  question,
}: PricingQuestionProps) {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  if (!question) return null;

  return (
    <section className="pricing-question px-[5vw] mb-section-padding-v">
      <div className="max-w-3xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <span className="text-gold-light font-label-md uppercase tracking-[0.2em]">
            {question.heading?.tag}
          </span>

          <div className="h-[1px] w-12 bg-gold-light/40"></div>
        </div>

        <h2 className="font-headline-lg text-headline-lg mb-12">
          {question.heading?.title}
        </h2>

        <div className="space-y-6">
          {question.item?.map(
            (faq: any, index: number) => (
              <div
                key={faq.id}
                className="border-b border-cream-dark pb-6"
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index
                        ? null
                        : index
                    )
                  }
                >
                  <span className="font-headline-md">
                    {faq.text}
                  </span>

                  <span
                    className={`material-symbols-outlined arrow transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                <div
                  className={`mt-4 text-on-surface-variant font-body-sm leading-relaxed ${
                    openIndex === index
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {faq.description}
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}