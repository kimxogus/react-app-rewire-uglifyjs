# react-app-rewire-uglifyjs

[![npm version][npm-image]][npm-url]
[![npm downloads][downloads-image]][downloads-url]

[create-react-app](https://github.com/facebook/create-react-app) doesn't support tree-shaking because [it uses webpack's builtin uglifyjs plugin](https://github.com/facebook/create-react-app/blob/v1.1.4/packages/react-scripts/config/webpack.config.prod.js#L293). This library will replace it with [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) and enable tree shaking to your cra project!

# Install

```bash
$ yarn add react-app-rewire-uglifyjs --dev
or
$ npm install --only=dev react-app-rewire-uglifyjs
```

# Add it to your project

1. [Rewire your app](https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project)
2. modify `config-overrides.js`

```javascript
const rewireUglifyjs = require('react-app-rewire-uglifyjs');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireUglifyjs(config);
  return config;
}
```

[npm-image]: https://img.shields.io/npm/v/react-app-rewire-uglifyjs.svg
[npm-url]: https://npmjs.org/package/react-app-rewire-uglifyjs
[downloads-image]: https://img.shields.io/npm/dm/react-app-rewire-uglifyjs.svg
[downloads-url]: https://npmjs.org/package/react-app-rewire-uglifyjs