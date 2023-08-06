import * as React from 'react';
import { useBlockListQuery } from '../../generated/graphql';
import BlockList from '.';

const BlockListContainer = () => {
  const { data, error, loading } = useBlockListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <BlockList {...data} />;
};

export default BlockListContainer;