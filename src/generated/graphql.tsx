import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  blockProducers: BlockProducersConnection;
  blockRewards: BlockRewardsConnection;
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  isContract: Scalars['Boolean']['output'];
  isProducer: Scalars['Boolean']['output'];
  isTokenContract: Scalars['Boolean']['output'];
  timestamp: Scalars['BigInt']['output'];
  tokenOperations: TokenOperationsConnection;
  tokens: TokenHoldersConnection;
  transactions: TransactionsConnection;
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type AddressBlockProducersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BlockProducersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BlockProducersSortInput>>;
};


export type AddressBlockRewardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BlockRewardsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BlockRewardsSortInput>>;
};


export type AddressTokenOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TokenOperationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TokenOperationsSortInput>>;
};


export type AddressTokensArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TokenHoldersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TokenHoldersSortInput>>;
};


export type AddressTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TransactionsSortInput>>;
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  cursor: Scalars['String']['output'];
  node: Address;
};

export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  edges: Array<AddressEdge>;
  nodes: Array<Address>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AddressesFilter = {
  AND?: InputMaybe<Array<AddressesFilter>>;
  OR?: InputMaybe<Array<AddressesFilter>>;
  id?: InputMaybe<StringFilter>;
  isContract?: InputMaybe<BooleanFilter>;
  isProducer?: InputMaybe<BooleanFilter>;
  isTokenContract?: InputMaybe<BooleanFilter>;
  search?: InputMaybe<StringFilter>;
};

/** Sort field */
export enum AddressesSortField {
  Timestamp = 'timestamp'
}

export type AddressesSortInput = {
  direction: Direction;
  field: AddressesSortField;
};

export type Block = {
  __typename?: 'Block';
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  events: EventsConnection;
  header: BlockHeader;
  height: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  receipt: BlockReceipt;
  reward?: Maybe<BlockReward>;
  signature: Scalars['String']['output'];
  transactionCount: Scalars['Int']['output'];
  transactions: TransactionsConnection;
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type BlockEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventsSortInput>>;
};


export type BlockTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TransactionsSortInput>>;
};

export type BlockEdge = {
  __typename?: 'BlockEdge';
  cursor: Scalars['String']['output'];
  node: Block;
};

export type BlockHeader = {
  __typename?: 'BlockHeader';
  height: Scalars['BigInt']['output'];
  previous: Scalars['String']['output'];
  previousStateMerkleRoot?: Maybe<Scalars['String']['output']>;
  signer: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionMerkleRoot?: Maybe<Scalars['String']['output']>;
};

export type BlockProducer = {
  __typename?: 'BlockProducer';
  address: Address;
  addressId: Scalars['String']['output'];
  balance: Scalars['String']['output'];
  blocksProduced: Scalars['BigInt']['output'];
  burnedTotal: Scalars['String']['output'];
  contractId: Scalars['String']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  koinBalance: TokenHolder;
  lastProducedBlock: Scalars['BigInt']['output'];
  mintedTotal: Scalars['String']['output'];
  roi: Scalars['Float']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
  vhpBalance: TokenHolder;
};

export type BlockProducerEdge = {
  __typename?: 'BlockProducerEdge';
  cursor: Scalars['String']['output'];
  node: BlockProducer;
};

