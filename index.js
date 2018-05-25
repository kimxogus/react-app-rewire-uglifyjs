const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

function rewireUglifyjs(config) {
  config.plugins = config.plugins.map(function(p) {
    if (
      p.options &&
      p.options.compress &&
      p.options.mangle &&
      p.options.output
    ) {
      // @see https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/config/webpack.config.prod.js#L119
      p = new UglifyjsWebpackPlugin({
        uglifyOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: p.options.sourceMap
      });
    }
    return p;
  });

  return config;
}

module.exports = rewireUglifyjs;
