import ShopItem from './ShopItem';

const ListView = ({ items }) => {
  return (
    <ul className="list-view">
      {items.map((item) => (
        <ShopItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ListView;
