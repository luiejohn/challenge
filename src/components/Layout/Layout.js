import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./Layout.scss";

import Navigation from "../common/nav/nav";
import Footer from "../common/footer/footer";
import CategoryPage from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import ItemPage from "./../Pages/Item/ItemPage";

import { auth } from "../../firebase/firebase.utils";

const Layout = () => {
  const [currentUser, setCurrentUser] = useState({ current: "" });

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser({ current: user });

      console.log(user);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <Fragment>
      <Navigation currentUser={currentUser} />

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
