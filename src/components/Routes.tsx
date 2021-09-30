import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { SignIn, Home, Section01, Section02, NoMatch } from './screens';
import { NavButtonType } from '@Components/shared/AppBar/AppBar';
import { signOut } from '@Services/firebase/auth';
import { userAuthState } from '@State/UserState';

export const MainRoutes: React.FC = props => {
   const isUserSignedIn = useRecoilValue<boolean>(userAuthState);

   return isUserSignedIn ? (
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/section01' component={Section01} />
         <Route path='/section02' component={Section02} />
         <Route component={NoMatch} />
      </Switch>
   ) : (
      <Switch>
         <Route exact path='/' component={SignIn} />
         <Route component={NoMatch} />
      </Switch>
   );
};

type NavButtonCollection = {
   left: NavButtonType[];
   right: NavButtonType[];
};

const getNavTabs = (): {
   noAuthTabs: NavButtonCollection;
   authTabs: NavButtonCollection;
} => {
   const commonTabs: NavButtonCollection = { left: [], right: [] };
   return {
      noAuthTabs: {
         left: [...commonTabs.left, { content: 'Sign in', path: '/', exact: true }],
         right: [...commonTabs.right],
      },
      authTabs: {
         left: [
            ...commonTabs.left,
            { content: 'Home', path: '/', exact: true },
            { content: 'Test Recoil', path: '/section01', exact: true },
            { content: 'Test Suspense', path: '/section02' },
         ],
         right: [...commonTabs.right, { content: 'Sign out', path: '/', handleClick: signOut }],
      },
   };
};
export const navTabs = getNavTabs();
