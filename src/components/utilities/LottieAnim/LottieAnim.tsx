import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

// See svg-react-loader
// (https://github.com/jhamlet/svg-react-loader)
// (https://www.svgator.com/help/getting-started/add-animated-svgs-to-react-website)
// for non-json svg animations

// See react-lottie
// (https://github.com/chenqingspring/react-lottie/blob/master/src/index.js)
// for more options

type Props = {
   animationData: any; // must receive .json file as props
   height?: string;
   width?: string;
};

export const LottieAnim: React.FC<Props> = React.memo(function Preloader(props) {
   const animRef = useRef<HTMLDivElement>(null);

   const defaultOptions = {
      loop: true,
      autoplay: true,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice',
      },
   };

   const animStyles = {
      height: props.height ? props.height : '100%',
      width: props.width ? props.width : '100%',
      overflow: 'hidden',
      margin: '0 auto',
      outline: 'none',
   };

   useEffect(() => {
      let animation;
      if (animRef.current) {
         animation = lottie.loadAnimation({
            container: animRef.current,
            renderer: 'svg',
            animationData: props.animationData,
            ...defaultOptions,
         });
      }
      return () => {
         if (animation) animation.destroy();
      };
   }, []);

   return <div ref={animRef} style={animStyles} />;
});
