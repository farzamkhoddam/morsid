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
      <path
        d="M20 0.05C25.3289 0.05 30.3386 2.12512 34.1068 5.89317C37.8749 9.66137 39.95 14.6711 39.95 20C39.95 25.3289 37.8749 30.3387 34.1068 34.1068C30.3386 37.8749 25.3289 39.95 20 39.95C14.6711 39.95 9.66137 37.8749 5.89317 34.1068C2.12512 30.3387 0.05 25.3289 0.05 20C0.05 14.6711 2.12512 9.66137 5.89317 5.89317C9.66137 2.12512 14.6711 0.05 20 0.05ZM3.075 20C3.075 29.3325 10.6675 36.925 20 36.925C29.3325 36.925 36.925 29.3325 36.925 20C36.925 10.6675 29.3325 3.075 20 3.075C10.6675 3.075 3.075 10.6675 3.075 20Z"
        fill="#DBBD82"
        stroke="white"
        strokeWidth="0.1"
      />
      <path
        d="M15.575 14.0718C15.575 15.4249 14.4781 16.5218 13.125 16.5218C11.7719 16.5218 10.675 15.4249 10.675 14.0718C10.675 12.7187 11.7719 11.6218 13.125 11.6218C14.4781 11.6218 15.575 12.7187 15.575 14.0718Z"
        fill="#DBBD82"
        stroke="white"
        strokeWidth="0.1"
      />
      <path
        d="M29.325 14.0718C29.325 15.4249 28.2281 16.5218 26.875 16.5218C25.5219 16.5218 24.425 15.4249 24.425 14.0718C24.425 12.7187 25.5219 11.6218 26.875 11.6218C28.2281 11.6218 29.325 12.7187 29.325 14.0718Z"
        fill="#DBBD82"
        stroke="white"
        strokeWidth="0.1"
      />
      <line
        x1="12"
        y1="25.5"
        x2="28"
        y2="25.5"
        stroke="#DBBD82"
        strokeWidth="3"
      />
    </g>
  </svg>
);
export default HomeIcon;
