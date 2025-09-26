import React from 'react';

const products = [
  { title: 'Kapusta', isFruit: false, id: 1 },
  { title: 'Czosnek', isFruit: false, id: 2 },
  { title: 'Jabłko', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default ShoppingList;
