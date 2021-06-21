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
  const [values, setValues] = useState([0, 100]);
  const [page, setPage] = useState(0);
  const [pageItems, setPageItems] = useState([]);

  useEffect(() => {
    const collectionRef = firestore.collection(match.params.category);
    // .orderBy("itemName")
    // .limit(6);
    setCategory(match.params.category);

    try {
      setPageLoading(true);
      setFilterSubCat(null);
      collectionRef.get().then((items) => {
        const Items = convertCollectionDataToMap(items);
        setItems(Items.dataCollection);
        if (Items.dataCollection.length !== 0) {
          setPage(1);
          setPageItems(Items.dataCollection.slice(0, 6));
        }
        setSubCat(Items.subCategories);
        setPageLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [match.params.category]);

  const nextPage = () => {
    if (page >= Math.ceil(shopItems.length / 6)) {
    } else {
      const nextItems = shopItems.slice(page * 6, page * 6 + 6);
      setPageItems(nextItems);
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page === 1 || page * 6 - 6 <= 0) {
    } else {
      const nextItems = shopItems.slice((page - 2) * 6, (page - 1) * 6);
      console.log(nextItems);
      setPageItems(nextItems);
      setPage(page - 1);
    }
  };

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
      query = collectionRef
        .where("price", ">=", price[0])
        .where("price", "<=", price[1]);
    }

    try {
      setItemsLoading(true);
      query.get().then((items) => {
        const Items = convertCollectionDataToMap(items);
        setItems(Items.dataCollection);
        if (Items.dataCollection.length !== 0) {
          setPage(1);
          setPageItems(Items.dataCollection.slice(0, 6));
        }
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
        if (Items.dataCollection.length !== 0) {
          setPage(1);
          setPageItems(Items.dataCollection.slice(0, 6));
        }
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
              currentPage={page}
              totalPage={Math.ceil(shopItems.length / 6)}
              nextPage={nextPage}
              prevPage={prevPage}
              sizeFilter={{ selectedSize, setSelectedSize }}
              priceFilter={{ values, setValues }}
              shopItems={pageItems}
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
