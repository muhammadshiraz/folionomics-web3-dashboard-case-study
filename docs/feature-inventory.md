# Feature Inventory

## Confirmed from README

The README describes the following product areas.

## Marketing and Onboarding

- Landing page.
- Feature explanation.
- Onboarding steps.
- Responsive navigation.
- Theme switching.
- Wallet connect entry point.

## Wallet Authentication

- RainbowKit wallet connection.
- Connected wallet registration with backend.
- Access and refresh token lifecycle.
- Protected routes.
- Wallet disconnect and session cleanup.
- Redirect after logout.

Exact auth implementation is not confirmed from codebase.

## Address and Wallet Management

- Add, rename, list, and delete wallet addresses.
- Detect Ethereum, Bitcoin, and Solana address formats.
- Resolve ENS names.
- Resolve `.sol` domains.
- Validate wallet labels.
- Reject duplicate or invalid entries.
- Persist and restore selected wallet.

Exact validators and resolver implementations are not confirmed from codebase.

## Wallet Bundles

- Create, edit, select, refresh, and delete wallet bundles.
- Load bundle totals and detailed holdings.
- View bundle assets, protocols, NFTs, transactions, and history.
- Expand grouped bundle assets and fetch nested details on demand.

Exact bundle API contracts are not confirmed from codebase.

## Portfolio Dashboard

- Total balance cards.
- Asset total cards.
- Protocol total cards.
- Treemap and sunburst allocation charts.
- Historical area chart with multiple time periods.
- Grouping and filtering by wallet, asset symbol, and chain.
- Configurable minimum-value filtering.
- Asset tables with sorting and expandable rows.
- Protocol grouping by chain and value threshold.
- NFT table/grid views.
- Transaction history with search, expandable details, copy actions, status display, gas information, and scam indicators.

## Share Links and Public Discovery

- Generate wallet or bundle share links.
- Hide dollar values.
- Hide wallet addresses.
- Hide transaction history.
- Time-limited links with expiry.
- Copyable public links.
- Downloadable QR codes.
- Preview, revoke, extend, and delete share links.
- Browse personal public wallets and all public wallets.
- Reuse dashboard components in public shared-view mode.

Real share links and QR codes must never be included in this export.

## Profile, Credits, and Subscriptions

- Edit display name, description, avatar, and social links.
- Validate avatar type and size before upload.
- Display remaining credits.
- Select subscription plans.
- Request additional feature tokens through authenticated API workflows.

Completed payment-processing behavior and production payment-provider readiness are not claimed.

## Portfolio Assistant

- Dashboard chat drawer can send a user question with wallet asset/history context to a backend chat endpoint.
- Returned answer is displayed inside the dashboard experience.

Model provider, prompt governance, retention policy, and production readiness are not confirmed from codebase.

