import SEO from "../../components/seo";
import styled from "styled-components";
import BlogList from "./blogList";
import { Posts_posts as PostsPage } from "../../wpapi";
import Menu from "../../components/menu";
import Button from "../../components/Button";
import Image from "next/image";
import { device } from "consts/theme";
import React from "react";
import Link from "next/link";

interface Props {
  pages: PostsPage[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const ArticlesView = ({
  pages,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: Props) => {
  return (
    <div className="page">
      <SEO />
      <Menu activeItemIndex={1} />
      <div className="wrapper">
        <H1>Hustle Playbooks</H1>
        {pages.map((page) => (
          <BlogList key={page.pageInfo?.startCursor} posts={page.nodes || []} />
        ))}
        <LoadMoreButton>
          {hasNextPage ? (
            <ThisButton
              title={isFetchingNextPage ? "Loading..." : "Load More"}
              clickHandler={fetchNextPage}
            />
          ) : null}
        </LoadMoreButton>
        <H2>Masterclass Trainings</H2>
        <MasterClasses>
          <Link href="https://go.thehustleclub.com/mm-private">
            <ImageContainer>
              <Image
                src={"/articles-masterclass1.png"}
                alt={"masterclass"}
                width={508}
                height={298}
                quality={100}
              />
            </ImageContainer>
          </Link>
          <Link href="https://go.thehustleclub.com/ipp-private">
            <MidleImageContainer>
              <Image
                src={"/articles-masterclass2.png"}
                alt={"masterclass"}
                width={508}
                height={341}
                quality={100}
              />
            </MidleImageContainer>
          </Link>
          <Link href="https://go.thehustleclub.com/fba-private">
            <ImageContainer>
              <Image
                src={"/articles-masterclass3.png"}
                alt={"masterclass"}
                width={508}
                height={298}
                quality={100}
              />
            </ImageContainer>
          </Link>
        </MasterClasses>
      </div>
    </div>
  );
};
const H1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1d3330;
  margin-top: var(--header-height-desktop);
  padding-top: 64px;
  margin-bottom: 40px;
  padding-left: 22px;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 24px;
  }
`;
const H2 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1d3330;
  margin: 80px 22px 71px;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 24px;
  }
`;
const MasterClasses = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 22px;
  margin-bottom: 186px;
  @media ${device.tabletL} {
    flex-direction: column;
    align-items: center;
  }
`;
const ImageContainer = styled.div`
  width: 362px;
  height: 212px;
  position: relative;
  cursor: pointer;
  @media ${device.tabletL} {
    width: 508px;
    height: 298px;
  }
  @media ${device.mobileL} {
    width: 80%;
    height: auto;
  }
`;
const MidleImageContainer = styled(ImageContainer)`
  margin: 0 30px;
  height: 243px;
  @media ${device.tabletL} {
    margin: 64px 0;
    height: 341px;
  }
`;
const LoadMoreButton = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 300px;
`;
const ThisButton = styled(Button)`
  width: 264px;
  height: 64px;
`;
