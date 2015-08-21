require('babelify/polyfill');

import React from 'react';
import Router from 'react-router';

import routes from './routes.js';

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler/>, document.getElementById("React"));
});