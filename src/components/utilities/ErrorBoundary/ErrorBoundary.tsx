import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Button } from '@mui/material';

const defaultContent = {
   code: 'Unknown Error',
   desc: 'An unforeseen issue occurred while rendering the page.',
   buttonReload: 'Try again?',
   buttonReturn: 'Return to home page?',
};

type Props = {
   code?: string;
   heading?: string;
   desc?: string;
};

export const ErrorBoundary: React.FC<Props> = props => {
   return (
      <ReactErrorBoundary
         FallbackComponent={({ error, resetErrorBoundary }) => (
            <section className='content'>
               <h1>
                  {props.code || defaultContent.code}: {props.heading}
               </h1>
               <p>{props.desc || defaultContent.desc}</p>
               <p>
                  <em>{error.message}</em>
               </p>
               <Button onClick={resetErrorBoundary}>{defaultContent.buttonReload}</Button>
               <Button onClick={resetErrorBoundary}>
                  <Link to={'/'}>{defaultContent.buttonReturn}</Link>
               </Button>
            </section>
         )}
         onReset={() => {
            sessionStorage.clear();
         }}
         onError={() => {}}
      >
         {props.children}
      </ReactErrorBoundary>
   );
};
