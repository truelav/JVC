import React from 'react';
import { Link } from 'react-router-dom';

import './TVs.css';

export const TVs = () => {
    return(
        <section className="tvsMainBodySection">
            <div className="tvsMainBodyContainer">
                <div className="tvSeriesHeaderContainer">
                    <h2 className="tvSeriesHeaderH">Television Series</h2>
                    <p className="tvSeriesHeaderP">Experience a realistic image that brings each scene to life with a wider range of colors and dynamic contrast. Stop viewing black voids that are meant to be deep shadows or bright washed out scenes with no detail. High Dynamic Range allows you to experience the film as the director intended with vivid unsaturated colors.</p>
                </div>
                <div className="tvSeriesBodyContainer">
                    
                    <div className="tvSeriesBodyInnerContainer">
                        <div className="tvSeriesBodyInnerImageContainer">
                            <img src="../../assets/images/lifestyle/products-elite.jpg" alt="" className="tvSeriesImage"></img>
                        </div>
                        <div className="tvSeriesBodyInnerInfoContainer">
                            <h2>Elite Series</h2>
                            <p>The Elite series features the new and cutting edge KSF technology that displays 20 percent more color. You’ll get a wider range of warm and bright colors allowing you to see vibrant and rich textures that you would not normally get with other standard 4k tv’s.</p>
                            <h2>Available Sizes</h2>
                            <div className="tvSeriesAvailableSizesContainer">
                                <ul className="tvSeriesAvailableSizesUl">
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">65"</Link>
                                    </li>
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">55"</Link>
                                    </li>
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">50"</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="productButtonsContainer">
                                <Link to="#">
                                    <button className="buyNowButton">
                                        Where To Buy
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tvSeriesBodyInnerContainer">
                        <div className="tvSeriesBodyInnerImageContainer">
                            <img src="../../assets/images/lifestyle/products-premier.jpg" alt="" className="tvSeriesImage"></img>
                        </div>
                        <div className="tvSeriesBodyInnerInfoContainer">
                            <h2>Premier Series</h2>
                            <p>The Premier series delivers a 4K picture that will bring every motion picture to life. With Roku and Smart TV options you can navigate and stream all of your favorite shows and movies. With a frameless bezel you can bring a clean and high quality look to your home.</p>
                            <h2>Available Sizes</h2>
                            <div className="tvSeriesAvailableSizesContainer">
                                <ul className="tvSeriesAvailableSizesUl">
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">65"</Link>
                                    </li>
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">55"</Link>
                                    </li>
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">50"</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="productButtonsContainer">
                                <Link to="#">
                                    <button className="buyNowButton">
                                        Where To Buy
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tvSeriesBodyInnerContainer">
                        <div className="tvSeriesBodyInnerImageContainer">
                            <img src="../../assets/images/lifestyle/products-select.jpg" alt="" className="tvSeriesImage"></img>
                        </div>
                        <div className="tvSeriesBodyInnerInfoContainer">
                            <h2>Select Series</h2>
                            <p>The Select series covers all the essentials in what you would look for in a television. The Select series brings you a stunning and sharp 1080p picture. Get a step up in sound quality with a built-in Dolby system so you can enjoy a crisp and warm audio experience.</p>
                            <h2>Available Sizes</h2>
                            <div className="tvSeriesAvailableSizesContainer">
                                <ul className="tvSeriesAvailableSizesUl">
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">65"</Link>
                                    </li>
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">55"</Link>
                                    </li>
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">50"</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="productButtonsContainer">
                                <Link to="#">
                                    <button className="buyNowButton">
                                        Where To Buy
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tvSeriesBodyInnerContainer">
                        <div className="tvSeriesBodyInnerImageContainer">
                            <img src="../../assets/images/lifestyle/products-elite.jpg" alt="" className="tvSeriesImage"></img>
                        </div>
                        <div className="tvSeriesBodyInnerInfoContainer">
                            <h2>All Series</h2>
                            <p>The Elite series features the new and cutting edge KSF technology that displays 20 percent more color. You’ll get a wider range of warm and bright colors allowing you to see vibrant and rich textures that you would not normally get with other standard 4k tv’s.</p>
                            <h2>Available Sizes</h2>
                            <div className="tvSeriesAvailableSizesContainer">
                                <ul className="tvSeriesAvailableSizesUl">
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">65"</Link>
                                    </li>
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">55"</Link>
                                    </li>
                                    <li className="tvSeriesAvailableSizesLi">
                                        <Link to="LT-65MAW705" className="tvSeriesAvailableSizesLink">50"</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="productButtonsContainer">
                                <Link to="#">
                                    <button className="buyNowButton">
                                        Where To Buy
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    )
}
