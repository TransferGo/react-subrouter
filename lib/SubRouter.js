'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flummoxConnect = require('flummox/connect');

var _flummoxConnect2 = _interopRequireDefault(_flummoxConnect);

var _SubRouteJs = require('./SubRoute.js');

var _SubRouteJs2 = _interopRequireDefault(_SubRouteJs);

var _parseRoutesJs = require('./parseRoutes.js');

var _parseRoutesJs2 = _interopRequireDefault(_parseRoutesJs);

var SubRouter = (function (_React$Component) {
    function SubRouter(props, state, routes, activeSubRouteName) {
        _classCallCheck(this, SubRouter);

        _get(Object.getPrototypeOf(SubRouter.prototype), 'constructor', this).call(this, props, state);

        this.routes = (0, _parseRoutesJs2['default'])(routes);

        this.state = {
            activeSubRoute: activeSubRouteName };
    }

    _inherits(SubRouter, _React$Component);

    _createClass(SubRouter, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isActive: this.isActive.bind(this),
                getSubRouteAtDepth: this.getSubRouteAtDepth.bind(this),
                changeSubRoute: this.changeSubRoute.bind(this),
                subRouteDepth: 0
            };
        }
    }, {
        key: 'isActive',
        value: function isActive(routeName) {

            if (this.state.activeSubRoute === routeName) {
                return true;
            }

            // check if given route is a trailing name for an active route
            var trailingNameArray = this.routes._trailingNames[this.state.activeSubRoute];
            if (trailingNameArray && trailingNameArray.indexOf(routeName) != -1) {
                return true;
            }

            return false;
        }
    }, {
        key: 'getSubRouteAtDepth',
        value: function getSubRouteAtDepth(id) {
            return this.routes[this.state.activeSubRoute][id];
        }
    }, {
        key: 'changeSubRoute',
        value: function changeSubRoute(name) {

            // check if that's a route
            if (this.routes[name]) {
                this.setState({ activeSubRoute: name });
                return;
            }

            // check if that's a trailing name
            for (var routeName in this.routes._trailingNames) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.routes._trailingNames[routeName][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var trailingName = _step.value;

                        if (trailingName === name) {
                            this.setState({ activeSubRoute: routeName });
                            return;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var Handler = this.routes._default;
            return _react2['default'].createElement(Handler, null);
        }
    }]);

    return SubRouter;
})(_react2['default'].Component);

SubRouter.childContextTypes = {
    isActive: _react2['default'].PropTypes.func,
    getSubRouteAtDepth: _react2['default'].PropTypes.func,
    changeSubRoute: _react2['default'].PropTypes.func,
    subRouteDepth: _react2['default'].PropTypes.number };

module.exports = SubRouter;