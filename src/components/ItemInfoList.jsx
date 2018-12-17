import React, { Component } from "react";
import { Media } from "reactstrap";
import ItemInfo from "./ItemInfo";

export default class ItemInfoList extends Component {
  render() {
    return (
      <Media list className="list-unstyled">
        <ItemInfo itemId="001" itemName="어니언" description="쏼라쏼라" />
        <ItemInfo />
        <ItemInfo />
        <ItemInfo />
        <ItemInfo />
      </Media>
    );
  }
}
