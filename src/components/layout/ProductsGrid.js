import React from 'react';
import { Product } from './Product';
import './product.css';

const ProductsGrid = (props) => {
  
  const categories = props;
  return <section className="productsCategoriesSection">
    <div className="productsCategoriesContainer">
      {categories.items.map(product => (
        <Product  key={product.productId} product={product}/>
      ))}
    </div>
  </section>
}

export default ProductsGrid