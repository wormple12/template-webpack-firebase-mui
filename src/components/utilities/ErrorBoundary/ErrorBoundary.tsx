import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

type Props = {
    code?: string,
    heading?: string,
    desc?: string,
}

export const ErrorBoundary: React.FC<Props> = props => {
    return (
        <ReactErrorBoundary
            FallbackComponent={({ error, resetErrorBoundary }) =>
                <div role="alert">
                    <h3>{props.code}: {props.heading ? props.heading : "An unknown error occurred:"}</h3>
                    <p>{props.desc}</p>
                    <pre>{error.message}</pre>
                    <button onClick={resetErrorBoundary}>Try again.</button>
                </div>
            }
            onReset={() => { sessionStorage.clear() }}
            onError={() => { }}
        >
            {props.children}
        </ReactErrorBoundary>
    );
};