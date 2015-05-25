'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

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