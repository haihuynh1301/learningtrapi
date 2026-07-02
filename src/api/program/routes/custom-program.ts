export default {
  routes: [
    {
      method: "GET",
      path: "/program-full",
      handler: "program.getFull",
      config: {
        auth: false,
      },
    },
  ],
};