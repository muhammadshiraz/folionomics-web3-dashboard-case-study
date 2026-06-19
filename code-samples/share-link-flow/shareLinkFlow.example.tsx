import { useMemo, useState } from "react";

type ShareTarget = {
  type: "wallet" | "bundle";
  id: string;
  label: string;
};

type SharePrivacy = {
  showValues: boolean;
  showAddresses: boolean;
  showTransactions: boolean;
  expiresInDays: number;
};

type DemoAsset = {
  symbol: string;
  chain: string;
  amount: string;
  valueUsd: number;
  ownerAddress: string;
};

const demoAssets: DemoAsset[] = [
  {
    symbol: "ETH",
    chain: "Ethereum",
    amount: "1.25",
    valueUsd: 4250,
    ownerAddress: "0xFAKE_ETHEREUM_ADDRESS_0001",
  },
  {
    symbol: "SOL",
    chain: "Solana",
    amount: "40.00",
    valueUsd: 5600,
    ownerAddress: "fake_solana_address_0001",
  },
];

function maskAddress(address: string) {
  if (address.length <= 12) {
    return "Hidden";
  }

  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function createPublicPreview(assets: DemoAsset[], privacy: SharePrivacy) {
  return assets.map((asset) => ({
    symbol: asset.symbol,
    chain: asset.chain,
    amount: privacy.showValues ? asset.amount : "Hidden",
    valueUsd: privacy.showValues ? `$${asset.valueUsd.toLocaleString()}` : "Hidden",
    ownerAddress: privacy.showAddresses ? maskAddress(asset.ownerAddress) : "Hidden",
  }));
}

export function ShareLinkFlowExample() {
  const [target] = useState<ShareTarget>({
    type: "bundle",
    id: "bundle_demo_001",
    label: "Demo Bundle",
  });

  const [privacy, setPrivacy] = useState<SharePrivacy>({
    showValues: false,
    showAddresses: false,
    showTransactions: false,
    expiresInDays: 7,
  });

  const publicPreview = useMemo(
    () => createPublicPreview(demoAssets, privacy),
    [privacy],
  );

  const payload = useMemo(
    () => ({
      targetType: target.type,
      targetId: target.id,
      privacy,
    }),
    [privacy, target],
  );

  const fakePublicUrl = "https://folionomics.example/share/demo-public-view";

  return (
    <section>
      <h2>Create Share Link</h2>
      <p>{target.label}</p>

      <label>
        <input
          checked={privacy.showValues}
          type="checkbox"
          onChange={(event) =>
            setPrivacy((current) => ({
              ...current,
              showValues: event.target.checked,
            }))
          }
        />
        Show values
      </label>

      <label>
        <input
          checked={privacy.showAddresses}
          type="checkbox"
          onChange={(event) =>
            setPrivacy((current) => ({
              ...current,
              showAddresses: event.target.checked,
            }))
          }
        />
        Show addresses
      </label>

      <label>
        <input
          checked={privacy.showTransactions}
          type="checkbox"
          onChange={(event) =>
            setPrivacy((current) => ({
              ...current,
              showTransactions: event.target.checked,
            }))
          }
        />
        Show transactions
      </label>

      <pre>{JSON.stringify({ fakePublicUrl, payload, publicPreview }, null, 2)}</pre>
    </section>
  );
}
