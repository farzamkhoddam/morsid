import styled from "styled-components";
import SEO from "../components/seo";
import HomePageContent from "../components/homePageContent";
import HomeFooter from "../components/homeFooter";
import Footer from "../components/footer";
import { device } from "../consts/theme";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <SEO />
      <Hero
        upTitle={<UpTitle className="title">{`The #1 Place to`}</UpTitle>}
        downTitle={
          <Title className="title">
            {`Learn How to `}
            <HighlightDesc>{`Make Money Online`}</HighlightDesc>
          </Title>
        }
        description={`Kakashi Hatake is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno`}
        pic={<Pic src="/ArticlesPageImg.png" alt="Featured image" />}
        bottomRow={true}
      />
      <HomePageContent />
      <HomeFooter />
      <Footer />
    </div>
  );
}

const Title = styled.h1`
  line-height: 48px;
  margin: 0 0 5px;
  font-weight: 900;
  margin-left: 5rem;
  padding-right: 12rem;
  font-size: 3.5vw;
  line-height: 100%;
  margin-bottom: 0;
  @media ${device.laptop} {
    font-size: 3vw;
    padding-right: 6rem;
  }
  @media ${device.tablet} {
    font-size: xx-large;
    padding-right: 0rem;
  }
`;
const UpTitle = styled(Title)`
  margin-top: 3rem;
`;
const HighlightDesc = styled.span`
  color: var(--primary-color-dark);
`;
const Pic = styled.img`
  position: absolute;
  top: -35px;
  width: 18em;
  left: -6em;
  @media ${device.laptop} {
    width: 15rem;
    top: 4em;
    left: -4rem;
  }
`;
