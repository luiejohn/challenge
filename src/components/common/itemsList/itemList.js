import React, { Fragment, useEffect } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./itemList.scss";
import Filter from "./../Filter/Filter";
import Card from "./../card/card";
import Loading from "../loading/loading";
import SignInModal from "../signInModal/signInModal";
import Button from "../button/button";

import { setSignInModal } from "../../../store/user/user.actions";

const ItemList = ({
  shopItems,
  loading,
  applyFilter,
  sizeFilter,
  priceFilter,
  clearFilter,
  setSignIn,
  signInModal,
  nextPage,
  prevPage,
  currentPage,
  totalPage,
  // priceFilterValue,
  // priceFilterSet,
}) => {
  return (
    <Fragment>
      <div className="itemList">
        <div>
          <Filter
            className="itemList__filter"
            applyFilter={applyFilter}
            sizeFilter={sizeFilter}
            priceFilter={priceFilter}
            clearFilter={clearFilter}
            // priceFilterValue={priceFilterValue}
            // priceFilterSet={priceFilterSet}
          />
        </div>

        <div>
          {loading ? (
            <Loading height />
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "17px",
                  fontFamily: "Montserrat",
                }}
              >
                <Button click={prevPage} disabled={currentPage === 1}>
                  Previous Page
                </Button>
                <div>
                  Page {currentPage} of {totalPage}
                </div>
                <Button click={nextPage} disabled={currentPage === totalPage}>
                  Next Page
                </Button>
              </div>

              <div className="itemList__inner">
                {shopItems.map((item) => {
                  return (
                    <Card key={item.id} item={item} setModal={setSignIn} />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <SignInModal show={signInModal} handleChange={setSignIn} />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  signInModal: state.user.isSignInModal,
});

const mapDispatchToProps = (dispatch) => ({
  setSignIn: (val) => dispatch(setSignInModal(val)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ItemList);
