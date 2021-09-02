import React from 'react';
import './Table.scss';

type Props<T, K extends keyof T> = {
    id?: string,
    className?: string,
    data: T[],
    columns?: { key: K, header: string }[],
    caption?: string,
};

export const Table = <T, K extends keyof T>(props: Props<T, K>): JSX.Element => {
    if (props.data.length === 0)
        return (<p>No data was found.</p>);

    const columns = props.columns !== undefined
        ? props.columns
        : Object.keys(props.data[0]).map(e => {
            return {
                key: e,
                header: e.split("_").map(
                    str => str[0].toUpperCase() + str.slice(1)
                ).join(" ")
            }
        });

    return (
        <div id={props.id} className={`table-container ${props.className}`}>
            <table>
                {props.caption && <caption>{props.caption}</caption>}
                <thead><tr>
                    {columns.map((e, index) => (
                        <th key={`hCell-${index}`}>
                            {e.header}
                        </th>
                    ))}
                </tr></thead>
                <tbody>
                    {props.data.map((row, index) => (
                        <tr key={`row-${index}`}>
                            {columns.map((column, index2) => (
                                <td key={`cell-${index2}`}>
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};