export default (config, { strapi }) => {
  return async (ctx, next) => {

    console.log(
      `[${new Date().toISOString()}] ${ctx.method} ${ctx.url}`
    );

    await next();
  };
};