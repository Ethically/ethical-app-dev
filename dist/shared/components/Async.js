'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _promise = require('ethical/react/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Async = function Async(_ref) {
    var promise = _ref.promise,
        dispatch = _ref.dispatch,
        welcome = _ref.welcome;


    if (welcome) return _react2.default.createElement(
        'greeting',
        null,
        welcome
    );

    promise(Promise.resolve('Hello World!')).then(function (response) {
        dispatch({
            type: 'SET_GREETING',
            payload: 'Welcome to the Ethical framework!'
        });
    }).catch(function (e) {
        return console.error(e);
    });

    return _react2.default.createElement(
        'greeting',
        null,
        'Loading greeting...'
    );
};

var mapStateToProps = function mapStateToProps(_ref2) {
    var welcome = _ref2.welcome;
    return { welcome: welcome };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _promise2.default)(Async));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvY29tcG9uZW50cy9Bc3luYy5qcyJdLCJuYW1lcyI6WyJBc3luYyIsInByb21pc2UiLCJkaXNwYXRjaCIsIndlbGNvbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJ0eXBlIiwicGF5bG9hZCIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwiZSIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxTQUFSQSxLQUFRLE9BQW9DO0FBQUEsUUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLFFBQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxRQUFkQyxPQUFjLFFBQWRBLE9BQWM7OztBQUU5QyxRQUFJQSxPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBV0E7QUFBWCxLQUFQOztBQUViRixZQUFRRyxRQUFRQyxPQUFSLENBQWdCLGNBQWhCLENBQVIsRUFDQ0MsSUFERCxDQUNNLG9CQUFZO0FBQ2RKLGlCQUFTO0FBQ0xLLGtCQUFNLGNBREQ7QUFFTEMscUJBQVM7QUFGSixTQUFUO0FBSUgsS0FORCxFQU9DQyxLQVBELENBT087QUFBQSxlQUFLQyxRQUFRQyxLQUFSLENBQWNDLENBQWQsQ0FBTDtBQUFBLEtBUFA7O0FBU0EsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDSCxDQWREOztBQWdCQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsUUFBR1YsT0FBSCxTQUFHQSxPQUFIO0FBQUEsV0FBa0IsRUFBRUEsZ0JBQUYsRUFBbEI7QUFBQSxDQUF4Qjs7a0JBRWUseUJBQVFVLGVBQVIsRUFBeUIsdUJBQVFiLEtBQVIsQ0FBekIsQyIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvQXN5bmMuanMiLCJzb3VyY2VSb290IjoiLiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBwcm9taXNlIGZyb20gJ2V0aGljYWwvcmVhY3QvcHJvbWlzZSdcblxuY29uc3QgQXN5bmMgPSAoeyBwcm9taXNlLCBkaXNwYXRjaCwgd2VsY29tZSB9KSA9PiB7XG5cbiAgICBpZiAod2VsY29tZSkgcmV0dXJuIDxncmVldGluZz57d2VsY29tZX08L2dyZWV0aW5nPlxuXG4gICAgcHJvbWlzZShQcm9taXNlLnJlc29sdmUoJ0hlbGxvIFdvcmxkIScpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9HUkVFVElORycsXG4gICAgICAgICAgICBwYXlsb2FkOiAnV2VsY29tZSB0byB0aGUgRXRoaWNhbCBmcmFtZXdvcmshJ1xuICAgICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSlcblxuICAgIHJldHVybiA8Z3JlZXRpbmc+TG9hZGluZyBncmVldGluZy4uLjwvZ3JlZXRpbmc+XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHdlbGNvbWUgfSkgPT4gKHsgd2VsY29tZSB9KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykocHJvbWlzZShBc3luYykpXG4iXX0=