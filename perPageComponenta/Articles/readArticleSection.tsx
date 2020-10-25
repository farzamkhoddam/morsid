import styled from "styled-components";
import RightArrow from "components/RightArrow";

interface Props {
  className?: string;
}
const ReadArticleSection: React.FC<Props> = ({ className }) => {
  return (
    <ReadButtonContainer>
      <H5>READ ARTICLE NOW</H5>
      <RightArrow />
    </ReadButtonContainer>
  );
};

export default ReadArticleSection;

const ReadButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
}
`;
const H5 = styled.h5`
  font-size: 90%;
  margin-top: auto;
`;
