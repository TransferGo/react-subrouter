import React from 'react';
import {SubRouter} from 'react-subrouter';

import routes from './routes.js';

class Index extends SubRouter {
    constructor(props, state){
        // pass routes and a default route name to the constructor of the SubRouter
        super(props, state, routes, 'card');
    }
}

module.exports = Index;
