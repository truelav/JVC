import React from 'react';

import items from '../../database/jvc.json';

import { useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { ProductBody }  from '../layout/ProductBody';

import '../layout/product.css';

export const Product = () => {

  const productId = useParams().productId;
  const currentProduct = items.filter( item => item.productId === productId)[0]

  console.log(currentProduct)

  return (
    <ProductBody item ={currentProduct}/>
  ) 
}

// export default Product;