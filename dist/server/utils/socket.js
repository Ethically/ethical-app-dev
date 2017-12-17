'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const startSocket = server => {
    const io = (0, _socket2.default)(server);
    console.log('Trying to connect...');
    return new Promise(resolve => {
        console.log('Server Socket Connected!');
        io.on('connection', () => resolve(io));
    });
};

exports.default = startSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2ZXIvdXRpbHMvc29ja2V0LmpzIl0sIm5hbWVzIjpbInN0YXJ0U29ja2V0Iiwic2VydmVyIiwiaW8iLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLGNBQWVDLE1BQUQsSUFBWTtBQUM1QixVQUFNQyxLQUFLLHNCQUFTRCxNQUFULENBQVg7QUFDQUUsWUFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0EsV0FBTyxJQUFJQyxPQUFKLENBQVlDLFdBQVc7QUFDMUJILGdCQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDQUYsV0FBR0ssRUFBSCxDQUFNLFlBQU4sRUFBb0IsTUFBTUQsUUFBUUosRUFBUixDQUExQjtBQUNILEtBSE0sQ0FBUDtBQUlILENBUEQ7O2tCQVNlRixXIiwiZmlsZSI6InNyYy9zZXJ2ZXIvdXRpbHMvc29ja2V0LmpzIiwic291cmNlUm9vdCI6Ii4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0SU8gZnJvbSAnc29ja2V0LmlvJ1xuXG5jb25zdCBzdGFydFNvY2tldCA9IChzZXJ2ZXIpID0+IHtcbiAgICBjb25zdCBpbyA9IHNvY2tldElPKHNlcnZlcilcbiAgICBjb25zb2xlLmxvZygnVHJ5aW5nIHRvIGNvbm5lY3QuLi4nKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NlcnZlciBTb2NrZXQgQ29ubmVjdGVkIScpXG4gICAgICAgIGlvLm9uKCdjb25uZWN0aW9uJywgKCkgPT4gcmVzb2x2ZShpbykpXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhcnRTb2NrZXRcbiJdfQ==