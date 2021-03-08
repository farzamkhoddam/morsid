import React from "react";

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
}

const LeftArrow: React.FC<Props> = ({ width, height, viewBox, fill }) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox={viewBox || "0 0 24 24"}
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12L1.004 12.082L1.02024 12.2007L1.04974 12.3121L1.09367 12.4232L1.146 12.5207L1.19631 12.5952L1.29289 12.7071L5.29289 16.7071C5.68342 17.0976 6.31658 17.0976 6.70711 16.7071C7.06759 16.3466 7.09532 15.7794 6.79029 15.3871L6.70711 15.2929L4.415 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H4.415L6.70711 8.70711C7.06759 8.34662 7.09532 7.77939 6.79029 7.3871L6.70711 7.29289C6.34662 6.93241 5.77939 6.90468 5.3871 7.2097L5.29289 7.29289L1.29289 11.2929L1.2515 11.3369L1.19633 11.4047L1.12467 11.5159L1.09365 11.5769L1.05989 11.6583L1.03584 11.734L1.00683 11.8825L1 12Z"
      fill="#1D3330"
    />
  </svg>
);
export default LeftArrow;
