import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import items from '../../database/data.json';
import './productPage.css';

export class About extends Component {

  render() {

    const item = items[2]

    return (
      <section className="productBodySection">
        <h2>About page</h2>
      </section>
    )
  }
}