import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";

import "./itemList.scss";
import Filter from "./../Filter/Filter";
import Card from "./../card/card";
import { items } from "../../../store/dummy";
import Loading from "../loading/loading";
import Modal from "../Modal/modal";

const ItemList = ({ shopItems }) => {
  const [isModal, setModal] = useState(false);
  return (
    <Fragment>
      {shopItems.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="itemList">
            <Filter className="itemList__filter" />
            {shopItems.map((item) => {
              return <Card key={item.id} item={item} setModal={setModal} />;
            })}
          </div>

          <Modal show={isModal} handleChange={setModal}>
            You need login to use this feature
          </Modal>
        </>
      )}
    </Fragment>
  );
};

export default withRouter(ItemList);
