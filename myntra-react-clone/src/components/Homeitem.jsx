import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/BagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(BagActions.addToBag(item.id));
  };
  const bag = useSelector((store) => store.Bag);
  let bool = false;
  bag.forEach((id1) => {
    if (id1 === item.id) bool = true;
  });
  const handleRemove = () => {
    dispatch(BagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bool ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemove}
        >
          <RiDeleteBin6Line /> Remove{" "}
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          <IoIosAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
