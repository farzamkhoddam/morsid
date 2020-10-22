/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_posts_nodes_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
}

export interface Posts_posts_nodes_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: Posts_posts_nodes_featuredImage_node | null;
}

export interface Posts_posts_nodes {
  //TODO: تایپ نیم کجا استفاده میشه و چرا به کار رفته؟
  //TODO: تایپ ها دستی ساخته شده یا از یک ابزار خاص کمک گرفته شده؟
  __typename: "Post";
  /**
   * The globally unique identifier of the post object.
   */
  id: string;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * Post publishing date.
   */
  date: string | null;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: Posts_posts_nodes_featuredImage | null;
  /**
   * A few lines at the beginning of the content
   */
  excerpt: string | null;
}

export interface Posts_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (Posts_posts_nodes | null)[] | null;
}

export interface Posts {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: Posts_posts | null;
}

export interface PostsVariables {
  first?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Post
// ====================================================

export interface Post_post_featuredImage_node {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
}

export interface Post_post_featuredImage {
  __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge";
  /**
   * The nodes of the connection, without the edges
   */
  node: Post_post_featuredImage_node | null;
}

export interface Post_post {
  __typename: "Post";
  /**
   * The globally unique identifier of the post object.
   */
  id: string;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
   */
  slug: string | null;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * Post publishing date.
   */
  date: string | null;
  /**
   * The content of the post.
   */
  content: string | null;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */
  featuredImage: Post_post_featuredImage | null;
  /**
   * A few lines at the beginning of the content
   */
  excerpt: string | null;
}

export interface Post {
  /**
   * An object of the post Type.
   */
  post: Post_post | null;
}

export interface PostVariables {
  id: string;
  idType?: PostIdType | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * The Type of Identifier used to fetch a single resource. Default is ID.
 */
export enum PostIdType {
  DATABASE_ID = "DATABASE_ID",
  ID = "ID",
  SLUG = "SLUG",
  URI = "URI",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
