import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

type Props = {
    tabs: {
        label: string,
        path: string,
        exact?: boolean,
    }[]
}

export const NavBar: React.FC<Props> = props => {
    return (
        <ul className="header-nav-bar">
            {props.tabs.map((tab, index) => (
                <li key={`${tab.label}-${index}`}>
                    <NavLink activeClassName="active" exact={tab.exact} to={tab.path}>
                        {tab.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};