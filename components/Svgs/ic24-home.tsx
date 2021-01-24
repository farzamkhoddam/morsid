import React from "react";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  className?: string;
}

const HomeIcon: React.FC<Props> = ({
  width,
  height,
  viewBox,
  fill,
  className,
}) => (
  <svg
    className={className}
    width={width || "24"}
    height={height || "24"}
    viewBox={viewBox || "0 0 24 24"}
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.00005 22C5.3432 22 4.00005 20.6569 4.00005 19V13H3.00005C2.10915 13 1.66298 11.9229 2.29294 11.2929L11.2929 2.29289C11.6835 1.90237 12.3166 1.90237 12.7072 2.29289L21.7072 11.2929C22.3371 11.9229 21.891 13 21.0001 13H20.0001V19C20.0001 20.6569 18.6569 22 17.0001 22H7.00005ZM12.0001 4.41421L5.35096 11.0633C5.73015 11.2054 6.00005 11.5712 6.00005 12V19C6.00005 19.5523 6.44777 20 7.00005 20L9.00005 19.999L9.00005 16C9.00005 14.8954 9.89548 14 11.0001 14H13.0001C14.1046 14 15.0001 14.8954 15.0001 16L15 19.999L17.0001 20C17.5523 20 18.0001 19.5523 18.0001 19V12C18.0001 11.5712 18.27 11.2054 18.6491 11.0633L12.0001 4.41421ZM13.0001 16H11.0001L11 19.999H13L13.0001 16Z"
      fill="currentColor"
    />
  </svg>
);
export default HomeIcon;
