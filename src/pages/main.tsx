import { LogType, ITEMS } from "constants";
import useLog from "hooks/api/torn/use-log";

const Main = () => {
  const { data: logData, isLoading: logIsLoading } = useLog([
    LogType.MARKET_BUY,
  ]);

  if (logIsLoading) return null;

  console.log("logData: ", logData);

  logData?.log.forEach((log) => {
    const item = ITEMS.find((item) => item.id === log.data.items[0].id);
    console.log(
      `${new Date(log.timestamp * 1000)}: Bought x${log.data.items[0].qty} ${item?.name} for $${log.data.cost_total} at $${log.data.cost_each} each.`,
    );
  });

  return <div>Done</div>;

  // return <LogTypeDisplay />;
};

export default Main;
