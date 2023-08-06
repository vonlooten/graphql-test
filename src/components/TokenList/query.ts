import { gql } from "@apollo/client"

export const QUERY_TOKEN_LIST = gql`
query TokenList {
  tokenContracts {
    edges {
      node {
        id
        name
        operations {
          edges {
            node {
              id
              timestamp
            }
          }
        }
        symbol
      }
    }
  }
}`