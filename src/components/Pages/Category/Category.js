import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setCurrentCategory,
  setShopItems,
  setSubCategories,
  setSubCatFilter,
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
import Loading from "../../common/loading/loading";

const CategoryPage = ({
  match,
  setCategory,
  setItems,
  shopItems,
  setSubCat,
  subCategories,
  setFilterSubCat,
  filter,
}) => {
  const [pageloading, setPageLoading] = useState(false);
  const [itemsLoading, setItemsLoading] = useState(false);

  const [selectedSize, setSelectedSize] = useState("");
  const [values, setValues] = React.useState([0, 100]);

  useEffect(() => {
    const collectionRef = firestore.collection(match.params.category);
    setCategory(match.params.category);

    try {
      setPageLoading(true);
      setFilterSubCat(null);
      collectionRef.get().then((items) => {
        const Items = convertCollectionDataToMap(items);
        setItems(Items.dataCollection);
        setSubCat(Items.subCategories);
        setPageLoading(false);
      });

      // collectionRef.onSnapshot(async (snapshop) => {
      //   const Items = await convertCollectionDataToMap(snapshop);
      //   setItems(Items.dataCollection);

      //   setSubCat(Items.subCategories);
      //   setLoading(false);
      // });
    } catch (error) {
      console.log(error);
    }
  }, [match.params.category]);

  const applyFilter = (subcat, size, price) => {
    const collectionRef = firestore.collection(match.params.category);
    var query;

    // Women - L - <18 = 3 results

    if (subcat && !price & !size) {
      query = collectionRef.where("subCategory", "==", subcat);
    }

    if (subcat && price && size) {
      query = collectionRef
        .where("subCategory", "==", subcat)
        .where("price", ">=", price[0])
        .where("price", "<=", price[1])
        .where("sizes", "array-contains", size);
    }

    if (subcat && price && !size) {
      query = collectionRef
        .where("subCategory", "==", subcat)
        .where("price", ">=", price[0])
        .where("price", "<=", price[1]);
    }

    if (!subcat && price && size) {
      query = collectionRef
        .where("price", ">=", price[0])
        .where("price", "<=", price[1])
        .where("sizes", "array-contains", size);
    }

    if (price && !size) {
      console.log("read2");
      query = collectionRef
        .where("price", ">=", price[0])
        .where("price", "<=", price[1]);
    }

    try {
      setItemsLoading(true);
      query.get().then((items) => {
        const Items = convertCollectionDataToMap(items);
        setItems(Items.dataCollection);
        setItemsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearFilter = () => {
    const collectionRef = firestore.collection(match.params.category);
    setCategory(match.params.category);

    try {
      setPageLoading(true);
      setFilterSubCat(null);
      setSelectedSize("");
      setValues([0, 100]);
      collectionRef.get().then((items) => {
        const Items = convertCollectionDataToMap(items);
        setItems(Items.dataCollection);
        setSubCat(Items.subCategories);
        setPageLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="category-content">
        {pageloading ? (
          <Loading />
        ) : (
          <div className="container-center">
            <Category
              subCategories={subCategories}
              setSelectedSize={setSelectedSize}
              setPriceValue={setValues}
              applyFilter={applyFilter}
              clearFilter={clearFilter}
            />
            <ItemList
              sizeFilter={{ selectedSize, setSelectedSize }}
              priceFilter={{ values, setValues }}
              shopItems={shopItems}
              loading={itemsLoading}
              applyFilter={applyFilter}
              clearFilter={clearFilter}
            />
            {/* <ItemList2 /> */}
            <BrandHeader />
          </div>
        )}

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
  filter: state.category.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (cat) => dispatch(setCurrentCategory(cat)),
  setItems: (items) => dispatch(setShopItems(items)),
  setSubCat: (subCat) => dispatch(setSubCategories(subCat)),
  setFilterSubCat: (cat) => dispatch(setSubCatFilter(cat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
