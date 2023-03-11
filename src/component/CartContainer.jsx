import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../feature/cart/cartSlice";
import React from "react";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cratItems, total, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h1>your bag</h1>
          <h4>cart is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cratItems.map((items) => {
          return <CartItem key={items.id} {...items} />;
        })}
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              {" "}
              total: <span>{total}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear cart
          </button>
        </footer>
      </div>
    </section>
  );
};

export default CartContainer;
