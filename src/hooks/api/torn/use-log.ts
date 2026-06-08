import useTornClient from "@/hooks/use-torn-client";
import { useQuery } from "@tanstack/react-query";

const useLog = (logCategories: number[]) => {
  const tornClient = useTornClient();

  const query = useQuery({
    queryKey: ["log", logCategories],
    queryFn: async () => {
      return await tornClient.user.log({ log: logCategories, limit: 25 });
    },
  });

  return { ...query };
};

export default useLog;
