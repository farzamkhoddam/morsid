import { Post } from "../../wpapi";
import SEO from "../../components/seo";
import Footer from "../../components/footer";
import SimplePageHeader from "components/simplePageHeader";
import { StripeButton } from "components/StripeButton";
import Button from "components/Button";

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
            <time>{date}</time>
          </section>
          {featuredImage ? (
            <img
              src={featuredImage?.node?.mediaItemUrl}
              alt={title + " - Featured image"}
              className="featured-image"
            />
          ) : (
            ""
          )}
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
      {!viewer ? (
        <Button to="/login" title="Login" />
      ) : (
        <StripeButton title="Subscribe Now" />
      )}
      <Footer />
      {/* {(previous || next) && <Pagination {...props} />} */}
    </div>
  );
}
