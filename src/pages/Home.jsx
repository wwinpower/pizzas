import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

const Home = ({ pizzasItems }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          filterItems={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzasItems &&
          pizzasItems.map((obj) => <PizzaBlock key={`${obj.name}_${Math.random()}`} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
