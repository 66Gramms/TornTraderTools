import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./pages/main";
import { TornAPI } from "torn-client";
import { TornClientProvider } from "./providers/torn-client-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  const tornClient = new TornAPI({
    apiKeys: [import.meta.env.VITE_FULL_ACCESS_KEY],
    comment: "TornTradingTools",
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <TornClientProvider client={tornClient}>
        <Main />
      </TornClientProvider>
    </QueryClientProvider>
  );
}

export default App;
