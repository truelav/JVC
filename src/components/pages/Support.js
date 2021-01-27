import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import items from '../../database/data.json';
import './productPage.css';

export class Support extends Component {

  render() {

    const item = items[1]

    return (
      <section className="productBodySection">
        <div className="productBodyContainer">

          <div className="productTopContainer">
            <div className="productTopInnerImgContainer">
              <img className="productMainImage" src={item.imageUrl} alt={item.altMainImage}></img>
            </div>
            <div className="productTopInnerContainer">
              <div className="productTopHeaderContainer">
                <h2>{item.brand} {item.h1}</h2>
                <h3>{item.h2}</h3>
              </div>
              <div className="productFeaturesContainer">
                <p>{item.photoSize}</p>

                <ul className="productFeatuersLiUl">
                  {item.featuresLi.map((product,i) =>(
                    <li key={i} className="productFeatuersLi">{product}</li>
                  ))}
                </ul>

                <div className="productAvailableSizesContainer">
                  <p>Available Sizes:</p>
                  <ul className="productSizesLi">
                    {item.availableSizes.map((product,i) =>(
                      <a key={i} href={product[1]}>
                        <li key={i + 1} className="productFeatuersLi">{product[0]}</li>
                        <img key={i + 2} className="productSizesIcon" alt="" src={product[2]}></img>
                      </a>
                    ))}
                  </ul>
                </div>

                <div className="productAvailableColorsContainer">
                  <p>Available Colors:</p>
                  <ul className="productSizesLi">
                    {item.availableColors.map((product,i) =>(
                      <a key={i} href={product[1]}>
                        <li className="productFeatuersLi">{product[0]}</li>
                        <img key={i + 2} className="productSizesIcon" alt="" src={product[2]}></img>
                      </a>
                    ))}
                  </ul>
                </div>

                <div className="productInsideBoxInnerContainer">
                  <h2>Inside Box:</h2>
                  <ul className="productFeatuersLiUl">
                    {item.insideBox.map((product,i) =>(
                        <li key={i} className="productFeatuersLi">{product}</li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="productButtonsContainer">
                <a href={item.productsURL}>
                  <button className="buyNowButton">
                    Buy Now
                  </button>
                </a>
              </div>

              <div className="productInsideBoxContainer">
              </div>
            </div>
          </div>

          <div className="productAboutContainer">
            <h2>About This Item:</h2>
          </div>      

          <div className="productFeaturesContainer">
            <ul className="productFeaturesLi">
              {item.featuresP.map((product,i) =>(
                <li  key={i} className="productFeatuersLi">{product}</li>
              ))}
            </ul>
          </div>

          <div className="productLifestyleContainer">
            {item.lifestyleImages.map((product,i) =>(
              <div key={i} className="productLifestyleInnerContainer">
                <img className="productMainImage" src={product} alt={item.altMainImage}></img>
              </div>
            ))}
          </div>


        </div>
      </section>
    )
  }
}