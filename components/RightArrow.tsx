import styled from "styled-components";
import RingSvg from "./RingSvg";

const RightArrow: React.FC = () => (
  <Arrow>
    <Line />
    <Point />
    <CustopmRingSvg />
  </Arrow>
);

export default RightArrow;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  margin-top: -22px;
  margin-left: 1rem;
`;

const Line = styled.div`
  width: 2.5rem;
  background: var(--primary-color-normal);
  height: 1px;
  z-index: 1;
`;
const Point = styled.div`
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-left: 8px solid var(--primary-color-normal);
  border-bottom: 4px solid transparent;
  z-index: 1;
`;
const CustopmRingSvg = styled(RingSvg)`
  margin-left: -1.4rem;
  display: flex;
`;
