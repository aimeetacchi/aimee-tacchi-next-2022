import { gql } from "@apollo/client";

export const github = gql`
{
  user(login: "aimeetacchi") {
    pinnedItems(first: 10) {
      edges {
        node {
          ... on Repository {
            id
            description
            createdAt
            name
            languages(first: 10) {
              nodes {
                name
                color
              }
            }
            url
            stargazerCount
          }
        }
      }
    }
  }
}
`