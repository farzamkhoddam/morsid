import useHover from "hooks/useHover";
import React, { useRef } from "react";
import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  strokeColor?: string;
}

const LinkdeinIcon: React.FC<Props> = ({
  width,
  height,
  viewBox,
  strokeColor,
}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <Svg
      ref={hoverRef}
      width={width || "31"}
      height={height || "31"}
      viewBox={viewBox || "0 0 31 31"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="15.5" cy="15.5" r="15.5" fill="#E6F1FF" isHover={isHover} />
      <Path
        d="M18.6667 11.3333C19.7275 11.3333 20.7449 11.7547 21.4951 12.5048C22.2452 13.255 22.6667 14.2724 22.6667 15.3333V19.9999H20V15.3333C20 14.9796 19.8595 14.6405 19.6095 14.3904C19.3594 14.1404 19.0203 13.9999 18.6667 13.9999C18.313 13.9999 17.9739 14.1404 17.7239 14.3904C17.4738 14.6405 17.3333 14.9796 17.3333 15.3333V19.9999H14.6667V15.3333C14.6667 14.2724 15.0881 13.255 15.8382 12.5048C16.5884 11.7547 17.6058 11.3333 18.6667 11.3333V11.3333Z"
        //stroke="#308EFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        isHover={isHover}
      />
      <Path
        d="M12 12H9.33334V20H12V12Z"
        //stroke="#308EFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        isHover={isHover}
      />
      <Path
        d="M10.6667 9.99992C11.403 9.99992 12 9.40296 12 8.66659C12 7.93021 11.403 7.33325 10.6667 7.33325C9.93029 7.33325 9.33334 7.93021 9.33334 8.66659C9.33334 9.40296 9.93029 9.99992 10.6667 9.99992Z"
        //stroke="#308EFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        isHover={isHover}
      />
    </Svg>
  );
};
export default LinkdeinIcon;
const Svg = styled.svg`
  z-index: 3;
`;

const Circle = styled.circle<{ isHover: boolean }>`
  fill: var(--primary-color-light);
  transition: fill 0.5s;
  fill: ${({ isHover }) =>
    isHover ? "var(--primary-color-dark)" : "var(--primary-color-light)"};
`;
const Path = styled.path<{ isHover: boolean }>`
  transition: stroke 0.5s;
  stroke: ${({ isHover }) => (isHover ? "white" : "var(--primary-color-dark)")};
`;
