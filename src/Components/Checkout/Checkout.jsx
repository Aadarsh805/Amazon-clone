import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import CartProduct from './CartProduct/CartProduct'

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      {cart?.length === 0 ? (
        <div className="emptycart">
          <h2>Your Amazon Cart is empty.</h2>
          <p>
            Check your Saved for later items or{" "}
            <Link to="/" className="homepage__link">
              continue shopping.
            </Link>
          </p>
        </div>
      ) : (
        <div className="cart__items">
          <div className="cart__heading">
          <h2>Shopping Cart</h2>
          <span>Price</span>
          </div>
          <hr />
          <div className="items">
            {cart.map((item) => (
              <CartProduct id={item.id} 
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
