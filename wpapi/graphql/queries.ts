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
        featuredImage {
          node {
            mediaItemUrl
          }
        }
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
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
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
