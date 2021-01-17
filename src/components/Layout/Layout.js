import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./Layout.scss";

import Navigation from "../common/nav/nav";
import Footer from "../common/footer/footer";
import CategoryPage from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import ItemPage from "./../Pages/Item/ItemPage";

const Layout = () => {
  return (
    <Fragment>
      <Navigation />

      <div className="content">
        <Switch>
          <Route exact path="/category/" component={CategoryPage} />
          <Route exact path="/category/:category" component={CategoryPage} />
          <Route
            exact
            path="/category/:category/item/:id"
            component={ItemPage}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
