module.exports = {
  plugins: {
    'postcss-mixins': {
      mixins: { 
        ...require('postcss-mixins-css-grid').default()
      },
    },
    'postcss-preset-env': {
      stage: 0,
    },
    autoprefixer: {},
  },
};
