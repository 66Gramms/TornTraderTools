import LogTypeDisplay from "components/organisms/LogTypeDisplay";
import useItems from "hooks/api/torn/use-items";

const Main = () => {
  const { data: itemData } = useItems();
  console.log("itemData", itemData);

  return <LogTypeDisplay />;
};

export default Main;
