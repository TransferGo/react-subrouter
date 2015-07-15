import React from 'react';

import SubRouter from './SubRouter.js';

function SubRouterFactory(routes, defaultRoute){

    class Index extends SubRouter {
        constructor(props, state){
            super(props, state, routes, defaultRoute);
        }
    }

    Index.childContextTypes = {
        isActive: React.PropTypes.func,
        getSubRouteAtDepth: React.PropTypes.func,
        changeSubRoute: React.PropTypes.func,
        subRouteDepth: React.PropTypes.number,
    };

    return Index;
}

module.exports = SubRouterFactory;
