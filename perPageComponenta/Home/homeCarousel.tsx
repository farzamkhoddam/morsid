import PostCard from "components/post-card";
import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { Posts_posts as PostsPage } from "../../wpapi";

interface Props {
  posts: PostsPage;
  value: number;
  onChange: (value: number) => void;
}

const HomeCarousel = ({ value, onChange, posts }: Props) => {
  if (!process.browser) {
    return null;
  }
  return (
    <CardsContainer>
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        breakpoints={
          {
            425: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            1380: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          } as any
        }
      >
        {posts.nodes?.map((post) =>
          post ? <Item key={post.id} post={post} /> : null,
        )}
      </Carousel>
    </CardsContainer>
  );
};

export default HomeCarousel;

const CardsContainer = styled.div`
  width: 100%;
`;

const Item = styled(PostCard)`
  margin: 0 10px;
`;
