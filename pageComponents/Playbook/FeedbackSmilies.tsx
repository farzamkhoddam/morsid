import { device } from "consts/theme";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import SmilyIcon from "./SVGs/Smily0";
import SmilyIcon1 from "./SVGs/Smily1";
import SmilyIcon2 from "./SVGs/Smily2";
import SmilyIcon3 from "./SVGs/Smily3";
import SmilyIcon4 from "./SVGs/Smily4";

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
        <SmilyIcon1
          width="40"
          height="40"
          fill="#dbbd82"
          opacity={contentmentLevel === 1 ? "1" : "0.5"}
        />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(2)}>
        <SmilyIcon2
          width="40"
          height="40"
          fill="#dbbd82"
          opacity={contentmentLevel === 2 ? "1" : "0.5"}
        />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(3)}>
        <SmilyIcon3
          width="40"
          height="40"
          fill="#dbbd82"
          opacity={contentmentLevel === 3 ? "1" : "0.5"}
        />
      </IconContainer>
      <IconContainer onClick={() => setContentmentLevel(4)}>
        <SmilyIcon4
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
  @media ${device.mobileM} {
    width: 320px;
  }
  @media ${device.mobileS} {
    width: 270px;
  }
`;
const IconContainer = styled.div`
  cursor: pointer;
`;
