import React from "react";
import Lottie from "react-lottie";

type Props = {
    animationData: any, // must receive .json file as props
    height?: string,
    width?: string,
    isStopped?: boolean,
    isPaused?: boolean,
}

export const LottieAnim: React.FC<Props> = props => {

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: props.animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Lottie options={defaultOptions}
            height={props.height ? props.height : "100%"}
            width={props.width ? props.width : "100%"}
            isStopped={props.isStopped}
            isPaused={props.isPaused} />
    );
};
