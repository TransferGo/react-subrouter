import React from 'react';
import {SubLink, SubRouteHandler} from 'react-subrouter';

export default class extends React.Component{
     render() {
        return (
            <div>
                <div className="tabs">
                    <SubLink to="bank" className="tab two">Bank</SubLink>
                    <SubLink to="card" className="tab two">Card</SubLink>
                </div>

                <SubRouteHandler/>

            </div>
        );
    }
}