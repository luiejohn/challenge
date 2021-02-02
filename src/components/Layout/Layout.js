import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./Layout.scss";

import Navigation from "../common/nav/nav";
import Footer from "../common/footer/footer";
import CategoryPage from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import ItemPage from "./../Pages/Item/ItemPage";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../store/user/user.actions";

const Layout = ({ setUser }) => {
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (userAuth) => {
      //Check if user already exist using Google OAuth
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(userAuth);
      }
    });

    return () => {
      //Clean up
      unSubscribe();
    };
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Layout);
