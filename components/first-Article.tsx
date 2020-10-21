import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { device } from "../consts/theme";

interface Props {
  data: {
    excerpt: string;
    frontmatter: {
      featuredImage: {
        childImageSharp: {
          fluid: object;
        };
      };
      slug: string;
      title: string;
    };
  };
}

const FirstArticle = ({ data }: Props) => (
  <Container>
    <LinkContainer to={data.frontmatter.slug}>
      {data.frontmatter.featuredImage && (
        <Image
          fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt={data.frontmatter.title + " - Featured image"}
        />
      )}
      <ContentContainer>
        <Title>{data.frontmatter.title}</Title>

        <P>{data.excerpt}</P>
        <H5>READ ARTICLE NOW</H5>
      </ContentContainer>
    </LinkContainer>
  </Container>
);

export default FirstArticle;

const Container = styled.article`
  padding: 16px;
  margin-right: 8px;
  background-color: #fff;
  border-radius: 12px;
  transition: box-shadow 0.3s linear;
  margin-bottom: 0.25rem;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
    .title {
      color: var(--button-alternate-color);
    }
  }

  @media (max-width: $breakpoint-md) {
    padding: 0;
    .post-content {
      padding: 16px;
      margin-top: 0;
    }
  }
`;
const Image = styled(Img)`
  border-radius: 12px;
  width: 45%;
  max-width: 680px !important;
  img {
    display: block;
    margin: 0;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;
const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`;
const ContentContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  margin-left: 4rem;
  @media ${device.tablet} {
    width: 100%;
    margin-left: 0;
  }
`;
const P = styled.p`
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
const LinkContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 16rem;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
