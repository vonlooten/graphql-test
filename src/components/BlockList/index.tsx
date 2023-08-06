import React from "react";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { QUERY_BLOCK_LIST } from "./query";
import { BlockListQuery, Block } from "../../generated/graphql";

// interface Props {
//   blockListData: BlockListQuery;
// }

function BlockList(props:BlockListQuery) {
  const { loading, error, data } = useQuery(QUERY_BLOCK_LIST);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    data.blocks.edges.map(({ node }: { node: Block }) => { 
      console.log(node);
      return (
        <Box key={node.id} sx={{marginY: "1.0em"}}>
          {/* Render content here using the node data */}
          <Typography variant={"body1"} fontWeight={600}>{node.height}</Typography>
          <Typography variant={"body2"}>Number of transactions: {node.transactionCount}</Typography>
        </Box>
      );
    })
  )
}

export default BlockList