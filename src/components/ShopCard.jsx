const ShopCard = ({ name, price, color, img }) => {
  return (
    <li className="shop-card">
      <h2 className="shop-card__title">{name}</h2>
      <span className="shop-card__color">{color}</span>
      <img className="shop-card__img" src={img} alt=""/>
      <span className="shop-card__price">${price}</span>
      <button className="shop-card__add">Add to cart</button>
    </li>
  );
};

export default ShopCard;
