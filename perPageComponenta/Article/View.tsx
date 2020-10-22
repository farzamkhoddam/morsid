import { Post } from "../../wpapi";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

export const ArticleView: React.FC<Post> = ({ post }) => {
  const { title, content, excerpt, date, featuredImage } = post;
  return (
    <Layout className="page">
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
      {/* {(previous || next) && <Pagination {...props} />} */}
    </Layout>
  );
};
