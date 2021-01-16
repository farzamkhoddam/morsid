import styled from "styled-components";
import NextImage from "next/image";
import Link from "next/link";
import format from "date-fns/format";
import { device } from "../consts/theme";
import { Posts_posts_nodes as Post } from "../wpapi";

const PostCard = ({ post }: { post: Post }) => {
  const { smallThumbnail, title, excerpt } = post;

  return (
    <Container>
      <PostWrapper>
        <GreySide>
          <ImageContainer>
            <Image
              src={
                smallThumbnail?.postSmallThumbnail?.mediaItemUrl ||
                "/article-image-placeholder.png"
              }
              alt={title + " - Featured image"}
            />
          </ImageContainer>
        </GreySide>
        <ContentContainer>
          <WritesContainer>
            <Link href={`/article/${post.slug}`}>
              <a>
                <Title>{title}</Title>
              </a>
            </Link>
            <Content dangerouslySetInnerHTML={{ __html: excerpt || "" }} />
          </WritesContainer>
          <ReadButtonContainer>
            <Link href={`/article/${post.slug}`}>
              <a>Read More</a>
            </Link>
            <DateContainer>
              <NextImage
                src="/calendar.svg"
                alt="Logo"
                width={24}
                height={24}
              />
              <span>
                {format(new Date(post.date || Date.now()), "LLL, dd, uuuu")}
              </span>
            </DateContainer>
          </ReadButtonContainer>
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
  color: var(--primary-color-normal);
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
  display: flex;
  justify-content: center;
  background-color: #dbdddc;
  width: 100%;
`;
const ImageContainer = styled.div`
  margin-bottom: -7rem;
  width: 70%;
  height: 70%;
`;
const ReadButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 1rem 1rem;
}
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;
