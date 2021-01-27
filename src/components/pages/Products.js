import React, { Component } from 'react';

import items from '../../database/jvc.json';
import './products.css'
import ProductsGrid  from '../layout/ProductsGrid'

export class Products extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: items
    };
  }

  componentDidMount(){
    this.setState({products: items})
  }

  filterItems = (search) => {
    items.filter( (item) => {
      return item.includes(search)
    })
  }

  handleClickFilter = (product) => {
    let filtered = [];
    filtered = items.filter((item) => {
      return item.category == product
    })
    this.setState({
      products: filtered
    })
  }

  handleFilterSize = (product) => {
    let filtered = [];
    filtered = items.filter((item) => {
      return item.sizeCategory == product
    })
    this.setState({
      products: filtered
    })
  }

  handleFilterAll = () => {
    this.setState({
      products: items
    })
  }

  render() {
    return (
      <section className="productsSections">
        <div className="productsContainer">
          <div className="productsInnerContainer">
            <div className="">
              <div>
                <h3 className="productsFilterCategoryH3">Series</h3>
                <button onClick={() => this.handleFilterAll()} className="buyNowButton">
                  See All
                </button>
                <button onClick={() => this.handleClickFilter("Cameras")} className="LearnMoreButton">
                  Select Series
                </button>
                <button onClick={() => this.handleClickFilter("Cameras")} className="LearnMoreButton">
                  Premier Series
                </button>
                <button onClick={() => this.handleClickFilter("Cameras")} className="LearnMoreButton">
                  Elite Series
                </button>
              </div>
              <div>
                <h3 className="productsFilterCategoryH3">OS</h3>
                <button onClick={() => this.handleClickFilter("Cameras")} className="LearnMoreButton">
                  Roku/Smart TVs
                </button>
                <button onClick={() => this.handleClickFilter("Cameras")} className="LearnMoreButton">
                  Nonsmart TVs
                </button>
              </div>
              <div>
                <h3 className="productsFilterCategoryH3">Screens</h3>
                <button onClick={() => this.handleClickFilter("Printers")} className="LearnMoreButton">
                  KSF LED
                </button>
                <button onClick={() => this.handleClickFilter("Printers")} className="LearnMoreButton">
                  Edge To Edge
                </button>
              </div>
              <div>
                <h3 className="productsFilterCategoryH3">Sizes</h3>
                <div className="productsFilterContainer">
                  70"
                </div>
                <div className="productsFilterContainer">
                  65"
                </div>
                <div className="productsFilterContainer">
                  58"
                </div>
                <div className="productsFilterContainer">
                  55"
                </div>
                <div className="productsFilterContainer">
                  50"
                </div>
                <div className="productsFilterContainer">
                  40"
                </div>
                <div className="productsFilterContainer">
                  32"
                </div>
                <div className="productsFilterContainer">
                  24"
                </div>
              </div>
            </div>
          </div>
          <div className="productsInnerContainer">
            <ProductsGrid  items={this.state.products} />
          </div>
        </div>
      </section>
    )
  }
}
