'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _socket = require('../../../browser/utils/socket.js');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocketIO = function SocketIO(_ref) {
    var dispatch = _ref.dispatch,
        socket = _ref.socket;
    var connected = socket.connected;


    if (connected) {
        return _react2.default.createElement(
            'connected',
            null,
            'YES'
        );
    }

    if (!isNode()) {

        (0, _socket2.default)().then(function (response) {
            dispatch({
                type: 'SOCKET_CONNECTED',
                payload: true
            });
        }).catch(function (e) {
            return console.error(e);
        });
    }

    return _react2.default.createElement(
        'connected',
        null,
        'NO'
    );
};

var mapStateToProps = function mapStateToProps(_ref2) {
    var socket = _ref2.socket;
    return { socket: socket };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(SocketIO);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvY29tcG9uZW50cy9jb250YWluZXIvc29ja2V0LWlvLmpzIl0sIm5hbWVzIjpbIlNvY2tldElPIiwiZGlzcGF0Y2giLCJzb2NrZXQiLCJjb25uZWN0ZWQiLCJpc05vZGUiLCJ0aGVuIiwidHlwZSIsInBheWxvYWQiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImUiLCJtYXBTdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxPQUEwQjtBQUFBLFFBQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFBQSxRQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFBQSxRQUUvQkMsU0FGK0IsR0FFakJELE1BRmlCLENBRS9CQyxTQUYrQjs7O0FBSXZDLFFBQUlBLFNBQUosRUFBZTtBQUNYLGVBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQO0FBQ0g7O0FBRUQsUUFBSSxDQUFDQyxRQUFMLEVBQWU7O0FBRVgsZ0NBQ0NDLElBREQsQ0FDTSxvQkFBWTtBQUNkSixxQkFBUztBQUNMSyxzQkFBTSxrQkFERDtBQUVMQyx5QkFBUztBQUZKLGFBQVQ7QUFJSCxTQU5ELEVBT0NDLEtBUEQsQ0FPTztBQUFBLG1CQUFLQyxRQUFRQyxLQUFSLENBQWNDLENBQWQsQ0FBTDtBQUFBLFNBUFA7QUFRSDs7QUFFRCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtBQUNILENBckJEOztBQXVCQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsUUFBR1YsTUFBSCxTQUFHQSxNQUFIO0FBQUEsV0FBaUIsRUFBRUEsY0FBRixFQUFqQjtBQUFBLENBQXhCOztrQkFFZSx5QkFBUVUsZUFBUixFQUF5QlosUUFBekIsQyIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvY29udGFpbmVyL3NvY2tldC1pby5qcyIsInNvdXJjZVJvb3QiOiIuIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0YXJ0U29ja2V0IGZyb20gJy4uLy4uLy4uL2Jyb3dzZXIvdXRpbHMvc29ja2V0LmpzJ1xuXG5jb25zdCBTb2NrZXRJTyA9ICh7IGRpc3BhdGNoLCBzb2NrZXQgfSkgPT4ge1xuXG4gICAgY29uc3QgeyBjb25uZWN0ZWQgfSA9IHNvY2tldFxuXG4gICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm4gPGNvbm5lY3RlZD5ZRVM8L2Nvbm5lY3RlZD5cbiAgICB9XG5cbiAgICBpZiAoIWlzTm9kZSgpKSB7XG4gICAgICAgIFxuICAgICAgICBzdGFydFNvY2tldCgpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU09DS0VUX0NPTk5FQ1RFRCcsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gPGNvbm5lY3RlZD5OTzwvY29ubmVjdGVkPlxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzb2NrZXQgfSkgPT4gKHsgc29ja2V0IH0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTb2NrZXRJTylcbiJdfQ==