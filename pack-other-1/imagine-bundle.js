const modules = {
  'circle.js': function (exports, require) {
    const PI = 3.141;
    exports.default = function area(radius) {
      return PI * radius * radius;
    };
  },
  'square.js': function (exports, require) {
    exports.default = function area(side) {
      return side * side;
    };
  },
  'app.js': function (exports, require) {
    const squareArea = require('square.js').default;
    const circleArea = require('circle.js').default;
    console.log('Area of square: ', squareArea(5));
    console.log('Area of circle', circleArea(5));
  }
};
webpackBundle({
  modules,
  entry: 'app.js'
});
