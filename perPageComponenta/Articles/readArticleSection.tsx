import styled from "styled-components";
import Image from "next/image";

interface Props {
  className?: string;
  date?: string;
}
const ReadArticleSection: React.FC<Props> = ({ className, date }) => {
  return (
    <ReadButtonContainer>
      <H5>READ More</H5>
      <DateContainer>
        <Image src="/calendar.svg" alt="Logo" width={150} height={60} />
        <h6>{date || "../../.."}</h6>
      </DateContainer>
    </ReadButtonContainer>
  );
};

export default ReadArticleSection;

const ReadButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
}
`;
const DateContainer = styled.div`
  display: flex;
`;
const H5 = styled.h5`
  font-size: 90%;
  margin-top: auto;
`;
