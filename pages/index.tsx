import { GetServerSideProps } from "next";
import {
  fetchPosts,
  Posts_posts as PostsPage,
  Viewer_viewer as User,
} from "../wpapi";
import SEO from "../components/seo";
import Footer from "components/footer";
import HomeHeader from "pageComponents/Home/header";
import LastPlaybooks from "pageComponents/Home/lastPlaybooks";
import OurMission from "pageComponents/Home/ourMisson";
import { getTokenCookie } from "utils/auth-cookie";
import React from "react";
import SimplePageHeader from "components/simplePageHeader";

interface Props {
  posts: PostsPage;
  user: User;
}

export default function Home({ posts, user }: Props) {
  return (
    <div>
      <SEO />
      <SimplePageHeader activeItemIndex={-1} user={user} />
      <HomeHeader user={user} />
      <LastPlaybooks posts={posts} />
      <OurMission user={user} />
      <Footer />
    </div>
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
