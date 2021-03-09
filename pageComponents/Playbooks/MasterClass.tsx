import { device } from "consts/theme";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const MasterClasses: React.FC = () => {
  return (
    <>
      <H2>Masterclass Trainings</H2>
      <Container>
        <ClassItem>
          <Link href="https://go.thehustleclub.com/mm-private">
            <ImageContainer>
              <Image
                src={"/articles-masterclass1.png"}
                alt={"masterclass"}
                width={508}
                height={298}
                quality={100}
              />
            </ImageContainer>
          </Link>
          <H3>Online Billboard ADS</H3>
        </ClassItem>
        <MidleClassItem>
          <Link href="https://go.thehustleclub.com/ipp-private">
            <MidleImageContainer>
              <Image
                src={"/articles-masterclass2.png"}
                alt={"masterclass"}
                width={508}
                height={341}
                quality={100}
              />
            </MidleImageContainer>
          </Link>
          <H3>Mistery Masterclass</H3>
        </MidleClassItem>
        <ClassItem>
          <Link href="https://go.thehustleclub.com/fba-private">
            <ImageContainer>
              <Image
                src={"/articles-masterclass3.png"}
                alt={"masterclass"}
                width={508}
                height={298}
                quality={100}
              />
            </ImageContainer>
          </Link>
          <H3>rank & bank system</H3>
        </ClassItem>
      </Container>
    </>
  );
};
export default MasterClasses;
const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 22px;
  margin-bottom: 186px;
  @media ${device.tabletL} {
    flex-direction: column;
    align-items: center;
  }
`;
const ClassItem = styled.div`
  width: auto;
`;
const MidleClassItem = styled(ClassItem)`
  margin: 0 30px;
  @media ${device.tabletL} {
    margin: 54px auto;
  }
`;

const H2 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1d3330;
  margin: 80px 22px 40px;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 35px;
  }
`;
const ImageContainer = styled.div`
  width: 362px;
  height: 212px;
  position: relative;
  cursor: pointer;
  @media ${device.tabletL} {
    width: 508px;
    height: 298px;
  }
  @media ${device.mobileL} {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
`;

const MidleImageContainer = styled(ImageContainer)`
  height: 243px;
  @media ${device.tabletL} {
    height: auto;
  }
`;
const H3 = styled.div`
  font-family: Bebas Neue;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #1d3330;
  margin-top: 24px;
  @media ${device.tabletL} {
    margin-top: 32px;
  }
  @media ${device.mobileM} {
    font-size: 30px;
    line-height: 33px;
  }
`;
