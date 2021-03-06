import { Post, Post_post_access } from "../../wpapi";
import Error from "next/error";
import SEO from "../../components/seo";
import { device } from "../../consts/theme";
import SimplePageHeader from "components/simplePageHeader";
import { StripeButton } from "components/StripeButton";
import Button from "components/Button";
import styled from "styled-components";
import Image from "next/image";
import { useWindowSize } from "hooks/useWindowSize";
import Head from "next/head";
import GetEmail from "pageComponents/Home/getEmail";
interface Props {
  post: Post;
}

export function ArticleView({ post }: Props) {
  const windowSize = useWindowSize();

  if (!post.post) {
    return <Error statusCode={404} />;
  }

  const {
    post: { title, content, excerpt, date, featuredImage },
    viewer,
  } = post;
  console.log("navid viewer=", post);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/wordpress-style.min.css"
          media="screen"
        />
      </Head>
      <div className="page">
        <SimplePageHeader activeItemIndex={-1} />
        <SEO
          title={title}
          description={content ? content : excerpt}
          image={featuredImage?.node?.mediaItemUrl}
          article={true}
        />

        <article className="blog-post">
          <HeaderSection

          // style={{ height: getHeaderContainerHeight() }}
          >
            <HeaderColor />
            {windowSize.width > 0 ? (
              <ImgContainer>
                <Image
                  src={featuredImage?.node?.mediaItemUrl || "/home-header.jpg"}
                  alt={title + " - Featured image"}
                  width={720}
                  height={360}
                  layout="responsive"
                  priority={true}
                  objectFit="cover"
                />
              </ImgContainer>
            ) : (
              ""
            )}
            <PropertieContainer>
              <Propertie>
                <h1>{title}</h1>
                <div id="date">
                  <time>{(date || "").split("T")[0]}</time>
                </div>
              </Propertie>
            </PropertieContainer>
          </HeaderSection>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: content || excerpt || "" }}
          />
        </article>
        {/* //اگه ثبت نام نکرده بود */}
        {!viewer ? (
          <MustBuyContainer>
            <TransparentSection />
            <H4>Read the rest of this story with a premium account.</H4>
            <StyledGetEmail
              vertical={true}
              submitLabel="Get Access For Just $1"
            />
          </MustBuyContainer>
        ) : // اگه ثبت نام کرده بود اما اکانت پریمیوم رو نداشت
        !viewer.subscribed ? (
          <MustBuyContainer>
            <TransparentSection />
            <H4>Read the rest of this story with a premium account.</H4>
            <StyledButton
              title="Renew Subscription Now"
              to={process.env.clickFunelPaymentUrl}
            />
          </MustBuyContainer>
        ) : post.post.access !== Post_post_access.access ? (
          <MustBuyContainer>
            <TransparentSection />
            <H4>This Playbook Is Coming Soon...</H4>
            <StyledButton title="View Playbooks" to="/articles" />
          </MustBuyContainer>
        ) : null}

        {/* {(previous || next) && <Pagination {...props} />} */}
      </div>
    </>
  );
}
const HeaderColor = styled.section`
  background-color: var(--primary-color-normal);
  height: 33rem;
  width: 100vw;
  position: absolute;
  top: 0;
  @media ${device.laptopXS} {
    height: 28rem;
  }

  @media ${device.tabletL} {
    height: 19rem;
  }

  @media ${device.mobileL} {
    height: 8rem;
  }
  @media ${device.mobileS} {
    height: 6rem;
  }
`;
const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-items: center;
  position: relative;
  height: 45rem;
  @media ${device.laptopXS} {
    font-size: 1rem;
    line-height: 1.5rem;
    height: 40rem;
  }
  @media ${device.tabletL} {
    height: unset;
    justify-content: flex-start;
  }
`;
const ImgContainer = styled.div`
  border-radius: 12px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 4rem;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
  position: absolute;
  top: 0;
  @media ${device.tabletL} {
    position: relative;
  }
  @media ${device.mobileL} {
    margin-top: 0;
    padding: 0 1rem;
  }
`;
const PropertieContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: var(--page-max-width);
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  @media ${device.mobileL} {
    padding: 0 1rem;
  }
`;
const Propertie = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 55%;
  margin-left: auto;
  @media ${device.tabletL} {
    width: 100%;
    box-shadow: none;
  }

  h1 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: var(--primary-color-normal);
    margin: 0;
    padding: 40px;
    padding-bottom: 32px;
    @media ${device.laptopXS} {
      font-size: 27px;
      line-height: 34px;
    }
    @media ${device.tabletL} {
      padding-right: 0;
      padding-left: 0;
      padding-top: 32px;
      padding-bottom: 24px;
    }
    @media ${device.mobileL} {
      font-size: 24px;
      line-height: 34px;
    }
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--gray-color-normal);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    margin: 0;
  }
  div {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--gray-color-light);
    margin: 0;
    padding: 0 24px;
    padding-bottom: 40px;
    @media ${device.tabletL} {
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 24px;
    }
  }
  #date {
    text-align: end;
    @media ${device.tabletL} {
      text-align: start;
      margin-bottom: 0;
      padding-bottom: 1rem;
    }
  }
`;
const MustBuyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 4rem;
  max-width: var(--page-max-width);
  margin: 0 auto;
`;
const TransparentSection = styled.div`
  background: rgba(0, 0, 0, 0)
    linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5),
      rgb(255, 255, 255)
    )
    repeat scroll 0% 0%;
  height: 250px;
  margin-top: -280px;
  position: relative;
  width: 100%;
`;
const H4 = styled.h4`
  color: var(--black-color-normal);
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 156.4%;
  text-align: center;
`;
const StyledGetEmail = styled(GetEmail)`
  margin-top: 2rem;
  max-width: 26rem;
`;

const StyledButton = styled(Button)`
  width: 264px;
  height: 64px;
`;
const MyStripeButton = styled(StripeButton)`
  width: 264px;
  height: 64px;
`;
