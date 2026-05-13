import useLogTypes from "hooks/api/torn/use-log-types";

const LogTypeDisplay = () => {
  const { data, isLoading } = useLogTypes();

  return (
    <main>
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

export default LogTypeDisplay;
