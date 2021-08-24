import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@Components/shared';

export const NoMatch: React.FC = props => {
    return (
        <div className="content">
            <h1>The page was not found.</h1>
            <p className="sectionDesc"></p>
            <Button variant="alt"><Link to={"/"}>
                Return to home page?
            </Link></Button>
        </div>
    );
};