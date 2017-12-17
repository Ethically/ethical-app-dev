'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isNode = require('ethical/helper/is-node');

var _isNode2 = _interopRequireDefault(_isNode);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket = function socket(Component) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { port: 9292 };

    var Socket = function (_React$Component) {
        _inherits(Socket, _React$Component);

        function Socket() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, Socket);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Socket.__proto__ || Object.getPrototypeOf(Socket)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                io: null
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(Socket, [{
            key: 'startSocket',
            value: function startSocket() {
                var _this2 = this;

                if ((0, _isNode2.default)()) {
                    return;
                }
                var io = (0, _socket2.default)();
                io.on('connect', function () {
                    _this2.setState({ io: io });
                });
            }
        }, {
            key: 'componentWillMount',
            value: function componentWillMount() {
                this.startSocket();
            }
        }, {
            key: 'render',
            value: function render() {
                var io = this.state.io;

                if (!io) {
                    return _react2.default.createElement(
                        'socket-loading',
                        null,
                        'Loading socket!!'
                    );
                }
                return _react2.default.createElement(Component, Object.assign({}, this.props, { io: io }));
            }
        }]);

        return Socket;
    }(_react2.default.Component);

    return Socket;
};

exports.default = socket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmNicmF1bGlvL1Byb2plY3RzL2V0aGljYWwvYXBwL2Rldi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvaGlnaGVyb3JkZXIvc29ja2V0LmpzIl0sIm5hbWVzIjpbInNvY2tldCIsIkNvbXBvbmVudCIsImNvbmZpZyIsInBvcnQiLCJTb2NrZXQiLCJzdGF0ZSIsImlvIiwib24iLCJzZXRTdGF0ZSIsInN0YXJ0U29ja2V0IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxTQUFELEVBQXdDO0FBQUEsUUFBNUJDLE1BQTRCLHVFQUFuQixFQUFFQyxNQUFNLElBQVIsRUFBbUI7O0FBQUEsUUFFN0NDLE1BRjZDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOExBRy9DQyxLQUgrQyxHQUd2QztBQUNKQyxvQkFBSTtBQURBLGFBSHVDO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDBDQU1qQztBQUFBOztBQUNWLG9CQUFJLHVCQUFKLEVBQWM7QUFDVjtBQUNIO0FBQ0Qsb0JBQU1BLEtBQUssdUJBQVg7QUFDQUEsbUJBQUdDLEVBQUgsQ0FBTSxTQUFOLEVBQWlCLFlBQU07QUFDbkIsMkJBQUtDLFFBQUwsQ0FBYyxFQUFFRixNQUFGLEVBQWQ7QUFDSCxpQkFGRDtBQUdIO0FBZDhDO0FBQUE7QUFBQSxpREFlMUI7QUFDakIscUJBQUtHLFdBQUw7QUFDSDtBQWpCOEM7QUFBQTtBQUFBLHFDQWtCdEM7QUFBQSxvQkFDR0gsRUFESCxHQUNVLEtBQUtELEtBRGYsQ0FDR0MsRUFESDs7QUFFTCxvQkFBSSxDQUFDQSxFQUFMLEVBQVM7QUFDTCwyQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0g7QUFDRCx1QkFBTyw4QkFBQyxTQUFELG9CQUFxQixLQUFLSSxLQUExQixJQUFpQ0osTUFBakMsSUFBUDtBQUNIO0FBeEI4Qzs7QUFBQTtBQUFBLE1BRTlCLGdCQUFNTCxTQUZ3Qjs7QUEyQm5ELFdBQU9HLE1BQVA7QUFDSCxDQTVCRDs7a0JBOEJlSixNIiwiZmlsZSI6Ii9ob21lL21hcmNicmF1bGlvL1Byb2plY3RzL2V0aGljYWwvYXBwL2Rldi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvaGlnaGVyb3JkZXIvc29ja2V0LmpzIiwic291cmNlUm9vdCI6Ii4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgaXNOb2RlIGZyb20gJ2V0aGljYWwvaGVscGVyL2lzLW5vZGUnXG5pbXBvcnQgc29ja2V0SU8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcblxuY29uc3Qgc29ja2V0ID0gKENvbXBvbmVudCwgY29uZmlnID0geyBwb3J0OiA5MjkyIH0pID0+IHtcblxuICAgIGNsYXNzIFNvY2tldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgaW86IG51bGxcbiAgICAgICAgfVxuICAgICAgICBzdGFydFNvY2tldCgpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUoKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW8gPSBzb2NrZXRJTygpXG4gICAgICAgICAgICBpby5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW8gfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFNvY2tldCgpXG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgeyBpbyB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAgICAgaWYgKCFpbykge1xuICAgICAgICAgICAgICAgIHJldHVybiA8c29ja2V0LWxvYWRpbmc+TG9hZGluZyBzb2NrZXQhITwvc29ja2V0LWxvYWRpbmc+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7IC4uLnsgLi4udGhpcy5wcm9wcywgaW8gfSB9IC8+XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gU29ja2V0XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNvY2tldFxuIl19