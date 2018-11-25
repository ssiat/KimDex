import React, { Component } from "react";
import { Button, Container, Col, Input, Row, Table } from "reactstrap";
import Axios from "axios";
import TipForm from "./TipForm";
import TipTable from "./TipTable";

export class Tips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tips: []
    };
  }

  handleCreate = data => {
    Axios.post("http://kimdex.ssiat.xyz/api/tips", { text: data.text }).then(
      res => {
        const { tips } = this.state;
        this.setState({
          tips: tips.concat({ ...res.data })
        });
      }
    );
  };

  handleRemove = id => {
    const { tips } = this.state;
    this.setState({
      tips: tips.filter(tip => tip.id !== id)
    });

    Axios.delete(`http://kimdex.ssiat.xyz/api/tips/${id}`).then(res => {});
  };

  componentDidMount() {
    Axios.get("http://kimdex.ssiat.xyz/api/tips").then(res => {
      const tips = res.data;
      this.setState({ tips });
      console.log(tips);
    });
  }

  render() {
    return (
      <Container>
        <TipForm onCreate={this.handleCreate} />
        <Row>
          <TipTable data={this.state.tips} onRemove={this.handleRemove} />
        </Row>
      </Container>
    );
  }
}

export default Tips;
