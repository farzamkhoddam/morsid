/* eslint-disable @typescript-eslint/ban-ts-comment */
import PostCard from "components/post-card";
import { device } from "consts/theme";
import { useWindowSize } from "hooks/useWindowSize";
import styled from "styled-components";
import { Posts_posts as PostsPage } from "../../wpapi";

interface Props {
  posts: PostsPage;
}

const LastPlaybooksCards = ({ posts }: Props) => {
  const windowSize = useWindowSize();
  //TODO: refactor this with the deviceType parameter of useWindowSize hook
  let deviceType = "laptop";
  if (windowSize.width <= 800) deviceType = "tablet";
  if (windowSize.width <= 425) deviceType = "mobile";
  return (
    <CardsContainer>
      {/* کارت ۱ */}
      {posts?.nodes && posts?.nodes?.length > 0 && (
        //@ts-ignore
        <Item post={posts?.nodes?.[0]} />
      )}
      {/* کارت ۲ */}
      {posts?.nodes && posts?.nodes.length > 1 && (
        //@ts-ignore
        <Item post={posts?.nodes?.[1]} />
      )}
      {/* کارت ۳ */}
      {deviceType !== "tablet" && posts?.nodes && posts?.nodes.length > 2 && (
        //@ts-ignore
        <Item post={posts?.nodes?.[2]} />
      )}
    </CardsContainer>
  );
};

export default LastPlaybooksCards;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Item = styled(PostCard)`
  width: 32%;
  height: auto;
  @media ${device.tabletL} {
    width: 49%;
  }
  @media ${device.mobileL} {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
