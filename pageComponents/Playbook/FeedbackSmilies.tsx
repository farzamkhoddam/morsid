import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import SmilyIcon from "./SVGs/Smily0";

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
        <SmilyIcon
          width="40"
          height="40"
          fill="#dbbd82"
          opacity={contentmentLevel === 0 ? "1" : "0.5"}
        />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(1)}>
        <SmilyIcon
          width="40"
          height="40"
          fill="#dbbd82"
          opacity={contentmentLevel === 1 ? "1" : "0.5"}
        />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(2)}>
        <SmilyIcon
          width="40"
          height="40"
          fill="#dbbd82"
          opacity={contentmentLevel === 2 ? "1" : "0.5"}
        />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(3)}>
        <SmilyIcon
          width="40"
          height="40"
          fill="#dbbd82"
          opacity={contentmentLevel === 3 ? "1" : "0.5"}
        />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(4)}>
        <SmilyIcon
          width="40"
          height="40"
          fill="#dbbd82"
          opacity={contentmentLevel === 4 ? "1" : "0.5"}
        />
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
  cursor: pointer;
`;
