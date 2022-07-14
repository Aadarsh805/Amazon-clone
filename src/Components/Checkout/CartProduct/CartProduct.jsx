import "./CartProduct.css";
import {useStateValue} from '../../../StateProvider'


const CartProduct = ({ image, title, price, id, rating }) => {
    const [{cart}, dispatch] = useStateValue()
    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    
  return (
    <div className="cartProduct">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="cartProduct__info">
        <h2>{title}</h2>
        <div>
          <span>In stock</span>
          <p>Eligible for FREE Shipping</p>
        </div>
        <img
          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
          alt=""
        />
        <button onClick={removeItem} className="deleteBtn">
            Delete from cart
        </button>
      </div>
      <div className="price">
        <span>$</span>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CartProduct;
