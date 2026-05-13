import useLogTypes from "@/hooks/api/torn/use-log-types";

const LogDisplay = () => {
  const { data, isLoading } = useLogTypes();

  return (
    <main className="bg-red-500">
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          {data?.logtypes.map((type) => {
            return (
              <div>
                {type.id}: {type.title}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default LogDisplay;
