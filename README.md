# react-subrouter

When you need to change views without changing the URL.

SubRouted Components can be in any part of your application.

There can be multiple SubRouters

API is closely aligned with react-router's (SubLink, SubRouteHandler, etc...)

Examples at [react-subrouter-examples](https://github.com/UgnisSoftware/react-subrouter-examples)

## Usage

Request Libraries
```javascript
  import React from 'react';
  import {SubRoute, SubRouter, SubLink, SubRouteHandler} from 'react-subrouter';
```

[Define SubRoutes](https://github.com/UgnisSoftware/react-subrouter-examples/blob/master/src/views/modal/routes.js)
```javascript
  var routes = (
    <SubRoute handler={Modal}>
      <SubRoute name="deposit" handler={Deposit}>
        <SubRoute name="card" handler={Card}/>
        <SubRoute name="bank" handler={Bank}/>
      </SubRoute>
      <SubRoute name="status" handler={Status}/>
      <SubRoute name="info" handler={Info}/>
    </SubRoute>
  };
```

[Build a new SubRouter](https://github.com/UgnisSoftware/react-subrouter-examples/blob/master/src/views/modal/index.js)
```javascript
    class Index extends SubRouter {
        constructor(props, state){
            super(props, state, routes, 'card');
        }
    }
```

[Start building nested SubRoutes](https://github.com/UgnisSoftware/react-subrouter-examples/blob/master/src/views/modal/components/modal.js)

```javascript
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
```