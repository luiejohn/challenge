import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setCurrentCategory } from "../../../store/category/category.actions";
import "./Home.scss";

const Home = ({ setCurrentCategory }) => {
  useEffect(() => {
    setCurrentCategory(null);
  }, []);

  return (
    <div>
      <div className="home-header"></div>
      <div className="container-center">
        <section className="discounts-container">
          <div className="discounts">
            <h1 className="discounts__banner">
              Check our store for exclusive discounts
            </h1>
            <div className="discounts__newsletter">
              sign up for exclusive sales and product news
              <div className="discounts__inputs">
                <input type="text" placeholder="Your email here" />
                <button className="btn-md btn-primary">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="check">
            <button className="btn-md btn-secondary">Check Twice</button>
          </div>
        </section>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentCategory: (cat) => dispatch(setCurrentCategory(cat)),
});

export default connect(null, mapDispatchToProps)(Home);
