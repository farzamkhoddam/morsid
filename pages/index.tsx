import { GetServerSideProps, GetStaticProps } from "next";
import {
  fetchPosts,
  Posts_posts as PostsPage,
  Viewer_viewer as User,
} from "../wpapi";
import SEO from "../components/seo";
import Footer from "components/footer";
import HomeMenu from "pageComponents/Home/menu";
import HomeHeader from "pageComponents/Home/header";
import LastPlaybooks from "pageComponents/Home/lastPlaybooks";
import OurMission from "pageComponents/Home/ourMisson";
import styled from "styled-components";
import { getTokenCookie } from "utils/auth-cookie";

interface Props {
  posts: PostsPage;
  user: User;
}

export default function Home({ posts, user }: Props) {
  return (
    <Container>
      <SEO />
      <HomeMenu user={user} />
      <HomeHeader user={user} />
      <LastPlaybooks posts={posts} />
      <OurMission user={user} />
      <Footer />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = getTokenCookie(req);
  const res = await fetchPosts({
    variables: { first: 3 },
    clientConfig: () =>
      token ? { headers: { Authorization: `Bearer ${token}` } } : {},
  });
  const posts = res?.data?.data.posts;

  return {
    props: {
      user: res?.data?.data?.viewer,
      posts,
    },
    // revalidate: 20,
  };
};

const Container = styled.div`
  position: "relative";
  padding-top: var(--header-height-desktop);
`;
