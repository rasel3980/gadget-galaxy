"use client";
import { useSelector } from "react-redux";
import CartDetails from "../components/CartDetails";

const CartPage = () => {

  const cartItems = useSelector((state) => state.cart.items) || [];

  const isSelected =
    cartItems?.filter((item) => item?.selected) || [];

  const totalPrice = isSelected
    .reduce(
      (sum, item) =>
        sum + ((item?.price || 0) * (item?.cartQuantity || 0)),
      0
    )
    .toFixed(2);

  const totalQuantity = isSelected
    .reduce((sum, item) => sum + (item?.cartQuantity || 0), 0);

  return (
    <div>
      {cartItems.length !== 0 ? (
        <>
          <div>
            {cartItems.map((item) => (
              <CartDetails key={item?.id} item={item} />
            ))}
          </div>

          <div className="flex justify-between gap-5 items-center mt-6 md:w-10/12 mx-auto">
            <button className="md:text-2xl text-blue-700 font-bold">
              Total Price:- ${totalPrice}
            </button>
            <button className="md:text-2xl font-bold bg-green-600 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-green-800">
              Order Now
            </button>
            <button className="md:text-2xl text-blue-700 font-bold">
              Total Product:- {totalQuantity}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center mt-12">
          <p className="text-red-600 font-bold text-5xl">
            Sorry , No items in your cart
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
