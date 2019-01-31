import React, { Component } from 'react';
import { Media } from 'reactstrap';

export default class ItemInfo extends Component {
  render() {
    const { itemId, itemName, actived, description } = this.props;

    return (
      <Media className="my-4" tag="li">
        <Media left>
          <Media
            object
            className="mr-3"
            style={{ imageRendering: 'pixelated' }}
            src="img/unknown.png"
            alt=""
            width="64px"
            height="64px"
          />
        </Media>
        <Media body>
          <Media heading>
            {itemName}
            <small className="text-muted ml-1">{pad(itemId, 3)}</small>
          </Media>
          {description}
        </Media>
      </Media>
    );
  }
}

function pad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
