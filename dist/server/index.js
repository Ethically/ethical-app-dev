'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _exit = require('ethical/helper/exit');

var _server = require('ethical/server');

var _server2 = _interopRequireDefault(_server);

var _static = require('ethical/server/static');

var _static2 = _interopRequireDefault(_static);

var _supplier = require('ethical/server/supplier');

var _supplier2 = _interopRequireDefault(_supplier);

var _reactRedux = require('ethical/server/react-redux');

var _reactRedux2 = _interopRequireDefault(_reactRedux);

var _uws = require('uws');

var _uws2 = _interopRequireDefault(_uws);

var _httpProxy = require('http-proxy');

var _httpProxy2 = _interopRequireDefault(_httpProxy);

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const retry = `
    <html>
        <head>
            <title>Ethical Dev Server</title>
        </head>
        <body>
            <div>Could not restart App server.</div>
            <div>Please check the logs for errors.</div>
            <div id="status">
                Refreshing in <span id="seconds">5</span> seconds...
            </div>
            <script>
                const element = document.getElementById('seconds')
                let seconds = 5
                const interval = setInterval(() => {
                    if (seconds === 0) {
                        const status = document.getElementById('status')
                        status.textContent = 'Checking server status again...'
                        clearInterval(interval)
                        return location.reload()
                    }
                    element.textContent = --seconds
                }, 1000)
            </script>
        </body>
    </html>
`;

const log = _bunyan2.default.createLogger({
    name: 'ethical-app-dev'
});

const state = {
    serving: false,
    timeoutDelays: [],
    promiseDelays: [],
    resolveDelay: () => {
        state.timeoutDelays.forEach(timeout => {
            clearTimeout(timeout);
        });
        state.promiseDelays.forEach(resolve => {
            resolve(resolve);
        });
        state.timeoutDelays = [];
        state.promiseDelays = [];
    }
};

const target = 'http://localhost:9191';
const proxy = _httpProxy2.default.createProxyServer({ target });
const handleError = (e, req, res) => {
    res.writeHead(500, {
        'Content-Type': 'text/html'
    });
    res.end(retry);
    res.reject(e);
};

proxy.on('error', handleError);

const delay = (req, res) => milliseconds => new Promise((resolve, reject) => {
    state.timeoutDelays.push(setTimeout(() => {
        res.reject = reject;
        handleError(new Error('Server still has not started!'), req, res);
    }, milliseconds));
    state.promiseDelays.push(resolve);
});

const tryAppServer = async (req, res) => {

    if (!state.serving) {
        try {
            await delay(req, res)(5000);
        } catch (e) {
            return;
        }
    }

    const resEnd = res.end;

    await new Promise((resolve, reject) => {
        res.end = (...args) => {
            resEnd.call(res, ...args);
            resolve();
        };
        res.reject = reject;
        proxy.web(req, res);
    });
};

const startSocket = () => new Promise((resolve, reject) => {
    const io = new _uws2.default('ws://localhost:9393');
    io.on('open', () => resolve(io));
    io.on('error', reject);
});

