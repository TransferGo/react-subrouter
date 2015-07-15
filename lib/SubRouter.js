'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
                    for (var _iterator = _getIterator(this.routes._trailingNames[routeName]), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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