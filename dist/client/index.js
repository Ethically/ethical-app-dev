'use strict';

require('core-js/modules/es6.typed.array-buffer');

require('core-js/modules/es6.typed.int8-array');

require('core-js/modules/es6.typed.uint8-array');

require('core-js/modules/es6.typed.uint8-clamped-array');

require('core-js/modules/es6.typed.int16-array');

require('core-js/modules/es6.typed.uint16-array');

require('core-js/modules/es6.typed.int32-array');

require('core-js/modules/es6.typed.uint32-array');

require('core-js/modules/es6.typed.float32-array');

require('core-js/modules/es6.typed.float64-array');

require('core-js/modules/es6.map');

require('core-js/modules/es6.set');

require('core-js/modules/es6.weak-map');

require('core-js/modules/es6.weak-set');

require('core-js/modules/es6.reflect.apply');

require('core-js/modules/es6.reflect.construct');

require('core-js/modules/es6.reflect.define-property');

require('core-js/modules/es6.reflect.delete-property');

require('core-js/modules/es6.reflect.get');

require('core-js/modules/es6.reflect.get-own-property-descriptor');

require('core-js/modules/es6.reflect.get-prototype-of');

require('core-js/modules/es6.reflect.has');

require('core-js/modules/es6.reflect.is-extensible');

require('core-js/modules/es6.reflect.own-keys');

require('core-js/modules/es6.reflect.prevent-extensions');

require('core-js/modules/es6.reflect.set');

require('core-js/modules/es6.reflect.set-prototype-of');

require('core-js/modules/es6.promise');

require('core-js/modules/es6.symbol');

require('core-js/modules/es6.object.freeze');

require('core-js/modules/es6.object.seal');

require('core-js/modules/es6.object.prevent-extensions');

require('core-js/modules/es6.object.is-frozen');

require('core-js/modules/es6.object.is-sealed');

require('core-js/modules/es6.object.is-extensible');

require('core-js/modules/es6.object.get-own-property-descriptor');

require('core-js/modules/es6.object.get-prototype-of');

require('core-js/modules/es6.object.keys');

require('core-js/modules/es6.object.get-own-property-names');

require('core-js/modules/es6.object.assign');

require('core-js/modules/es6.object.is');

require('core-js/modules/es6.function.name');

require('core-js/modules/es6.string.raw');

require('core-js/modules/es6.string.from-code-point');

require('core-js/modules/es6.string.code-point-at');

require('core-js/modules/es6.string.repeat');

require('core-js/modules/es6.string.starts-with');

require('core-js/modules/es6.string.ends-with');

require('core-js/modules/es6.string.includes');

require('core-js/modules/es6.regexp.flags');

require('core-js/modules/es6.regexp.match');

require('core-js/modules/es6.regexp.replace');

require('core-js/modules/es6.regexp.split');

require('core-js/modules/es6.regexp.search');

require('core-js/modules/es6.array.from');

require('core-js/modules/es6.array.of');

require('core-js/modules/es6.array.copy-within');

require('core-js/modules/es6.array.find');

require('core-js/modules/es6.array.find-index');

require('core-js/modules/es6.array.fill');

require('core-js/modules/es6.array.iterator');

require('core-js/modules/es6.number.is-finite');

require('core-js/modules/es6.number.is-integer');

require('core-js/modules/es6.number.is-safe-integer');

require('core-js/modules/es6.number.is-nan');

require('core-js/modules/es6.number.epsilon');

require('core-js/modules/es6.number.min-safe-integer');

require('core-js/modules/es6.number.max-safe-integer');

require('core-js/modules/es6.math.acosh');

require('core-js/modules/es6.math.asinh');

require('core-js/modules/es6.math.atanh');

require('core-js/modules/es6.math.cbrt');

require('core-js/modules/es6.math.clz32');

require('core-js/modules/es6.math.cosh');

require('core-js/modules/es6.math.expm1');

require('core-js/modules/es6.math.fround');

require('core-js/modules/es6.math.hypot');

require('core-js/modules/es6.math.imul');

require('core-js/modules/es6.math.log1p');

require('core-js/modules/es6.math.log10');

require('core-js/modules/es6.math.log2');

require('core-js/modules/es6.math.sign');

require('core-js/modules/es6.math.sinh');

require('core-js/modules/es6.math.tanh');

require('core-js/modules/es6.math.trunc');

require('core-js/modules/es7.array.includes');

require('core-js/modules/es7.object.values');

require('core-js/modules/es7.object.entries');

require('core-js/modules/es7.object.get-own-property-descriptors');

require('core-js/modules/es7.string.pad-start');

require('core-js/modules/es7.string.pad-end');

require('core-js/modules/web.timers');

require('core-js/modules/web.immediate');

require('core-js/modules/web.dom.iterable');

require('regenerator-runtime/runtime');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = require('redux');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _isNode = require('ethical/helper/is-node');

var _isNode2 = _interopRequireDefault(_isNode);

var _index = require('../shared/reducers/index.js');

var _index2 = _interopRequireDefault(_index);

var _Routes = require('../shared/Routes.js');

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render() {

    if ((0, _isNode2.default)()) {
        return;
    }

    var reducers = (0, _redux.combineReducers)(_index2.default);
    var store = (0, _redux.createStore)(reducers, window.state, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    _reactDom2.default.render(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            null,
            _Routes2.default
        )
    ), document.querySelector('ethical-root'));
};

render();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvaW5kZXguanMiXSwibmFtZXMiOlsicmVuZGVyIiwicmVkdWNlcnMiLCJzdG9yZSIsIndpbmRvdyIsInN0YXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxHQUFNOztBQUVqQixRQUFJLHVCQUFKLEVBQWM7QUFDVjtBQUNIOztBQUVELFFBQU1DLFdBQVcsNENBQWpCO0FBQ0EsUUFBTUMsUUFBUSx3QkFBWUQsUUFBWixFQUFzQkUsT0FBT0MsS0FBN0IsRUFBb0MsaURBQXBDLENBQWQ7O0FBRUEsdUJBQVNKLE1BQVQsQ0FDSTtBQUFBO0FBQUEsVUFBVSxPQUFPRSxLQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixLQURKLEVBTUlHLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FOSjtBQVFILENBakJEOztBQW1CQU4iLCJmaWxlIjoic3JjL2NsaWVudC9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIuIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgaXNOb2RlIGZyb20gJ2V0aGljYWwvaGVscGVyL2lzLW5vZGUnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9zaGFyZWQvcmVkdWNlcnMvaW5kZXguanMnXG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL3NoYXJlZC9Sb3V0ZXMuanMnXG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcblxuICAgIGlmIChpc05vZGUoKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VyKVxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHdpbmRvdy5zdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcblxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICB7Um91dGVzfVxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPixcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZXRoaWNhbC1yb290JylcbiAgICApXG59XG5cbnJlbmRlcigpXG4iXX0=