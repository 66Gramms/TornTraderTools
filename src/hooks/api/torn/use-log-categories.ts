import { useQuery } from "@tanstack/react-query";
import useTornClient from "../../use-torn-client";

const useLogCategories = () => {
  const tornClient = useTornClient();

  const query = useQuery({
    queryKey: ["logCategories"],
    queryFn: async () => {
      return await tornClient.torn.logcategories();
    },
  });

  const { data, isLoading, error } = query;
  return { data, isLoading, error };
};

export default useLogCategories;
