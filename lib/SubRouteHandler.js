'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var React = require('react');

var SubRouteHandler = (function (_React$Component) {
    function SubRouteHandler() {
        _classCallCheck(this, SubRouteHandler);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(SubRouteHandler, _React$Component);

    _createClass(SubRouteHandler, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                subRouteDepth: this.context.subRouteDepth + 1
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var Handler = this.context.getSubRouteAtDepth(this.context.subRouteDepth);
            return React.createElement(Handler, this.props);
        }
    }]);

    return SubRouteHandler;
})(React.Component);

SubRouteHandler.contextTypes = {
    subRouteDepth: React.PropTypes.number,
    getSubRouteAtDepth: React.PropTypes.func };

SubRouteHandler.childContextTypes = {
    subRouteDepth: React.PropTypes.number };

module.exports = SubRouteHandler;