export type BlockProducersConnection = {
  __typename?: 'BlockProducersConnection';
  edges: Array<BlockProducerEdge>;
  nodes: Array<BlockProducer>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BlockProducersFilter = {
  AND?: InputMaybe<Array<BlockProducersFilter>>;
  OR?: InputMaybe<Array<BlockProducersFilter>>;
  addressId?: InputMaybe<StringFilter>;
  balance?: InputMaybe<NumericFilter>;
  blocksProduced?: InputMaybe<NumericFilter>;
  contractId?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
};

/** Sort field */
export enum BlockProducersSortField {
  Balance = 'balance',
  BlocksProduced = 'blocksProduced',
  CreatedAt = 'createdAt'
}

export type BlockProducersSortInput = {
  direction: Direction;
  field: BlockProducersSortField;
};

export type BlockProductionStats = {
  __typename?: 'BlockProductionStats';
  blocksProduced: Scalars['BigInt']['output'];
  burnedTotal: Scalars['String']['output'];
  contractId: Scalars['String']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  mintedTotal: Scalars['String']['output'];
  producerCount: Scalars['BigInt']['output'];
  rewarded: Scalars['String']['output'];
  roi: Scalars['Float']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type BlockReceipt = {
  __typename?: 'BlockReceipt';
  computeBandwidthUsed: Scalars['String']['output'];
  diskStorageUsed: Scalars['String']['output'];
  eventCount: Scalars['Int']['output'];
  networkBandwidthUsed: Scalars['String']['output'];
};

export type BlockReward = {
  __typename?: 'BlockReward';
  blockHeight: Scalars['BigInt']['output'];
  burnedContractId?: Maybe<Scalars['String']['output']>;
  burnedValue: Scalars['String']['output'];
  burner?: Maybe<Address>;
  contractId: Scalars['String']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  height: Scalars['BigInt']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  mintedValue: Scalars['String']['output'];
  producer: BlockProducer;
  producerAddress?: Maybe<Address>;
  producerId: Scalars['String']['output'];
  roi: Scalars['Float']['output'];
  timestamp: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type BlockRewardBulkResult = {
  __typename?: 'BlockRewardBulkResult';
  item?: Maybe<BlockReward>;
};

export type BlockRewardEdge = {
  __typename?: 'BlockRewardEdge';
  cursor: Scalars['String']['output'];
  node: BlockReward;
};

export type BlockRewardsConnection = {
  __typename?: 'BlockRewardsConnection';
  edges: Array<BlockRewardEdge>;
  nodes: Array<BlockReward>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BlockRewardsFilter = {
  AND?: InputMaybe<Array<BlockRewardsFilter>>;
  OR?: InputMaybe<Array<BlockRewardsFilter>>;
  blockHeight?: InputMaybe<NumericFilter>;
  burnedValue?: InputMaybe<NumericFilter>;
  burnerId?: InputMaybe<StringFilter>;
  producerId?: InputMaybe<StringFilter>;
  roi?: InputMaybe<NumericFilter>;
  search?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
  value?: InputMaybe<NumericFilter>;
};

/** Sort field */
export enum BlockRewardsSortField {
  BlockHeight = 'blockHeight',
  Timestamp = 'timestamp'
}

export type BlockRewardsSortInput = {
  direction: Direction;
  field: BlockRewardsSortField;
};

export type BlocksConnection = {
  __typename?: 'BlocksConnection';
  edges: Array<BlockEdge>;
  nodes: Array<Block>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BlocksFilter = {
  AND?: InputMaybe<Array<BlocksFilter>>;
  OR?: InputMaybe<Array<BlocksFilter>>;
  height?: InputMaybe<NumericFilter>;
  id?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  signer?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
  transactionCount?: InputMaybe<NumericFilter>;
};

/** Sort field */
export enum BlocksSortField {
  Height = 'height'
}

export type BlocksSortInput = {
  direction: Direction;
  field: BlocksSortField;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Chain = {
  __typename?: 'Chain';
  blockProductionStats: BlockProductionStats;
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  koinStats: KoinStats;
  stats: ChainStats;
  timestamp: Scalars['BigInt']['output'];
  tokenStats: TokenStats;
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type ChainStats = {
  __typename?: 'ChainStats';
  addressCount: Scalars['BigInt']['output'];
  operationCount: Scalars['BigInt']['output'];
  transactionCount: Scalars['BigInt']['output'];
};

export type Contract = {
  __typename?: 'Contract';
  abi?: Maybe<Scalars['String']['output']>;
  contractStandardType?: Maybe<ContractStandardType>;
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type ContractBulkResult = {
  __typename?: 'ContractBulkResult';
  item?: Maybe<Contract>;
};

export type ContractEdge = {
  __typename?: 'ContractEdge';
  cursor: Scalars['String']['output'];
  node: Contract;
};

export type ContractEvent = {
  __typename?: 'ContractEvent';
  blockHeight: Scalars['BigInt']['output'];
  contract: Contract;
  contractId?: Maybe<Scalars['String']['output']>;
  contractStandardType?: Maybe<ContractStandardType>;
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['String']['output']>;
  decodedData?: Maybe<Scalars['String']['output']>;
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  impacted?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  parentId: Scalars['String']['output'];
  parentType: Scalars['String']['output'];
  sequence?: Maybe<Scalars['Int']['output']>;
  timestamp: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type ContractEventEdge = {
  __typename?: 'ContractEventEdge';
  cursor: Scalars['String']['output'];
  node: ContractEvent;
};

export type ContractEventsConnection = {
  __typename?: 'ContractEventsConnection';
  edges: Array<ContractEventEdge>;
  nodes: Array<ContractEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ContractEventsFilter = {
  AND?: InputMaybe<Array<ContractEventsFilter>>;
  OR?: InputMaybe<Array<ContractEventsFilter>>;
  blockHeight?: InputMaybe<NumericFilter>;
  contractId?: InputMaybe<StringFilter>;
  contractStandardType?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  impacted?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<StringFilter>;
  parentType?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
};

/** Sort field */
export enum ContractEventsSortField {
  Timestamp = 'timestamp'
}

export type ContractEventsSortInput = {
  direction: Direction;
  field: ContractEventsSortField;
};

export type ContractOperation = {
  __typename?: 'ContractOperation';
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  fields?: Maybe<ContractOperationWithDetails>;
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type ContractOperationBulkResult = {
  __typename?: 'ContractOperationBulkResult';
  item?: Maybe<ContractOperationWithDetails>;
};

export type ContractOperationEdge = {
  __typename?: 'ContractOperationEdge';
  cursor: Scalars['String']['output'];
  node: ContractOperationWithDetails;
};

export type ContractOperationWithDetails = {
  __typename?: 'ContractOperationWithDetails';
  args?: Maybe<Scalars['String']['output']>;
  blockHeight: Scalars['BigInt']['output'];
  contract: Contract;
  contractId: Scalars['String']['output'];
  contractStandardType?: Maybe<ContractStandardType>;
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['String']['output']>;
  entryPoint: Scalars['Int']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction?: Maybe<Transaction>;
  transactionId: Scalars['String']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type ContractOperationsConnection = {
  __typename?: 'ContractOperationsConnection';
  edges: Array<ContractOperationEdge>;
  nodes: Array<ContractOperationWithDetails>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ContractOperationsFilter = {
  AND?: InputMaybe<Array<ContractOperationsFilter>>;
  OR?: InputMaybe<Array<ContractOperationsFilter>>;
  blockHeight?: InputMaybe<NumericFilter>;
  contractId?: InputMaybe<StringFilter>;
  entryPoint?: InputMaybe<NumericFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
  transactionId?: InputMaybe<StringFilter>;
};

/** Sort field */
export enum ContractOperationsSortField {
  Timestamp = 'timestamp'
}

export type ContractOperationsSortInput = {
  direction: Direction;
  field: ContractOperationsSortField;
};

/** Contract Standard type */
export enum ContractStandardType {
  Token = 'token'
}

export type ContractsConnection = {
  __typename?: 'ContractsConnection';
  edges: Array<ContractEdge>;
  nodes: Array<Contract>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ContractsFilter = {
  AND?: InputMaybe<Array<ContractsFilter>>;
  OR?: InputMaybe<Array<ContractsFilter>>;
  contractStandardType?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
};

/** Sort field */
export enum ContractsSortField {
  Timestamp = 'timestamp'
}

export type ContractsSortInput = {
  direction: Direction;
  field: ContractsSortField;
};

/** Sort direction */
export enum Direction {
  Asc = 'asc',
  Desc = 'desc'
}

export type Event = {
  __typename?: 'Event';
  blockHeight: Scalars['BigInt']['output'];
  contractId?: Maybe<Scalars['String']['output']>;
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['String']['output']>;
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  impacted?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  parentId: Scalars['String']['output'];
  parentType: Scalars['String']['output'];
  sequence?: Maybe<Scalars['Int']['output']>;
  timestamp: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventEdge>;
  nodes: Array<Event>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type EventsFilter = {
  AND?: InputMaybe<Array<EventsFilter>>;
  OR?: InputMaybe<Array<EventsFilter>>;
  blockHeight?: InputMaybe<NumericFilter>;
  contractId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  impacted?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<StringFilter>;
  parentType?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  sequence?: InputMaybe<NumericFilter>;
  timestamp?: InputMaybe<NumericFilter>;
};

/** Sort field */
export enum EventsSortField {
  Timestamp = 'timestamp'
}

export type EventsSortInput = {
  direction: Direction;
  field: EventsSortField;
};

export type KoinStats = {
  __typename?: 'KoinStats';
  askPrice: Scalars['Float']['output'];
  askQuantity: Scalars['Float']['output'];
  bidPrice: Scalars['Float']['output'];
  bidQuantity: Scalars['Float']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  timestamp: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type NumericFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
};

export type Operation = {
  __typename?: 'Operation';
  blockHeight: Scalars['BigInt']['output'];
  contractOperation?: Maybe<ContractOperationWithDetails>;
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<OperationDetailsUnion>;
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  index: Scalars['Int']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionId: Scalars['String']['output'];
  type: OperationType;
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type OperationDetailsUnion = ContractOperation | SystemCallOperation | SystemContractOperation | UploadContractOperation;

export type OperationEdge = {
  __typename?: 'OperationEdge';
  cursor: Scalars['String']['output'];
  node: Operation;
};

/** Operation type */
export enum OperationType {
  ContractOperation = 'contractOperation',
  SystemCall = 'systemCall',
  SystemContract = 'systemContract',
  UploadContract = 'uploadContract'
}

export type OperationsConnection = {
  __typename?: 'OperationsConnection';
  edges: Array<OperationEdge>;
  nodes: Array<Operation>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OperationsFilter = {
  AND?: InputMaybe<Array<OperationsFilter>>;
  OR?: InputMaybe<Array<OperationsFilter>>;
  blockHeight?: InputMaybe<NumericFilter>;
  id?: InputMaybe<StringFilter>;
  operationIndex?: InputMaybe<NumericFilter>;
  search?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
  transactionId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

/** Sort field */
export enum OperationsSortField {
  Timestamp = 'timestamp'
}

export type OperationsSortInput = {
  direction: Direction;
  field: OperationsSortField;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  address: Address;
  addresses: AddressesConnection;
  addressesBulk: Array<Address>;
  block: Block;
  blockProducer: BlockProducer;
  blockProducers: BlockProducersConnection;
  blockProductionStats: BlockProductionStats;
  blockReward: BlockReward;
  blockRewards: BlockRewardsConnection;
  blockRewardsBulk: Array<BlockRewardBulkResult>;
  blocks: BlocksConnection;
  chain: Chain;
  contract: Contract;
  contractEvent: ContractEvent;
  contractEvents: ContractEventsConnection;
  contractOperation: ContractOperationWithDetails;
  contractOperations: ContractOperationsConnection;
  contractOperationsBulk: Array<ContractOperationBulkResult>;
  contracts: ContractsConnection;
  contractsBulk: Array<ContractBulkResult>;
  event: Event;
  events: EventsConnection;
  koinHoldersBulk: Array<TokenHolder>;
  koinStats: KoinStats;
  operation: Operation;
  operations: OperationsConnection;
  tokenContract: TokenContract;
  tokenContracts: TokenContractsConnection;
  tokenEvent: TokenEvent;
  tokenEvents: TokenEventsConnection;
  tokenHolder: TokenHolder;
  tokenHolders: TokenHoldersConnection;
  tokenHoldersBulk: Array<TokenHolder>;
  tokenOperation: TokenOperation;
  tokenOperations: TokenOperationsConnection;
  tokenStats: TokenStats;
  transaction: Transaction;
  transactions: TransactionsConnection;
  transactionsBulk: Array<Transaction>;
  vhpHoldersBulk: Array<TokenHolder>;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AddressesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AddressesSortInput>>;
};


export type QueryAddressesBulkArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['String']['input']>;
};


export type QueryBlockArgs = {
  height: Scalars['ID']['input'];
};


export type QueryBlockProducerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBlockProducersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BlockProducersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BlockProducersSortInput>>;
};


export type QueryBlockProductionStatsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBlockRewardArgs = {
  height: Scalars['ID']['input'];
};


export type QueryBlockRewardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BlockRewardsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BlockRewardsSortInput>>;
};


export type QueryBlockRewardsBulkArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  heights?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryBlocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BlocksFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<BlocksSortInput>>;
};


export type QueryChainArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContractArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContractEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContractEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContractEventsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContractEventsSortInput>>;
};


export type QueryContractOperationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContractOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContractOperationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContractOperationsSortInput>>;
};


export type QueryContractOperationsBulkArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['String']['input']>;
};


export type QueryContractsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ContractsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ContractsSortInput>>;
};


export type QueryContractsBulkArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['String']['input']>;
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventsSortInput>>;
};


export type QueryKoinHoldersBulkArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['String']['input']>;
};


export type QueryKoinStatsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOperationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OperationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OperationsSortInput>>;
};


export type QueryTokenContractArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTokenContractsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TokenContractsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TokenContractsSortInput>>;
};


export type QueryTokenEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTokenEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TokenEventsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TokenEventsSortInput>>;
};


export type QueryTokenHolderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTokenHoldersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TokenHoldersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TokenHoldersSortInput>>;
};


export type QueryTokenHoldersBulkArgs = {
  contractId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['String']['input']>;
};


export type QueryTokenOperationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTokenOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TokenOperationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TokenOperationsSortInput>>;
};


export type QueryTokenStatsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TransactionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TransactionsSortInput>>;
};


export type QueryTransactionsBulkArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['String']['input']>;
};


export type QueryVhpHoldersBulkArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  ids: Array<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  excludes?: InputMaybe<Scalars['String']['input']>;
  iContains?: InputMaybe<Scalars['String']['input']>;
};

