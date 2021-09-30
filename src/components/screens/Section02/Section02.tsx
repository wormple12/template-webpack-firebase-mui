import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import { swStarshipState, swPilotState } from '@State/SWState';
import { SuspenseLoader } from '@Components/utilities';
import { Table } from '@Components/shared';
import { Card, CardContent } from '@mui/material';

const textContent = {
   title: 'Testing Suspense',
   desc: 'Here are the results that pass your requirements.',
   headingStarships: 'Starships',
   headingPilot: 'Pilot',
   tableCaption: 'Starships available for purchase that fit your requirements.',
};

export const Section02: React.FC = props => {
   const starships = useRecoilValue(swStarshipState);
   const pilot = useRecoilValue(swPilotState);

   return (
      <section className='content'>
         {/* Needs error boundary for handling fetch errors */}
         <Suspense fallback={<SuspenseLoader />}>
            <h1>{textContent.title}</h1>
            <p className='sectionDesc'>{textContent.desc}</p>
            <br />
            <h2>{textContent.headingStarships}:</h2>
            <SuspendedGrid resource={starships} />
            <h2>{textContent.headingPilot}</h2>
            <SuspendedInfoBox resource={pilot} />
         </Suspense>
      </section>
   );
};

const SuspendedGrid: React.FC<{ resource }> = ({ resource }) => {
   const starships = resource.read();
   starships.forEach(e => (e.cost_in_credits = `${parseInt(e.cost_in_credits, 10) / 1000}K`));

   return <Table id='swStarship-table' data={starships} caption={textContent.tableCaption} />;
};

const SuspendedInfoBox: React.FC<{ resource }> = ({ resource }) => {
   const pilot = resource.read();

   return (
      <Card sx={{ width: '100%', backgroundColor: 'greenyellow', border: '2px dotted black', padding: '10px' }}>
         <CardContent>
            <label>
               <b>Name:</b>
            </label>
            <p>{pilot.name}</p>
            <label>
               <b>Height:</b>
            </label>
            <p>{pilot.height}</p>
            <label>
               <b>Mass:</b>
            </label>
            <p>{pilot.mass}</p>
            <label>
               <b>Birth Year:</b>
            </label>
            <p>{pilot.birth_year}</p>
            <label>
               <b>Level of Experience:</b>
            </label>
            <p>{pilot.vehicles.length + pilot.starships.length}</p>
         </CardContent>
      </Card>
   );
};
