"use client";

type GlobalContextType = {
  user?: { [key: string]: any };
  setUser: (user: { [key: string]: any }) => void;
};

import {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

const GlobalContext = createContext<GlobalContextType>({ user: {}, setUser: () => {}});

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const [user, setUser] = useState({});

  useEffect(() => {
    let storedSessionUser = sessionStorage.getItem("authUser");
    if (segment == "dashboard" && storedSessionUser == null) {
      router.push("/login");
      // No need to return anything here
    } else if (storedSessionUser) {
      const parsedSessionUser = JSON.parse(storedSessionUser);
      setUser((prev) => parsedSessionUser);
    }

    // You can return a cleanup function here if needed
    // return () => {};
  }, []);

  const globalValues = useMemo(() => {
    return {
      user,
      setUser,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, setUser]);

  return (
    <GlobalContext.Provider value={globalValues}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
