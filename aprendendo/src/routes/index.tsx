import React from 'react';
import {Switch} from 'react-router-dom';

import LandingPage from '../pages/LandingPage'
import Feed from '../pages/FeedPage'

import Route from './Route';
import Redirection from './redirect';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/login" component={LandingPage} />
            <Route path="/profile" component={Feed} isPrivate />
            <Route component={Redirection} />
        </Switch>
    )
}

export default Routes;