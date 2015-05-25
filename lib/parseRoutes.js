'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**

 Example:

 <SubRoute handler={Pending}>
    <SubRoute name="deposit" handler={Deposit}> // trailingName
        <SubRoute name="card" handler={Card}/>  // default subroute for "deposit" (first in a list)
        <SubRoute name="bank" handler={Bank}/>
    </SubRoute>
    <SubRoute name="status" handler={Status}/>
    <SubRoute name="info" handler={Info}/>
 </SubRoute>

 will be parsed into:

 {
    card: [Deposit, Card],
    bank: [Deposit, Bank],
    status: [Status],
    info: [Info]

    _default: Pending
    _trailingNames: {
        card: [deposit],
        bank: [deposit]
    }
 }

 */

function recursiveParse(child, routes) {
    var handlers = arguments[2] === undefined ? [] : arguments[2];
    var trailingNames = arguments[3] === undefined ? [] : arguments[3];

    handlers.push(child.props.handler);
    if (!child.props.children) {
        if (!child.props.name) throw new Error('No name on a last route node');
        if (routes[child.props.name]) throw new Error('Name duplication: ' + child.props.name);
        routes[child.props.name] = handlers;
        // add trailing names
        if (trailingNames.length) {
            routes._trailingNames[child.props.name] = trailingNames;
        }
    } else {
        if (child.props.name) {
            trailingNames.push(child.props.name);
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = child.props.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var kid = _step.value;

                recursiveParse(kid, routes, handlers.slice(), trailingNames.slice());
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

function parseRoutes(element) {

    var routes = {
        _trailingNames: {}
    };
    var children = element.props.children;
    routes._default = element.props.handler;

    _react2['default'].Children.forEach(children, function (child) {
        recursiveParse(child, routes);
    });

    return routes;
}

module.exports = parseRoutes;