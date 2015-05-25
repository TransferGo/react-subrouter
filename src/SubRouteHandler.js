var React = require('react');

class SubRouteHandler extends React.Component {

    getChildContext() {
        return {
            subRouteDepth: this.context.subRouteDepth + 1
        };
    }

    render() {
        let Handler = this.context.getSubRouteAtDepth(this.context.subRouteDepth);
        return <Handler {...this.props}/>
    }

}

SubRouteHandler.contextTypes = {
    subRouteDepth: React.PropTypes.number,
    getSubRouteAtDepth: React.PropTypes.func,
};

SubRouteHandler.childContextTypes = {
    subRouteDepth: React.PropTypes.number,
};

module.exports = SubRouteHandler;