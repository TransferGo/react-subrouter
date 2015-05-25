import React from 'react';
import {SubRoute} from 'react-subrouter';

import Modal from './components/modal.js';
import Deposit from './components/deposit/deposit.js';
import Card from './components/deposit/components/card.js';
import Bank from './components/deposit/components/bank.js';
import Info from './components/info/info.js';
import Status from './components/status/status.js';

module.exports = (
    <SubRoute handler={Modal}>
        <SubRoute name="deposit" handler={Deposit}>
            <SubRoute name="card" handler={Card}/>
            <SubRoute name="bank" handler={Bank}/>
        </SubRoute>
        <SubRoute name="status" handler={Status}/>
        <SubRoute name="info" handler={Info}/>
    </SubRoute>
);


