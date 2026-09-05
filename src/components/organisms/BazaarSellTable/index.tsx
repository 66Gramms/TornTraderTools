import { ITEMS, LogType } from "@/constants";
import useLog from "@/hooks/api/torn/use-log";
import { useEffect, useState } from "react";
import { DataTable } from "../Table";
import { columns, type BazaarSellLog } from "./columns";

const BazaarSellTable = () => {
  const { data: logData, isLoading: logIsLoading } = useLog([
    LogType.BAZAAR_SELL,
  ]);
  const [pageData, setPageData] = useState(logData);

  useEffect(() => {
    if (logData) {
      setPageData(logData);
    }
  }, [logData]);

  if (logIsLoading) return null;

  const bazaarSellLogs =
    pageData?.log.map((log) => {
      const item = ITEMS.find((item) => item.id === log.data.items[0].id);

      return {
        date: new Date(log.timestamp * 1000).toLocaleString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        item: {
          name: item?.name ?? "MISSING ITEM",
          image: item?.image,
        },
        buyPrice: 50, // Placeholder 
        sellPrice: log.data.cost_each,
        profit: log.data.cost_each - 50, // Placeholder
      } as BazaarSellLog;
    }) ?? [];

  const handleNextPage = async () => {
    if (!pageData?.next) return;

    const nextPage = await pageData.next();
    setPageData(nextPage);
  };

  const handlePreviousPage = async () => {
    if (!pageData?.prev) return;

    const prevPage = await pageData.prev();
    setPageData(prevPage);
  };

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={bazaarSellLogs}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        canNextPage={!!pageData?._metadata.links.next}
        canPreviousPage={!!pageData?._metadata.links.prev}
      />
    </div>
  );
};

export default BazaarSellTable;
