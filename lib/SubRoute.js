'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var React = require('react');

var Route = (function (_React$Component) {
    function Route() {
        _classCallCheck(this, Route);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Route, _React$Component);

    _createClass(Route, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Route;
})(React.Component);

Route.propTypes = {
    name: React.PropTypes.string,
    handler: React.PropTypes.func };

module.exports = Route;