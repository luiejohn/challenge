import React, { Fragment, useState } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./itemList.scss";
import Filter from "./../Filter/Filter";
import Card from "./../card/card";
import Loading from "../loading/loading";
import SignInModal from "../signInModal/signInModal";

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
  // priceFilterValue,
  // priceFilterSet,
}) => {
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="itemList">
            <Filter
              className="itemList__filter"
              applyFilter={applyFilter}
              sizeFilter={sizeFilter}
              priceFilter={priceFilter}
              clearFilter={clearFilter}
              // priceFilterValue={priceFilterValue}
              // priceFilterSet={priceFilterSet}
            />
            {shopItems.map((item) => {
              return <Card key={item.id} item={item} setModal={setSignIn} />;
            })}
          </div>

          <SignInModal show={signInModal} handleChange={setSignIn} />
        </>
      )}
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
