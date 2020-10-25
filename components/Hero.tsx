import HalfHeader from "../components/header";
import Menu from "../components/menu";
import { device } from "../consts/theme";
import styled from "styled-components";
import Button from "./Button";

interface Props {
  upTitle: React.ReactElement;
  downTitle?: React.ReactElement;
  pic: React.ReactElement;
  description: string;
  bottomRow?: true;
}

const Hero: React.FC<Props> = ({
  upTitle,
  downTitle,
  description,
  pic,
  bottomRow,
}) => {
  return (
    <>
      <TwoSidesContainer>
        <LeftSection>
          <LeftSideHeaderContainer>
            <HalfHeader />
            <TabletMenu />
          </LeftSideHeaderContainer>

          {upTitle}
          {downTitle}
          <Description>{description}</Description>
        </LeftSection>
        <RightSection>
          <Menu />
          <BlackSection />
          <PicContainer>
            <BlackNavar>{pic}</BlackNavar>
          </PicContainer>
        </RightSection>
      </TwoSidesContainer>
      {bottomRow && (
        <BottomRow>
          <Button
            to="/"
            title="Sign Up Now"
            childStyle={{ padding: "15px", fontSize: "80%" }}
          />
          <BottomLine />
          <BottomH3>{`Master Your Life And Your Money`}</BottomH3>
        </BottomRow>
      )}
    </>
  );
};
export default Hero;
const TwoSidesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100vw;
  width: 100%;
  height: auto;
  margin-bottom: 3rem;

  .tagline {
    font-size: 24px;
    margin-top: 0;
    margin-top: 2px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
const LeftSideHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  @media ${device.tablet} {
    margin-bottom: 3rem;
  }
`;
const TabletMenu = styled(Menu)`
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis: 80%;
  flex-grow: 1;
  height: inherit;
  max-width: 100vw;
`;
const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-left: 5rem;
  padding-right: 12rem;
  @media ${device.laptop} {
    padding-right: 6rem;
  }
  @media ${device.tablet} {
    padding-right: 3rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-enf;
  flex-basis: 20%;
  width: 100%;
  height: inherit;
  min-height: var(--header-height-desktop);

  @media ${device.tablet} {
    display: none;
  }
  @media ${device.mobileL} {
    max-height: 50%;
    align-items: flex-end;
  }
`;
const BlackSection = styled.div`
  width: 100%;
  height: 10rem;
  background-color: black;

  @media ${device.laptop} {
    height: 3rem;
  }

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;
const PicContainer = styled.div`
  font-size: larger;
`;
const BlackNavar = styled.div`
  background-color: black;
  width: 100%;
  height: 9em;
  position: relative;
`;
const BottomRow = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: flex-end;
  margin-top: 8rem;
  padding: 0 5rem;
  @media ${device.tablet} {
    margin-top: 0rem;
  }
`;
const BottomLine = styled.div`
  width: 8rem;
  border-bottom: 1px solid var(--input-focus-border);
  flex-grow: 1;
  margin: 0 3rem;
  @media ${device.tablet} {
    display: none;
  }
`;
const BottomH3 = styled.h3`
  margin-bottom: -0.8rem;
  font-size: 1.5vw;
  color: var(--secondary-color-light);
  @media ${device.laptop} {
    font-size: 1.4vw;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
