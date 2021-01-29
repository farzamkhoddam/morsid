import { Post } from "../../wpapi";
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
interface Props {
  post: Post;
}

export function ArticleView({ post }: Props) {
  const windowSize = useWindowSize();
  function getSmartScreenWidth() {
    return windowSize.width > 1440 ? 1440 : windowSize.width;
  }
  function getSmartScreenheight() {
    // این نسبت یک دوم بستگی به ریشیوی عکس داره. اینجا ریشیوی عکس اینطور درنظر گرفته شده
    // که عرض دو برابر ارتفاع هست
    return getSmartScreenWidth() / 2;
  }
  function getHeaderContainerHeight() {
    // این فاصله ایه که میخوایم بخش اطلاعات کارت پایینتر از بخش عکس قرار بگیره
    const bottomSpace = 32;
    return windowSize.width < 700
      ? "auto"
      : getSmartScreenheight() + bottomSpace;
  }

  if (!post.post) {
    return <Error statusCode={404} />;
  }

  const {
    post: { title, content, excerpt, date, featuredImage },
    viewer,
  } = post;
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
        <SimplePageHeader />
        <SEO
          title={title}
          description={content ? content : excerpt}
          image={featuredImage?.node?.mediaItemUrl}
          article={true}
        />
        <HeaderColor />

        <article className="blog-post">
          <HeaderSection style={{ height: getHeaderContainerHeight() }}>
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
                {/* <p>{removePTags(excerpt || "")}</p> */}
                <div dangerouslySetInnerHTML={{ __html: excerpt || "" }} />
                <div style={{ textAlign: "end" }}>
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
        {!viewer ? (
          <MustBuyContainer>
            <TransparentSection />
            <H4>Read the rest of this story with a premium account.</H4>
            <LoginButton to="/login" title="Login" />
          </MustBuyContainer>
        ) : !viewer.subscribed ? (
          <MustBuyContainer>
            <TransparentSection />
            <H4>Read the rest of this story with a premium account.</H4>

            <MyStripeButton />
          </MustBuyContainer>
        ) : null}

        {/* {(previous || next) && <Pagination {...props} />} */}
      </div>
    </>
  );
}
const HeaderColor = styled.header`
  background-color: var(--primary-color-normal);
  height: 40rem;
  @media ${device.laptopL} {
    height: 28rem;
  }
  @media ${device.laptop} {
    height: 15rem;
  }
`;
const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-items: center;
  position: relative;
  margin-top: -36rem;
  @media ${device.laptopL} {
    margin-top: -28rem;
  }
  @media ${device.laptop} {
    margin-top: -15rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media ${device.tablet} {
  }
`;
const ImgContainer = styled.div`
  border-radius: 12px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
  position: absolute;
  top: 0;
  @media ${device.tablet} {
    position: relative;
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
`;
const Propertie = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 55%;
  margin-left: auto;
  padding: 1rem;

  @media ${device.tablet} {
    width: 100%;
    box-shadow: none;
  }

  h1 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: var(--primary-color-normal);
    @media ${device.tablet} {
      font-size: 24px;
      line-height: 25px;
    }
    @media ${device.laptop} {
      font-size: 27px;
      line-height: 27px;
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
  }
  div {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--gray-color-light);
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
const LoginButton = styled(Button)`
  width: 264px;
  height: 64px;
`;
const MyStripeButton = styled(StripeButton)`
  width: 264px;
  height: 64px;
`;
