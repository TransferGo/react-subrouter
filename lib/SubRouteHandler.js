'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

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