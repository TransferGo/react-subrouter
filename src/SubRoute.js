var React = require('react');

class Route extends React.Component {

    render() {
        return null;
    }

}

Route.propTypes = {
    name: React.PropTypes.string,
    handler: React.PropTypes.func,
};

module.exports = Route;