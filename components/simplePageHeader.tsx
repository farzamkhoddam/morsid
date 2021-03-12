import styled from "styled-components";
import Menu from "../components/menu";
import { Viewer_viewer as User } from "wpapi";

interface Props {
  activeItemIndex: number;
  user?: User;
}

const SimplePageHeader: React.FC<Props> = ({ activeItemIndex, user }) => {
  return (
    <Container>
      <Menu activeItemIndex={activeItemIndex} user={user} />
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
