import type { TornAPI } from "torn-client";
import { TornClientContext } from "../contexts/TornClientProvider";
import type { ReactNode } from "react";

interface TornClientProviderProps {
  client: TornAPI;
  children: ReactNode;
}

export function TornClientProvider({
  client,
  children,
}: TornClientProviderProps) {
  return (
    <TornClientContext.Provider value={client}>
      {children}
    </TornClientContext.Provider>
  );
}
