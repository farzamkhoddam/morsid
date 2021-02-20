import { GetStaticProps } from "next";
import { fetchPosts, Posts_posts as PostsPage } from "../wpapi";
import SEO from "../components/seo";
import Footer from "components/footer";
import HomeMenu from "pageComponents/Home/menu";
import HomeHeader from "pageComponents/Home/header";
import LatArticles from "pageComponents/Home/lastArticles";
import OurMission from "pageComponents/Home/ourMisson";
import styled from "styled-components";

interface Props {
  posts: PostsPage;
}

export default function Home({ posts }: Props) {
  return (
    <Container>
      <SEO />
      <HomeMenu />
      <HomeHeader />
      <LatArticles posts={posts} />
      <OurMission />
      <Footer />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await fetchPosts({ variables: { first: 3 } })).data?.data
    .posts;

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};

const Container = styled.div`
  position: relative;
  padding-top: var(--header-height-desktop);
  width: fit-content;
`;
