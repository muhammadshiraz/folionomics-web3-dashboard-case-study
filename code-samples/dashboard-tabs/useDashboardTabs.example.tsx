import { useCallback, useMemo, useState } from "react";

type DashboardTabId = "assets" | "protocols" | "nfts" | "transactions" | "history";

type DashboardTab = {
  id: DashboardTabId;
  label: string;
  isVisible: boolean;
  shouldLoad: boolean;
};

type DashboardTabOptions = {
  mode: "private" | "shared";
  showTransactions: boolean;
  onLoadTab: (tabId: DashboardTabId) => void;
};

const DEFAULT_TAB: DashboardTabId = "assets";

export function useDashboardTabs({
  mode,
  showTransactions,
  onLoadTab,
}: DashboardTabOptions) {
  const [activeTab, setActiveTab] = useState<DashboardTabId>(DEFAULT_TAB);
  const [loadedTabs, setLoadedTabs] = useState<Set<DashboardTabId>>(
    () => new Set([DEFAULT_TAB]),
  );

  const tabs = useMemo<DashboardTab[]>(
    () => [
      { id: "assets", label: "Assets", isVisible: true, shouldLoad: true },
      { id: "protocols", label: "Protocols", isVisible: true, shouldLoad: true },
      { id: "nfts", label: "NFTs", isVisible: true, shouldLoad: loadedTabs.has("nfts") },
      {
        id: "transactions",
        label: "Transactions",
        isVisible: mode === "private" || showTransactions,
        shouldLoad: loadedTabs.has("transactions"),
      },
      { id: "history", label: "History", isVisible: true, shouldLoad: true },
    ],
    [loadedTabs, mode, showTransactions],
  );

  const visibleTabs = useMemo(
    () => tabs.filter((tab) => tab.isVisible),
    [tabs],
  );

  const selectTab = useCallback(
    (tabId: DashboardTabId) => {
      setActiveTab(tabId);
      setLoadedTabs((current) => {
        const next = new Set(current);
        next.add(tabId);
        return next;
      });
      onLoadTab(tabId);
    },
    [onLoadTab],
  );

  const resetTabs = useCallback(() => {
    setActiveTab(DEFAULT_TAB);
    setLoadedTabs(new Set([DEFAULT_TAB]));
  }, []);

  return {
    activeTab,
    visibleTabs,
    selectTab,
    resetTabs,
  };
}

