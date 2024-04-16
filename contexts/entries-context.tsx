"use client";

type EntriesContextType = {
  selectedEntry?: { [key: string]: any };
  setSelectedEntry: (selectEntry: { [key: string]: any }) => void;
};

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

const EntriesContext = createContext<EntriesContextType>({
  selectedEntry: {},
  setSelectedEntry: () => {},
});

export default function EntriesProvider({ children }: { children: ReactNode }) {
  const [selectedEntry, setSelectedEntry] = useState({});

  const entriesValues = useMemo(() => {
    return {
      selectedEntry,
      setSelectedEntry,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEntry, setSelectedEntry]);

  return (
    <EntriesContext.Provider value={entriesValues}>
      {children}
    </EntriesContext.Provider>
  );
}

export function useEntriesContext() {
  return useContext(EntriesContext);
}
