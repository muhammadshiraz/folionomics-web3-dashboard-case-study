# Privacy Redaction Checklist

Use this checklist before publishing the case study to GitHub.

## Secrets and Configuration

- [ ] No `.env` files.
- [ ] No API keys.
- [ ] No RPC keys.
- [ ] No backend URLs.
- [ ] No database URLs.
- [ ] No bearer tokens.
- [ ] No refresh tokens.
- [ ] No private infrastructure URLs.
- [ ] No payment credentials.
- [ ] No production secrets.

## Wallet and Customer Data

- [ ] No production wallet addresses.
- [ ] No customer wallet data.
- [ ] No real balances.
- [ ] No transaction hashes.
- [ ] No raw API responses.
- [ ] No customer profiles.
- [ ] No private notes, support data, or account metadata.

## Sharing and QR Codes

- [ ] No real share links.
- [ ] No real share-link slugs.
- [ ] No QR codes connected to real links.
- [ ] No internal preview URLs.
- [ ] No screenshots showing live share settings for a real user.

## Screenshots

- [ ] All balances are fake or redacted.
- [ ] All addresses are fake, shortened, or redacted.
- [ ] All transaction hashes are fake or redacted.
- [ ] Browser address bars do not show private URLs.
- [ ] Wallet extension popups do not show real accounts.
- [ ] Console panels and network panels are not visible.
- [ ] User names, emails, avatars, and social links are fake.

## Code Samples

- [ ] Samples use placeholder backend URL only.
- [ ] Samples use fake addresses only.
- [ ] Samples do not copy private production files directly.
- [ ] Samples do not include production endpoint paths if those are private.
- [ ] Samples do not include real response payloads.
- [ ] Samples do not include real project IDs or RPC configuration.

## Final Git Review

Run a manual review of staged files before publishing:

```text
git status --short
git diff --cached
```

Also search for sensitive strings before pushing:

```text
token
secret
api
rpc
bearer
refresh
password
private
0x
bc1
sol
```

Treat this checklist as a release gate, not a suggestion.

