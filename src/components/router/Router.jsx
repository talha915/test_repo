import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/Dashboard';
import DataWhisperer from '../../pages/datawhisperer/DataWhisperer';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route component={DataWhisperer} path="/" exact />
                    <Route component={Dashboard} path="/dashboard" exact />
                </Switch>
            </div>
        )
    }
}


export default Routes;