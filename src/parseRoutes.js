import React from 'react';

/**

 Example:

 <SubRoute handler={Pending}>
    <SubRoute name="deposit" handler={Deposit}> // trailingName
        <SubRoute name="card" handler={Card}/>  // default subroute for "deposit" (first in a list)
        <SubRoute name="bank" handler={Bank}/>
    </SubRoute>
    <SubRoute name="status" handler={Status}/>
    <SubRoute name="info" handler={Info}/>
 </SubRoute>

 will be parsed into:

 {
    card: [Deposit, Card],
    bank: [Deposit, Bank],
    status: [Status],
    info: [Info]

    _default: Pending
    _trailingNames: {
        card: [deposit],
        bank: [deposit]
    }
 }

 */

function recursiveParse(child, routes, handlers = [], trailingNames= []){
    handlers.push(child.props.handler);
    if(!child.props.children){
        if(!child.props.name) throw new Error('No name on a last route node');
        if(routes[child.props.name]) throw new Error('Name duplication: '+child.props.name);
        routes[child.props.name] = handlers;
        // add trailing names
        if(trailingNames.length){
            routes._trailingNames[child.props.name] = trailingNames;
        }
    } else {
        if(child.props.name){
            trailingNames.push(child.props.name);
        }
        for(let kid of child.props.children){
            recursiveParse(kid, routes, handlers.slice(), trailingNames.slice())
        }
    }
}

function parseRoutes(element){

    let routes = {
        _trailingNames: {}
    };
    let children = element.props.children;
    routes._default = element.props.handler;

    React.Children.forEach(children, function (child) {
        recursiveParse(child, routes);
    });

    return routes;
}

module.exports = parseRoutes;
