import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentCategory } from "../../../store/category/category.actions";

import "./Category.scss";

import Category from "../../../components/common/categoryList/categoryList";
import ItemList from "../../../components/common/itemsList/itemList";
// import ItemList2 from '../../../components/common/itemList2/itemList2';
import BrandHeader from "../../../components/common/brandHeader/brandHeader";

const CategoryPage = ({ match, setCategory }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // return () => {
    //     cleanup
    // };
  }, []);

  useEffect(() => {
    setCategory(match.params.category);
  }, [match.params.category]);

  return (
    <Fragment>
      <div className="category-content">
        <div className="container-center">
          <Category />
          <ItemList />
          {/* <ItemList2 /> */}
          <BrandHeader />
        </div>

        <div style={{ backgroundColor: "#b4b4b4", marginTop: "2rem" }}>
          <div className="container-center">
            <div className="newsletter">
              <h3>Subscribe for shop news, updates, and special offers</h3>
              <div className="newsletter__send">
                <input
                  placeholder="Your Email Here!"
                  className="newsletter__input"
                />
                <button className="btn-md btn-primary"> Subscribe </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCategory: (cat) => dispatch(setCurrentCategory(cat)),
});

export default connect(null, mapDispatchToProps)(CategoryPage);
