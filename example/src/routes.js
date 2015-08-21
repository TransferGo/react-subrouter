import React from 'react';
import {Route, DefaultRoute, Redirect} from 'react-router';

import App from './views/app.js';
import First from './views/first/first.js';
import Second from './views/second/second.js';

module.exports = (
    <Route handler={App} path="/">
        <Route name="first" handler={First} />
        <Route name="second" handler={Second} />
    </Route>
);