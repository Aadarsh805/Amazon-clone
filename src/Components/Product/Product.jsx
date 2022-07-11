import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";

const Product = ({ title, image, id, rating, price }) => {
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
      <button className="product__btn">Add to cart</button>
    </div>
  );
};

export default Product;
