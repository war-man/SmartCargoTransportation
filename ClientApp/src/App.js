import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { JobCalendar } from './components/Calendar';
import { JobsList } from './components/Job';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/calendar' component={JobCalendar} />
                    <Route path='/job' component={JobsList} />
                    <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
                </Layout>
            </Router>
        );
    }
}
