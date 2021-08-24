import React from 'react';
import { LottieAnim } from '@Components/utilities';
import LoadingAnim_Data from "./anim/Loading_AlbenaRashkova.json";

// this components lacks styling to at the very least center the anim content

export const SuspenseLoader: React.FC<{ height?: string, width?: string }> = props => {
    return (
        <div className="anim-flex suspense-loader">
            <LottieAnim
                animationData={LoadingAnim_Data}
                height={props.height ? props.height : "50%"}
                width={props.width ? props.width : "50%"}
            />
        </div>
    );
};