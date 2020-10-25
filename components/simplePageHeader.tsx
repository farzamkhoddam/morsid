import styled from "styled-components";
import LogoImage from "./logo";
import Menu from "../components/menu";
import { device } from "../consts/theme";

export type MenuColorType = "light" | "dark";

const SimplePageHeader: React.FC = () => {
  return (
    <Container>
      <LogoImage />
      <Menu colorType="light" />
    </Container>
  );
};
export default SimplePageHeader;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height-desktop);
  width: 100%;
  @media ${device.tablet} {
  }
`;
