import React from 'react';
import {Link, RouteHandler} from 'react-router';

import Modal from './modal/index.js';

export default class extends React.Component{
    render(){
        return (
            <div className="wrapper">

                <hr/>
                <h3>React Router</h3>

                <div className="tabs">
                    <Link to="first" className="tab two">First React-Route</Link>
                    <Link to="second" className="tab two">Second React-Route</Link>
                </div>

                <RouteHandler/>

                <hr/>

                <h3>React SubRouter</h3>
                <Modal/>

                <hr/>
            </div>
        );
    }
}