# Performance, Reliability, and Security

## Performance Notes

Confirmed from the local README:

- Dynamic imports are used for selected landing and wallet modules.
- Plotly chart loading is client-side with SSR disabled for heavy chart components.
- Viewport-based protocol loading uses IntersectionObserver.
- NFT and transaction requests are deferred until tabs are opened.
- Wallet and bundle dashboard requests are grouped.
- Share-link search is debounced.
- Share-link lists use server-side pagination.
- Derived data, filtering, sorting, and handlers are memoized.
- Next Image is used for major static assets.
- Standalone Next.js output is referenced.
- Multi-stage Docker build is referenced.

Exact implementation code and measured performance results are not confirmed from codebase.

## Reliability Notes

Confirmed from the local README:

- Domain-specific Redux loading and error states.
- Structured API error handling.
- Skeleton, empty, inline error, snackbar, and retry states.
- Refresh workflows for dependent datasets.
- Wallet and bundle selection persistence.
- Abort signals in selected request paths.
- Component-level tests for selected UI behavior.

Exact test files, retry policies, and error contracts are not confirmed from codebase.

## Security and Privacy Notes

Confirmed from the local README:

- Centralized bearer authentication in API requests.
- Protected route validation.
- Token refresh and logout cleanup.
- Privacy-aware public share views.
- Security headers configured in Next.js.

Not claimed:

- LocalStorage token storage safety.
- Complete end-to-end type safety.
- Full accessibility audit.
- Broad E2E testing.
- Production monitoring.
- Security audit completion.

## Public Export Security Guidance

Before publishing, search the export for:

- `http://` and `https://` values that are not placeholder documentation links.
- `Bearer`.
- `refresh`.
- `token`.
- `apiKey`, `api_key`, `secret`, `password`, `privateKey`.
- `rpc`.
- Long hexadecimal strings.
- Real wallet addresses.
- Transaction hashes.
- Real user names, emails, profile data, or customer records.

## Safe Claim Language

Use:

- "The case study demonstrates..."
- "The README describes..."
- "The public-safe example shows..."
- "Not confirmed from codebase."

Avoid:

- "Audited."
- "Production-proven at scale."
- "SOC2 compliant."
- "Zero-risk."
- "Payment-ready."
- "Guaranteed private."

