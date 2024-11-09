import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
const Bag = () => {
  const bag = useSelector((store) => store.Bag);
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bag.map((item) => (
            <BagItem item={item} key={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
