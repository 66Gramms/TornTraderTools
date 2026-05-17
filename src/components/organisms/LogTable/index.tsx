import { ITEMS, LogType } from "@/constants";
import useLog from "@/hooks/api/torn/use-log";
import { DataTable } from "../Table";
import { columns, type BuyLog } from "./columns";

const LogTable = () => {
  const { data: logData, isLoading: logIsLoading } = useLog([
    LogType.MARKET_BUY,
  ]);

  if (logIsLoading) return null;

  const marketBuyLogs = logData?.log.map((log) => {
    const item = ITEMS.find((item) => item.id === log.data.items[0].id);
    return {
      date: new Date(log.timestamp * 1000).toLocaleString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      item: { name: item?.name ?? "MISSING ITEM", image: item?.image },
      quantity: log.data.items[0]?.qty,
      each: log.data.cost_each,
      total: log.data.cost_total,
    } as BuyLog;
  });

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={marketBuyLogs} />
    </div>
  );
};

export default LogTable;
