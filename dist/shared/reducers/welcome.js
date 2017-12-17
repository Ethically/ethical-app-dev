'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var welcome = function welcome() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'SET_GREETING':
            return action.payload;
        default:
            return state;
    }
};

exports.default = welcome;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvcmVkdWNlcnMvd2VsY29tZS5qcyJdLCJuYW1lcyI6WyJ3ZWxjb21lIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsR0FBMEI7QUFBQSxRQUF6QkMsS0FBeUIsdUVBQWpCLElBQWlCO0FBQUEsUUFBWEMsTUFBVzs7QUFDdEMsWUFBUUEsT0FBT0MsSUFBZjtBQUNJLGFBQUssY0FBTDtBQUNJLG1CQUFPRCxPQUFPRSxPQUFkO0FBQ0o7QUFDSSxtQkFBT0gsS0FBUDtBQUpSO0FBTUgsQ0FQRDs7a0JBU2VELE8iLCJmaWxlIjoic3JjL3NoYXJlZC9yZWR1Y2Vycy93ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii4iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3ZWxjb21lID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVRfR1JFRVRJTkcnOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlbGNvbWVcbiJdfQ==