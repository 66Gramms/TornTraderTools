import { useQuery } from "@tanstack/react-query";
import useTornClient from "hooks/use-torn-client";

const useItems = () => {
  const tornClient = useTornClient();

  const query = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      return await tornClient.torn.items();
    },
  });

  return { ...query };
};

export default useItems;
