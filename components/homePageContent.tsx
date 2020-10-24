import styled from "styled-components";
import Button from "./Button";
import { device } from "../consts/theme";
const HomePageContent = () => {
  return (
    <Container>
      <LeftSection>
        <Img src={"/Frontpaleta.png"} alt="design" />
        <LeftSectionContent>
          <H3>{`Articles Released Weakly To Help You Make Money`}</H3>
          <H4>{`In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing `}</H4>
          <SignUpBtn to="/" title="Sign Up Now" />
        </LeftSectionContent>
        {/* <ColoredRectangle /> */}
      </LeftSection>
      <RightSection>
        <H2>
          Level Up Your Skills with Our <Span>Coaches</Span>
        </H2>
        <H4Light style={{ lineHeight: "1.4rem" }}>
          Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who
          is perfectly content with his monotonous lifestyle in Tokyo, other
          than failing to nail down a girlfriend even once throughout his life
        </H4Light>
        <Row>
          <LI />
          <H4Light>Digital Marketing</H4Light>
        </Row>
        <Row>
          <LI />
          <H4Light>Design</H4Light>
        </Row>
        <Row>
          <LI />
          <H4Light>Seo</H4Light>
        </Row>
        <H2> Some of the topics covered inside...</H2>
        <TopicsGroup>
          <Topic1>
            <div>
              <ImgIcon src={"/ads.png"} alt="Ads" />
              <H4Dark>Facebook Ads</H4Dark>
            </div>
          </Topic1>
          <Topic2>
            <div>
              <ImgIcon src={"/Marketing.png"} alt="marketing" />
              <H4Dark>Marketing Agencies</H4Dark>
            </div>
          </Topic2>

          <Topic3>
            <div>
              <ImgIcon src={"/Email.png"} alt="email"></ImgIcon>
              <H4Dark>Email Marketing</H4Dark>
            </div>
          </Topic3>
          <Topic4>
            <div>
              <ImgIcon src={"/Dropshipping.png"} alt="Dropshipping"></ImgIcon>
              <H4Dark>Dropshipping & Ecommerce</H4Dark>
            </div>
          </Topic4>
        </TopicsGroup>
      </RightSection>
    </Container>
  );
};

export default HomePageContent;

const Container = styled.section`
  display: Flex;
  margin-top: 8rem;
  background-image: "/mountainsAbstract.png";
  @media ${device.laptop} {
    margin-top: 0rem;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
  }
`;
const LeftSection = styled.div`
  display: Flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  background-color: black;
  padding: 3rem 0;
  margin-top: 7rem;
  @media ${device.laptop} {
    margin-top: 9rem;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;
const LeftSectionContent = styled.div`
  display: Flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  text-align: center;
`;

const H3 = styled.h3`
  color: white;
  z-index: 1;
`;
const H4 = styled.h4`
  color: white;
  z-index: 1;
  color: var(--primary-color-light);
`;

const Img = styled.img`
  max-width: 75%;
  height: 30rem;
  object-fit: contain;
  margin-top: -13rem;
  max-width: 30%;
  min-width: 40%;
  z-index: 1;
  @media ${device.laptop} {
    margin-top: -16rem;
  }
  @media ${device.tablet} {
    margin-top: -16rem;
    min-width: unset;
  }
  @media ${device.mobileL} {
    margin-top: -17rem;
  }
`;
const RightSection = styled.div`
  display: Flex;
  width: 40%;
  padding-left: 2rem;
  flex-direction: column;
  margin-top: 5.2rem;
  margin-right: 4rem;
  @media ${device.tablet} {
    width: 100%;
  }
`;
const H2 = styled.h2`
  color: var(--secondary-color-light);
  font-size: 155%;
  line-height: initial;
`;
const Span = styled.span`
  color: var(--primary-color-dark);
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const LI = styled.div`
  background-color: var(--primary-color-dark);
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.5rem;
`;
const H4Dark = styled(H4)`
  margin-top: 0rem;
  margin-bottom: 0rem;
  color: black;
  color: var(--secondary-color-dark);
  text-align: center;
`;
const H4Light = styled.h4`
  margin-bottom: 0.5rem;
  margin-left: 0;
  text=align: left;
  color: var(--secondary-color-light);
`;
const TopicsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Topic = styled.div`
  width: 50%;
  height: 10rem;
  margin-top: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
    height: 100%;
  }

  @media ${device.tablet} {
    height: 15rem;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const Topic1 = styled(Topic)`
  div {
    background-color: var(--button-alternate-color);
  }
`;
const Topic2 = styled(Topic)`
  div {
    background-color: var(--primary-color);
  }
`;
const Topic3 = styled(Topic)`
  div {
    background-color: var(--primary-color-normal);
  }
`;
const Topic4 = styled(Topic)`
  div {
    background-color: var(--primary-color-light);
  }
`;
const SignUpBtn = styled(Button)`
  width: 100%;
`;
const ImgIcon = styled.img`
  width: 3rem;
  height: auto;
  object-fit: contain;
  margin-bottom: 0.7rem;
`;
