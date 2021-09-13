import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from '@Components/shared';
import { signIn } from '@Services/firebase/auth';

type Props = RouteComponentProps;

export const SignIn: React.FC<Props> = props => {
    const onSubmit = async () => {
        try {
            await signIn();
            props.history.push("/");
        } catch (error) {
            throw new Error(`Authentication failed...\n${error}`);
        }
    };

    return (
        <section className="content">
            <h1>Testing Authentication</h1>
            <p className="sectionDesc"></p>
            <Button onClick={onSubmit}>
                Sign in with Google
            </Button>
        </section>
    );
};