module.exports = {
  css: {
    loaderOptions: {
      sass: {
            prependData: `
                @import "@/assets/scss/_font-variables.scss";
                @import "@/assets/scss/_colors.scss";
                `
      }
    }
  },
}