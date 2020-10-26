import { device } from "../consts/theme";
import styled from "styled-components";
import { Posts_posts_nodes } from "../wpapi";
import Link from "next/link";
import ReadArticleSection from "perPageComponenta/Articles/readArticleSection";

const FirstArticle: React.FC<Posts_posts_nodes> = ({
  title,
  slug,
  featuredImage,
  excerpt,
}: Posts_posts_nodes) => (
  <Container>
    <Link href={`article/${slug}`}>
      <Post>
        <Image
          src={featuredImage?.node?.mediaItemUrl || "/PostImgPlaceholder.jpg"}
          alt={title + " - Featured image"}
        />

        <ContentContainer>
          <Title>{title}</Title>
          {/* TODO: این قسمت باید تنها سه خط باشه. فعلا موقتا با سی اس اس هندل شده اما باید از سمت وردپرس هندل بشه */}
          <Content dangerouslySetInnerHTML={{ __html: excerpt }} />

          <ReadArticleSection />
        </ContentContainer>
      </Post>
    </Link>
  </Container>
);

export default FirstArticle;

const Container = styled.article`
  padding: 16px;
  margin-right: 8px;
  background-color: #fff;
  border-radius: 12px;
  transition: box-shadow 0.3s linear;
  margin-bottom: 0.25rem;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    .title {
      color: var(--button-alternate-color);
    }
  }

  @media (max-width: $breakpoint-md) {
    padding: 0;
    .post-content {
      padding: 16px;
      margin-top: 0;
    }
  }
`;
const Image = styled.img`
  border-radius: 12px;
  width: 45%;
  max-width: 680px !important;
  object-fit: cover;
  img {
    display: block;
    margin: 0;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;
const Title = styled.h3`
  margin-bottom: 0;
`;
const ContentContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  margin-left: 4rem;
  height: fit-content;
  @media ${device.tablet} {
    width: 100%;
    margin-left: 0;
  }
`;
const Content = styled.div`
  font-size: 110%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
  margin-top: 0;
  height: 7rem;
`;

const Post = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  min-height: 16rem;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
