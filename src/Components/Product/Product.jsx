import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import {useStateValue} from '../../StateProvider'

const Product = ({ title, image, id, rating, price }) => {
  const [{cart}, dispatch] = useStateValue();
  
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        rating,
        price
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((x) => (
              <StarRateIcon className="star" fontSize="small" />
            ))}
          {Array(5 - rating)
            .fill()
            .map((x) => (
              <StarRateIcon className="greyStar" fontSize="small" />
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToCart} className="product__btn">Add to cart</button>
    </div>
  );
};

export default Product;
