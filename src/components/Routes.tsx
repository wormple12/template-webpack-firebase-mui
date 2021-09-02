import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { SignIn, Home, Section01, Section02, NoMatch } from "./screens";
import { NavBarProps } from '@Components/shared/NavBar/NavBar';
import { signOut } from '@Services/firebase/auth';
import { userAuthState } from '@State/UserState';

export const MainRoutes: React.FC = props => {
    const isUserSignedIn = useRecoilValue<boolean>(userAuthState);

    return isUserSignedIn ? (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/section01" component={Section01} />
            <Route path="/section02" component={Section02} />
            <Route component={NoMatch} />
        </Switch>
    ) : (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route component={NoMatch} />
        </Switch>
    );
};

export const navTabs: NavBarProps = {
    noAuthTabs: [
        { label: "Sign in", path: "/", exact: true },
    ],
    secureTabs: [
        { label: "Home", path: "/", exact: true },
        { label: "Test Recoil", path: "/section01", exact: true },
        { label: "Test Suspense", path: "/section02" },
        { label: "Sign out", path: "/", onClick: signOut, float: "right" }
    ],
};