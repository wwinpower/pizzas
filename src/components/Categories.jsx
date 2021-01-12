import React, { useState } from 'react';

const Categories = ({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              key={`${name}_${index}`}
              onClick={() => onSelectItem(index)}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
