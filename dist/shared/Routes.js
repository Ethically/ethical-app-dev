'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _root = require('ethical/react/root');

var _root2 = _interopRequireDefault(_root);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactHelmet = require('react-helmet');

var _App = require('./components/App.js');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _root2.default,
    null,
    _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
            'title',
            null,
            'Default Title!'
        ),
        _react2.default.createElement('meta', { name: 'description', content: 'Default Description' })
    ),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/&', component: _App2.default })
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvUm91dGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O2tCQUdJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUVJLGdEQUFNLE1BQUssYUFBWCxFQUF5QixTQUFRLHFCQUFqQztBQUZKLEtBREo7QUFLSSwyREFBTyxXQUFQLEVBQWEsTUFBSyxJQUFsQixFQUF1Qix3QkFBdkI7QUFMSixDIiwiZmlsZSI6InNyYy9zaGFyZWQvUm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm9vdCBmcm9tICdldGhpY2FsL3JlYWN0L3Jvb3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAuanMnXG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgICA8Um9vdD5cbiAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgIDx0aXRsZT5EZWZhdWx0IFRpdGxlITwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRGVmYXVsdCBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDwvSGVsbWV0PlxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi8mXCIgY29tcG9uZW50PXtBcHB9Lz5cbiAgICA8L1Jvb3Q+XG4pXG4iXX0=