const { getBabelLoader } = require("react-app-rewired");
const rewireUglifyjs = require("./index");

module.exports = function override(config, env) {
  getBabelLoader(config.module.rules).options.presets = [
    "react-app",
    [
      "env",
      {
        // @see https://alexjoverm.github.io/2017/03/06/Tree-shaking-with-Webpack-2-TypeScript-and-Babel/#2-Use-ES2015-modules-in-Babel
        modules: false
      }
    ]
  ];

  // if you comment this out, build will fail!
  config = rewireUglifyjs(config);

  return config;
};
