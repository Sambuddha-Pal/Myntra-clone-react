import { useSelector } from "react-redux";
const BagSummary = () => {
  const bag = useSelector((store) => store.Bag);
  const items = useSelector((store) => store.Items);
  const CONVINIENCE_FEE = 99;
  const totalItem = bag.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  let bagSummary = [];

  bag.map((id1) => {
    items.filter((item) => {
      if (item.id === id1) bagSummary.push(item);
    });
  });

  bagSummary.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });
  finalPayment = totalMRP - totalDiscount + CONVINIENCE_FEE;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
