# Wallet Detection Sample

## What This Sample Demonstrates

`walletDetection.example.ts` shows a public-safe address detection helper for Ethereum, Bitcoin, Solana, ENS, and `.sol` inputs. It demonstrates input normalization and chain-type classification.

It is an authored example and is not copied from production source.

## What Has Been Sanitized

- Validation is intentionally lightweight for demonstration.
- Resolver functions return fake placeholder addresses.
- No RPC endpoints, provider keys, or resolver responses are included.
- All sample addresses are fake or reserved-style placeholders.

## What Private Data Must Never Be Included

- Production wallet addresses.
- Customer wallet data.
- RPC keys.
- Resolver API keys.
- Backend registration URLs.
- Raw provider responses.
- Private analytics or enrichment data.