export type SystemCallOperation = {
  __typename?: 'SystemCallOperation';
  callId: Scalars['Int']['output'];
  contract: Contract;
  contractId: Scalars['String']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type SystemContractOperation = {
  __typename?: 'SystemContractOperation';
  contract: Contract;
  contractId: Scalars['String']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  systemContract: Scalars['Boolean']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type TokenContract = {
  __typename?: 'TokenContract';
  burnCount: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  decimals: Scalars['Int']['output'];
  holders: TokenHoldersConnection;
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  mintCount: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  operations: TokenOperationsConnection;
  symbol: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  totalSupply: Scalars['String']['output'];
  transferCount: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type TokenContractHoldersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TokenHoldersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TokenHoldersSortInput>>;
};


export type TokenContractOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TokenOperationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TokenOperationsSortInput>>;
};

export type TokenContractEdge = {
  __typename?: 'TokenContractEdge';
  cursor: Scalars['String']['output'];
  node: TokenContract;
};

export type TokenContractsConnection = {
  __typename?: 'TokenContractsConnection';
  edges: Array<TokenContractEdge>;
  nodes: Array<TokenContract>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TokenContractsFilter = {
  AND?: InputMaybe<Array<TokenContractsFilter>>;
  OR?: InputMaybe<Array<TokenContractsFilter>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  symbol?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
  totalSupply?: InputMaybe<NumericFilter>;
};

/** Sort field */
export enum TokenContractsSortField {
  Timestamp = 'timestamp'
}

export type TokenContractsSortInput = {
  direction: Direction;
  field: TokenContractsSortField;
};

export type TokenEvent = {
  __typename?: 'TokenEvent';
  blockHeight: Scalars['BigInt']['output'];
  contract: TokenContract;
  contractId?: Maybe<Scalars['String']['output']>;
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  from?: Maybe<Scalars['String']['output']>;
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId: Scalars['String']['output'];
  parentType: Scalars['String']['output'];
  sequence?: Maybe<Scalars['Int']['output']>;
  timestamp: Scalars['BigInt']['output'];
  to?: Maybe<Scalars['String']['output']>;
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type TokenEventEdge = {
  __typename?: 'TokenEventEdge';
  cursor: Scalars['String']['output'];
  node: TokenEvent;
};

export type TokenEventsConnection = {
  __typename?: 'TokenEventsConnection';
  edges: Array<TokenEventEdge>;
  nodes: Array<TokenEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TokenEventsFilter = {
  AND?: InputMaybe<Array<TokenEventsFilter>>;
  OR?: InputMaybe<Array<TokenEventsFilter>>;
  blockHeight?: InputMaybe<NumericFilter>;
  contractId?: InputMaybe<StringFilter>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<StringFilter>;
  parentType?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
  to?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

/** Sort field */
export enum TokenEventsSortField {
  Timestamp = 'timestamp'
}

export type TokenEventsSortInput = {
  direction: Direction;
  field: TokenEventsSortField;
};

export type TokenHolder = {
  __typename?: 'TokenHolder';
  addressId: Scalars['String']['output'];
  balance: Scalars['String']['output'];
  burnCount: Scalars['BigInt']['output'];
  contract: TokenContract;
  contractId: Scalars['String']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  mintCount: Scalars['BigInt']['output'];
  transferInCount: Scalars['BigInt']['output'];
  transferOutCount: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type TokenHolderEdge = {
  __typename?: 'TokenHolderEdge';
  cursor: Scalars['String']['output'];
  node: TokenHolder;
};

export type TokenHoldersConnection = {
  __typename?: 'TokenHoldersConnection';
  edges: Array<TokenHolderEdge>;
  nodes: Array<TokenHolder>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TokenHoldersFilter = {
  AND?: InputMaybe<Array<TokenHoldersFilter>>;
  OR?: InputMaybe<Array<TokenHoldersFilter>>;
  addressId?: InputMaybe<StringFilter>;
  balance?: InputMaybe<NumericFilter>;
  contractId?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
};

/** Sort field */
export enum TokenHoldersSortField {
  Balance = 'balance'
}

export type TokenHoldersSortInput = {
  direction: Direction;
  field: TokenHoldersSortField;
};

export type TokenOperation = {
  __typename?: 'TokenOperation';
  blockHeight: Scalars['BigInt']['output'];
  contract: TokenContract;
  contractId: Scalars['String']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  from?: Maybe<Scalars['String']['output']>;
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  to?: Maybe<Scalars['String']['output']>;
  transaction?: Maybe<Transaction>;
  transactionId: Scalars['String']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type TokenOperationEdge = {
  __typename?: 'TokenOperationEdge';
  cursor: Scalars['String']['output'];
  node: TokenOperation;
};

export type TokenOperationsConnection = {
  __typename?: 'TokenOperationsConnection';
  edges: Array<TokenOperationEdge>;
  nodes: Array<TokenOperation>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TokenOperationsFilter = {
  AND?: InputMaybe<Array<TokenOperationsFilter>>;
  OR?: InputMaybe<Array<TokenOperationsFilter>>;
  blockHeight?: InputMaybe<NumericFilter>;
  contractId?: InputMaybe<StringFilter>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
  to?: InputMaybe<StringFilter>;
  transactionId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

/** Sort field */
export enum TokenOperationsSortField {
  Timestamp = 'timestamp'
}

export type TokenOperationsSortInput = {
  direction: Direction;
  field: TokenOperationsSortField;
};

export type TokenStats = {
  __typename?: 'TokenStats';
  contractCount: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transferCount: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type Transaction = {
  __typename?: 'Transaction';
  blockHeight: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  events: EventsConnection;
  header: TransactionHeader;
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  index: Scalars['Int']['output'];
  operationCount: Scalars['Int']['output'];
  operations: Array<Operation>;
  receipt: TransactionReceipt;
  signatures: Array<Scalars['String']['output']>;
  timestamp: Scalars['BigInt']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};


export type TransactionEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<EventsSortInput>>;
};

export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  cursor: Scalars['String']['output'];
  node: Transaction;
};

export type TransactionHeader = {
  __typename?: 'TransactionHeader';
  nonce?: Maybe<Scalars['String']['output']>;
  operationMerkleRoot?: Maybe<Scalars['String']['output']>;
  payee?: Maybe<Scalars['String']['output']>;
  payer: Scalars['String']['output'];
  rcLimit: Scalars['String']['output'];
};

export type TransactionReceipt = {
  __typename?: 'TransactionReceipt';
  computeBandwidthUsed: Scalars['String']['output'];
  diskStorageUsed: Scalars['String']['output'];
  eventCount: Scalars['Int']['output'];
  maxPayerRc: Scalars['String']['output'];
  networkBandwidthUsed: Scalars['String']['output'];
  payer: Scalars['String']['output'];
  rcLimit: Scalars['String']['output'];
  rcUsed: Scalars['String']['output'];
  reverted: Scalars['Boolean']['output'];
};

export type TransactionsConnection = {
  __typename?: 'TransactionsConnection';
  edges: Array<TransactionEdge>;
  nodes: Array<Transaction>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TransactionsFilter = {
  AND?: InputMaybe<Array<TransactionsFilter>>;
  OR?: InputMaybe<Array<TransactionsFilter>>;
  blockHeight?: InputMaybe<NumericFilter>;
  id?: InputMaybe<StringFilter>;
  operationCount?: InputMaybe<NumericFilter>;
  payer?: InputMaybe<StringFilter>;
  search?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<NumericFilter>;
};

/** Sort field */
export enum TransactionsSortField {
  Timestamp = 'timestamp'
}

export type TransactionsSortInput = {
  direction: Direction;
  field: TransactionsSortField;
};

export type UploadContractOperation = {
  __typename?: 'UploadContractOperation';
  abi?: Maybe<Scalars['String']['output']>;
  bytecode: Scalars['String']['output'];
  contract: Contract;
  contractId: Scalars['String']['output'];
  /** Timestamp as to when this entity was created */
  createdAt: Scalars['DateTime']['output'];
  /** Globally unique identifier for this entity */
  id: Scalars['ID']['output'];
  /** Timestamp as to when this entity was last updated */
  updatedAt: Scalars['DateTime']['output'];
};

export type BlockListQueryVariables = Exact<{ [key: string]: never; }>;


export type BlockListQuery = { __typename?: 'Query', blocks: { __typename?: 'BlocksConnection', edges: Array<{ __typename?: 'BlockEdge', node: { __typename?: 'Block', id: string, transactionCount: number, height: any, transactions: { __typename?: 'TransactionsConnection', edges: Array<{ __typename?: 'TransactionEdge', node: { __typename?: 'Transaction', id: string, operationCount: number, operations: Array<{ __typename?: 'Operation', id: string, type: OperationType }> } }> } } }> } };

export type TokenListQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenListQuery = { __typename?: 'Query', tokenContracts: { __typename?: 'TokenContractsConnection', edges: Array<{ __typename?: 'TokenContractEdge', node: { __typename?: 'TokenContract', id: string, name: string, symbol: string, operations: { __typename?: 'TokenOperationsConnection', edges: Array<{ __typename?: 'TokenOperationEdge', node: { __typename?: 'TokenOperation', id: string, timestamp: any } }> } } }> } };


export const BlockListDocument = gql`
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
}
    `;

/**
 * __useBlockListQuery__
 *
 * To run a query within a React component, call `useBlockListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockListQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlockListQuery(baseOptions?: Apollo.QueryHookOptions<BlockListQuery, BlockListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlockListQuery, BlockListQueryVariables>(BlockListDocument, options);
      }
export function useBlockListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlockListQuery, BlockListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlockListQuery, BlockListQueryVariables>(BlockListDocument, options);
        }
export type BlockListQueryHookResult = ReturnType<typeof useBlockListQuery>;
export type BlockListLazyQueryHookResult = ReturnType<typeof useBlockListLazyQuery>;
export type BlockListQueryResult = Apollo.QueryResult<BlockListQuery, BlockListQueryVariables>;
export const TokenListDocument = gql`
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
}
    `;

/**
 * __useTokenListQuery__
 *
 * To run a query within a React component, call `useTokenListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenListQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokenListQuery(baseOptions?: Apollo.QueryHookOptions<TokenListQuery, TokenListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenListQuery, TokenListQueryVariables>(TokenListDocument, options);
      }
export function useTokenListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenListQuery, TokenListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenListQuery, TokenListQueryVariables>(TokenListDocument, options);
        }
export type TokenListQueryHookResult = ReturnType<typeof useTokenListQuery>;
export type TokenListLazyQueryHookResult = ReturnType<typeof useTokenListLazyQuery>;
export type TokenListQueryResult = Apollo.QueryResult<TokenListQuery, TokenListQueryVariables>;