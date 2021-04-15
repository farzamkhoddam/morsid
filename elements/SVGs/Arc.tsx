import useHover from "hooks/useHover";
import React, { useRef } from "react";
import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  strokeColor?: string;
}

const Arc: React.FC<Props> = ({ width, height, viewBox, strokeColor }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <svg
      width={width || "189"}
      height={height || "21"}
      viewBox={viewBox || "0 0 189 21"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.41828 15.707C64.405 2.86244 124.142 0.951614 186.507 10.8473"
        stroke={strokeColor || "#308EFF"}
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default Arc;
