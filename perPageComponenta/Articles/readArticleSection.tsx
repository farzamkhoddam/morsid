import styled from "styled-components";
import Image from "next/image";

interface Props {
  className?: string;
  date?: string;
}
const ReadArticleSection: React.FC<Props> = ({ className, date }) => {
  return (
    <ReadButtonContainer>
      <H5>Read More</H5>
      <DateContainer>
        <CalenderContainer>
        <Image src="/calendar.svg" alt="Logo" width={150} height={60} />
        </CalenderContainer>
        <TarikhContainer>
        <h6>{date || "../../.."}</h6>
        </TarikhContainer>
      </DateContainer>
    </ReadButtonContainer>
  );
};

export default ReadArticleSection;

const ReadButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
  margin-left: 1rem;
}
`;
const DateContainer = styled.div`
  display: flex;
`;
const CalenderContainer = styled.div`
  width:3rem;
  height:1rem;
  margin-top:1.2rem;
`
const TarikhContainer = styled.div`
margin-right: 1rem;
`
const H5 = styled.h5`
  font-size: 100%;
  margin-top: auto;
  color: #DBBD82;
`;
