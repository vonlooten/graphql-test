import { gql } from "@apollo/client"

export const QUERY_BLOCK_LIST = gql`
query BlockList {
  blocks {
    edges {
      node {
        id
        transactionCount
        height
        transactions {
          edges {
            node {
              id
              operations {
                id
                type
              }
              operationCount
            }
          }
        }
      }
    }
  }
}`