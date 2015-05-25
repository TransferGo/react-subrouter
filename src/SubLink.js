var React = require('react');

class SubLink extends React.Component {

    handleClick(){
        this.context.changeSubRoute(this.props.to);
    }

    render() {

        let isActive = this.context.isActive(this.props.to);

        let className = this.props.className || '';

        if(isActive){
            className = this.props.className + ' active';
        }

        return (
            <a  onClick={this.handleClick.bind(this)}
                {...this.props}
                className={className}>
                {this.props.children}
            </a>
        );
    }
}

SubLink.contextTypes = {
    subRouteDepth: React.PropTypes.number,
    changeSubRoute: React.PropTypes.func,
    isActive: React.PropTypes.func,
};

module.exports = SubLink;