exports.default = startSocket().then(io => {
    io.on('message', message => {
        if (message === 'SERVER_START') {
            state.serving = true;
            state.resolveDelay();
        }
        if (message === 'SERVER_STOP') {
            state.serving = false;
        }
    });
}).catch(e => log.error(e)).then(() => (0, _server2.default)({ port: 9292 }).use(async (ctx, next) => {

    const { req, res, path, querystring: query } = ctx;
    const referer = ctx.get('Referer');
    const { pathname: refererPath } = _url2.default.parse(referer);

    if (path === '/&' || refererPath === '/&') {
        return await next();
    }

    try {
        await tryAppServer(req, res);
    } catch (e) {
        log.error(e);
    }
}).use((0, _static2.default)()).use((0, _supplier2.default)({ main: 'dist/client' })).use((0, _reactRedux2.default)({
    routes: 'dist/shared/Routes.js',
    layout: 'dist/shared/Layout.js',
    reducers: 'dist/shared/reducers'
})).listen()).catch(e => log.error(e));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOlsicmV0cnkiLCJsb2ciLCJjcmVhdGVMb2dnZXIiLCJuYW1lIiwic3RhdGUiLCJzZXJ2aW5nIiwidGltZW91dERlbGF5cyIsInByb21pc2VEZWxheXMiLCJyZXNvbHZlRGVsYXkiLCJmb3JFYWNoIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsInJlc29sdmUiLCJ0YXJnZXQiLCJwcm94eSIsImNyZWF0ZVByb3h5U2VydmVyIiwiaGFuZGxlRXJyb3IiLCJlIiwicmVxIiwicmVzIiwid3JpdGVIZWFkIiwiZW5kIiwicmVqZWN0Iiwib24iLCJkZWxheSIsIm1pbGxpc2Vjb25kcyIsIlByb21pc2UiLCJwdXNoIiwic2V0VGltZW91dCIsIkVycm9yIiwidHJ5QXBwU2VydmVyIiwicmVzRW5kIiwiYXJncyIsImNhbGwiLCJ3ZWIiLCJzdGFydFNvY2tldCIsImlvIiwidGhlbiIsIm1lc3NhZ2UiLCJjYXRjaCIsImVycm9yIiwicG9ydCIsInVzZSIsImN0eCIsIm5leHQiLCJwYXRoIiwicXVlcnlzdHJpbmciLCJxdWVyeSIsInJlZmVyZXIiLCJnZXQiLCJwYXRobmFtZSIsInJlZmVyZXJQYXRoIiwicGFyc2UiLCJtYWluIiwicm91dGVzIiwibGF5b3V0IiwicmVkdWNlcnMiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLFFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWY7O0FBNEJBLE1BQU1DLE1BQU0saUJBQU9DLFlBQVAsQ0FBb0I7QUFDNUJDLFVBQU07QUFEc0IsQ0FBcEIsQ0FBWjs7QUFJQSxNQUFNQyxRQUFRO0FBQ1ZDLGFBQVMsS0FEQztBQUVWQyxtQkFBZSxFQUZMO0FBR1ZDLG1CQUFlLEVBSEw7QUFJVkMsa0JBQWMsTUFBTTtBQUNoQkos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QVlDa0MsS0FaRCxDQVlPdEIsS0FBS2hCLElBQUl1QyxLQUFKLENBQVV2QixDQUFWLENBWlosRUFhQ29CLElBYkQsQ0FhTSxNQUNGLHNCQUFZLEVBQUVJLE1BQU0sSUFBUixFQUFaLEVBQ0NDLEdBREQsQ0FDSyxPQUFPQyxHQUFQLEVBQVlDLElBQVosS0FBcUI7O0FBRXRCLFVBQU0sRUFBRTFCLEdBQUYsRUFBT0MsR0FBUCxFQUFZMEIsSUFBWixFQUFrQkMsYUFBYUMsS0FBL0IsS0FBeUNKLEdBQS9DO0FBQ0EsVUFBTUssVUFBVUwsSUFBSU0sR0FBSixDQUFRLFNBQVIsQ0FBaEI7QUFDQSxVQUFNLEVBQUVDLFVBQVVDLFdBQVosS0FBNEIsY0FBSUMsS0FBSixDQUFVSixPQUFWLENBQWxDOztBQUVBLFFBQUlILFNBQVMsSUFBVCxJQUFpQk0sZ0JBQWdCLElBQXJDLEVBQTJDO0FBQ3ZDLGVBQU8sTUFBTVAsTUFBYjtBQUNIOztBQUVELFFBQUk7QUFDQSxjQUFNZCxhQUFhWixHQUFiLEVBQWtCQyxHQUFsQixDQUFOO0FBQ0gsS0FGRCxDQUVFLE9BQU9GLENBQVAsRUFBVTtBQUNSaEIsWUFBSXVDLEtBQUosQ0FBVXZCLENBQVY7QUFDSDtBQUNKLENBaEJELEVBaUJDeUIsR0FqQkQsQ0FpQkssdUJBakJMLEVBa0JDQSxHQWxCRCxDQWtCSyx3QkFBZSxFQUFFVyxNQUFNLGFBQVIsRUFBZixDQWxCTCxFQW1CQ1gsR0FuQkQsQ0FtQkssMEJBQVc7QUFDWlksWUFBUSx1QkFESTtBQUVaQyxZQUFRLHVCQUZJO0FBR1pDLGNBQVU7QUFIRSxDQUFYLENBbkJMLEVBd0JDQyxNQXhCRCxFQWRKLEVBd0NDbEIsS0F4Q0QsQ0F3Q090QixLQUFLaEIsSUFBSXVDLEtBQUosQ0FBVXZCLENBQVYsQ0F4Q1osQyIsImZpbGUiOiJzcmMvc2VydmVyL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii4iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGl0IH0gZnJvbSAnZXRoaWNhbC9oZWxwZXIvZXhpdCdcbmltcG9ydCBzdGFydFNlcnZlciBmcm9tICdldGhpY2FsL3NlcnZlcidcbmltcG9ydCBzdGF0aWNGaWxlIGZyb20gJ2V0aGljYWwvc2VydmVyL3N0YXRpYydcbmltcG9ydCBtb2R1bGVTdXBwbGllciBmcm9tICdldGhpY2FsL3NlcnZlci9zdXBwbGllcidcbmltcG9ydCByZWFjdFJlZHV4IGZyb20gJ2V0aGljYWwvc2VydmVyL3JlYWN0LXJlZHV4J1xuaW1wb3J0IFdlYlNvY2tldFNlcnZlciBmcm9tICd1d3MnXG5pbXBvcnQgaHR0cFByb3h5IGZyb20gJ2h0dHAtcHJveHknXG5pbXBvcnQgYnVueWFuIGZyb20gJ2J1bnlhbidcbmltcG9ydCB1cmwgZnJvbSAndXJsJ1xuXG5jb25zdCByZXRyeSA9IGBcbiAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+RXRoaWNhbCBEZXYgU2VydmVyPC90aXRsZT5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDxkaXY+Q291bGQgbm90IHJlc3RhcnQgQXBwIHNlcnZlci48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+UGxlYXNlIGNoZWNrIHRoZSBsb2dzIGZvciBlcnJvcnMuPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgUmVmcmVzaGluZyBpbiA8c3BhbiBpZD1cInNlY29uZHNcIj41PC9zcGFuPiBzZWNvbmRzLi4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmRzJylcbiAgICAgICAgICAgICAgICBsZXQgc2Vjb25kcyA9IDVcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ0NoZWNraW5nIHNlcnZlciBzdGF0dXMgYWdhaW4uLi4nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IC0tc2Vjb25kc1xuICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbmBcblxuY29uc3QgbG9nID0gYnVueWFuLmNyZWF0ZUxvZ2dlcih7XG4gICAgbmFtZTogJ2V0aGljYWwtYXBwLWRldidcbn0pXG5cbmNvbnN0IHN0YXRlID0ge1xuICAgIHNlcnZpbmc6IGZhbHNlLFxuICAgIHRpbWVvdXREZWxheXM6IFtdLFxuICAgIHByb21pc2VEZWxheXM6IFtdLFxuICAgIHJlc29sdmVEZWxheTogKCkgPT4ge1xuICAgICAgICBzdGF0ZS50aW1lb3V0RGVsYXlzLmZvckVhY2goKHRpbWVvdXQpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB9KVxuICAgICAgICBzdGF0ZS5wcm9taXNlRGVsYXlzLmZvckVhY2goKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZSlcbiAgICAgICAgfSlcbiAgICAgICAgc3RhdGUudGltZW91dERlbGF5cyA9IFtdXG4gICAgICAgIHN0YXRlLnByb21pc2VEZWxheXMgPSBbXVxuICAgIH1cbn1cblxuY29uc3QgdGFyZ2V0ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTE5MSdcbmNvbnN0IHByb3h5ID0gaHR0cFByb3h5LmNyZWF0ZVByb3h5U2VydmVyKHsgdGFyZ2V0IH0pXG5jb25zdCBoYW5kbGVFcnJvciA9IChlLCByZXEsIHJlcykgPT4ge1xuICAgIHJlcy53cml0ZUhlYWQoNTAwLCB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9odG1sJ1xuICAgIH0pXG4gICAgcmVzLmVuZChyZXRyeSlcbiAgICByZXMucmVqZWN0KGUpXG59XG5cbnByb3h5Lm9uKCdlcnJvcicsIGhhbmRsZUVycm9yKVxuXG5jb25zdCBkZWxheSA9IChyZXEsIHJlcykgPT4gKG1pbGxpc2Vjb25kcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHN0YXRlLnRpbWVvdXREZWxheXMucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzLnJlamVjdCA9IHJlamVjdFxuICAgICAgICBoYW5kbGVFcnJvcihuZXcgRXJyb3IoJ1NlcnZlciBzdGlsbCBoYXMgbm90IHN0YXJ0ZWQhJyksIHJlcSwgcmVzKVxuICAgIH0sIG1pbGxpc2Vjb25kcykpXG4gICAgc3RhdGUucHJvbWlzZURlbGF5cy5wdXNoKHJlc29sdmUpXG59KVxuXG5jb25zdCB0cnlBcHBTZXJ2ZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAgIGlmICghc3RhdGUuc2VydmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkocmVxLCByZXMpKDUwMDApXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzRW5kID0gcmVzLmVuZFxuXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXMuZW5kID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJlc0VuZC5jYWxsKHJlcywgLi4uYXJncylcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9XG4gICAgICAgIHJlcy5yZWplY3QgPSByZWplY3RcbiAgICAgICAgcHJveHkud2ViKHJlcSwgcmVzKVxuICAgIH0pXG59XG5cbmNvbnN0IHN0YXJ0U29ja2V0ID0gKCkgPT4gKFxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW8gPSBuZXcgV2ViU29ja2V0U2VydmVyKCd3czovL2xvY2FsaG9zdDo5MzkzJylcbiAgICAgICAgaW8ub24oJ29wZW4nLCAoKSA9PiByZXNvbHZlKGlvKSlcbiAgICAgICAgaW8ub24oJ2Vycm9yJywgcmVqZWN0KVxuICAgIH0pXG4pXG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgICBzdGFydFNvY2tldCgpXG4gICAgLnRoZW4oKGlvKSA9PiB7XG4gICAgICAgIGlvLm9uKCdtZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnU0VSVkVSX1NUQVJUJykge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlcnZpbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgc3RhdGUucmVzb2x2ZURlbGF5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnU0VSVkVSX1NUT1AnKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2VydmluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZSA9PiBsb2cuZXJyb3IoZSkpXG4gICAgLnRoZW4oKCkgPT4gKFxuICAgICAgICBzdGFydFNlcnZlcih7IHBvcnQ6IDkyOTIgfSlcbiAgICAgICAgLnVzZShhc3luYyAoY3R4LCBuZXh0KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgcmVxLCByZXMsIHBhdGgsIHF1ZXJ5c3RyaW5nOiBxdWVyeSB9ID0gY3R4XG4gICAgICAgICAgICBjb25zdCByZWZlcmVyID0gY3R4LmdldCgnUmVmZXJlcicpXG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiByZWZlcmVyUGF0aCB9ID0gdXJsLnBhcnNlKHJlZmVyZXIpXG5cbiAgICAgICAgICAgIGlmIChwYXRoID09PSAnLyYnIHx8IHJlZmVyZXJQYXRoID09PSAnLyYnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5leHQoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRyeUFwcFNlcnZlcihyZXEsIHJlcylcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnVzZShzdGF0aWNGaWxlKCkpXG4gICAgICAgIC51c2UobW9kdWxlU3VwcGxpZXIoeyBtYWluOiAnZGlzdC9jbGllbnQnIH0pKVxuICAgICAgICAudXNlKHJlYWN0UmVkdXgoe1xuICAgICAgICAgICAgcm91dGVzOiAnZGlzdC9zaGFyZWQvUm91dGVzLmpzJyxcbiAgICAgICAgICAgIGxheW91dDogJ2Rpc3Qvc2hhcmVkL0xheW91dC5qcycsXG4gICAgICAgICAgICByZWR1Y2VyczogJ2Rpc3Qvc2hhcmVkL3JlZHVjZXJzJ1xuICAgICAgICB9KSlcbiAgICAgICAgLmxpc3RlbigpXG4gICAgKSlcbiAgICAuY2F0Y2goZSA9PiBsb2cuZXJyb3IoZSkpXG4pXG4iXX0=