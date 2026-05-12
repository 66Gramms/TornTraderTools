import { useQuery } from "@tanstack/react-query";
import useTornClient from "../../use-torn-client";

const useLogTypes = () => {
  const tornClient = useTornClient();

  const query = useQuery({
    queryKey: ["logTypes"],
    queryFn: async () => {
      return await tornClient.torn.logtypes();
    },
  });

  return { ...query };
};

export default useLogTypes;
