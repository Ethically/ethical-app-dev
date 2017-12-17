'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var title = _ref.title,
        meta = _ref.meta,
        link = _ref.link,
        html = _ref.html,
        body = _ref.body,
        root = _ref.root,
        scripts = _ref.scripts;
    return _react2.default.createElement(
        'html',
        html,
        _react2.default.createElement(
            'head',
            null,
            title,
            meta,
            link
        ),
        _react2.default.createElement(
            'body',
            body,
            root,
            scripts
        )
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvTGF5b3V0LmpzIl0sIm5hbWVzIjpbInRpdGxlIiwibWV0YSIsImxpbmsiLCJodG1sIiwiYm9keSIsInJvb3QiLCJzY3JpcHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQUEsUUFBR0EsS0FBSCxRQUFHQSxLQUFIO0FBQUEsUUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsUUFBZ0JDLElBQWhCLFFBQWdCQSxJQUFoQjtBQUFBLFFBQXNCQyxJQUF0QixRQUFzQkEsSUFBdEI7QUFBQSxRQUE0QkMsSUFBNUIsUUFBNEJBLElBQTVCO0FBQUEsUUFBa0NDLElBQWxDLFFBQWtDQSxJQUFsQztBQUFBLFFBQXdDQyxPQUF4QyxRQUF3Q0EsT0FBeEM7QUFBQSxXQUNYO0FBQUE7QUFBVUgsWUFBVjtBQUNJO0FBQUE7QUFBQTtBQUNLSCxpQkFETDtBQUVLQyxnQkFGTDtBQUdLQztBQUhMLFNBREo7QUFNSTtBQUFBO0FBQVVFLGdCQUFWO0FBQ0tDLGdCQURMO0FBRUtDO0FBRkw7QUFOSixLQURXO0FBQUEsQyIsImZpbGUiOiJzcmMvc2hhcmVkL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIuIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAoeyB0aXRsZSwgbWV0YSwgbGluaywgaHRtbCwgYm9keSwgcm9vdCwgc2NyaXB0cyB9KSA9PiAoXG4gICAgPGh0bWwgey4uLmh0bWx9PlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIHttZXRhfVxuICAgICAgICAgICAge2xpbmt9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHkgey4uLmJvZHl9PlxuICAgICAgICAgICAge3Jvb3R9XG4gICAgICAgICAgICB7c2NyaXB0c31cbiAgICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbilcbiJdfQ==