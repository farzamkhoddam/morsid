import React from "react";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  className?: string;
  opacity?: string;
}

const HomeIcon: React.FC<Props> = ({
  width,
  height,
  viewBox,
  fill,
  className,
  opacity,
}) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity={opacity}>
      <g clipPath="url(#clip0)">
        <path
          d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0ZM20 37.5C10.335 37.5 2.5 29.665 2.5 20C2.5 10.335 10.335 2.5 20 2.5C29.665 2.5 37.5 10.335 37.5 20C37.5 29.665 29.665 37.5 20 37.5Z"
          fill="#DBBD82"
          stroke="#DBBD82"
          strokeWidth="0.2"
        />
        <path
          d="M13.75 16.25C15.1307 16.25 16.25 15.1307 16.25 13.75C16.25 12.3693 15.1307 11.25 13.75 11.25C12.3693 11.25 11.25 12.3693 11.25 13.75C11.25 15.1307 12.3693 16.25 13.75 16.25Z"
          fill="#DBBD82"
          stroke="#DBBD82"
          strokeWidth="0.2"
        />
        <path
          d="M26.25 16.25C27.6307 16.25 28.75 15.1307 28.75 13.75C28.75 12.3693 27.6307 11.25 26.25 11.25C24.8693 11.25 23.75 12.3693 23.75 13.75C23.75 15.1307 24.8693 16.25 26.25 16.25Z"
          fill="#DBBD82"
          stroke="#DBBD82"
          strokeWidth="0.2"
        />
        <path
          d="M28.75 20C28.75 24.8325 24.8325 28.75 20 28.75C15.1675 28.75 11.25 24.8325 11.25 20H8.75C8.75 26.2132 13.7868 31.25 20 31.25C26.2132 31.25 31.25 26.2132 31.25 20H28.75Z"
          fill="#DBBD82"
          stroke="#DBBD82"
          strokeWidth="0.2"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </g>
  </svg>
);
export default HomeIcon;
