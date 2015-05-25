import React from 'react';

import SubRoute from './SubRoute.js';
import parseRoutes from './parseRoutes.js';

class SubRouter extends React.Component {

    constructor(props, state, routes, activeSubRouteName){
        super(props, state);

        this.routes = parseRoutes(routes);

        this.state = {
            activeSubRoute: activeSubRouteName,
        };
    }

    getChildContext(){
        return {
            isActive: this.isActive.bind(this),
            getSubRouteAtDepth: this.getSubRouteAtDepth.bind(this),
            changeSubRoute: this.changeSubRoute.bind(this),
            subRouteDepth: 0
        };
    }

    isActive(routeName){

        if(this.state.activeSubRoute === routeName){
            return true;
        }

        // check if given route is a trailing name for an active route
        let trailingNameArray = this.routes._trailingNames[this.state.activeSubRoute];
        if( trailingNameArray && trailingNameArray.indexOf(routeName) != -1){
            return true;
        }

        return false;
    }

    getSubRouteAtDepth(id){
        return this.routes[this.state.activeSubRoute][id];
    }

    changeSubRoute(name){

        // check if that's a route
        if(this.routes[name]){
            this.setState({activeSubRoute:name});
            return;
        }

        // check if that's a trailing name
        for(let routeName in this.routes._trailingNames){
            for(let trailingName of this.routes._trailingNames[routeName]){
                if(trailingName === name){
                    this.setState({activeSubRoute:routeName});
                    return;
                }
            }
        }

    }

    render() {
        let Handler = this.routes._default;
        return <Handler/>
    }
}

SubRouter.childContextTypes = {
    isActive: React.PropTypes.func,
    getSubRouteAtDepth: React.PropTypes.func,
    changeSubRoute: React.PropTypes.func,
    subRouteDepth: React.PropTypes.number,
};

module.exports = SubRouter;
