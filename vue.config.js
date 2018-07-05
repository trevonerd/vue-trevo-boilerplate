const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PrerenderSpaPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, 'dist'),
            // Required - Routes to render.
            routes: ['/', '/about'],
          }),
        ],
      };
    }

    return true;
  },
};
