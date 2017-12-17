'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var startSocket = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(server) {
        var io;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        io = (0, _socket2.default)(server);
                        _context.next = 3;
                        return new Promise(function (resolve) {
                            io.on('connection', function (server) {
                                return resolve({ io: io, server: server });
                            });
                        });

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function startSocket(_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = startSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jbGllbnQvdXRpbHMvc29ja2V0LmpzIl0sIm5hbWVzIjpbInN0YXJ0U29ja2V0Iiwic2VydmVyIiwiaW8iLCJQcm9taXNlIiwib24iLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQTtBQUFBLHVFQUFjLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWQywwQkFEVSxHQUNMLHNCQUFPRCxNQUFQLENBREs7QUFBQTtBQUFBLCtCQUVWLElBQUlFLE9BQUosQ0FBWSxtQkFBVztBQUN6QkQsK0JBQUdFLEVBQUgsQ0FBTSxZQUFOLEVBQW9CLFVBQUNILE1BQUQ7QUFBQSx1Q0FBWUksUUFBUSxFQUFFSCxNQUFGLEVBQU1ELGNBQU4sRUFBUixDQUFaO0FBQUEsNkJBQXBCO0FBQ0gseUJBRkssQ0FGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O2tCQU9lRCxXIiwiZmlsZSI6InNyYy9jbGllbnQvdXRpbHMvc29ja2V0LmpzIiwic291cmNlUm9vdCI6Ii4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cbmNvbnN0IHN0YXJ0U29ja2V0ID0gYXN5bmMgKHNlcnZlcikgPT4ge1xuICAgIGNvbnN0IGlvID0gc29ja2V0KHNlcnZlcilcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgaW8ub24oJ2Nvbm5lY3Rpb24nLCAoc2VydmVyKSA9PiByZXNvbHZlKHsgaW8sIHNlcnZlciB9KSlcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFydFNvY2tldFxuIl19