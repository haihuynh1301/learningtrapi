export default {
  async getHomepage() {
    return await strapi.documents(
      "api::homepage.homepage"
    ).findFirst({
      populate: {
        header: {
          populate: "*",
        },

        heroSection: {
          populate: "*",
        },

        storySection: {
          populate: "*",
        },

        programs: {
          populate: "*",
        },

        technique: {
          populate: "*",
        },

        instructors: {
          populate: "*",
        },

        process: {
          populate: "*",
        },

        testimonials: {
          populate: {
            heading: true,

            quotes: {
              populate: {
                author: true,
              },
            },
          },
        },

        pricing: {
          populate: {
            heading: true,

            cards: {
              populate: {
                headingcard: true,
                featureitems: true,
                button: true,
              },
            },
          },
        },

        faqs: {
          populate: "*",
        },

        banner: {
          populate: "*",
        },

        contact: {
          populate: "*",
        },

        footer: {
          populate: {
            logo: {
              populate: {
                image: true,
              },
            },

            item: {
              populate: {
                items: true,
              },
            },
          },
        },
      },
    });
  },
};