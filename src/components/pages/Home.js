import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import tvs from '../../database/jvc.json';

import './home.css';
import sliderImage1 from '../../assets/images/home/1.jpg'

export class Home extends Component {
  render() {
    return (
      <section className="homeSection">
        <div className="homeContainer"> 
          <section className="homeSliderSection">
            <div className="homeSliderContainer">
              <img src={sliderImage1}></img>
            </div>
          </section>
          <section className="homeSeriesSection">
            <div className="homeSeriesContainer">
              <div className="homeSeriesLeftContainer">
                <div className="homeSeriesInnerTextContainer">
                  <h2 data-text="Works">Full Range of Colors</h2>
                  <h3 className="">KSF LED Technology</h3>
                  <p>The new and cutting edge KSF technology displays 20 percent more color! You’ll get a wider range of warm and bright colors allowing you to see vibrant and rich textures that you would not normally get with other standard 4k TV’s.</p>
                </div>
              </div>
              <div className="homeSeriesRightContainer">
                <div className="homeSeriesInnerTextContainer">
                  <h2 data-text="Works">Slim Aesthetic Border</h2>
                  <h3 className="">Edge to Edge Picture</h3>
                  <p>The new and cutting edge KSF technology displays 20 percent more color! You’ll get a wider range of warm and bright colors allowing you to see vibrant and rich textures that you would not normally get with other standard 4k TV’s.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    )
  }
}
