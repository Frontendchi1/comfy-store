import { useSelector } from "react-redux";
import { FormatPrice } from "../utils";
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{FormatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">{FormatPrice(shipping)}</span>{" "}
        </p>
        {/* Tax */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Tax</span>
          <span className="font-medium">{FormatPrice(tax)}</span>
        </p>
        {/* Total */}
        <p className="mt-4 flex justify-between text-sm  pb-2">
          <span className="font-bold">Order Total</span>
          <span className="font-bold">{FormatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
