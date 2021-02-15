import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";

import "./itemList.scss";
import Filter from "./../Filter/Filter";
import Card from "./../card/card";
import { items } from "../../../store/dummy";
import Loading from "../loading/loading";

const ItemList = ({ shopItems }) => {
  return (
    <Fragment>
      {shopItems.length === 0 ? (
        <Loading />
      ) : (
        <div className="itemList">
          <Filter className="itemList__filter" />
          {shopItems.map((item) => {
            return <Card key={`asd23123asds-${item.id}`} item={item} />;
          })}
        </div>
      )}
    </Fragment>
  );
};

export default withRouter(ItemList);
