# Sharing and Privacy Flow

## Confirmed Product Behavior

Confirmed from the local README:

- Users can generate wallet or bundle share links.
- Share links support value, address, and transaction visibility controls.
- Links can be time-limited with expiry.
- Management actions include preview, revoke, extend, and delete.
- Public/shared views reuse dashboard components in a public mode.
- QR-code sharing is referenced.

Implementation files were not present in this local export. Exact API endpoints, request payloads, response payloads, and QR-code generation code are not confirmed from codebase.

## Conceptual Flow

```text
Authenticated user
  |
  | chooses wallet or bundle
  v
Share settings dialog
  |
  | show/hide values
  | show/hide addresses
  | show/hide transactions
  | choose expiry
  v
Create share-link request
  |
  | backend creates a public token or slug
  v
Share-link management view
  |
  | preview
  | copy placeholder-safe public URL
  | revoke
  | extend
  | delete
  v
Public dashboard view
```

## Privacy Controls

Share-link privacy should be represented as explicit booleans:

- `showValues`: controls balances, token values, historical values, and allocation values.
- `showAddresses`: controls raw wallet addresses and address-level metadata.
- `showTransactions`: controls transaction tables, transaction hashes, counterparty addresses, gas details, and status details.

The public view should avoid rendering hidden fields by default. Hidden values should be replaced with neutral display text such as `Hidden` or `Private`.

## Public URL Safety

Use fake links in public documentation:

```text
https://folionomics.example/share/demo-public-view
```

Never publish real share-link slugs or tokens, QR codes that encode real links, real customer wallet URLs, internal preview URLs, or private backend routes.

## Public View Data Adapter

A public-safe adapter should remove sensitive fields before data reaches presentational components:

```ts
type PublicPrivacy = {
  showValues: boolean;
  showAddresses: boolean;
  showTransactions: boolean;
};

type PublicAsset = {
  symbol: string;
  chain: string;
  amountLabel: string;
  valueLabel: string;
  ownerAddressLabel: string;
};
```

This is a documentation model only. Exact production adapter code is not confirmed from codebase.

## Manual Review Before Publishing

Review all public screenshots, generated QR codes, Markdown files, code samples, and JSON-like examples for wallet addresses, transaction hashes, real balances, customer details, real share links, API responses, backend URLs, and credential-like strings.

