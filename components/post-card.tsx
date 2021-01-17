import styled from "styled-components";
import NextImage from "next/image";
import Link from "next/link";
import format from "date-fns/format";
import { device } from "../consts/theme";
import { Posts_posts_nodes as Post } from "../wpapi";

const PostCard = ({ post, className }: { post: Post; className?: string }) => {
  const { smallThumbnail, title, excerpt } = post;

  return (
    <Container className={className}>
      <Link href={`/article/${post.slug}`}>
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
              <a>
                <Title>{title}</Title>
              </a>

              <Content dangerouslySetInnerHTML={{ __html: excerpt || "" }} />
            </WritesContainer>
            <ReadButtonContainer>
              <ReadMore>Read More</ReadMore>

              <DateContainer>
                <NextImage
                  src="/calendar.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
                <span
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  {format(new Date(post.date || Date.now()), "LLL, dd, uuuu")}
                </span>
              </DateContainer>
            </ReadButtonContainer>
          </ContentContainer>
        </PostWrapper>
      </Link>
    </Container>
  );
};

export default PostCard;

const Container = styled.article`
  width: 100%;
  height: 100%;
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
  -webkit-box-orient: vertical;

  margin-bottom: 0;
  height: 49px; // 2 * line height +1px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--secondary-color-normal);
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
  flex: 1;
  margin-top: 2rem;
  padding: 0 1rem;
`;
const Content = styled.div`
  font-size: 110%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-top: 0;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--gray-color-normal);
  p {
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }
`;

const PostWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #fff;
  transition: box-shadow 0.3s linear;
  filter: drop-shadow(0px 0px ۶px rgba(0, 0, 0, 0.1));
  border: 1px solid rgba(0, 0, 0, 0.12);
  width: 99%;
  height: 99%;
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
const ReadMore = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--accent-color-normal);
`;
const DateContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: var(--gray-color-light);
`;
