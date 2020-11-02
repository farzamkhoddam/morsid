import { Post } from "../../wpapi";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import SimplePageHeader from "components/simplePageHeader";
import { StripeButton } from "components/StripeButton";
import Button from "components/Button";
import styled from "styled-components";
interface Props {
  post: Post;
}

export function ArticleView({ post }: Props) {
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

      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{title}</h1>
            <time style={{ fontSize: "larger" }}>{date.split("T")[0]}</time>
          </section>
          {featuredImage ? (
            <ImgContainer>
              <img
                src={featuredImage?.node?.mediaItemUrl}
                alt={title + " - Featured image"}
                className="featured-image"
              />
            </ImgContainer>
          ) : (
            ""
          )}
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: content || excerpt }}
        />
      </article>
      {!viewer ? (
        <MustBuyContainer>
          <TransparentSection />
          <H4>Read the rest of this story with a premium account.</H4>
          <Button to="/login" title="Login" />
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
const ImgContainer = styled.div`
  display: flex;
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
