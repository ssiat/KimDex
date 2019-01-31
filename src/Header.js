import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'reactstrap';
import MaterialIcon from 'material-icons-react';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Kimdex</NavbarBrand>
          <Nav className="ml-auto">
            <ButtonToolbar>
              <ButtonGroup>
                <Button className="d-flex">
                  <MaterialIcon icon="view_module" invert />
                </Button>
                <Button className="d-flex">
                  <MaterialIcon icon="view_list" invert />
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
