import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { RiArrowRightSLine } from 'react-icons/ri'
import Layout from '../components/layout'
import BlogListHome from '../components/blog-list-home'
import SEO from '../components/seo'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import { device } from '../util/theme'

export const pageQuery = graphql`
  query Articles($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const Articles = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ''
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  return (
    <Layout wide={true}>
      <SEO />
      <Hero>
        <LeftSection>
          <h1 className="title">{frontmatter.title}</h1>
          <p className="tagline">{frontmatter.tagline}</p>
          <Description dangerouslySetInnerHTML={{ __html: html }} />
          {frontmatter?.cta?.ctaText && (
            <Link to={frontmatter.cta.ctaLink} className="button">
              {frontmatter.cta.ctaText}
              <span className="icon -right">
                <RiArrowRightSLine />
              </span>
            </Link>
          )}
        </LeftSection>
        <RightSection>
          {!isActiveMenu ? (
            <DeactiveMenuNavContainer>
              <Navigation setIsActiveMenu={setIsActiveMenu} isActiveMenu={isActiveMenu} />
            </DeactiveMenuNavContainer>
          ) : (
            <ActiveMenuNavContainer>
              <Navigation setIsActiveMenu={setIsActiveMenu} isActiveMenu={isActiveMenu} />
            </ActiveMenuNavContainer>
          )}

          <BlackSection />

          {Image ? <Pic src={Image.src} alt={frontmatter.title + ' - Featured image'} /> : ''}
          {/* {Image ? <Pic fluid={Image} alt={frontmatter.title + ' - Featured image'} /> : ''} */}
        </RightSection>
      </Hero>
      <BlogListHome style={{ maxWidth: '1240px' }} />
    </Layout>
  )
}

export default Articles

const Hero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100vw;
  width: 100%;
  width: 100%;
  height: 50vh;
  margin-bottom: 3rem;

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
  .title {
    font-size: 48px;
    line-height: 48px;
    margin: 0 0 5px;
    font-weight: 900;
  }
  .tagline {
    font-size: 24px;
    margin-top: 0;
    margin-top: 2px;
    color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: $breakpoint-md) {
    padding-top: 30px;
    > div:nth-child(1) {
      padding-bottom: 30px;
    }
  }
`
const LeftSection = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 5rem;
  padding-right: 7rem;
`
const Description = styled.div`
  p {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`
const RightSection = styled.div`
  height: 100%;
  max-width: 30rem;
  width: -webkit-fill-available;
  margin-top: -3rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  @media ${device.tablet} {
    max-width: 100vw;
    align-items: flex-end;
  }
  @media ${device.mobileL} {
    max-height: 50%;
    align-items: flex-end;
  }
`
const BlackSection = styled.div`
  width: 100%;
  height: inherit;
  background-color: black;
  @media ${device.mobileL} {
    display: none;
  }
`
const Pic = styled.img`
  margin-top: -50%;
  margin-right: 30%;
  width: 50%;
  @media ${device.tablet} {
    margin-top: -12%;
    margin-right: 3rem;
    width: 5rem;
  }
  @media ${device.mobileL} {
    display: none;
  }
`
const DeactiveMenuNavContainer = styled.div`
  height: 3rem;
  background: black !important;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  z-index: 2;
`
const ActiveMenuNavContainer = styled.div`
  height: 3rem;
  background: var(--secondary-color-dark);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
`
