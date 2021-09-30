import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { swSearchState } from '@State/SWState';
import { SWSearch, Pilot, pilotOptions } from '@Types/SWSearch';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const textContent = {
   title: 'Starship Search',
   desc: 'Fill in information below. Recoil will save it.',
   inputBudget: 'Budget (in thousands)',
   inputRating: 'Minimum Hyperdrive Rating',
   inputPilot: 'Preferred Pilot',
   submitBtn: 'Continue!',
};

type Props = RouteComponentProps;

export const Home: React.FC<Props> = props => {
   const [search, setSearch] = useRecoilState<SWSearch>(swSearchState);

   const onFormSubmit = evt => {
      evt.preventDefault();
      props.history.push('/section01');
   };

   return (
      <section className='content'>
         <h1>{textContent.title}</h1>
         <p className='sectionDesc'>{textContent.desc}</p>
         <br />
         <form autoComplete='off' onSubmit={onFormSubmit}>
            <TextField
               required
               label={textContent.inputBudget}
               type='number'
               margin='dense'
               variant='standard'
               fullWidth
               value={search.budget.toString()}
               onChange={evt => setSearch({ ...search, budget: parseInt(evt.target.value, 10) })}
            />
            <FormControl fullWidth>
               <InputLabel id='min-hd-rating-label'>{textContent.inputRating}</InputLabel>
               <Select
                  labelId='min-hd-rating-label'
                  value={search.minHDRating.toFixed(1).toString()}
                  label={textContent.inputRating}
                  onChange={evt => setSearch({ ...search, minHDRating: parseFloat(evt.target.value) })}
               >
                  {['1.0', '2.0', '3.0', '4.0', '5.0', '6.0'].map(option => (
                     <MenuItem key={option} value={option}>
                        {option}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControl fullWidth>
               <InputLabel id='pilot-label'>{textContent.inputPilot}</InputLabel>
               <Select
                  labelId='pilot-label'
                  value={search.preferredPilot}
                  label={textContent.inputPilot}
                  onChange={evt => setSearch({ ...search, preferredPilot: evt.target.value as Pilot })}
               >
                  {pilotOptions.map(option => (
                     <MenuItem key={option} value={option}>
                        {option}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <Button type='submit'>{textContent.submitBtn}</Button>
         </form>
      </section>
   );
};
