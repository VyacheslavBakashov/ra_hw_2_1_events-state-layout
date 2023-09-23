import { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';
import products from '../data/products';

const Store = () => {
  const [state, setState] = useState(true);

  const onSwitch = () => {
    setState((prevState) => !prevState);
  };

  const icon = state ? 'view_module' : 'view_list';

  return (
    <div className='store'>
      <IconSwitch {...{ icon, onSwitch }} />
      {state ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  );
};

export default Store;
