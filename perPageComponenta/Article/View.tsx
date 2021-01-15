import { Post } from "../../wpapi";
import Error from "next/error";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import SimplePageHeader from "components/simplePageHeader";
import { StripeButton } from "components/StripeButton";
import Button from "components/Button";
import styled from "styled-components";
import Image from "next/image";
import { useWindowSize } from "hooks/useWindowSize";
interface Props {
  post: Post;
}
function removePTags(text: string) {
  return text.replace("<p>", "").replace("</p>", "");
}

export function ArticleView({ post }: Props) {
  const windowSize = useWindowSize();
  function getSmartScreenWidth() {
    return windowSize.width > 1440 ? 1440 : windowSize.width;
  }

  if (!post.post) {
    return <Error statusCode={404} />;
  }

  const {
    post: { title, content, excerpt, date, featuredImage },
    viewer,
  } = post;
  return (
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
        {featuredImage && windowSize.width > 0 ? (
          <ImgContainer
            style={{
              position: "relative",
              width: `${getSmartScreenWidth()}px`,
              height: getSmartScreenWidth() / 2,
              padding: "0 1rem",
            }}
          >
            <Image
              src={featuredImage?.node?.mediaItemUrl || ""}
              alt={title + " - Featured image"}
              // width={getSmartScreenWidth()}
              // height={625}
              layout="fill"
              objectFit="contain"
            />
          </ImgContainer>
        ) : (
          ""
        )}
        <PropertieContainer>
          <Propertie>
            <h1>{title}</h1>
            <p>{removePTags(excerpt || "")}</p>
            <div>
              <time>{(date || "").split("T")[0]}</time>
            </div>
          </Propertie>
        </PropertieContainer>
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
          <StripeButton />
        </MustBuyContainer>
      ) : null}
      <Footer />
      {/* {(previous || next) && <Pagination {...props} />} */}
    </div>
  );
}
const HeaderColor = styled.header`
  background-color: var(--primary-color-normal);
  height: 40rem;
`;

const ImgContainer = styled.div`
  border-radius: 12px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -36rem;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 1rem;
`;
const PropertieContainer = styled.div`
  width: 100%;
  position: relative;
  max-width: var(--page-max-width);
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;
const Propertie = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 55%;
  margin-left: auto;
  padding: 1rem;
  margin-top: -30%;
  h1 {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: var(--primary-color-normal);
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--gray-color-normal);
  }
  div {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: var(--gray-color-light);
    text-align: end;
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
`;
const LoginButton = styled(Button)`
  width: 264px;
  height: 64px;
`;
