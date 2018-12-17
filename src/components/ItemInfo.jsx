import React, { Component } from "react";
import { Media } from "reactstrap";

export default class ItemInfo extends Component {
  render() {
    const { itemId, itemName, actived, description } = this.props;

    return (
      <Media className="my-4" tag="li">
        <Media left>
          <Media object className="mr-3" data-src="holder.js/64x64" alt="" />
        </Media>
        <Media body>
          <Media heading>
            {itemName}
            <small className="text-muted">{itemId}</small>
          </Media>
          {description}
        </Media>
      </Media>
    );
  }
}
