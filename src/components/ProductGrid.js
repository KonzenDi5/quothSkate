import React from 'react';
import './estilos/estilosGrid.css';

const products = [
  { id: 1, name: 'Product 1', image: 'product1.jpg' },
  { id: 2, name: 'Product 2', image: 'product2.jpg' },
  { id: 3, name: 'Product 3', image: 'product3.jpg' },
  { id: 4, name: 'Product 4', image: 'product4.jpg' },
  { id: 5, name: 'Product 5', image: 'product5.jpg' },
  { id: 6, name: 'Product 6', image: 'product6.jpg' },
  { id: 7, name: 'Product 7', image: 'product7.jpg' },
  { id: 8, name: 'Product 8', image: 'product8.jpg' },
  { id: 9, name: 'Product 9', image: 'product9.jpg' },
  { id: 10, name: 'Product 10', image: 'product10.jpg' },
  { id: 11, name: 'Product 11', image: 'product11.jpg' },
  { id: 12, name: 'Product 12', image: 'product12.jpg' },
  { id: 13, name: 'Product 13', image: 'product13.jpg' },
  { id: 14, name: 'Product 14', image: 'product14.jpg' },
  { id: 15, name: 'Product 15', image: 'product15.jpg' },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="product-name">{product.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
