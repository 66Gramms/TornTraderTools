import { useContext } from "react";
import { TornClientContext } from "../contexts/TornClientProvider";

const useTornClient = () => {
  const client = useContext(TornClientContext);

  if (!client) {
    throw new Error("useTornClient must be used inside TornClientProvider");
  }

  return client;
};

export default useTornClient;
