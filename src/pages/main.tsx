import useLogCategories from "../hooks/api/torn/use-log-categories";

const Main = () => {
  const { data, isLoading, error } = useLogCategories();

  if (error) console.error("ERROR: ", error);
  if (!isLoading) console.log(data.logcategories);

  return (
    <main>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          {data.logcategories.map((cat) => {
            return (
              <div>
                {cat.id}: {cat.title}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Main;
