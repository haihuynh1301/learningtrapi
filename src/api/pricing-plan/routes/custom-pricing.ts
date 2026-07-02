export default {
  routes: [
    {
      method: "GET",
      path: "/pricing-plan-full",
      handler: "pricing-plan.full",
      config: {
        auth: false,
      },
    },
  ],
};