import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  let ctx = useContext(CartContext);

  // Quantity Increment Function
  const handleIncrement = (id, quantity) => {
    ctx.updateQuantity(id, quantity + 1);
  };

  // Quantity Decrement Function
  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      ctx.updateQuantity(id, quantity - 1);
    }
  };

  return (
    <div className="p-4">
      {ctx.cartArr.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Sno</th>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {ctx.cartArr.map((ele, i) => (
              <tr key={ele.id} className="text-center border-b">
                <td className="p-2 border">{i + 1}</td>
                <td className="p-2 border">
                  <img src={ele.thumbnail} className="w-[70px] h-[70px] mx-auto" alt={ele.title} />
                </td>
                <td className="p-2 border">{ele.title}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleIncrement(ele.id, ele.quantity)}
                    className="bg-green-700 text-white px-3 py-1 rounded-md mx-1"
                  >
                    +
                  </button>
                  {ele.quantity}
                  <button
                    onClick={() => handleDecrement(ele.id, ele.quantity)}
                    className="bg-red-700 text-white px-3 py-1 rounded-md mx-1"
                  >
                    -
                  </button>
                </td>
                <td className="p-2 border">${ele.price.toFixed(2)}</td>
                <td className="p-2 border">
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-center text-2xl mt-10">Your cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;