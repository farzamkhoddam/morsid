import { device } from "../consts/theme";
import styled from "styled-components";
import { Posts_posts_nodes as Post } from "../wpapi";
import ReadArticleSection from "perPageComponenta/Articles/readArticleSection";

const PostCard = ({ post }: { post: Post }) => {
  const { featuredImage, title, excerpt } = post;

  return (
    <Container>
      <PostWrapper>
        <GreySide>
          <ImageContainer>
            <Image
              src={
                featuredImage?.node?.mediaItemUrl ||
                "/article-image-placeholder.png"
              }
              alt={title + " - Featured image"}
            />
          </ImageContainer>
        </GreySide>
        <ContentContainer>
          <WritesContainer>
            <Title>{title}</Title>
            <Content dangerouslySetInnerHTML={{ __html: excerpt || "" }} />
          </WritesContainer>
          <ReadArticleSection post={post} />
        </ContentContainer>
      </PostWrapper>
    </Container>
  );
};

export default PostCard;

const Container = styled.article`
  width: 100%;
`;

const Image = styled.img`
  border-radius: 12px;
  width: 100%;
  max-width: 680px !important;
  img {
    display: block;
    margin: 0;
  }
`;
const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  margin-bottom: 0;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  width: 100%;
  margin-top: 4.5rem;
  color: var(--secondary-color-normal);
`;
const WritesContainer = styled.div`
  margin-left: 0.5rem;
`;
const Content = styled.p`
  font-size: 110%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 0;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #fff;
  transition: box-shadow 0.3s linear;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.12);

  @media ${device.tablet} {
    align-items: center;
  }
`;
const GreySide = styled.div`
  background-color: #dbdddc;
`;
const ImageContainer = styled.div`
  margin-bottom: -7rem;
  width: 70%;
  height: 70%;
  margin-left: 3rem;
`;
