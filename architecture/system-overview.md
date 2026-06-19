# System Overview

## Public Case Study Scope

This export describes a public-safe case study for the Folionomics crypto portfolio management dashboard.

Confirmed from the local README:

- The product is a Web3 crypto portfolio dashboard.
- The frontend stack includes Next.js, React, TypeScript, Redux Toolkit, Material UI, Wagmi, Viem, RainbowKit, Solana Web3.js, Plotly, Recharts, and supporting utilities.
- The product experience includes wallet connection, additional wallet addresses, wallet bundles, portfolio totals, assets, protocols, NFTs, transactions, history charts, public discovery, and privacy-controlled share links.
- The full production codebase is private and is not included in this public repository.

Implementation source files were not present in this local export. Not confirmed from codebase.

## High-Level Architecture

```text
User Browser
  |
  | Next.js App Router pages and layouts
  v
React Dashboard UI
  |
  | Providers: Redux, wallet provider, theme provider, wagmi, RainbowKit,
  | Query Client, MUI theme
  v
Domain State and Hooks
  |
  | API client wrapper with authenticated and public request flows
  v
Backend REST APIs
  |
  | Portfolio, wallet, bundle, asset, protocol, NFT, transaction,
  | history, share-link, profile, and credit data
  v
External Web3 and Data Providers
```

The public repository is intended to document the architecture and product behavior without exposing private infrastructure, production source code, secrets, customer data, real wallet data, or real API responses.

## Frontend Architecture

Confirmed from the local README:

- Next.js 14 App Router is used for frontend routing and layouts.
- React 18 and TypeScript are used for UI implementation.
- Material UI is used for responsive components, dialogs, tables, navigation, and theming.
- Redux Toolkit and React Redux are used for domain state and async request lifecycle state.
- React Context is used for wallet identity and theme preferences.

Not confirmed from codebase.

- Exact route names.
- Exact component directory structure.
- Exact provider component names.
- Exact slice names and selectors.
- Exact API endpoint paths.

## Major Product Domains

The dashboard is organized around these product domains:

- Wallet authentication and connected-wallet registration.
- User-managed wallet addresses.
- Wallet bundles that group multiple addresses.
- Portfolio totals and allocation.
- Assets, protocols, NFTs, transactions, and historical value.
- Share links and public portfolio views.
- Profile, credits, and subscription-oriented account workflows.

## Data Flow

```text
1. User connects a wallet or chooses an existing wallet/bundle.
2. The app registers or validates the wallet session with the backend.
3. Redux async workflows request portfolio data through a centralized API client.
4. API responses are normalized into dashboard state.
5. Dashboard tabs render totals, charts, tables, and detail views.
6. Share-link privacy settings adapt the same data model for public views.
```

Exact endpoint request and response contracts are not included here. Not confirmed from codebase.

## Public-Safe Boundaries

This export must not contain:

- `.env` files.
- API keys or RPC keys.
- Backend URLs or private infrastructure URLs.
- Database URLs.
- Bearer tokens or refresh tokens.
- Production wallet addresses.
- Customer wallet data.
- Real balances.
- Real transaction hashes.
- Real share links.
- QR codes connected to real links.
- Customer profiles.
- API responses.
- Payment credentials.
- Production secrets.

