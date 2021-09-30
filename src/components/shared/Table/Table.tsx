import React from 'react';

import { Paper, Table as Table_MUI, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import './Table.scss';

type Props<T, K extends keyof T> = {
   id?: string;
   className?: string;
   data: T[];
   columns?: { key: K; header: string }[];
   caption?: string;
};

export const Table = <T, K extends keyof T>(props: Props<T, K>): JSX.Element => {
   if (props.data.length === 0) return <p>No data was found.</p>;

   const columns =
      props.columns !== undefined
         ? props.columns
         : Object.keys(props.data[0]).map(e => {
              return {
                 key: e,
                 header: e
                    .split('_')
                    .map(str => str[0].toUpperCase() + str.slice(1))
                    .join(' '),
              };
           });

   return (
      <TableContainer component={Paper} id={props.id} className={`table-container ${props.className}`}>
         <Table_MUI size='small' aria-label={props.caption}>
            <TableHead>
               <TableRow>
                  {columns.map((e, index) => (
                     <TableCell key={`hCell-${index}`}>{e.header}</TableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {props.data.map((row, index) => (
                  <TableRow key={`row-${index}`}>
                     {columns.map((column, index2) => (
                        <TableCell key={`cell-${index2}`}>{row[column.key]}</TableCell>
                     ))}
                  </TableRow>
               ))}
            </TableBody>
         </Table_MUI>
      </TableContainer>
   );
};
