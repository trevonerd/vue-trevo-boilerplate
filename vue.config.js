var PrerenderSpaPlugin = require('prerender-spa-plugin');
var path = require('path');

module.exports = {
    configureWebpack: (config) => {
        if (process.env.NODE_ENV !== 'production') return;

        return {
            plugins: [
                new PrerenderSpaPlugin({
                    // Required - The path to the webpack-outputted app to prerender.
                    staticDir: path.join(__dirname, 'dist'),
                    // Required - Routes to render.
                    routes: ['/', '/about']
                })
            ]
        };
    }
};
