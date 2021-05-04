import React from "react";
import { CSSObject } from "styled-components";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  strokeColor?: string;
  style?: CSSObject;
}

const SuccesIcon: React.FC<Props> = ({
  width,
  height,
  viewBox,
  strokeColor,
  style,
}) => {
  return (
    <svg
      style={style}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="#41E06E" />
      <path
        d="M40.6663 22L25.9997 36.6667L19.333 30"
        stroke="white"
        stroke-width="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SuccesIcon;
