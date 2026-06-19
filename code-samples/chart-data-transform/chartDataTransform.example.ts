type PortfolioAssetRow = {
  symbol: string;
  chain: string;
  walletLabel: string;
  valueUsd: number;
};

type TreemapNode = {
  id: string;
  parent: string;
  label: string;
  value: number;
};

type HistoryPoint = {
  date: string;
  valueUsd: number;
};

type ChartHistoryPoint = {
  x: string;
  y: number;
};

export function toTreemapNodes(rows: PortfolioAssetRow[]): TreemapNode[] {
  const root: TreemapNode = {
    id: "portfolio",
    parent: "",
    label: "Portfolio",
    value: 0,
  };

  const chains = new Map<string, number>();
  const assets = new Map<string, number>();

  rows.forEach((row) => {
    root.value += row.valueUsd;
    chains.set(row.chain, (chains.get(row.chain) ?? 0) + row.valueUsd);

    const assetId = `${row.chain}:${row.symbol}`;
    assets.set(assetId, (assets.get(assetId) ?? 0) + row.valueUsd);
  });

  return [
    root,
    ...Array.from(chains.entries()).map(([chain, value]) => ({
      id: `chain:${chain}`,
      parent: "portfolio",
      label: chain,
      value,
    })),
    ...Array.from(assets.entries()).map(([assetId, value]) => {
      const [chain, symbol] = assetId.split(":");

      return {
        id: `asset:${assetId}`,
        parent: `chain:${chain}`,
        label: symbol,
        value,
      };
    }),
  ];
}

export function toHistorySeries(points: HistoryPoint[]): ChartHistoryPoint[] {
  return [...points]
    .sort((left, right) => left.date.localeCompare(right.date))
    .map((point) => ({
      x: point.date,
      y: Number(point.valueUsd.toFixed(2)),
    }));
}

export const demoAssets: PortfolioAssetRow[] = [
  { symbol: "ETH", chain: "Ethereum", walletLabel: "Demo Wallet", valueUsd: 4250 },
  { symbol: "USDC", chain: "Ethereum", walletLabel: "Demo Wallet", valueUsd: 1500 },
  { symbol: "SOL", chain: "Solana", walletLabel: "Demo Wallet", valueUsd: 5600 },
];

export const demoHistory: HistoryPoint[] = [
  { date: "2026-01-01", valueUsd: 9500 },
  { date: "2026-02-01", valueUsd: 10100 },
  { date: "2026-03-01", valueUsd: 11350 },
];

