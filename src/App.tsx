import "@/App.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Main from "@/pages/main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TornAPI } from "torn-client";
import { TornClientProvider } from "./providers/torn-client-provider";

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
        <TooltipProvider>
          <Main />
        </TooltipProvider>
      </TornClientProvider>
    </QueryClientProvider>
  );
}

export default App;
