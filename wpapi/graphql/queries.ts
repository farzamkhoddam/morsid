function gql(s: TemplateStringsArray) {
  return s.join("");
}

export const POSTS = gql`
  query Posts($after: String, $first: Int) {
    posts(after: $after, first: $first) {
      nodes {
        id
        slug
        title
        date
        excerpt
        smallThumbnail {
          postSmallThumbnail {
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
    viewer {
      email
      firstName
      lastName
      subscribed
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
      access
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

export const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation SendPasswordResetEmail($input: SendPasswordResetEmailInput!) {
    sendPasswordResetEmail(input: $input) {
      clientMutationId
    }
  }
`;
