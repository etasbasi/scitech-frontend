import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export const ABOUT_US = gql`
  query {
    aboutUs {
      Content
      images {
        id
        url
      }
    }
  }
`;

export const PROJECTS = gql`
  query {
    projects {
      id
      title
      description
      images {
        url
        id
      }
    }
  }
`;

export const MEMBERS = gql`
  query {
    members {
      id
      name
      position
      email
      image {
        url
      }
    }
  }
`;

export const CONTACT = gql`
  query {
    contact {
      content
    }
  }
`;
