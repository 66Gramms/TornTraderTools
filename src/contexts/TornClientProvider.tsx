import { createContext } from "react";
import { TornAPI } from "torn-client";

export const TornClientContext = createContext<TornAPI>(null);
