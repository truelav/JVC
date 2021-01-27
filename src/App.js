import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

import { Home } from './components/pages/Home'
import { TVs } from './components/pages/TVs'
import { Shop } from './components/pages/Shop'

import { Product } from './components/pages/Product'
import { Products } from './components/pages/Products'
import { Contact } from './components/pages/Contact'

import './app.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Header />
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/TVs" component={TVs} />
            <Route path="/Shop" component={Shop} />
            <Route path="/Products" component={Products} />
            <Route path="/Contact" component={Contact} />
            <Route path="/:productId" exact>
              <Product />
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
          <Footer />
      </BrowserRouter>
    )
  }
}
