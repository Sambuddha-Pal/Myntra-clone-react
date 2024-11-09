import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems />
      {fetchStatus.currentFetching ? <Spinner /> : <Outlet />}
      <Footer></Footer>
    </>
  );
}

export default App;
