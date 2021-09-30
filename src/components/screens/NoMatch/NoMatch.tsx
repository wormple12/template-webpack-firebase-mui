import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

const textContent = {
   heading: 'The page was not found.',
   buttonReturn: 'Return to home page?',
};

export const NoMatch: React.FC = props => {
   return (
      <section className='content'>
         <h1>{textContent.heading}</h1>
         <Button>
            <Link to={'/'}>{textContent.buttonReturn}</Link>
         </Button>
      </section>
   );
};
