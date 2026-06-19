export type WalletInputKind =
  | "ethereum-address"
  | "bitcoin-address"
  | "solana-address"
  | "ens-name"
  | "sol-name"
  | "unknown";

export type DetectedWalletInput = {
  kind: WalletInputKind;
  normalizedInput: string;
  chainType: "ethereum" | "bitcoin" | "solana" | "unknown";
};

const ETHEREUM_ADDRESS_PATTERN = /^0x[a-fA-F0-9]{40}$/;
const BITCOIN_ADDRESS_PATTERN = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{20,}$/;
const SOLANA_ADDRESS_PATTERN = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const ENS_PATTERN = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.eth$/i;
const SOL_NAME_PATTERN = /^[a-z0-9-]+\.sol$/i;

export function detectWalletInput(input: string): DetectedWalletInput {
  const normalizedInput = input.trim();

  if (ETHEREUM_ADDRESS_PATTERN.test(normalizedInput)) {
    return { kind: "ethereum-address", normalizedInput, chainType: "ethereum" };
  }

  if (ENS_PATTERN.test(normalizedInput)) {
    return {
      kind: "ens-name",
      normalizedInput: normalizedInput.toLowerCase(),
      chainType: "ethereum",
    };
  }

  if (BITCOIN_ADDRESS_PATTERN.test(normalizedInput)) {
    return { kind: "bitcoin-address", normalizedInput, chainType: "bitcoin" };
  }

  if (SOL_NAME_PATTERN.test(normalizedInput)) {
    return {
      kind: "sol-name",
      normalizedInput: normalizedInput.toLowerCase(),
      chainType: "solana",
    };
  }

  if (SOLANA_ADDRESS_PATTERN.test(normalizedInput)) {
    return { kind: "solana-address", normalizedInput, chainType: "solana" };
  }

  return { kind: "unknown", normalizedInput, chainType: "unknown" };
}

export async function resolveDemoName(input: string) {
  const detected = detectWalletInput(input);

  if (detected.kind === "ens-name") {
    return {
      chainType: "ethereum",
      address: "0xFAKE_ETHEREUM_ADDRESS_0001",
    };
  }

  if (detected.kind === "sol-name") {
    return {
      chainType: "solana",
      address: "fake_solana_address_0001",
    };
  }

  return {
    chainType: detected.chainType,
    address: detected.normalizedInput,
  };
}
