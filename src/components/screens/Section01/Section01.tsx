import React from 'react';
import { useRecoilValue } from 'recoil';

import { swSearchState } from '@State/SWState';
import { Card, CardContent } from '@mui/material';

const textContent = {
   title: 'Testing Recoil',
   desc: 'Here are the data that you have passed to the site.',
   labelBudget: 'Budget:',
   labelRating: 'Minimum Hyperdrive Rating Required:',
   labelPilot: 'Preferred Pilot:',
};

export const Section01: React.FC = props => {
   const { budget, minHDRating, preferredPilot } = useRecoilValue(swSearchState);

   return (
      <section className='content'>
         <h1>{textContent.title}</h1>
         <p className='sectionDesc'>{textContent.desc}</p>
         <br />
         <Card>
            <CardContent>
               <span>{textContent.labelBudget}</span>
               <span>{new Intl.NumberFormat('de-DE').format(budget * 1000)}</span>
               <br />
               <span>{textContent.labelRating}</span>
               <span>{minHDRating.toFixed(1)}</span>
               <br />
               <span>{textContent.labelPilot}</span>
               <span>{preferredPilot}</span>
            </CardContent>
         </Card>
      </section>
   );
};
