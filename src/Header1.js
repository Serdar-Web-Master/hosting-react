import React, { Component } from "react";

import logo from "./logo.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Blog from "./Pages/Blog";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="brand">
              <img src={logo} className="logo" alt="" />
              React site
            </div>
            <div className="navig">
              <Router>
                <ul className="nav">
                  <li>
                    <Link to="/" exact>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="about">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contacts" component={Contacts} />
                  <Route exact path="/blog" component={Blog} />
                </Switch>
              </Router>
            </div>
            <div className="form">
              <form action="">
                <input type="text" placeholder="Seach" />
                <button className="bt-seach">Seach</button>
              </form>
            </div>
          </div>
        </header>
      </>
    );
  }
}
