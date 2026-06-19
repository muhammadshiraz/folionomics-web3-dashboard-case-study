# Web3 Wallet Flows

## Confirmed from README

The local README states that the product supports:

- EVM wallet connection through Wagmi, Viem, and RainbowKit.
- Connected wallet registration with a backend.
- Ethereum and Sepolia wagmi configuration.
- Ethereum, Bitcoin, and Solana address detection.
- ENS normalization and resolution.
- `.sol` resolution through Solana tooling.
- Backend-specific wallet chain grouping.
- Additional wallet address registration.
- Wallet bundles.

Exact wallet provider code, resolver code, RPC configuration, and backend routes are not confirmed from codebase.

## EVM Wallet Connection Flow

```text
1. User opens the wallet connect UI.
2. RainbowKit handles wallet selection.
3. Wagmi exposes the connected EVM account.
4. The app registers or validates the wallet with the backend.
5. The backend returns an authenticated session.
6. The app loads dashboard data for the selected wallet.
```

Do not include production WalletConnect project IDs, RPC URLs, or chain-provider keys in public samples.

## Wallet Registration Flow

Conceptual public-safe flow:

```text
Connected EVM wallet
  |
  | sign in or register with backend
  v
Authenticated user session
  |
  | add wallet address by address or name
  v
Address validation and chain detection
  |
  | store normalized address metadata
  v
Dashboard data refresh
```

Exact signing, nonce, token, and refresh behavior is not confirmed from codebase.

## Ethereum Address and ENS Workflow

Expected workflow:

- Accept a raw Ethereum address or ENS name.
- Normalize user input.
- If the input is an ENS name, resolve it to an Ethereum address.
- Validate the resolved address before registration.
- Store only safe display previews in public docs.

ENS resolver implementation is not confirmed from codebase.

## Bitcoin Address Workflow

Expected workflow:

- Accept a candidate Bitcoin address.
- Detect common Bitcoin address prefixes and formats.
- Reject unsupported or invalid input.
- Register the address against a Bitcoin chain type.

Exact Bitcoin validation coverage is not confirmed from codebase.

## Solana Address and .sol Workflow

Expected workflow:

- Accept a raw Solana public key or `.sol` name.
- Resolve `.sol` names through Solana tooling.
- Validate the resulting public key.
- Register the address against a Solana chain type.

Exact `.sol` resolver implementation is not confirmed from codebase.

## Public-Safe Address Examples

Use clearly fake placeholders:

- `0xFAKE_ETHEREUM_ADDRESS_0001`
- `bc1q_fake_bitcoin_address_0001`
- `fake_solana_address_0001`
- `demo.eth`
- `demo.sol`

Do not include production wallet addresses, customer wallet data, transaction hashes, balances, or resolver responses.
