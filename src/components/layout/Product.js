import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

import './product.css';

export const Product = (props) => {

  const { product }  = props;

  return <div className="productCategoryContainer">
    <div className="productCategoryHeaderContainer">
      <h3 className="productCategoryH2">{product.h1} <br/> {product.series} Series</h3>
    </div>
    <div className="productCategoryImageContainer">
      <img title="JVC TV" src={product.imageUrl} alt={product.model} className="productCategoryImage"></img>
    </div>
    <div className="productCategoryInfoContainer">
      <img title="JVC TV" src={product.productsIconImageUrl} alt={product.model} className="productsIconImage"></img>
      <p key={product.div}>Model: {product.model}</p>
      <ul className="productsUl">
        {product.productsFeaturesLi.slice(0, 5).map(listItem => {
          return <li className="productsFeaturesLi" key={listItem}>{listItem}</li>
        })}
      </ul>
      <div className="productButtonsContainer">
        <Link to={product.productsURL} item={product}>
          <button className="buyNowButton">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  </div>
}