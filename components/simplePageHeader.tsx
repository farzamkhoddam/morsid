import styled from "styled-components";
import Menu from "../components/menu";

interface Props {
  activeItemIndex: number;
}

const SimplePageHeader: React.FC<Props> = ({ activeItemIndex }) => {
  return (
    <Container>
      <Menu activeItemIndex={activeItemIndex} />
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
  position: relative;
`;
