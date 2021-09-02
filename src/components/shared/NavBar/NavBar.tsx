import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import './NavBar.scss';
import { userAuthState } from '@State/UserState';

type NavTab = {
    label: string,
    path: string,
    exact?: boolean,
    onClick?: () => void,
    float?: "right" | "left",
}
export type NavBarProps = {
    noAuthTabs: NavTab[],
    secureTabs: NavTab[],
}

export const NavBar: React.FC<NavBarProps> = props => {
    const isUserSignedIn = useRecoilValue<boolean>(userAuthState);
    const tabs = isUserSignedIn ? props.secureTabs : props.noAuthTabs;

    return (
        <nav>
            <ul className="header-nav-bar">
                {tabs.map((tab, index) => (
                    <li key={`${tab.label}-${index}`} className={tab.float ? tab.float : ""}>
                        <NavLink activeClassName="active" exact={tab.exact} to={tab.path} onClick={tab.onClick}>
                            {tab.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};