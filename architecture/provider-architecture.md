# Provider Architecture

## Provider Stack

Confirmed from the local README, the application uses a provider-oriented frontend architecture with:

- Redux Toolkit and React Redux.
- Wallet context.
- Theme context.
- Wagmi.
- RainbowKit.
- Material UI theme.

The requested export also references a query client. A query client provider is not confirmed from codebase.

## Conceptual Provider Order

This public-safe case study models the provider stack like this:

```tsx
<ReduxProvider store={store}>
  <QueryClientProvider client={queryClient}>
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider>
        <MuiThemeProvider theme={muiTheme}>
          <AppThemeProvider>
            <WalletProvider>
              {children}
            </WalletProvider>
          </AppThemeProvider>
        </MuiThemeProvider>
      </RainbowKitProvider>
    </WagmiProvider>
  </QueryClientProvider>
</ReduxProvider>
```

Exact nesting order is not confirmed from codebase.

## Provider Responsibilities

### Redux Provider

Redux Toolkit is responsible for application domain state:

- Wallet address lists and selection.
- Wallet and bundle portfolio data.
- Assets, protocols, NFTs, transactions, and history.
- Share-link management.
- User, profile, and credit state.
- Loading, error, and refresh status for async workflows.

Exact store shape is not confirmed from codebase.

### Wallet Provider

The wallet provider conceptually coordinates:

- Connected wallet identity.
- Backend wallet registration.
- Authentication status.
- Disconnect and session cleanup.
- Active wallet or bundle selection.

Exact context values and hooks are not confirmed from codebase.

### Theme Provider and MUI Theme

The theme layer supports:

- Responsive dashboard layouts.
- Material UI component styling.
- Light/dark or user-selected theme behavior.
- Dialog, table, navigation, card, and form consistency.

Exact theme tokens are not confirmed from codebase.

### Wagmi and RainbowKit

Confirmed from the local README:

- Wagmi, Viem, and RainbowKit support EVM wallet connection.
- Ethereum and Sepolia wagmi configuration are referenced.
- RainbowKit provides wallet connection UI.

Exact chain list, RPC configuration, connector configuration, and project identifiers are not included in this export.

### Query Client

The requested case-study documentation includes a query client provider. Not confirmed from codebase.

If present in the production implementation, a query client would typically support request caching, request deduplication, retry behavior, query invalidation, and background refresh.

## Provider Security Notes

Public-safe provider examples must use placeholders only:

- Use `https://api.example.invalid` for backend base URLs.
- Use fake chain IDs, fake project IDs, and fake RPC endpoints if a sample requires them.
- Do not include production WalletConnect project IDs.
- Do not include RPC keys.
- Do not include bearer or refresh tokens.

