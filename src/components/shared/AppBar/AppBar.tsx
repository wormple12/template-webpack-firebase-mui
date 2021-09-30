import React from 'react';

import { NavLink } from 'react-router-dom';
import { AppBar as AppBar_MUI, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

import './AppBar.scss';

export type NavButtonType = {
   content: string | SvgIconComponent;
   isIcon?: boolean;
   path: string;
   exact?: boolean;
   handleClick?: () => void;
};

const NavButton: React.FC<NavButtonType> = props => {
   const { content, isIcon, path, exact, handleClick } = props;
   const attributes = {
      component: NavLink,
      to: path,
      exact: exact,
      onClick: handleClick,
   };
   console.log(content);
   return isIcon ? (
      <IconButton {...attributes}>{content}</IconButton>
   ) : (
      <Button color='inherit' {...attributes}>
         {content}
      </Button>
   );
};

type AppBarProps = {
   title?: string;
   leftButtons: NavButtonType[];
   rightButtons: NavButtonType[];
};

export const AppBar: React.FC<AppBarProps> = props => {
   return (
      <AppBar_MUI position='static' className='app-bar'>
         <Toolbar>
            {props.leftButtons.map((btn, index) => (
               <NavButton key={`app-bar-left-btn-${index}`} {...btn} />
            ))}
            <Typography sx={{ flexGrow: 1 }}>{props.title}</Typography>
            {props.rightButtons.map((btn, index) => (
               <NavButton key={`app-bar-right-btn-${index}`} {...btn} />
            ))}
         </Toolbar>
      </AppBar_MUI>
   );
};
