import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setCurrentCategory,
  setShopItems,
  setSubCategories,
} from "../../../store/category/category.actions";

import "./Category.scss";

import Category from "../../../components/common/categoryList/categoryList";
import ItemList from "../../../components/common/itemsList/itemList";
// import ItemList2 from '../../../components/common/itemList2/itemList2';
import BrandHeader from "../../../components/common/brandHeader/brandHeader";

import {
  firestore,
  convertCollectionDataToMap,
} from "../../../firebase/firebase.utils";

const CategoryPage = ({
  match,
  setCategory,
  setItems,
  shopItems,
  setSubCat,
  subCategories,
}) => {
  const [loading, setLoading] = useState(false);
  console.log(subCategories);

  useEffect(() => {
    setCategory(match.params.category);
    const collectionRef = firestore.collection(match.params.category);

    try {
      setLoading(true);
      collectionRef.onSnapshot(async (snapshop) => {
        const Items = await convertCollectionDataToMap(snapshop);
        console.log(Items.subCategories);
        setItems(Items.dataCollection);
        setSubCat(Items.subCategories);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [match.params.category]);

  return (
    <Fragment>
      <div className="category-content">
        <div className="container-center">
          <Category subCategories={subCategories} />
          <ItemList shopItems={shopItems} />
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

const mapStateToProps = (state) => ({
  shopItems: state.category.items,
  subCategories: state.category.subCategories,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (cat) => dispatch(setCurrentCategory(cat)),
  setItems: (items) => dispatch(setShopItems(items)),
  setSubCat: (subCat) => dispatch(setSubCategories(subCat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
