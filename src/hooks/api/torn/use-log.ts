import { useQuery } from "@tanstack/react-query";
import useTornClient from "hooks/use-torn-client";

const useLog = (logCategories: number[]) => {
  const tornClient = useTornClient();

  const query = useQuery({
    queryKey: ["log", logCategories],
    queryFn: async () => {
      return await tornClient.user.log({ log: logCategories });
    },
  });

  return { ...query };
};

export default useLog;
