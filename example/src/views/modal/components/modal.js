import React from 'react';
import {SubLink, SubRouteHandler} from 'react-subrouter';

export default class extends React.Component{
    render() {
        return (
            <div className="modal">
                <div className="tabs">
                    <SubLink to="status" className="tab three">Status</SubLink>
                    <SubLink to="deposit" className="tab three">Deposit</SubLink>
                    <SubLink to="info" className="tab three">Info</SubLink>
                </div>

                <SubRouteHandler />

            </div>
        );
    }
}