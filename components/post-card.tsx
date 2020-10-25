import { device } from "../consts/theme";
import styled from "styled-components";
import { Posts_posts_nodes } from "../wpapi";
import Link from "next/link";

const PostCard: React.FC<Posts_posts_nodes> = ({
  slug,
  featuredImage,
  title,
  excerpt,
}) => (
  <Link href={`article/${slug}`}>
    <Container>
      <Post>
        <Image
          src={featuredImage?.node?.mediaItemUrl || "/PostImgPlaceholder.jpg"}
          alt={title + " - Featured image"}
        />

        <ContentContainer>
          <Title>{title}</Title>

          <Content dangerouslySetInnerHTML={{ __html: excerpt }} />
          <H5>READ ARTICLE NOW</H5>
        </ContentContainer>
      </Post>
    </Container>
  </Link>
);

export default PostCard;

const Container = styled.article`
  width: 30%;
  padding: 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 12px;
  transition: box-shadow 0.3s linear;

  @media ${device.laptop} {
    width: 45%;
  }
  @media ${device.tablet} {
    width: 100%;
    align-items: center;
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    .title {
      color: var(--button-alternate-color);
    }
  }
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
  margin-top: 0.5rem;
  color: var(--secondary-color-normal);
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
const H5 = styled.h5`
  font-size: 90%;
  margin-top: auto;
`;
const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media ${device.tablet} {
    align-items: center;
  }
`;
