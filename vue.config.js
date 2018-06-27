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
                    routes: ['/', '/about'],
                    // This allows other renderers to be implemented with a
                    // subset or superset of features.
                    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
                        args: ['--no-sandbox', '--disable-setuid-sandbox']
                    })
                })
            ]
        };
    }
};
