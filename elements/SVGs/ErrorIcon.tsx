import useHover from "hooks/useHover";
import React, { useRef } from "react";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
}

const ErrorIcon: React.FC<Props> = ({ width, height, viewBox }) => {
  return (
    <svg
      width={width || "56"}
      height={height || "56"}
      viewBox={viewBox || "0 0 56 56"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="28" fill="#EB5757" />
      <path
        d="M25.862 12.825L15.2745 30.5C15.0562 30.878 14.9407 31.3066 14.9395 31.7432C14.9382 32.1797 15.0513 32.6089 15.2675 32.9882C15.4837 33.3674 15.7954 33.6834 16.1716 33.9048C16.5478 34.1262 16.9755 34.2452 17.412 34.25H38.587C39.0235 34.2452 39.4511 34.1262 39.8273 33.9048C40.2036 33.6834 40.5153 33.3674 40.7314 32.9882C40.9476 32.6089 41.0607 32.1797 41.0595 31.7432C41.0583 31.3066 40.9428 30.878 40.7245 30.5L30.137 12.825C29.9141 12.4576 29.6004 12.1539 29.226 11.9431C28.8516 11.7323 28.4291 11.6216 27.9995 11.6216C27.5698 11.6216 27.1474 11.7323 26.773 11.9431C26.3986 12.1539 26.0848 12.4576 25.862 12.825V12.825Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 19.25V24.25"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 29.25H28.0125"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ErrorIcon;
