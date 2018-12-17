import React, { Component } from "react";
import { Media } from "reactstrap";

class Content extends Component {
  render() {
    return (
      <Media list className="list-unstyled">
        <Media className="my-4" tag="li">
          <Media left>
            <Media object className="mr-3" data-src="holder.js/64x64" alt="" />
          </Media>
          <Media body>
            <Media heading>Middle aligned media</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </Media>
    );
  }
}

export default Content;
