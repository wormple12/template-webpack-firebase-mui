import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SignIn, Home, Section01, Section02, NoMatch } from "./screens";
import { NavBarProps } from '@Components/shared/NavBar/NavBar';
import { isUserSignedIn, signOut } from '@Services/firebase/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => isUserSignedIn()
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/signin',
            state: { from: props.location }
        }} />
    } />
);

export const MainRoutes: React.FC = props => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <PrivateRoute exact path="/section01" component={Section01} />
            <PrivateRoute path="/section02" component={Section02} />
            <Route component={NoMatch} />
        </Switch>
    );
};

export const navTabs: NavBarProps = {
    noAuthTabs: [
        { label: "Sign in", path: "/signin", exact: true },
    ],
    secureTabs: [
        { label: "Home", path: "/", exact: true },
        { label: "Test Recoil", path: "/section01", exact: true },
        { label: "Test Suspense", path: "/section02" },
        { label: "Sign out", path: "/signin", onClick: signOut, float: "right" }
    ],
};