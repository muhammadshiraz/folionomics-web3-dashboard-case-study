# State Management

## Confirmed State Approach

Confirmed from the local README:

- Redux Toolkit is used for domain state.
- React Redux is used to connect React views to state.
- Async request lifecycle states such as pending, fulfilled, and rejected are used.
- The dashboard uses selectors, domain slices, reusable dashboard views, loading states, empty states, errors, and retry states.

Implementation files for the Redux store were not present in this local export. Not confirmed from codebase.

## Conceptual Domain Slices

The README identifies these Redux-backed product domains:

- Wallet addresses.
- Selected wallet.
- Wallet assets and totals.
- Bundles.
- Bundle assets, protocols, NFTs, transactions, and history.
- Portfolios.
- Graph data.
- NFTs.
- Protocols.
- Transactions.
- Time-series history.
- Explore and public wallet data.
- Share links.
- User, profile, and credit data.

Exact slice names, action names, selectors, initial state, and reducers are not confirmed from codebase.

## Public-Safe Example Shape

```ts
type AsyncStatus = "idle" | "loading" | "succeeded" | "failed";

type WalletSummary = {
  id: string;
  label: string;
  addressPreview: string;
  chainType: "ethereum" | "bitcoin" | "solana" | "unknown";
};

type PortfolioState = {
  selectedWalletId: string | null;
  selectedBundleId: string | null;
  wallets: WalletSummary[];
  totalValueUsd: number | null;
  assetsStatus: AsyncStatus;
  protocolsStatus: AsyncStatus;
  nftsStatus: AsyncStatus;
  transactionsStatus: AsyncStatus;
  historyStatus: AsyncStatus;
  errorMessage: string | null;
};
```

This is an authored public-safe illustration, not production code.

## Request Lifecycle

A typical Redux async flow can be described as:

```text
idle -> loading -> succeeded
idle -> loading -> failed
succeeded -> loading -> succeeded
failed -> loading -> succeeded
```

Dashboard UI should map those states to skeletons, inline progress, empty states, error states with retry actions, and guarded controls while requests are pending.

## Derived Data

Confirmed from the README:

- Wallet and bundle holdings are normalized into reusable asset rows.
- Asset values, quantities, percentages, chains, symbols, logos, and wallet origin fields drive tables and charts.
- Graph utilities transform hierarchical API data into treemap and sunburst structures.
- Historical data is normalized and sorted for time-period charts.
- Protocol positions are grouped by chain and sorted by value.
- Transaction rows are searched by hash, address, token, and chain.

Exact transformation utilities are not confirmed from codebase.

## Persistence

Confirmed from the README:

- Selected wallet persistence is part of the user experience.
- Wallet/bundle selection persistence is referenced under reliability notes.

Exact persistence mechanism is not confirmed from codebase.

## Privacy-Aware State

Share-link state should keep privacy settings explicit:

```ts
type SharePrivacySettings = {
  showValues: boolean;
  showAddresses: boolean;
  showTransactions: boolean;
  expiresAt: string;
};
```

Public views should consume already-filtered public responses or apply a defensive client-side adapter before rendering. Exact production behavior is not confirmed from codebase.

