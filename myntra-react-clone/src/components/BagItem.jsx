import { useSelector, useDispatch } from "react-redux";
import { BagActions } from "../store/BagSlice";
const BagItem = ({ item }) => {
  let item2 = [];
  const items = useSelector((store) => store.Items);
  items.forEach((item1) => {
    if (item1.id === item) {
      item2 = item1;
    }
  });
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(BagActions.removeFromBag(item));
  };
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item2.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item2.company}</div>
        <div className="item-name">{item2.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item2.current_price}</span>
          <span className="original-price">Rs {item2.original_price}</span>
          <span className="discount-percentage">
            ({item2.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item2.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item2.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleRemove}>
        X
      </div>
    </div>
  );
};
export default BagItem;
