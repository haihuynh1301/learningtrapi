console.log("✅ custom-blog.ts loaded");

export default {
  routes: [
    {
      method: "GET",
      path: "/blogs/test-route",
      handler: "blog.find",
      config: {
        auth: false,
      },
    },
  ],
};