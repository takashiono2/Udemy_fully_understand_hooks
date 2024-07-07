import { forwardRef } from "react";

type MyVideoPlayerProps = {
  width: string;
  type: string;
  src: string;
};

//refを渡したい
export const MyVideoPlayer = (props,ref) => {
    return (
      <video width={props.width} ref={ref}>
        <source src={props.src} type={props.type} />
      </video>
    );
  };
