function gql(s: TemplateStringsArray) {
  return s.join("");
}

export const POSTS = gql`
  query Posts($first: Int) {
    posts(first: $first) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const POST = gql`
  query Post($id: ID!, $idType: PostIdType) {
    post(id: $id, idType: $idType) {
      id
      slug
      title
      date
      excerpt
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
    viewer {
      email
      firstName
      lastName
      subscribed
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      clientMutationId
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    login(input: $input) {
      refreshToken
    }
  }
`;

export const VIEWER = gql`
  query Viewer {
    viewer {
      email
      firstName
      lastName
      subscribed
    }
  }
`;

export const CREATE_STRIPE_SESSION = gql`
  mutation CreateStripeSession($input: CreateStripeSessionInput!) {
    createStripeSession(input: $input) {
      stripeSessionId
    }
  }
`;
