const ShopItem = ({ name, price, color, img }) => {
  return (
    <li className="shop-item">
      <img className="shop-item__img" src={img} alt=""/>
      <h2 className="shop-item__title">{name}</h2>
      <span className="shop-item__color">{color}</span>
      <span className="shop-item__price">${price}</span>
      <button className="shop-item__add">Add to cart</button>
    </li>
  );
};

export default ShopItem;
