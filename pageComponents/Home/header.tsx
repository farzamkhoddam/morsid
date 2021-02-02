import styled from "styled-components";
import { device } from "../../consts/theme";
import Image from "next/image";
import Button from "components/Button";
import SmartCompBaseOnLogin from "components/smartCompBaseOnLogin";

export default function HomeHeader() {
  return (
    <Container>
      <CloneContainerForHashur>
        <WaveHashur1Container>
          <Image
            src="/wave-hashur-1.svg"
            alt="circle-hashur"
            width={260}
            height={260}
          />
        </WaveHashur1Container>
      </CloneContainerForHashur>
      {/* چون عکس هدر باید تا آخر صفحه بره، وقتی صحفه خیلی زوم اوت بشه بسیار زشت میشه. 
      از این دیو ایمج لیمیتر استفاده میکنیم که ایمیج از یک حدی بزرگتر نشه */}
      <ImageLimiter>
        <ImageContainer>
          <Image
            src="/home-header.jpg"
            width={686}
            height={465}
            layout="responsive"
            priority={true}
            quality={70}
          />
        </ImageContainer>
        <InnerSection>
          <CircleHashrContainer>
            <Image
              src="/circle-hashur.svg"
              alt="hashur"
              width={200}
              height={200}
            />
          </CircleHashrContainer>
          <TitleAndButton>
            <Title>MASTER THE ART OF ENGINEERING SIDE INCOME</Title>
            {/* <SignUpButton title="SIGN UP NOW" viewType="glow" to="/signup" /> */}
            {typeof window && (
              <SmartCompBaseOnLogin
                doesNotLogin={
                  <SmartButton to="/signup" title="Sign Up" viewType="glow" />
                }
                loginWithoutSubscribed={
                  <SmartButton
                    to="/account"
                    title="Get Artciles"
                    viewType="glow"
                  />
                }
                loginWithSubscribed={
                  <SmartButton
                    to="/articles"
                    title="Read Artciles"
                    viewType="glow"
                  />
                }
              />
            )}
          </TitleAndButton>
        </InnerSection>
      </ImageLimiter>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 38rem;
  background: var(--primary-color-normal);

  @media ${device.laptopL} {
    height: 29rem;
  }
  @media${device.laptopM} {
    height: 28rem;
  }
  @media ${device.laptopS} {
    height: 27rem;
  }
  @media ${device.laptopXS} {
    height: 22rem;
  }

  @media ${device.tabletL} {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    padding-top: 2rem;
    height: 40rem;
  }
  @media ${device.tabletS} {
    height: 36rem;
  }
  @media ${device.mobileL} {
    height: 27rem;
  }
  @media ${device.mobileM} {
    height: 26rem;
  }
  @media ${device.mobileS} {
    height: 23rem;
  }
`;
const ImageLimiter = styled(Container)`
  max-width: 2000px;
`;
const CloneContainerForHashur = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media ${device.tabletL} {
    display: none;
  }
`;
const WaveHashur1Container = styled.div`
  position: absolute;
  left: 0;
  bottom: -53px;
  opacity: 0.3;
  z-index: 1;
  @media ${device.laptopL} {
    left: -10px;
    bottom: -23px;
    opacity: 0.3;
    width: 150px;
    height: 150px;
  }

  @media ${device.laptopXS} {
    display: none;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: auto;
  position: absolute;
  top: 1rem;
  right: 0;
  @media ${device.tabletL} {
    position: relative;
    width: 69vw;
    margin-top: 2rem;
  }
  @media ${device.mobileL} {
    width: 100%;
    padding: 0 22px;
  }
`;
const InnerSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
  margin-top: 5rem;
  height: 29rem;

  @media (max-width: 1260px) {
    height: 28rem;
    margin-top: 1rem;
  }
  @media ${device.laptopXS} {
    height: 20rem;
  }

  @media ${device.tabletL} {
    height: 6.5rem;
    margin-top: 0;
    width: 485px;
    height: auto;
    padding: 0;
  }
  @media ${device.tabletL} {
    width: 80%;
  }
`;
const CircleHashrContainer = styled.div`
  position: absolute;
  left: -80px;
  top: -70px;
  opacity: 0.3;
  @media ${device.laptopL} {
    left: -30px;
    top: -40px;
    width: 100px;
    height: 100px;
  }
  @media ${device.laptopXS} {
    display: none;
  }
`;
const TitleAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;

  @media ${device.tabletL} {
    width: 100%;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 93px;
  line-height: 109px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 40px;

  @media ${device.laptopL} {
    font-size: 73px;
    line-height: 69px;
  }
  @media ${device.laptopXS} {
    font-size: 63px;
    line-height: 59px;
  }

  @media ${device.tabletL} {
    text-align: center;
    font-size: 56px;
    line-height: 67px;
  }
  @media ${device.mobileL} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${device.mobileM} {
    font-size: 36px;
    line-height: 43px;
  }
  @media ${device.mobileS} {
    font-size: 31px;
    line-height: 36px;
  }
`;
const SmartButton = styled(Button)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 358px;
  height: 64px;
  @media ${device.tabletL} {
    width: 358px;
  }
  @media ${device.mobileL} {
    width: 89vw;
  }
`;
