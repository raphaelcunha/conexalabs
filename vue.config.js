// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/stylesheets/_variables.scss";`,
      },
    },
  },
};
