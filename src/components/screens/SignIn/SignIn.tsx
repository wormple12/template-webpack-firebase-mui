import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { signIn } from '@Services/firebase/auth';

import { Button } from '@mui/material';

const textContent = {
   title: 'Testing Authentication',
   desc: 'Please log in to access the app.',
   submitBtn: 'Sign in with Google',
};

type Props = RouteComponentProps;

export const SignIn: React.FC<Props> = props => {
   const onSubmit = async () => {
      try {
         await signIn();
         props.history.push('/');
      } catch (error) {
         throw new Error(`Authentication failed...\n${error}`);
      }
   };

   return (
      <section className='content'>
         <h1>{textContent.title}</h1>
         <p className='sectionDesc'>{textContent.desc}</p>
         <Button onClick={onSubmit}>{textContent.submitBtn}</Button>
      </section>
   );
};
