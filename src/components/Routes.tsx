import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Section01, Section02, NoMatch } from "./screens";

export const MainRoutes: React.FC = props => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/section01" component={Section01} />
            <Route path="/section02" component={Section02} />
            <Route component={NoMatch} />
        </Switch>
    );
};