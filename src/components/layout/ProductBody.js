import { render } from '@testing-library/react';
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

import './productBody.css';

export const ProductBody = (props) => {

    const { item }  = props;
  
    return (

      <div className="productBodyContainer">

        <div className="productCrumbsContainer">
          <h3>
            <Link to="/shop">TVs</Link> {item.productId}
          </h3>  
        </div>
        {/* TOP INFO SECTION */}
        <div className="productTopContainer">
          <div className="productTopImageContainer">
            <div className="productTopMainImageContainer">
              <img className="productMainImage" src={item.imageUrl} alt={item.altMainImage}></img>
            </div>
            <div className="productTopListImageContainer">
              <ul className="productImagesUl">
                {item.imageCarousel.map( image => {
                  return (<li key={image} className="productImageLi">
                    <img src={image} alt={item.productId}/>
                  </li>)
                })}
              </ul>
            </div>
          </div>
          <div className="productTopInfoContainer">

            <img src={item.productIconImageUrl} alt="" className=""></img>
            <h1>{item.h1}</h1>
            <ul className="">
              {item.productsFeaturesLi.map(listItem => {
                return <li className="productsFeaturesLi" key={listItem}>{listItem}</li>
              })}
            </ul>

            <div className="availableSizesContainer">
              <ul className="availableSizesUl">
                {item.availableSizes.map(size => {
                  return (
                    <li className="availableSizesLi">
                      <Link to={size[1]} className="availableSizesLink">{size[0]}"</Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="productButtonsContainer">
              <Link to={item.whereToBuyLink}>
                <button className="buyNowButton">
                  Where To Buy
                </button>
              </Link>
            </div>

            <p className="">{item.topP}</p>

          </div>

        </div>   
        {/* TOP INFO SECTION END */}

        {/* ICONS SECTION */}

        <section className="productIconsSection">
          <div className="productIconsContainer">
            <div className="productIconsInnerContainer">
              <img src={item.topIcons[0]} alt="" className="productIconImage"></img>
              <h3>{item.topIconsText[0]}</h3>
            </div>
            <div className="productIconsInnerContainer">
              <img src={item.topIcons[1]} alt="" className="productIconImage"></img>
              <h3>{item.topIconsText[1]}</h3>
            </div>
            <div className="productIconsInnerContainer">
              <img src={item.topIcons[2]} alt="" className="productIconImage"></img>
              <h3>{item.topIconsText[2]}</h3>
            </div>
            <div className="productIconsInnerContainer">
              <img src={item.topIcons[3]} alt="" className="productIconImage"></img>
              <h3>{item.topIconsText[3]}</h3>
            </div>
          </div>
        </section>

      </div>
    )
}