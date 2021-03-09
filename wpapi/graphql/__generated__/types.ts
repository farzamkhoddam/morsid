/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_posts_nodes_smallThumbnail_postSmallThumbnail {
  __typename: "MediaItem";
  /**
   * Url of the mediaItem
   */
  mediaItemUrl: string | null;
}

export interface Posts_posts_nodes_smallThumbnail {
  __typename: "Post_Smallthumbnail";
  postSmallThumbnail: Posts_posts_nodes_smallThumbnail_postSmallThumbnail | null;
}

export interface Posts_posts_nodes {
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
   * The excerpt of the post.
   */
  excerpt: string | null;
  smallThumbnail: Posts_posts_nodes_smallThumbnail | null;
}

export interface Posts_posts_pageInfo {
  __typename: "WPPageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
}

export interface Posts_posts {
  __typename: "RootQueryToPostConnection";
  /**
   * The nodes of the connection, without the edges
   */
  nodes: (Posts_posts_nodes | null)[] | null;
  /**
   * Information about pagination in a connection.
   */
  pageInfo: Posts_posts_pageInfo | null;
}

export interface Posts {
  /**
   * Connection between the RootQuery type and the post type
   */
  posts: Posts_posts | null;
}

export interface PostsVariables {
  after?: string | null;
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
export enum Post_post_access {
  blocked = "blocked",
  access = "access",
  coming = "coming",
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
   * The excerpt of the post.
   */
  excerpt: string | null;
  /**
   * The content of the post.
   */
  content: string | null;
  /**
   * Connection between the NodeWithFeaturedImage type and the MediaItem type
   */

  featuredImage: Post_post_featuredImage | null;
  /**
   * shows viewew has permission for reading playbook or not
   */
  access: Post_post_access;
}

export interface Post_viewer {
  __typename: "User";
  /**
   * Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
   */
  email: string | null;
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   */
  firstName: string | null;
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   */
  lastName: string | null;
  subscribed: boolean | null;
}

export interface Post {
  /**
   * An object of the post Type.
   */
  post: Post_post | null;
  /**
   * Returns the current user
   */
  viewer: Post_viewer | null;
}

export interface PostVariables {
  id: string;
  idType?: PostIdType | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_registerUser {
  __typename: "RegisterUserPayload";
  clientMutationId: string | null;
}

export interface RegisterUser {
  /**
   * The payload for the registerUser mutation
   */
  registerUser: RegisterUser_registerUser | null;
}

export interface RegisterUserVariables {
  input: RegisterUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_login {
  __typename: "LoginPayload";
  /**
   * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
   */
  refreshToken: string | null;
}

export interface LoginUser {
  /**
   * The payload for the login mutation
   */
  login: LoginUser_login | null;
}

export interface LoginUserVariables {
  input: LoginInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Viewer
// ====================================================

export interface Viewer_viewer {
  __typename: "User";
  /**
   * Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
   */
  email: string | null;
  /**
   * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
   */
  firstName: string | null;
  /**
   * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
   */
  lastName: string | null;

  subscribed: boolean | null;
}

export interface Viewer {
  /**
   * Returns the current user
   */
  viewer: Viewer_viewer | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateStripeSession
// ====================================================

export interface CreateStripeSession_createStripeSession {
  __typename: "CreateStripeSessionPayload";
  stripeSessionId: string | null;
}

export interface CreateStripeSession {
  /**
   * The payload for the createStripeSession mutation
   */
  createStripeSession: CreateStripeSession_createStripeSession | null;
}

export interface CreateStripeSessionVariables {
  input: CreateStripeSessionInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendPasswordResetEmail
// ====================================================

export interface SendPasswordResetEmail_sendPasswordResetEmail {
  __typename: "SendPasswordResetEmailPayload";
  clientMutationId: string | null;
}

export interface SendPasswordResetEmail {
  /**
   * The payload for the sendPasswordResetEmail mutation
   */
  sendPasswordResetEmail: SendPasswordResetEmail_sendPasswordResetEmail | null;
}

export interface SendPasswordResetEmailVariables {
  input: SendPasswordResetEmailInput;
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

/**
 * Input for the createStripeSession mutation
 */
export interface CreateStripeSessionInput {
  clientMutationId?: string | null;
}

/**
 * Input for the login mutation
 */
export interface LoginInput {
  clientMutationId?: string | null;
  password: string;
  username: string;
}

/**
 * Input for the registerUser mutation
 */
export interface RegisterUserInput {
  aim?: string | null;
  clientMutationId?: string | null;
  description?: string | null;
  displayName?: string | null;
  email?: string | null;
  firstName?: string | null;
  jabber?: string | null;
  lastName?: string | null;
  locale?: string | null;
  nicename?: string | null;
  nickname?: string | null;
  password?: string | null;
  refreshJwtUserSecret?: boolean | null;
  registered?: string | null;
  revokeJwtUserSecret?: boolean | null;
  richEditing?: string | null;
  username: string;
  websiteUrl?: string | null;
  yim?: string | null;
}

/**
 * Input for the sendPasswordResetEmail mutation
 */
export interface SendPasswordResetEmailInput {
  clientMutationId?: string | null;
  username: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
