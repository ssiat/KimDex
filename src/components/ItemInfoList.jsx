import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import Axios from 'axios';
import ItemInfo from './ItemInfo';
export default class ItemInfoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    Axios.get('https://kimdex.ssiat.xyz/api/collectibles').then(res => {
      const items = res.data;
      this.setState({ items });
      console.log(items);
    });
  }

  render() {
    const itemInfos = this.state.items.map(item => (
      <ItemInfo
        itemId={item.id}
        itemName={item.name}
        description={item.description}
      />
    ));

    return (
      <Container>
        <Row>
          <Col>
            <Media list className="list-unstyled">
              {itemInfos}
            </Media>
          </Col>
        </Row>
      </Container>
    );
  }
}
