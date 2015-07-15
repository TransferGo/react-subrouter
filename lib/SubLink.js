'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var React = require('react');

var SubLink = (function (_React$Component) {
    function SubLink() {
        _classCallCheck(this, SubLink);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(SubLink, _React$Component);

    _createClass(SubLink, [{
        key: 'handleClick',
        value: function handleClick() {
            this.context.changeSubRoute(this.props.to);
        }
    }, {
        key: 'render',
        value: function render() {

            var isActive = this.context.isActive(this.props.to);

            var className = this.props.className || '';

            if (isActive) {
                className = this.props.className + ' active';
            }

            return React.createElement(
                'a',
                _extends({ onClick: this.handleClick.bind(this)
                }, this.props, {
                    className: className }),
                this.props.children
            );
        }
    }]);

    return SubLink;
})(React.Component);

SubLink.contextTypes = {
    subRouteDepth: React.PropTypes.number,
    changeSubRoute: React.PropTypes.func,
    isActive: React.PropTypes.func };

module.exports = SubLink;