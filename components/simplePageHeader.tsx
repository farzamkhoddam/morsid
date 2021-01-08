import styled from "styled-components";
import Menu from "../components/menu";

export type MenuColorType = "light" | "dark";

const SimplePageHeader: React.FC = () => {
  return (
    <Container>
      <Menu />
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
`;
