import React from 'react';
import { useRecoilValue } from 'recoil';

import { swSearchState } from '@State/SWState';

export const Section01: React.FC = props => {
    const { budget, minHDRating, preferredPilot } = useRecoilValue(swSearchState);

    return (
        <section className="content">
            <h1>Testing Recoil</h1>
            <p className="sectionDesc">Here are the data that you've passed to the site.</p>
            <br />
            <div className="info-box">
                <span>Budget: </span><span>{new Intl.NumberFormat('de-DE').format(budget * 1000)}</span><br />
                <span>Minimum Hyperdrive Rating Required: </span><span>{minHDRating.toFixed(1)}</span><br />
                <span>Preferred Pilot: </span><span>{preferredPilot}</span><br />
            </div>
        </section>
    );
};