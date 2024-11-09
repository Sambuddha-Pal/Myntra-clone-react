import HomeItem from "../components/Homeitem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.Items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item}></HomeItem>
        ))}
      </div>
    </main>
  );
};
export default Home;
