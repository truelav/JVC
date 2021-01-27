import React, { Component } from 'react';

import items from '../../database/jvc.json';
import './products.css';
import './shop.css';
import ProductsGrid  from '../layout/ProductsGrid'

export class Shop extends Component {

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
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  See All
                </button>
                <button onClick={() => this.handleClickFilter("Cameras")} className="filterButton">
                  Select Series
                </button>
                <button onClick={() => this.handleClickFilter("Cameras")} className="filterButton">
                  Premier Series
                </button>
                <button onClick={() => this.handleClickFilter("Cameras")} className="filterButton">
                  Elite Series
                </button>
              </div>
              <div>
                <h3 className="productsFilterCategoryH3">OS</h3>
                <button onClick={() => this.handleClickFilter("Cameras")} className="filterButton">
                  Roku/Smart TVs
                </button>
                <button onClick={() => this.handleClickFilter("Cameras")} className="filterButton">
                  Nonsmart TVs
                </button>
              </div>
              <div>
                <h3 className="productsFilterCategoryH3">Screens</h3>
                <button onClick={() => this.handleClickFilter("Printers")} className="filterButton">
                  KSF LED
                </button>
                <button onClick={() => this.handleClickFilter("Printers")} className="filterButton">
                  Edge To Edge
                </button>
              </div>
              <div>
                <h3 className="productsFilterCategoryH3">Sizes</h3>
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  70"
                </button>
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  65"
                </button>
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  58"
                </button>
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  55"
                </button>
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  50"
                </button>
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  40"
                </button>
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  32"
                </button>
                <button onClick={() => this.handleFilterAll()} className="filterButton">
                  24"
                </button>
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
