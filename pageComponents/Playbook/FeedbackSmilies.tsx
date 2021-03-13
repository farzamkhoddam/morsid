import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import HomeIcon from "../../components/Svgs/ic24-home";

interface Props {
  setContentmentLevel: Dispatch<SetStateAction<number>>;
  contentmentLevel: number;
}

const FeedBackSmilies: React.FC<Props> = ({
  contentmentLevel,
  setContentmentLevel,
}: Props) => {
  return (
    <Container>
      <IconContainer onClick={() => setContentmentLevel(0)}>
        <HomeIcon width="40" height="40" />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(1)}>
        <HomeIcon width="40" height="40" />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(2)}>
        <HomeIcon width="40" height="40" />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(3)}>
        <HomeIcon width="40" height="40" />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(4)}>
        <HomeIcon width="40" height="40" />
      </IconContainer>
    </Container>
  );
};
export default FeedBackSmilies;
const Container = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const IconContainer = styled.div`
  width: auto;
`;
