"use client";

import { useState } from "react";

type Props = {
  faqs: any;
};

export default function Faqs({ faqs }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (
    <section id="faq">
      <div className="faq-container">
        <div className="faq-header fade-in">
          <div className="section-tag">
            {faqs.heading.tag}
          </div>

          <h2
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: faqs.heading.title,
            }}
          />

          {faqs.heading.showsub &&
            faqs.heading.sub && (
              <p className="section-sub">
                {faqs.heading.sub}
              </p>
            )}
        </div>

        {faqs.item.map(
          (item: any, index: number) => {
            const isActive =
              activeIndex === index;

            return (
              <div
                key={item.id}
                className={`faq-item fade-in ${
                  isActive
                    ? "faq-item--active"
                    : ""
                }`}
              >
                <button
                  className={`faq-question ${
                    isActive
                      ? "faq-question--active"
                      : ""
                  }`}
                  onClick={() =>
                    toggleFaq(index)
                  }
                >
                  <span>
                    {item.text}
                  </span>

                  <span
                    className={`faq-icon ${
                      isActive
                        ? "faq-icon--active"
                        : ""
                    }`}
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`faq-answer ${
                    isActive
                      ? "faq-answer--active"
                      : ""
                  }`}
                >
                  {item.description}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}