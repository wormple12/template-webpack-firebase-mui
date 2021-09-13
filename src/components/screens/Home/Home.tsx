import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { InputField, Button, Dropdown } from '@Components/shared';
import { swSearchState } from '@State/SWState';
import { SWSearch, Pilot, pilotOptions } from '@Types/SWSearch';

type Props = RouteComponentProps;

export const Home: React.FC<Props> = props => {
    const [search, setSearch] = useRecoilState<SWSearch>(swSearchState);

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        props.history.push("/section01");
    };

    return (
        <section className="content">
            <h1>Starship Search</h1>
            <p className="sectionDesc">Fill in information below. Recoil will save it.</p>
            <br />
            <form id="temp-form" onSubmit={onFormSubmit} target="#">
                <InputField
                    label="Budget (in thousands)"
                    value={search.budget.toString()}
                    setValue={(value: string) => setSearch({ ...search, budget: parseInt(value, 10) })}
                    inputAttributes={{
                        type: 'number',
                        min: '0',
                        step: '1',
                        pattern: '^[0-9]',
                    }}
                />
                <Dropdown
                    label="Minimum Hyperdrive Rating"
                    options={["1.0", "2.0", "3.0", "4.0", "5.0", "6.0"]}
                    value={search.minHDRating.toFixed(1).toString()}
                    setValue={(value: string) => setSearch({ ...search, minHDRating: parseFloat(value) })}
                />
                <Dropdown
                    label="Preferred Pilot"
                    options={pilotOptions}
                    value={search.preferredPilot}
                    setValue={(value: string) => setSearch({ ...search, preferredPilot: value as Pilot })}
                />
            </form>
            <Button
                type="submit"
                form="temp-form"
            >
                Continue!
            </Button>
        </section>
    );
};