import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAuthState } from '@State/UserState';

import { AppBar } from './shared';
import { navTabs } from './Routes';

export const Header: React.FC = () => {
   const isUserSignedIn = useRecoilValue<boolean>(userAuthState);
   const leftButtons = isUserSignedIn ? navTabs.authTabs.left : navTabs.noAuthTabs.left;
   const rightButtons = isUserSignedIn ? navTabs.authTabs.right : navTabs.noAuthTabs.right;

   return (
      <header>
         <AppBar leftButtons={leftButtons} rightButtons={rightButtons} />
      </header>
   );
};
