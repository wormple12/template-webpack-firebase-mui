import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';

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
    const [isUserSignedIn, setIsUserSignedIn] = useRecoilState<boolean>(userAuthState);
    const tabs = isUserSignedIn ? props.secureTabs : props.noAuthTabs;

    return (
        <ul className="header-nav-bar">
            {tabs.map((tab, index) => (
                <li key={`${tab.label}-${index}`} className={tab.float ? tab.float : ""}>
                    <NavLink activeClassName="active" exact={tab.exact} to={tab.path} onClick={tab.onClick}>
                        {tab.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};