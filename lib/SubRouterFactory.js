'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SubRouterJs = require('./SubRouter.js');

var _SubRouterJs2 = _interopRequireDefault(_SubRouterJs);

function SubRouterFactory(routes, defaultRoute) {
    var Index = (function (_SubRouter) {
        function Index(props, state) {
            _classCallCheck(this, Index);

            _get(Object.getPrototypeOf(Index.prototype), 'constructor', this).call(this, props, state, routes, defaultRoute);
        }

        _inherits(Index, _SubRouter);

        return Index;
    })(_SubRouterJs2['default']);

    Index.childContextTypes = {
        isActive: _react2['default'].PropTypes.func,
        getSubRouteAtDepth: _react2['default'].PropTypes.func,
        changeSubRoute: _react2['default'].PropTypes.func,
        subRouteDepth: _react2['default'].PropTypes.number };

    return Index;
}

module.exports = SubRouterFactory;